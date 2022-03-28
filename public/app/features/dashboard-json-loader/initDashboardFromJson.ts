// Services & Utils
import { createErrorNotification } from 'app/core/copy/appNotification';
import { getTimeSrv, TimeSrv } from 'app/features/dashboard/services/TimeSrv';
import { keybindingSrv } from 'app/core/services/keybindingSrv';
// Actions
import { notifyApp } from 'app/core/actions';
import {
  dashboardInitCompleted,
  dashboardInitFailed,
  dashboardInitFetching,
  dashboardInitServices,
  dashboardInitSlow,
} from 'app/features/dashboard/state/reducers';
// Types
import { ThunkResult, DashboardInitPhase, DashboardRoutes } from 'app/types';
import { DashboardModel } from 'app/features/dashboard/state/DashboardModel';
import { setWeekStart } from '@grafana/data';
import { config, locationService } from '@grafana/runtime';
import { initVariablesTransaction } from 'app/features/variables/state/actions';
import { emitDashboardViewEvent } from 'app/features/dashboard/state/analyticsProcessor';
import { DashboardSrv, getDashboardSrv } from 'app/features/dashboard/services/DashboardSrv';
import { toStateKey } from 'app/features/variables/utils';
import { createDashboardQueryRunner } from '../query/state/DashboardQueryRunner/DashboardQueryRunner';
import { getIfExistsLastKey } from '../variables/state/selectors';
import { dashboardWatcher } from 'app/features/live/dashboard/dashboardWatcher';

export interface InitDashboardArgs {
  urlUid?: string;
  urlSlug?: string;
  urlType?: string;
  urlFolderId?: string | null;
  routeName?: string;
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
    const queryParams = locationService.getSearchObject();

    if (!queryParams.orgId) {
      // TODO this is currently not possible with the LocationService API
      locationService.partial({ orgId: storeState.user.orgId }, true);
    }

    // init services
    const timeSrv: TimeSrv = getTimeSrv();
    const dashboardSrv: DashboardSrv = getDashboardSrv();

    // legacy srv state, we need this value updated for built-in annotations
    dashboardSrv.setCurrent(dashboard);

    timeSrv.init(dashboard);

    const dashboardUid = toStateKey(args.urlUid ?? dashboard.uid);
    // template values service needs to initialize completely before the rest of the dashboard can load
    await dispatch(initVariablesTransaction(dashboardUid, dashboard));

    // DashboardQueryRunner needs to run after all variables have been resolved so that any annotation query including a variable
    // will be correctly resolved
    const runner = createDashboardQueryRunner({ dashboard, timeSrv });
    runner.run({ dashboard, range: timeSrv.timeRange() });

    if (getIfExistsLastKey(getState()) !== dashboardUid) {
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

      // handle auto fix experimental feature
      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      keybindingSrv.setupDashboardBindings(dashboard);
    } catch (err) {
      dispatch(notifyApp(createErrorNotification('Dashboard init failed', err)));
      console.error(err);
    }

    // send open dashboard event
    if (args.routeName !== DashboardRoutes.New) {
      emitDashboardViewEvent(dashboard);

      // Listen for changes on the current dashboard
      dashboardWatcher.watch(dashboard.uid);
    } else {
      dashboardWatcher.leave();
    }

    // set week start
    if (dashboard.weekStart !== '') {
      setWeekStart(dashboard.weekStart);
    } else {
      setWeekStart(config.bootData.user.weekStart);
    }

    // yay we are done
    dispatch(dashboardInitCompleted(dashboard));
  };
}
