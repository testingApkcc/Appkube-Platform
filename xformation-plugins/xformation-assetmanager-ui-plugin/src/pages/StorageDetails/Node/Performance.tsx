import * as React from 'react';
import { Wizard } from './Wizard';
import { VerifyInputs } from './VerifyInputs';
import { EnableDashboard } from './EnableDashboard';
import { Preview } from './Preview';
import { VerifyAndSave } from './VerifyAndSave';
// import dummyData from './dummyData.json';
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
            dashboardData: {},
            isLoading: false,
        };
        this.verifyInputsRef = React.createRef();
        this.enableDashboardRef = React.createRef();
        this.wizardRef = React.createRef();
        this.verifyAndSaveRef = React.createRef();
        this.previewRef = React.createRef();
        this.steps = [
            {
                name: "Verify Inputs",
                component: () => <VerifyInputs ref={this.verifyInputsRef} />
            },
            {
                name: "Enable Dashboard",
                component: () => <EnableDashboard ref={this.enableDashboardRef} />
            },
            {
                name: "Preview",
                component: () => <Preview ref={this.previewRef} />
            },
            {
                name: "Verify and save",
                component: () => <VerifyAndSave ref={this.verifyAndSaveRef} {...this.props} />
            }
        ];
        this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
    }

    componentDidMount() {
        this.getInputConfig();
    }

    getInputConfig = async () => {
        try {
            RestService.getData(`${this.config.SEARCH_CONFIG_DASHBOARD}`, null, null).then(
                (response: any) => {
                    if (response.code !== 417) {
                        const { cloudDashBoards, dataSources } = response.details.ops;
                        const dashboardData = this.manipulateCatalogueData(dataSources, cloudDashBoards);
                        this.setState({
                            enablePerformanceMonitoring: true,
                            showConfigWizard: false,
                            activeDashboard: 0,
                            dashboardData,
                        });
                        this.verifyInputsRef.current && this.verifyInputsRef.current.setDashboardData(dashboardData);
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

    manipulateCatalogueData = (dataSources: any, dashboards: any) => {
        dataSources.forEach((dataSource: any) => {
            const name = dataSource.name;
            dashboards.forEach((dashboard: any) => {
                if (name === dashboard.associatedDataSourceType) {
                    dataSource.isDashboardAdded = true;
                    dataSource.dashboards = dataSource.dashboards || [];
                    dataSource.dashboards.push(dashboard);
                }
            });
        });
        // const retData = dataSources.filter((source: any) => source.isDashboardAdded);
        // return retData;
        return dataSources
    };

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
        if (this.state.isLoading) {
            this.setState({
                isAlertOpen: true,
                message: 'Dashboards are being imported. Please wait..',
                severity: 'warning',
                isSuccess: false
            });
            return;
        }
        const dashbaordJSONArray = this.verifyAndSaveRef.current.getDashboardJSONData();
        if (!dashbaordJSONArray) {
            this.setState({
                isAlertOpen: true,
                message: 'Dashboard json is loading, wait for a while',
                severity: 'warning',
                isSuccess: false
            });
            return;
        }
        if (dashbaordJSONArray.length === 0) {
            this.wizardRef.current.setActiveStep(0);
            this.setState({
                isAlertOpen: true,
                message: 'Please select dashboard',
                severity: 'warning',
                isSuccess: false
            });
            return;
        }
        const responseArray: any = [];
        this.setState({
            isLoading: true
        });
        let index = 0;
        dashbaordJSONArray.forEach((dashboard: any) => {
            const dataJs = {
                // title: dashboard.title,
                // slug: dashboard.slug,
                // uid: dashboard.uid,
                // data: dashboard,
                Dashboard:JSON.parse(dashboard.data),
                UserId:0,
                Overwrite: false,
                Message: "",
                OrgId:1,
                PluginId:"",
                FolderId:0,
                IsFolder: false,
            };
            dataJs.Dashboard.id = 0;
            dataJs.Dashboard.uid = "";
            dataJs.Dashboard.slug = dashboard.accountId+"_"+dashboard.elementType+"_"+(++index);
            dataJs.Dashboard.title = dataJs.Dashboard.slug;
            var json = JSON.stringify(dataJs);
            var reqOpt = RestService.optionWithAuthentication(json, 'POST');
            fetch(this.config.ADD_DASHBOARDS_TO_GRAFANA, reqOpt)
                .then(response => response.json())
                .then(result => {
                    responseArray.push({
                        ...result,
                        dashboardCatalogueId: dashboard.dashboardCatalogueId
                    });
                    if (responseArray.length === dashbaordJSONArray.length) {
                        this.sendViewJSON(responseArray);
                    }
                }, error => {
                    responseArray.push(null);
                    if (responseArray.length === dashbaordJSONArray.length) {
                        this.setState({
                            isAlertOpen: true,
                            message: 'There was some error while importing dashboard',
                            severity: 'error',
                            isSuccess: true,
                            isLoading: false
                        });
                    }
                })
                .catch(error => {
                    console.log('Dashboard import in grafana failed. Error', error);
                    this.setState({
                        isAlertOpen: true,
                        message: 'Enabling performance dashboards failed',
                        severity: 'error',
                        isSuccess: true
                    });
                    responseArray.push(null);
                    if (responseArray.length === dashbaordJSONArray.length) {
                        this.setState({
                            isAlertOpen: true,
                            message: 'There was some error while importing dashboard',
                            severity: 'error',
                            isSuccess: true,
                            isLoading: false
                        });
                    }
                });
        });
    };

    
    sendViewJSON = (responseArray: any) => {
        console.log('Response array:::: ', responseArray);
        var json = JSON.stringify(responseArray);
        var reqOpt = RestService.optionWithAuthentication(json, 'POST');
        fetch(this.config.ADD_VIEW_JSON_TO_GRAFANA, reqOpt)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isAlertOpen: true,
                    message: 'Dashboards imported successfully',
                    severity: 'success',
                    isSuccess: false,
                    isLoading: false,
                });
            }, error => {
                this.setState({
                    isAlertOpen: true,
                    message: 'There was some issue while adding view',
                    severity: 'error',
                    isSuccess: false,
                    isLoading: false,
                });
            })
            .catch(error => {
                console.log('There was some issue while adding ', error);
                this.setState({
                    isAlertOpen: true,
                    message: 'There was some issue while adding ',
                    severity: 'error',
                    isSuccess: true,
                    isLoading: false,
                });
            });
    };

    handleCloseAlert = (e: any) => {
        this.setState({
            isAlertOpen: false,
            message: '',
            severity: ''
        })
    }

    renderDashboardList = () => {
        const { viewJson, activeDashboard } = this.state;
        if (viewJson) {
            const retData = [];
            for (let i = 0; i < viewJson.length; i++) {
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
        const dashboardData = this.verifyInputsRef.current.getSelectedDashboards();
        if (!dashboardData) {
            this.wizardRef.current.setActiveStep(0);
            this.setState({
                isAlertOpen: true,
                message: 'Please select the dashboard',
                severity: 'warning',
                isSuccess: false
            });
            return;
        }
        this.setState({
            dashboardData
        });
        if (step === 1) {
            this.enableDashboardRef.current.setDashboardData(dashboardData);
        } else if (step === 2) {
            this.previewRef.current.setDashboardData(dashboardData);
        } else if (step === 3) {
            this.verifyAndSaveRef.current.setDashboardData(dashboardData);
        }
    }

    setConfigWizard = () => {
        this.setState({
            showConfigWizard: true
        }, () => {
            this.verifyInputsRef.current && this.verifyInputsRef.current.setDashboardData(this.state.dashboardData);
        });
    }

    render() {
        const { enablePerformanceMonitoring, isAlertOpen, severity, message, showConfigWizard, iFrameLoaded, viewJson, activeDashboard } = this.state;
        let activeDB = null;
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
                                    <button style={{ marginTop: "10px", float: "right", marginRight: "10px" }} onClick={this.setConfigWizard} className="asset-blue-button m-b-0">Configure</button>
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