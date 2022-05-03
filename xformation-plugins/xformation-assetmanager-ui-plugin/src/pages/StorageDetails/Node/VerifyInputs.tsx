import * as React from 'react';
import { configFun } from '../../../config';

export class VerifyInputs extends React.Component<any, any> {
  config: any;
  constructor(props: any) {
    super(props);
    this.state = {
      inputName: this.props.inputName,
      configureInputs: false,
      selectedData: [],
      tableData: this.props.dashboard,
      dashboardJSON: []
    };
    this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (JSON.stringify(prevProps.dashboard) !== JSON.stringify(this.props.dashboard)) {
      this.setState({
        tableData: this.props.dashboard,
      })
    }
  }

  configureInputs = async () => {
    this.setState({
      configureInputs: !this.state.configureInputs,
    })
  };

  async componentDidMount() {
    if (this.props.dashboard) {
      this.setState({
        tableData: this.props.dashboard,
      })
    }
  }

  setDashboardData = (data: any) => {
    console.log(data)
    this.setState({
      tableData: data,
    });
  }

  handleChange(e: any, i: any, j: any) {
    const { checked } = e.target;
    const { tableData, selectedData } = this.state;
    tableData.CloudDashBoards[j].isChecked = checked;
    if (checked) {
      tableData.DataSources[i].isChecked = checked;
    }
    let count = 0;
    if (tableData.CloudDashBoards) {
      for (let k = 0; k < tableData.CloudDashBoards.length; k++) {
        if (tableData.CloudDashBoards[k].associatedDataSourceType == tableData.DataSources[i].name) {
          if (tableData.CloudDashBoards[k].isChecked == true) {
            count++;
          }
        }
      }
    }
    console.log(count)
    if (count == 0) {
      tableData.DataSources[i].isChecked = false;
    }
    this.props.updateDashboard(tableData);
    if (checked) {
      selectedData.push(tableData.DataSources[i]);
      this.setState({ selectedData: selectedData });
    } else {
      this.removeObject(tableData.DataSources[i], selectedData);
    }
  }

  removeObject(obj: any, selData: any) {
    let index = selData.indexOf(obj);
    selData.splice(index, 1);
    this.setState({ selectedData: selData });
  }

  getSelection = () => {
    return this.state.selectedData;
  };

  displayTable = () => {
    const retData = [];
    const { tableData } = this.state;
    if (tableData && tableData.DataSources) {
      for (let i = 0; i < tableData.DataSources.length; i++) {
        let tableValue = tableData.DataSources[i];
        let dashboardJSX = [];
        if (tableData.CloudDashBoards && tableData.CloudDashBoards.length > 0) {
          for (let j = 0; j < tableData.CloudDashBoards.length; j++) {
            if (tableData.CloudDashBoards[j].associatedDataSourceType === tableValue.name) {
              dashboardJSX.push(
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={tableData.CloudDashBoards[j].isChecked}
                        id={`${i}`}
                        onChange={(e) => this.handleChange(e, i, j)}
                      />
                    </td>
                    <td>{tableData.CloudDashBoards[j].name}</td>
                    <td>
                      <a>
                        <i className="fa fa-eye"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              )
            }
          }
        }
        retData.push(
          <table className="table-tbody first-table" width="100%">
            <tr>
              <td style={{ paddingLeft: "0", paddingRight: "0" }}>
                <table width="100%">
                  <tr>
                    <td>
                      <a>{tableValue.name}</a>
                    </td>
                    <td>
                      <a>{tableValue.Type}</a>
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
      }
    }
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
