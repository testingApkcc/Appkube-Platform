import * as React from 'react';
import { v4 } from 'uuid';

export class Preview extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDashboards: [],
      activeDashboard: 0,
      isLoading: false
    };
  }

  setDashboardData = (data: any) => {
    const selectedDashboards = this.manipulateDashboardData(data);
    this.setState({
      selectedDashboards
    });
  }

  manipulateDashboardData = (data: any) => {
    if (data && data.DataSources) {
      const retData: any = [];
      for (let i = 0; i < data.DataSources.length; i++) {
        const dataSource = data.DataSources[i];
        if (dataSource.isChecked) {
          if (data.CloudDashBoards && data.CloudDashBoards.length > 0) {
            for (let j = 0; j < data.CloudDashBoards.length; j++) {
              if (data.CloudDashBoards[j].associatedDataSourceType === dataSource.name) {
                if (data.CloudDashBoards[j].isChecked) {
                  retData.push({
                    dashboard: data.CloudDashBoards[j],
                    dataSource
                  });
                }
              }
            }
          }
        }
      }
      return retData;
    }
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
    const { selectedDashboards, activeDashboard } = this.state;
    const retData: any = [];
    for (let i = 0; i < selectedDashboards.length; i++) {
      const data = selectedDashboards[i];
      retData.push(
        <li
          title={data.dashboard.associatedDataSourceType}
          key={v4()}
          className={`button ${activeDashboard === i
            ? "active"
            : ""
            }`}
          onClick={() =>
            this.setState({ activeDashboard: i, iFrameLoaded: false })
          }
        >
          {data.dashboard.associatedDataSourceType}
        </li>
      );
    }
    return retData;
  };

  renderIframe = () => {
    const { activeDashboard, selectedDashboards } = this.state;
    const accountId = this.getParameterByName("accountId", window.location.href);
    const retData: any = [];
    selectedDashboards.forEach((data:any, index: any) => {
      const { dashboard, dataSource } = data;
      retData.push(
        <iframe
          key={dashboard.id}
          src={`/jsondashboard?dataSourceName=${dataSource.name}&associatedCloudElementType=${dashboard.associatedCloudElementType}&associatedSLAType=${dashboard.associatedSLAType}&jsonLocation=${dashboard.jsonLocation}&associatedCloud=${dashboard.associatedCloud}&accountId=${accountId}`}
          onLoad={() => {
            this.setState({ iFrameLoaded: true });
          }}
          style={{display: activeDashboard === index ? 'block' : 'none'}}
        ></iframe>
      );
    });
    return retData;
    // return <div>No Dashboard Selected</div>;
  };

  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <button
            style={{ marginTop: "0px", float: "right", marginRight: "0px" }}
            onClick={() => this.setState({ showConfigWizard: true })}
            className="asset-blue-button m-b-0"
          >
            Configure
          </button> */}
        </div>
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
