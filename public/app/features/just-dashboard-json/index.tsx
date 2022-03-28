// Libraries
import React from 'react';
import { connect } from 'react-redux';
import DashboardJSONLoader from '../dashboard-json-loader';
import { config } from '../config';
// import { data } from './dummyData';
import { backendSrv } from 'app/core/services/backend_srv';

// Services & Utils
export interface Props {
  $scope: any;
  $injector: any;
  location: any;
}
export interface State {
  isLoading: any;
  data: any;
}

class JustDashboardJSON extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false,
      data: null,
    };
  }

  componentDidMount() {
    const mainView: any = document.getElementsByClassName('main-view');
    if (mainView && mainView.length > 0) {
      mainView[0].style.overflow = 'hidden';
    }
    const sideMenu: any = document.getElementsByClassName('sidemenu');
    if (sideMenu && sideMenu.length > 0) {
      sideMenu[0].style.display = 'none';
    }
    const topNavBar: any = document.getElementsByClassName('top-nav-bar');
    if (topNavBar && topNavBar.length > 0) {
      topNavBar[0].style.display = 'none';
    }
    const mainBody: any = document.getElementsByClassName('monitor-main-body');
    if (mainBody && mainBody.length > 0) {
      mainBody[0].style.marginLeft = '0px';
      mainBody[0].style.marginTop = '0px';
      mainBody[0].style.width = '100%';
    }
    setTimeout(() => {
      const pageToolbar: any = document.getElementsByClassName('page-toolbar');
      if (pageToolbar && pageToolbar.length > 0) {
        pageToolbar[0].style.display = 'none';
      }
    }, 1000);
    const cloudType = this.getParameterByName('cloudType', window.location.href);
    const elementType = this.getParameterByName('elementType', window.location.href);
    const accountId = this.getParameterByName('accountId', window.location.href);
    const tenantId = this.getParameterByName('tenantId', window.location.href);
    const inputType = this.getParameterByName('inputType', window.location.href);
    const fileName = this.getParameterByName('fileName', window.location.href);
    const dataSource = this.getParameterByName('dataSource', window.location.href);
    if (cloudType && elementType && accountId && tenantId && inputType && fileName && dataSource) {
      const url = `${config.PREVIEW_DASHBOARDS_URL}?cloudType=${cloudType}&elementType=${elementType}&accountId=${accountId}&tenantId=${tenantId}&inputType=${inputType}&fileName=${fileName}&dataSource=${dataSource}`;
      backendSrv.get(url).then(
        (res: any) => {
          this.setState({
            data: JSON.parse(res.object.data),
          });
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

  getParameterByName = (name: string, url: string) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        {data && (
          <DashboardJSONLoader
            $scope={this.props.$scope}
            $injector={this.props.$injector}
            urlUid={''}
            urlSlug={''}
            dashboardJSON={{
              dashboard: data,
              meta: null,
            }}
          />
        )}
        {!data && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>Dashboard is loading!!!</div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state: any) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(JustDashboardJSON);
