import * as React from 'react';
import { configFun } from '../../../config';

export class EnableDashboard extends React.Component<any, any> {
  config: any;
  constructor(props: any) {
    super(props);
    this.state = {
      selectedData: [],
      enabledDashboards: [],
    };
    this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
  }

  getParameterByName = (name: any, url: any) => {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  setDashboardData = (data: any) => {
    console.log(data);
    this.setState({
      selectedData: data,
    })
  }

  getSelection = () => {
    return this.state.enabledDashboards;
  };

  handleChange(e: any, i: any, j: any) {
    // let isChecked = e.target.checked;
    // const { enabledDashboards } = this.state;
    // if (isChecked) {
    //   enabledDashboards.push(obj);
    //   this.setState({ enabledDashboards: enabledDashboards });
    // } else {
    //   this.removeObject(obj, enabledDashboards);
    // }
  }

  removeObject(obj: any, selData: any) {
    let index = selData.indexOf(obj);
    selData.splice(index, 1);
    this.setState({ enabledDashboards: selData });
  }

  displayTable = () => {
    const retData = [];
    const { selectedData } = this.state;
    if (selectedData.DataSources) {
      for (let i = 0; i < selectedData.DataSources.length; i++) {
        const dataSource = selectedData.DataSources[i];
        let dashboardJSX = [];
        if (selectedData.CloudDashBoards && selectedData.CloudDashBoards.length > 0) {
          for (let j = 0; j < selectedData.CloudDashBoards.length; j++) {
            if (selectedData.CloudDashBoards[j].associatedDataSourceType === dataSource.name) {
              if (selectedData.CloudDashBoards[j].isChecked) {
                dashboardJSX.push(
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedData.CloudDashBoards[j].isChecked}
                          id={`${i}`}
                          onChange={(e) => this.handleChange(e, i, j)}
                        />
                      </td>
                      <td>{selectedData.CloudDashBoards[j].name}</td>
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
        }
        if (dataSource.isChecked) {
          retData.push(
            <table className="table-tbody first-table" width="100%">
              <tr>
                <td style={{ paddingLeft: "0", paddingRight: "0" }}>
                  <table width="100%">
                    <tr>
                      <td>
                        <a>{dataSource.name}</a>
                      </td>
                      <td>
                        <a>{dataSource.Type}</a>
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
    }
    return retData;
  };

  render() {
    return (
      <div className="verify-inputs-section">
        <div className="configure-inputs-table">
          <table className="table-thead" width="100%">
            <tr>
              <th>Input</th>
              <th>Input Type</th>
              <th>
                Available Dashboards
                <div className="float-right">
                  <a>
                    <i className="fa fa-plus"></i>
                  </a>
                  <a>
                    <i className="fa fa-times"></i>
                  </a>
                </div>
              </th>
            </tr>
          </table>
          {this.displayTable()}
        </div>
      </div>
    );
  }
}
