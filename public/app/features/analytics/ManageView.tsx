// Libraries
import React from 'react';
import CustomDashboardLoader from '../custom-dashboard-loader';
// import { DeleteTabPopup } from './DeleteTabPopup';
// import { UncontrolledPopover, PopoverBody } from 'reactstrap';
import { locationService } from '@grafana/runtime';
import { config } from '../config';

// Services & Utils
export interface Props {
  $scope: any;
  $injector: any;
  Id?: string;
}

class ManageView extends React.Component<any, any> {
  breadCrumbs: any = [
    {
      label: 'Home',
      route: `/`,
    },
    {
      label: 'Analytics',
      route: `/analytics`,
    },
    {
      label: 'View',
      isCurrentPage: true,
    },
  ];

  constructor(props: Props) {
    super(props);
    this.state = {
      tabs: [],
      sideBarData: [],
      activeTab: 0,
      activeSideTab: 0,
      loading: false,
      viewName: '',
      description: '',
    };
  }

  componentDidMount() {
    // const { match } = this.props;
    let id = this.getParameterByName('id', window.location.href);
    console.log(id);
    if (id) {
      this.getDashData(id);
    } else {
      // locationService.push(`/analytics`);
    }
  }

  getParameterByName(name: any, url: any) {
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
  }

  getDashData = (id: any) => {
    let requestOptionsGet: any = {
      method: `GET`,
    };
    this.setState({
      loading: true,
    });
    fetch(`${config.GET_ANALYTICS_VIEW}/${id}`, requestOptionsGet)
      .then((response) => response.json())
      .then((response: any) => {
        const { viewJson, name, description } = response;
        this.setState({
          viewName: name,
          description: description,
          tabs: JSON.parse(viewJson),
          loading: false,
        });
      });

    // Delete it after api works
    let data: any = localStorage.getItem('dashboardList');
    if (data) {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          const { viewJson, name, description } = data[i];
          this.setState({
            viewName: name,
            description: description,
            tabs: viewJson,
            loading: false,
          });
          break;
        }
      }
    }
  };

  displayTabs = () => {
    const { tabs, activeTab } = this.state;
    const retData = [];
    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i];
      retData.push(
        <li key={`tab-${i}`} className={`nav-item `}>
          <a className={i === activeTab ? 'nav-link active' : 'nav-link'} onClick={(e) => this.setActiveTab(i)}>
            <span>{tab.label}</span>
          </a>
        </li>
      );
    }
    return retData;
  };

  setActiveTab(index: any) {
    this.setState({
      activeTab: index,
      activeSideTab: 0,
    });
  }

  setActiveSideTab = (index: any) => {
    this.setState({
      activeSideTab: index,
    });
  };

  renderSideBar = () => {
    const { activeTab, tabs, activeSideTab } = this.state;
    let retData = [];
    const sidebarData = tabs[activeTab];
    if (sidebarData) {
      const dashboards = sidebarData.dashboards;
      for (let i = 0; i < dashboards.length; i++) {
        let sideData = dashboards[i];
        retData.push(
          <li>
            <a>
              <span className={i === activeSideTab ? 'active' : ''} onClick={() => this.setActiveSideTab(i)}>
                {sideData.title}
              </span>
            </a>
          </li>
        );
      }
    }
    return retData;
  };

  createDashboard = () => {
    const { activeTab, activeSideTab, tabs } = this.state;
    let retData = [];
    if (tabs[activeTab] && tabs[activeTab].dashboards && tabs[activeTab].dashboards.length > 0) {
      const dashboards = tabs[activeTab].dashboards;
      for (let j = 0; j < dashboards.length; j++) {
        const dashboard = dashboards[j];
        retData.push(
          <div key={dashboard.uid}>
            {activeSideTab === j && (
              <CustomDashboardLoader
                $scope={this.props.$scope}
                $injector={this.props.$injector}
                urlUid={dashboard.uid}
                urlSlug={dashboard.slug}
              />
            )}
          </div>
        );
      }
    }
    return retData;
  };

  render() {
    const breadCrumbs = this.breadCrumbs;
    const pageTitle = 'ANALYTICS';
    const { loading, viewName, tabs } = this.state;
    return (
      <React.Fragment>
        <div className="breadcrumbs-container">
          {pageTitle && <div className="page-title">{pageTitle}</div>}
          <div className="breadcrumbs">
            {breadCrumbs.map((breadcrumb: any, index: any) => {
              if (breadcrumb.isCurrentPage) {
                return (
                  <span key={index} className="current-page">
                    {breadcrumb.label}
                  </span>
                );
              } else {
                return (
                  <React.Fragment key={index}>
                    <a href={`${breadcrumb.route}`} className="breadcrumbs-link">
                      {breadcrumb.label}
                    </a>
                    <span className="separator">
                      <i className="fa fa-chevron-right"></i>
                    </span>
                  </React.Fragment>
                );
              }
            })}
          </div>
        </div>
        {loading && <div style={{ textAlign: 'center', marginTop: '40px' }}>View is loading</div>}
        {!loading && tabs && tabs.length > 0 && (
          <div className="analytics-container">
            <div className="analytics-heading-container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <h4 style={{ lineHeight: '36px' }}>{viewName}</h4>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-block text-right">
                    <button
                      className="analytics-white-button min-width-auto m-r-0"
                      onClick={() => locationService.push('/analytics')}
                    >
                      <i className="fa fa-arrow-circle-left"></i>
                      &nbsp;&nbsp;Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="analytics-tabs-container">
              <ul className="nav nav-tabs">
                {this.displayTabs()}
                {/* <li className="nav-item">
                    <a className="nav-link add-tab">
                      <i className="fa fa-plus"></i>
                    </a>
                  </li> */}
              </ul>
              <div className="analytics-tabs-section-container">
                <div className="tabs-left-section">
                  <ul>{this.renderSideBar()}</ul>
                </div>
                <div className="tabs-right-section">
                  <div>{this.createDashboard()}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!loading && (!tabs || (tabs && !tabs.length)) && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>There no data in this view</div>
        )}
      </React.Fragment>
    );
  }
}

export default ManageView;
