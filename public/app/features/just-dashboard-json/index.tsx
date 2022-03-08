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
    const cloudType: any = this.props.location.query.cloudType;
    const elementType: any = this.props.location.query.elementType;
    const accountId: any = this.props.location.query.accountId;
    const tenantId: any = this.props.location.query.tenantId;
    const inputType: any = this.props.location.query.inputType;
    const fileName: any = this.props.location.query.fileName;
    const dataSource: any = this.props.location.query.dataSource;
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
