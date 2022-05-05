import * as React from 'react';
import { v4 } from 'uuid';

export class VerifyInputs extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputName: this.props.inputName,
      configureInputs: false,
      dashboardData: [],
    };
  }

  configureInputs = async () => {
    this.setState({
      configureInputs: !this.state.configureInputs,
    })
  };

  setDashboardData = (data: any) => {
    this.setState({
      dashboardData: data,
    });
  }

  handleChange(e: any, dataSourceIndex: any, dashboardIndex: any) {
    const { checked } = e.target;
    const { dashboardData } = this.state;
    dashboardData[dataSourceIndex].dashboards[dashboardIndex].isChecked = checked;
    this.setState({
      dashboardData,
    });
  }

  getSelectedDashboards = () => {
    const { isSelected, dashboardData } = this.checkIfDashboardSelected();
    if (isSelected) {
      return dashboardData;
    }
    return false;
  };

  checkIfDashboardSelected = () => {
    const { dashboardData } = this.state;
    let isSelected = false;
    for (let i = 0; i < dashboardData.length; i++) {
      const dashboards = dashboardData[i].dashboards;
      dashboardData[i].isChecked = false;
      if (dashboards) {
        for (let j = 0; j < dashboards.length; j++) {
          if (dashboards[j].isChecked) {
            isSelected = true;
            dashboardData[i].isChecked = true;
            break;
          }
        }
      }
    }
    return {
      isSelected,
      dashboardData
    };
  };

  displayTable = () => {
    const retData: any = [];
    const { dashboardData } = this.state;
    dashboardData.forEach((dataSource: any, dataSourceIndex: any) => {
      const { dashboards } = dataSource;
      const dashboardJSX: any = [];
      if (dashboards) {
        dashboards.forEach((dashboard: any, dashboardIndex: any) => {
          dashboardJSX.push(
            <tbody key={v4()}>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={dashboard.isChecked}
                    onChange={(e) => this.handleChange(e, dataSourceIndex, dashboardIndex)}
                  />
                </td>
                <td>{dashboard.name}</td>
                {/* <td>
                  <a>
                    <i className="fa fa-eye"></i>
                  </a>
                </td> */}
              </tr>
            </tbody>
          )
        });
      }
      retData.push(
        <table key={v4()} className="table-tbody first-table" width="100%">
          <tr>
            <td style={{ paddingLeft: "0", paddingRight: "0" }}>
              <table width="100%">
                <tr>
                  <td>
                    <a>{dataSource.name}</a>
                  </td>
                  <td>
                    <a>{dataSource.type}</a>
                  </td>
                  <td>
                    <table className="table-inner" width="100%">
                      {dashboardJSX}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      );
    });
    return retData;
  };

  render() {
    const { configureInputs } = this.state;
    return (
      <div className="verify-inputs-section">
        {!configureInputs && (
          <div className="configure-inputs-section">
            <p>
              Please click below to configure inputs for Performance Monitoring
            </p>
            <button
              className="asset-blue-button"
              onClick={this.configureInputs}
            >
              Configure inputs
            </button>
          </div>
        )}
        {configureInputs && (
          <div className="configure-inputs-table">
            <table className="table-thead" width="100%">
              <tr>
                <th>Input</th>
                <th>Input Type</th>
                <th>Available Dashboards</th>
              </tr>
            </table>
            {this.displayTable()}
          </div>
        )}
      </div>
    );
  }
}
