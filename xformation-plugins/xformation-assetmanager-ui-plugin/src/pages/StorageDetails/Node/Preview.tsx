import * as React from 'react';

export class Preview extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputName: this.props.inputName,
      selectedInput: [],
      selectedDashboards: [],
      activeDashboard: 0,
      isLoading: false,
    };
  }

  componentDidUpdate(previousProps: any, previousState: any) {
    if (this.props.selectedInput !== previousProps.selectedInput) {
      const selectedInput = this.props.selectedInput;
      this.setState({
        selectedInput,
        // activeDashboard: [0, this.state.activeDashboard[1]],
      });
    }
    if (this.props.selectedDashboards !== previousProps.selectedDashboards) {
      const selectedDashboards = this.props.selectedDashboards;
      this.setState({
        selectedDashboards,
        // activeDashboard: [this.state.activeDashboard[0], 0],
      });
    }
  }

  setDashboardData = (data: any) => {
    this.setState({
      selectedDashboards: data
    })
  }

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
    // const accountId = this.getParameterByName("accountId", window.location.href);
    if (selectedDashboards && selectedDashboards.DataSources) {
      const retData = [];
      for (let i = 0; i < selectedDashboards.DataSources.length; i++) {
        const selectionData = selectedDashboards.DataSources[i];
        // const title = cloud + "_" + type + "_" + selectionData.id;
        if (selectionData.isChecked) {
          if (selectedDashboards.CloudDashBoards && selectedDashboards.CloudDashBoards.length > 0) {
            for (let j = 0; j < selectedDashboards.CloudDashBoards.length; j++) {
              if (selectedDashboards.CloudDashBoards[j].associatedDataSourceType === selectionData.name) {
                if (selectedDashboards.CloudDashBoards[j].isChecked) {
                  retData.push(
                    <li
                      title={selectedDashboards.CloudDashBoards[j].associatedDataSourceType}
                      key={selectionData.id}
                      className={`button ${activeDashboard === j
                        ? "active"
                        : ""
                        }`}
                      onClick={() =>
                        this.setState({ activeDashboard: j, iFrameLoaded: false })
                      }
                    >
                      {selectedDashboards.CloudDashBoards[j].associatedDataSourceType}
                    </li>
                  );
                }
              }
            }
          }
        }
      }
      // }
      return retData;
    }
    return [];
  };

  renderIframe = () => {
    const { activeDashboard, selectedDashboards } = this.state;
    if (selectedDashboards && selectedDashboards.CloudDashBoards) {
      // const input = selectedInput[activeDashboard[0]];
      const dashboard = selectedDashboards.CloudDashBoards[activeDashboard];
      if (dashboard) {
        return (
          <iframe
            key={`${activeDashboard}`}
            src={`/jsondashboard`}
            onLoad={() => {
              this.setState({ iFrameLoaded: true });
            }}
          ></iframe>
        );
      }
    }
    return <div>No Dashboard Selected</div>;
  };

  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{ marginTop: "0px", float: "right", marginRight: "0px" }}
            onClick={() => this.setState({ showConfigWizard: true })}
            className="asset-blue-button m-b-0"
          >
            Configure
          </button>
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
