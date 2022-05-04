import * as React from 'react';
import { v4 } from 'uuid';

export class Preview extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dashboardData: [],
      activeDashboard: 0,
      activeDataSource: 0,
      isLoading: false
    };
  }

  setDashboardData = (data: any) => {
    const { sourceIndex, dashboardIndex } = this.getActiveDashboard(data)
    this.setState({
      dashboardData: data,
      activeDashboard: dashboardIndex,
      activeDataSource: sourceIndex,
    });
  }

  getActiveDashboard = (data: any) => {
    let sourceIndex = 0;
    let dashboardIndex = 0;
    for (let i = 0; i < data.length; i++) {
      const dataSource = data[i];
      if (dataSource.isChecked) {
        for (let j = 0; j < dataSource.dashboards.length; j++) {
          if (dataSource.dashboards[j].isChecked) {
            dashboardIndex = j;
            break;
          }
        }
        sourceIndex = i;
        break;
      }
    }
    return {
      sourceIndex,
      dashboardIndex
    };
  };

  getParameterByName = (name: any, url: any) => {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  renderDashboardList = () => {
    const { dashboardData, activeDashboard, activeDataSource } = this.state;
    const retData: any = [];
    dashboardData.forEach((dataSource: any, dataSourceIndex: any) => {
      if (dataSource.isChecked) {
        const dashboards = dataSource.dashboards;
        dashboards.forEach((dashboard: any, dashboardIndex: any) => {
          if (dashboard.isChecked) {
            retData.push(
              <li
                title={dashboard.associatedDataSourceType}
                key={v4()}
                className={`button ${(activeDataSource === dataSourceIndex && dashboardIndex === activeDashboard)
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  this.setState({ activeDashboard: dashboardIndex, activeDataSource: dataSourceIndex })
                }
              >
                {dashboard.associatedDataSourceType}
              </li>
            );
          }
        });
      }
    });
    return retData;
  };

  renderIframe = () => {
    const { activeDashboard, dashboardData, activeDataSource } = this.state;
    const accountId = this.getParameterByName("accountId", window.location.href);
    const retData: any = [];
    dashboardData.forEach((dataSource: any, dataSourceIndex: any) => {
      if (dataSource.isChecked) {
        const dashboards = dataSource.dashboards;
        dashboards.forEach((dashboard: any, dashboardIndex: any) => {
          if (dashboard.isChecked) {
            if (activeDataSource === dataSourceIndex && dashboardIndex === activeDashboard) {
              retData.push(
                <iframe
                  key={v4()}
                  src={`/jsondashboard?dataSourceName=${dataSource.name}&associatedCloudElementType=${dashboard.associatedCloudElementType}&associatedSLAType=${dashboard.associatedSLAType}&jsonLocation=${dashboard.jsonLocation}&associatedCloud=${dashboard.associatedCloud}&accountId=${accountId}`}
                ></iframe>
              );
            }
          }
        });
      }
    });
    return retData;
  };

  render() {
    return (
      <>
        <div className="dashboard-view-container">
          <ul className="dashboard-view-buttons">
            {this.renderDashboardList()}
          </ul>
          <div className="dashboard-view">
            {
              <>
                {this.renderIframe()}
                <div
                  style={{
                    textAlign: "center",
                    display: true ? "none" : "",
                    marginTop: "20px",
                  }}
                >
                  Dashboard is loading...
                </div>
              </>
            }
          </div>
        </div>
      </>
    );
  }
}
