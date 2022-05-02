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
            dashboardData: {},
        };
        this.verifyInputsRef = React.createRef();
        this.enableDashboardRef = React.createRef();
        this.wizardRef = React.createRef();
        this.verifyAndSaveRef = React.createRef();
        this.previewRef = React.createRef();
        this.steps = [
            {
                name: "Verify Inputs",
                component: () => <VerifyInputs ref={this.verifyInputsRef} dashboard={this.state.dashboardData} {...this.props} updateDashboard={this.updateDashboard} />
            },
            {
                name: "Enable Dashboard",
                component: () => <EnableDashboard ref={this.enableDashboardRef} {...this.props} />
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

    async componentDidMount() {
        await this.getInputConfig();
    }

    updateDashboard = (data: any) => {
        this.setState({
            dashboardData: data,
        })
    }

    getInputConfig = async () => {
        try {
            let dashboard: any = {};
            await RestService.getData(`${this.config.SEARCH_CONFIG_DASHBOARD}`, null, null).then(
                (response: any) => {
                    if (response.code !== 417) {
                        dashboard['CloudDashBoards'] = response.details.ops.cloudDashBoards;
                        dashboard['DataSources'] = response.details.ops.dataSources;
                        this.setState({
                            enablePerformanceMonitoring: true,
                            showConfigWizard: false,
                            activeDashboard: 0,
                            dashboardData: dashboard,
                        });
                        this.verifyInputsRef.current && this.verifyInputsRef.current.setDashboardData(dashboard);
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
        const dashbaordJSONArray = this.verifyAndSaveRef.current.getDashboardJSONData();
        if (dashbaordJSONArray.length === 0) {
            this.wizardRef.current.setActiveStep(0);
            this.setState({
                isAlertOpen: true,
                message: 'Please select dashboard',
                severity: this.config.SEVERITY_ERROR,
                isSuccess: false
            });
            return;
        }
        const result: any = [];
        dashbaordJSONArray.forEach((dashboard: any) => {
            result.push({
                title: dashboard.title,
                slug: dashboard.slug,
                uid: dashboard.uid,
                data: dashboard,
            });
        });

        var json = JSON.stringify(result);
        var reqOpt = RestService.optionWithAuthentication(json, 'POST');
        fetch(this.config.ADD_DASHBOARDS_TO_GRAFANA, reqOpt)
            .then(response => response.json())
            .then(result => {

            })
            .catch(error => {
                console.log('Dashboard import in grafana failed. Error', error)
                this.setState({
                    isAlertOpen: true,
                    message: 'Enabling performance dashboards failed',
                    severity: this.config.SEVERITY_ERROR,
                    isSuccess: true
                })
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
        if (step === 1) {
            this.enableDashboardRef.current.setDashboardData(this.state.dashboardData);
        } else if (step === 2) {
            this.previewRef.current.setDashboardData(this.state.dashboardData);
        } else if (step === 3) {
            this.verifyAndSaveRef.current.setDashboardData(this.state.dashboardData);
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