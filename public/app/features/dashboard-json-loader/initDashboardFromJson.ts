// Services & Utils
import { createErrorNotification } from 'app/core/copy/appNotification';
import { DashboardSrv } from 'app/features/dashboard/services/DashboardSrv';
import { TimeSrv } from 'app/features/dashboard/services/TimeSrv';
import { KeybindingSrv } from 'app/core/services/keybindingSrv';
// Actions
import { notifyApp, updateLocation } from 'app/core/actions';
import {
  clearDashboardQueriesToUpdateOnLoad,
  dashboardInitCompleted,
  dashboardInitFailed,
  dashboardInitFetching,
  dashboardInitServices,
  dashboardInitSlow,
} from 'app/features/dashboard/state/reducers';
// Types
import { DashboardRouteInfo, ThunkDispatch, ThunkResult, DashboardInitPhase } from 'app/types';
import { DashboardModel } from 'app/features/dashboard/state/DashboardModel';
import { DataQuery } from '@grafana/data';
import { initVariablesTransaction } from 'app/features/variables/state/actions';
import { emitDashboardViewEvent } from 'app/features/dashboard/state/analyticsProcessor';

export interface InitDashboardArgs {
  $injector: any;
  $scope: any;
  urlUid?: string;
  urlSlug?: string;
  urlType?: string;
  urlFolderId?: string;
  routeInfo: DashboardRouteInfo;
  fixUrl: boolean;
  dashboardJSON: any;
}

/**
 * This action (or saga) does everything needed to bootstrap a dashboard & dashboard model.
 * First it handles the process of fetching the dashboard, correcting the url if required (causing redirects/url updates)
 *
 * This is used both for single dashboard & solo panel routes, home & new dashboard routes.
 *
 * Then it handles the initializing of the old angular services that the dashboard components & panels still depend on
 *
 */
export function initDashboardFromJson(args: InitDashboardArgs): ThunkResult<void> {
  return async (dispatch, getState) => {
    // set fetching state
    dispatch(dashboardInitFetching());

    // Detect slow loading / initializing and set state flag
    // This is in order to not show loading indication for fast loading dashboards as it creates blinking/flashing
    setTimeout(() => {
      if (getState().dashboard.getModel() === null) {
        dispatch(dashboardInitSlow());
      }
    }, 500);

    // fetch dashboard data
    const dashDTO = args.dashboardJSON;

    // returns null if there was a redirect or error
    if (!dashDTO) {
      return;
    }

    // set initializing state
    dispatch(dashboardInitServices());

    // create model
    let dashboard: DashboardModel;
    try {
      dashboard = new DashboardModel(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch(dashboardInitFailed({ message: 'Failed create dashboard model', error: err }));
      console.error(err);
      return;
    }

    // add missing orgId query param
    const storeState = getState();
    if (!storeState.location.query.orgId) {
      dispatch(updateLocation({ query: { orgId: storeState.user.orgId }, partial: true, replace: true }));
    }

    // init services
    const timeSrv: TimeSrv = args.$injector.get('timeSrv');
    const keybindingSrv: KeybindingSrv = args.$injector.get('keybindingSrv');
    const unsavedChangesSrv = args.$injector.get('unsavedChangesSrv');
    const dashboardSrv: DashboardSrv = args.$injector.get('dashboardSrv');

    timeSrv.init(dashboard);

    if (storeState.dashboard.modifiedQueries) {
      const { panelId, queries } = storeState.dashboard.modifiedQueries;
      dashboard.meta.fromExplore = !!(panelId && queries);
    }

    // template values service needs to initialize completely before the rest of the dashboard can load
    await dispatch(initVariablesTransaction(args.urlUid!, dashboard));
    const temp: any = getState().templating;
    if (temp.transaction.uid !== args.urlUid) {
      // if a previous dashboard has slow running variable queries the batch uid will be the new one
      // but the args.urlUid will be the same as before initVariablesTransaction was called so then we can't continue initializing
      // the previous dashboard.
      return;
    }

    // If dashboard is in a different init phase it means it cancelled during service init
    if (getState().dashboard.initPhase !== DashboardInitPhase.Services) {
      return;
    }

    try {
      dashboard.processRepeats();
      //dashboard.updateSubmenuVisibility();

      // handle auto fix experimental feature
      const queryParams = getState().location.query;
      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      // init unsaved changes tracking
      unsavedChangesSrv.init(dashboard, args.$scope);
      keybindingSrv.setupDashboardBindings(args.$scope);
    } catch (err) {
      dispatch(notifyApp(createErrorNotification('Dashboard init failed', err)));
      console.error(err);
    }

    if (storeState.dashboard.modifiedQueries) {
      const { panelId, queries } = storeState.dashboard.modifiedQueries;
      updateQueriesWhenComingFromExplore(dispatch, dashboard, panelId, queries);
    }

    // legacy srv state
    dashboardSrv.setCurrent(dashboard);

    // send open dashboard event
    if (args.routeInfo !== DashboardRouteInfo.New) {
      emitDashboardViewEvent(dashboard);
    }

    // yay we are done
    dispatch(dashboardInitCompleted(dashboard));
  };
}

function updateQueriesWhenComingFromExplore(
  dispatch: ThunkDispatch,
  dashboard: DashboardModel,
  originPanelId: number,
  queries: DataQuery[]
) {
  const panelArrId = dashboard.panels.findIndex((panel) => panel.id === originPanelId);

  if (panelArrId > -1) {
    dashboard.panels[panelArrId].targets = queries;
  }

  // Clear update state now that we're done
  dispatch(clearDashboardQueriesToUpdateOnLoad());
}
