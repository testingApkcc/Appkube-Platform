import * as React from 'react';
import { Wizard } from './Wizard';
import { VerifyInputs } from './VerifyInputs';
import { EnableDashboard } from './EnableDashboard';
import { Preview } from './Preview';
import { VerifyAndSave } from './VerifyAndSave';
import { RestService } from '../../_service/RestService';
import { configFun } from '../../../config';
import AlertMessage from '../../Components/AlertMessage';
export class Performance extends React.Component<any, any>{
    steps: any;
    verifyInputsRef: any;
    enableDashboardRef: any;
    verifyAndSaveRef: any;
    previewRef: any;
    wizardRef: any;
    config: any;
    constructor(props: any) {
        super(props);
        this.state = {
            enablePerformanceMonitoring: true,
            inputConfig: null,
            inputName: "Performance",
            updatedDashboards: [],
            isAlertOpen: false,
            severity: null,
            message: null,
            isSuccess: true,
            activeDashboard: 0,
            showConfigWizard: false,
            iFrameLoaded: false,
            viewJson: [
                { title: 'dashboard demo', uid: 'HmQhPYQ7z' },
                { title: 'dashboard 2', uid: 'zRQhasw7k' },
                { title: 'dashboard 3', uid: 'wBJ0ayw7k' },
            ],
            dashboardData: {
                CloudDashBoards: [
                    {
                        id: 1,
                        name: "AWS-RDS-PERF-READLATENCY",
                        description: "AWS RDS Read Latency Performance Monitoring",
                        associatedDataSourceType: "AWS-PullMetric-Api",
                        associatedDataType: "METRIC",
                        associatedSLAType: "PERFORMANCE",
                        associatedCloud: "AWS",
                        associatedCloudElementType: "RDS",
                        jsonLocation: "s3://..."
                    },
                    {
                        id: 2,
                        name: "AWS-RDS-PERF-WRITELATENCY",
                        description: "AWS RDS Read Latency Performance Monitoring",
                        associatedDataSourceType: "AWS-PullMetric-Api",
                        associatedDataType: "METRIC",
                        associatedSLAType: "PERFORMANCE",
                        associatedCloud: "AWS",
                        associatedCloudElementType: "RDS",
                        jsonLocation: "s3://..."
                    }
                ],
                DataSources: [
                    {
                        id: 1,
                        name: "AWS-PullMetric-Api",
                        description: "Pull AWS metrics with Cloud API",
                        Type: "PullApi",
                        DataType: "METRIC",
                        associatedWorkflowTemplate: "s3://...",
                        associatedCloud: "AWS",
                        associatedCreds: "Vault",
                        associatedApplicationLocation: "AppKubeMain",
                        associatedTargetDs: "NA"
                    },
                    {
                        id: 2,
                        name: "AWS-PullLogs-Api",
                        description: "Pull AWS Logs with Cloud API",
                        Type: "PullApi",
                        DataType: "LOG",
                        associatedWorkflowTemplate: "s3://...",
                        associatedCloud: "AWS",
                        associatedCreds: "Vault",
                        associatedApplicationLocation: "AppKubeMain",
                        associatedTargetDs: "NA"
                    },
                    {
                        id: 3,
                        name: "AWS-PullLogs-Local",
                        description: "Receive AWS Logs and Store in Local ES",
                        Type: "ReceiveAndStoreLogs",
                        DataType: "LOG",
                        associatedWorkflowTemplate: "s3://...",
                        associatedCloud: "AWS",
                        associatedCreds: "Vault",
                        associatedApplicationLocation: "LogManager",
                        associatedTargetDsType: "ES"
                    },
                    {
                        id: 4,
                        name: "AWS-StoreTrace-Local",
                        description: "Receive Traces and Store in Local Zipkin DB",
                        Type: "ReceiveAndStoreTrace",
                        DataType: "Trace",
                        associatedWorkflowTemplate: "s3://...",
                        associatedCloud: "AWS",
                        associatedCreds: "Vault",
                        associatedApplicationLocation: "TraceManager",
                        associatedTargetDsType: "Zipkin"
                    },
                    {
                        id: 5,
                        name: "Azure-PullMetric-Api",
                        description: "Pull Azure metrics with Cloud API",
                        Type: "PullApi",
                        DataType: "METRIC",
                        associatedWorkflowTemplate: "s3://...",
                        associatedCloud: "Azure",
                        associatedCreds: "Vault",
                        associatedApplicationLocation: "AppKubeMain",
                        associatedTargetDs: "NA"
                    },
                    {
                        id: 6,
                        name: "Azure-PullLogs-Api",
                        description: "Pull Azure Logs with Cloud API",
                        Type: "PullApi",
                        DataType: "LOG",
                        associatedWorkflowTemplate: "s3://...",
                        associatedCloud: "Azure",
                        associatedCreds: "Vault",
                        associatedApplicationLocation: "AppKubeMain",
                        associatedTargetDs: "NA"
                    },
                    {
                        id: 7,
                        name: "Azure-PullLogs-Local",
                        description: "Receive Azure Logs and Store in Local ES",
                        Type: "ReceiveAndStoreLogs",
                        DataType: "LOG",
                        associatedWorkflowTemplate: "s3://...",
                        associatedCloud: "Azure",
                        associatedCreds: "Vault",
                        associatedApplicationLocation: "LogManager",
                        associatedTargetDsType: "ES"
                    },
                    {
                        id: 8,
                        name: "Azure-StoreTrace-Local",
                        description: "Receive Traces and Store in Local Zipkin DB",
                        Type: "ReceiveAndStoreTrace",
                        DataType: "Trace",
                        associatedWorkflowTemplate: "s3://...",
                        associatedCloud: "AWS",
                        associatedCreds: "Vault",
                        associatedApplicationLocation: "TraceManager",
                        associatedTargetDsType: "Zipkin"
                    }
                ],
            }
        };
        this.verifyInputsRef = React.createRef();
        this.enableDashboardRef = React.createRef();
        this.wizardRef = React.createRef();
        this.verifyAndSaveRef = React.createRef();
        this.previewRef = React.createRef();
        this.steps = [
            {
                name: "Verify Inputs",
                component: () => <VerifyInputs ref={this.verifyInputsRef} dashboard={this.state.dashboardData} inputName={this.state.inputName} {...this.props} updateDashboard={this.updateDashboard} />
            },
            {
                name: "Enable Dashboard",
                component: () => <EnableDashboard ref={this.enableDashboardRef} dashboard={this.state.dashboardData} inputName={this.state.inputName} selectedData={this.verifyInputsRef.current !== null ? this.verifyInputsRef.current.getSelection() : null} {...this.props} />
            },
            {
                name: "Preview",
                component: () => <Preview ref={this.previewRef} inputName={this.state.inputName} selectedInput={this.verifyInputsRef.current !== null ? this.verifyInputsRef.current.getSelection() : null} selectedDashboards={this.enableDashboardRef.current !== null ? this.enableDashboardRef.current.getSelection() : null} />
            },
            {
                name: "Verify and save",
                component: () => <VerifyAndSave ref={this.verifyAndSaveRef} inputName={this.state.inputName} selectedData={this.enableDashboardRef.current !== null ? this.enableDashboardRef.current.getSelection() : null} />
            }
        ];
        this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
    }

    async componentDidMount() {
        await this.getInputConfig();
        // if(inputConfig){
        //     this.getViewJson();
        // }

        // const { inputConfig } = this.state;
        // if (inputConfig && inputConfig.dashboards) {
        //     this.setState({
        //         showConfigWizard: false,
        //         activeDashboard: 0
        //     });
        // } else {
        //     this.setState({
        //         showConfigWizard: true,
        //     });
        // }
    }

    updateDashboard = (data: any) => {
        this.setState({
            dashboardData: data,
        })
    }

    // getViewJson = async () => {
    //     try {
    //         const cloud = this.getParameterByName("cloud", window.location.href);
    //         const type = this.getParameterByName("type", window.location.href);
    //         const tenantId = this.getParameterByName("tenantId", window.location.href);
    //         const accountId = this.getParameterByName("accountId", window.location.href);
    //         const reqOptions = RestService.optionWithAuthentication(null, "GET");
    //         await fetch(`${this.config.GET_VIEW_JSON}?cloudType=${cloud}&elementType=${type}&inputType=${this.state.inputName}&accountId=${accountId}&tenantId=${tenantId}`, reqOptions).then(
    //             (response: any) => {
    //                 if(response){
    //                     this.setState({
    //                         viewJson: response
    //                     });
    //                 }
    //             }, (error: any) => {
    //                 console.log("Performance. getViewJson failed. Error: ", error);
    //             });
    //     } catch (err) {
    //         console.log("Performance. Excepiton in getViewJson. Error: ", err);
    //     }
    // }

    getInputConfig = async () => {
        try {
            // const cloud = this.getParameterByName("cloud", window.location.href);
            // const type = this.getParameterByName("type", window.location.href);
            const tenantId = this.getParameterByName("tenantId", window.location.href);
            const accountId = this.getParameterByName("accountId", window.location.href);
            await RestService.getData(`${this.config.SEARCH_INPUT_CONFIG}?inputType=${this.state.inputName}&accountId=${accountId}&tenantId=${tenantId}`, null, null).then(
                (response: any) => {
                    if (response.code !== 417 && response.object.length > 0) {
                        console.log("Enabled dashboards : ", response.object[0].enabledDashboardList);
                        this.setState({
                            enablePerformanceMonitoring: true,
                            inputConfig: response.object[0],
                            showConfigWizard: false,
                            activeDashboard: 0,
                            // viewJson: response.object[0].enabledDashboardList,
                        });
                    } else {
                        this.setState({
                            showConfigWizard: true,
                        });
                    }
                }, (error: any) => {
                    console.log("Performance. Search input config failed. Error: ", error);
                });
        } catch (err) {
            console.log("Performance. Excepiton in search input this.config. Error: ", err);
        }
    }

    enablePerformanceMonitoring = () => {
        this.setState({
            enablePerformanceMonitoring: !this.state.enablePerformanceMonitoring,
        });
    };

    getParameterByName = (name: any, url: any) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    onSubmit = async () => {
        this.setState({
            isSuccess: true
        })
        let selectedInput = this.verifyInputsRef.current.getSelection();
        let selectedDashboards = this.enableDashboardRef.current.getSelection();
        if (selectedInput.length === 0) {
            this.wizardRef.current.setActiveStep(0);
        }
        if (selectedDashboards.length === 0) {
            this.wizardRef.current.setActiveStep(1);
        }

        console.log("1. Adding dashboards in grafana");
        for (let i = 0; i < selectedInput.length; i++) {
            let dsObj = selectedInput[i];
            await this.exportDashboardsInGrafana(dsObj, `${i}`);
        }
        if (!this.state.isSuccess) {
            this.setState({
                isAlertOpen: true,
                message: 'Enabling performance dashboards failed',
                severity: this.config.SEVERITY_ERROR,
                isSuccess: true
            })
            return;
        }

        console.log("2. Updating dashboards status in asset service");
        await this.updateDashboardsStatusInAssetService();
        if (!this.state.isSuccess) {
            this.setState({
                isAlertOpen: true,
                message: 'Enabling performance dashboards failed',
                severity: this.config.SEVERITY_ERROR,
                isSuccess: true
            })
            return;
        }

        // console.log("3. Updating inputs status in asset service");
        // for (let i = 0; i < selectedInput.length; i++) {
        //     let dsObj = selectedInput[i];
        //     await this.updateInput(dsObj);
        //     if (!this.state.isSuccess) {
        //         this.setState({
        //             isAlertOpen: true,
        //             message: 'Enabling performance dashboards failed',
        //             severity: this.config.SEVERITY_ERROR,
        //             isSuccess: true
        //         })
        //         return;
        //     }
        // }

        // console.log('4. Input config : ', inputConfig);
        // if (inputConfig === null) {
        //     console.log("5. Adding input config in asset service");
        //     await this.addInputConfig();
        // }
        // if (!this.state.isSuccess) {
        //     this.setState({
        //         isAlertOpen: true,
        //         message: 'Enabling performance dashboards failed',
        //         severity: this.config.SEVERITY_ERROR,
        //         isSuccess: true
        //     })
        //     return;
        // }
        this.setState({
            isAlertOpen: true,
            message: 'Performance dashboards enabled',
            severity: this.config.SEVERITY_SUCCESS,
            isSuccess: true
        })

    };

    async exportDashboardsInGrafana(dsObj: any, index: any) {
        // const obj = this.verifyAndSaveRef.current.getSelection();
        const obj = this.enableDashboardRef.current.getSelection();
        let dsbAry: any = [];
        var usr = localStorage.getItem(`userInfo`);
        for (let i = 0; i < obj.length; i++) {
            const selectionData = obj[i];
            // console.log("Selected dashboard: ",selectionData);
            var dashboard = this.config.DASHBOARD_JSON;
            // dashboard.Uid =`${selectionData.dashboardUuid}`;
            dashboard.Uuid = `${selectionData.dashboardUuid}`;
            dashboard.Slug = `${selectionData.fileName}`;
            // dashboard.Title =`${selectionData.fileName}`;
            dashboard.Title = `${index}${i}`;
            dashboard.SourceJsonRef = ``;
            dashboard.AccountId = `${selectionData.accountId}`;
            dashboard.TenantId = `${selectionData.tenantId}`;
            dashboard.CloudName = selectionData.type;
            dashboard.ElementType = selectionData.elementType;
            dashboard.InputSourceId = dsObj.name;
            dashboard.FileName = selectionData.fileName;
            dashboard.InputType = this.state.inputName;
            var raw = this.config.RAW;
            raw.Dashboard = dashboard;
            raw.Message = `${selectionData.dashboardNature}`;
            // console.log("Final dashboard to be exported: ",raw);
            var json = JSON.stringify(raw);
            // console.log("Object to post : ", json);
            // var reqOpt = RestService.postOptionWithAuthentication(json);
            var reqOpt = RestService.optionWithAuthentication(json, 'POST');
            await fetch(this.config.ADD_DASHBOARDS_TO_GRAFANA, reqOpt)
                .then(response => response.json())
                .then(result => {
                    // console.log("1. Dashboard import in grafana. Response: ",result);
                    var userName = '';
                    if (usr) {
                        var user = JSON.parse(usr);
                        userName = user.username;
                    }
                    if (result.status === 'success') {
                        var assetStatus = { "user": userName, "id": selectionData.id, "status": "ENABLED", "appAsset": raw, "grafanaAsset": result };
                        dsbAry[i] = assetStatus;
                    } else {
                        var assetStatus = { "user": userName, "id": selectionData.id, "status": "FAILED", "appAsset": raw, "grafanaAsset": result };
                        dsbAry[i] = assetStatus;
                        this.setState({
                            isSuccess: false
                        })
                    }
                })
                .catch(error => {
                    console.log('Dashboard import in grafana failed. Error', error)
                    this.setState({
                        isSuccess: false
                    })
                });
        }
        this.setState({
            updatedDashboards: dsbAry
        })
    }

    updateDashboardsStatusInAssetService() {
        const { updatedDashboards } = this.state;
        const tenantId = this.getParameterByName("tenantId", window.location.href);
        const accountId = this.getParameterByName("accountId", window.location.href);

        let inputObj = {
            accountId: accountId,
            tenantId: tenantId,
            inputType: this.state.inputName,
            status: 'ACTIVE',
            dashboardList: updatedDashboards,
            enableInput: true
        }

        RestService.add(`${this.config.BULK_UPDATE_APPLICATION_ASSETS}`, inputObj)
            .then((response: any) => {
                console.log("Update assets response : ", response);
                if (response.code === 417) {
                    this.setState({
                        isSuccess: false
                    })
                }
            })
            .catch(error => {
                console.log('Updating dashboard status failed. Error', error)
                this.setState({
                    isSuccess: false
                })
            });
    }

    // updateInput(dsObj: any) {
    //     const tenantId = this.getParameterByName("tenantId", window.location.href);
    //     const accountId = this.getParameterByName("accountId", window.location.href);
    //     let inp = {
    //         id: dsObj.id,
    //         status: 'ACTIVE',
    //     }
    //     RestService.add(`${this.config.UPDATE_INPUT}`, inp)
    //         .then((response: any) => {
    //             console.log("Update input response : ", response);
    //             if (response.code === 417) {
    //                 this.setState({
    //                     isSuccess: false
    //                 })
    //             }
    //         })
    //         .catch(error => {
    //             console.log('Updating input status failed. Error', error)
    //             this.setState({
    //                 isSuccess: false
    //             })
    //         });
    // }

    // addInputConfig() {
    //     const tenantId = this.getParameterByName("tenantId", window.location.href);
    //     const accountId = this.getParameterByName("accountId", window.location.href);
    //     let inp = {
    //         accountId: accountId,
    //         tenantId: tenantId,
    //         inputType: this.state.inputName,
    //         status: 'ACTIVE',
    //     }
    //     RestService.add(`${this.config.ADD_INPUT_CONFIG}`, inp)
    //         .then((response: any) => {
    //             console.log("Add input_config response : ", response);
    //             if (response.code === 417) {
    //                 this.setState({
    //                     isSuccess: false
    //                 })
    //             }
    //         })
    //         .catch(error => {
    //             console.log('Add input_config failed. Error', error)
    //             this.setState({
    //                 isSuccess: false
    //             })
    //         });
    // }

    handleCloseAlert = (e: any) => {
        this.setState({
            isAlertOpen: false,
            message: '',
            severity: ''
        })
    }

    renderDashboardList = () => {
        // const { inputConfig, activeDashboard } = this.state;
        // if (inputConfig && inputConfig.dashboards) {
        //     const retData = [];
        //     for (let i = 0; i < inputConfig.dashboards.length; i++) {
        //         const dashboard = inputConfig.dashboards[i];
        //         retData.push(<div title={dashboard.Title} key={dashboard.Uuid} className={`dashboard-side-tab ${activeDashboard === i ? 'active' : ''}`} onClick={() => this.setState({ activeDashboard: i, iFrameLoaded: false })}>
        //             <div className="tab-name">{dashboard.Title}</div>
        //         </div>);
        //     }
        //     return retData;
        // }
        const { viewJson, activeDashboard } = this.state;
        // if (viewJson && viewJson.dashboards) {
        if (viewJson) {
            const retData = [];
            // for (let i = 0; i < viewJson.dashboards.length; i++) {
            for (let i = 0; i < viewJson.length; i++) {
                // const dashboard = viewJson.dashboards[i];
                const dashboard = viewJson[i];
                retData.push(<div title={dashboard.title} key={dashboard.uid} className={`dashboard-side-tab ${activeDashboard === i ? 'active' : ''}`} onClick={() => this.setState({ activeDashboard: i, iFrameLoaded: false })}>
                    {dashboard.title}
                </div>);
            }
            return retData;
        }
        return [];
    };

    nextClick = (step: any) => {
        if (step === 1) {
            this.enableDashboardRef.current.setDashboardData(this.state.dashboardData);
        } else if (step === 2) {
            this.previewRef.current.setDashboardData(this.state.dashboardData);
        }else if(step === 3){
            this.verifyAndSaveRef.current.setDashboardData(this.state.dashboardData);
        }
    }

    render() {
        const { enablePerformanceMonitoring, isAlertOpen, severity, message, showConfigWizard, iFrameLoaded, viewJson, activeDashboard } = this.state;
        let activeDB = null;
        // if (inputConfig && inputConfig.dashboards && inputConfig.dashboards[activeDashboard]) {
        //     activeDB = inputConfig.dashboards[activeDashboard];
        // }

        // if (viewJson && viewJson.dashboards && viewJson.dashboards[activeDashboard]) {
        //     activeDB = viewJson.dashboards[activeDashboard];
        // }
        if (viewJson && viewJson[activeDashboard]) {
            activeDB = viewJson[activeDashboard];
        }
        return (
            <>
                {!enablePerformanceMonitoring && (
                    <>
                        <div className="performance-box">
                            <div className="performance-inner">
                                <strong>Performance Monitoring is not enabled yet</strong>
                                <p>To endble Performance Monitoring dashboards you will first have to configure the inputs for data collection</p>
                                <button className="asset-blue-button" onClick={this.enablePerformanceMonitoring}>Enable Performance Monitoring</button>
                            </div>
                        </div>
                        <div className="note-text">
                            <div className="note-text-inner">
                                <p><strong>Note:</strong> This screen will be displayed only for first time setup, if Inputs are already configured we will show list of dashboards as shown in last screen of this process flow</p>
                            </div>
                        </div>
                    </>
                )}
                {enablePerformanceMonitoring && (
                    <>
                        <AlertMessage handleCloseAlert={this.handleCloseAlert} open={isAlertOpen} severity={severity} msg={message}></AlertMessage>
                        {!showConfigWizard &&
                            <>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <button style={{ marginTop: "10px", float: "right", marginRight: "10px" }} onClick={() => this.setState({ showConfigWizard: true })} className="asset-blue-button m-b-0">Configure</button>
                                </div>
                                <div className="dashboard-view-container">
                                    <aside className="aside-container">{this.renderDashboardList()}</aside>
                                    <div className="dashboard-view">
                                        {activeDB &&
                                            <>
                                                <iframe style={{ display: `${iFrameLoaded ? '' : 'none'}` }} src={`/justdashboard?uid=${activeDB.uid}&slug=1`} onLoad={() => { this.setState({ iFrameLoaded: true }) }}></iframe>
                                                <div style={{ textAlign: "center", display: iFrameLoaded ? 'none' : '', marginTop: "20px" }}>
                                                    Dashboard is loading...
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </>
                        }
                        {
                            showConfigWizard &&
                            <Wizard ref={this.wizardRef} steps={this.steps} submitPage={this.onSubmit} nextClick={this.nextClick} />
                        }
                    </>
                )}
            </>
        );
    }
}