import * as React from 'react';

export class VerifyAndSave extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedData: {},
            selectedDashboards: [],
        };
    }

    componentDidUpdate(previousProps: any, previousState: any) {
        // if (this.props.selectedData !== previousProps.selectedData) {
        //     const selectedData = this.props.selectedData;
        //     this.setState({
        //         selectedData
        //     })
        // }
    }

    setDashboardData = (data: any) => {
        this.setState({
            selectedData: data,
        })
    }

    handleChange(e: any, i: any, j: any) {
        // let isChecked = e.target.checked;
        // const { selectedDashboards } = this.state;
        // if (isChecked) {
        //     selectedDashboards.push(obj);
        //     this.setState({ selectedDashboards: selectedDashboards });
        // } else {
        //     this.removeObject(obj, selectedDashboards);
        // }
    }

    removeObject(obj: any, selData: any) {
        let index = selData.indexOf(obj);
        selData.splice(index, 1);
        this.setState({ selectedDashboards: selData });
    }

    getSelection = () => {
        return this.state.selectedDashboards;
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
                                        <td><input type="checkbox" id={`${i}`} checked={selectedData.CloudDashBoards[j].isChecked} onChange={e => this.handleChange(e, j, i)} /></td>
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