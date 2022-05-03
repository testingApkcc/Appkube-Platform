import * as React from 'react';
import { RestService } from '../../_service/RestService';
import { configFun } from '../../../config';

export class VerifyAndSave extends React.Component<any, any>{
    config: any;
    constructor(props: any) {
        super(props);
        this.state = {
            selectedData: {},
            selectedDashboards: [],
            dashboardJSON: [],
            isLoading: false,
            manipulatedData: [],
        };
        this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
    }

    setDashboardData = (data: any) => {
        const selectedDashboards = this.manipulateDashboardData(data);
        this.setState({
            selectedData: data,
            manipulatedData: selectedDashboards
        });
        this.retriveDashboardJSONData(selectedDashboards);
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

    displayTable = () => {
        const retData = [];
        const { selectedData } = this.state;
        if (selectedData && selectedData.DataSources) {
            for (let i = 0; i < selectedData.DataSources.length; i++) {
                const obj = selectedData.DataSources[i];
                let dashboardJSX = [];
                if (selectedData.CloudDashBoards && selectedData.CloudDashBoards.length > 0) {
                    for (let j = 0; j < selectedData.CloudDashBoards.length; j++) {
                        if (selectedData.CloudDashBoards[j].associatedDataSourceType === obj.name) {
                            if (selectedData.CloudDashBoards[j].isChecked) {
                                dashboardJSX.push(
                                    <tr>
                                        <td><input type="checkbox" id={`${i}`} checked={selectedData.CloudDashBoards[j].isChecked} /></td>
                                        <td>{selectedData.CloudDashBoards[j].associatedDataSourceType}</td>
                                    </tr>
                                )
                            }
                        }
                    }
                }
                if (obj.isChecked) {
                    retData.push(
                        <table className="table-tbody first-table" width="100%">
                            <tr>
                                <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <a>{obj.name}</a>
                                            </td>
                                            <td>
                                                <a>{obj.Type}</a>
                                            </td>
                                            <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                                <table className="table-inner" width="100%">
                                                    <tbody>
                                                        {dashboardJSX}
                                                    </tbody>
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
    }

    retriveDashboardJSONData = (selectedDashboards: any) => {
        const accountId = this.getParameterByName("accountId", window.location.href);
        const dashboardJSON: any = [];
        if (selectedDashboards.length > 0) {
            this.setState({
                isLoading: true,
            });
        }
        for (let i = 0; i < selectedDashboards.length; i++) {
            const { associatedDataSourceType, jsonLocation, associatedCloudElementType, associatedSLAType, associatedCloud } = selectedDashboards[i].dashboard;
            if (associatedDataSourceType && jsonLocation && associatedCloudElementType && associatedSLAType && associatedCloud) {
                const url = `${this.config.PREVIEW_DASHBOARDS_URL}?dataSourceName=${associatedDataSourceType}&associatedCloudElementType=${associatedCloudElementType}&associatedSLAType=${associatedSLAType}&jsonLocation=${jsonLocation}&jsonLocation=${jsonLocation}&associatedCloud=${associatedCloud}&accountId=${accountId}`;
                try {
                    RestService.getData(url, null, null).then((res: any) => {
                        dashboardJSON.push(res);
                        this.checkIfAllDashboardLoaded(dashboardJSON);
                    }, (err: any) => {
                        dashboardJSON.push(null);
                        this.checkIfAllDashboardLoaded(dashboardJSON);
                    });
                } catch (err) {
                    console.log('Loading aws regions failed. Error: ', err);
                    dashboardJSON.push(null);
                    this.checkIfAllDashboardLoaded(dashboardJSON);
                }
            }
        }
    };

    checkIfAllDashboardLoaded = (dashboardJSON: any) => {
        const { manipulatedData } = this.state;
        if (manipulatedData.length === dashboardJSON.length) {
            this.setState({
                isLoading: false,
                dashboardJSON
            });
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

    getDashboardJSONData = () => {
        if (this.state.isLoading) {
            return false;
        }
        return this.state.dashboardJSON;
    };

    render() {
        return (
            <div className="verify-inputs-section">
                <div className="configure-inputs-table verify-and-save-table">
                    <div className="following-node">Following Dashboard's will be enabled for Performance Monitoring of the node</div>
                    <table className="table-thead" width="100%">
                        <tr>
                            <th>Input</th>
                            <th>Input Type</th>
                            <th>Dashboards</th>
                        </tr>
                    </table>
                    {this.displayTable()}
                </div>
            </div>
        );
    }
}