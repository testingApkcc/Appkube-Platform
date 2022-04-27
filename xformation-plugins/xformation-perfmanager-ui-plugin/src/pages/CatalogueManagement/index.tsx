import React from "react";
import { Breadcrumbs } from '../Breadcrumbs';
import { TopMenu } from './TopMenu';
// import previewDashboardIcon from '../../img/preview-dashboard-icon.png';
// import libraryIcon from '../../img/library-icon.png';
// import previewDashboard from '../../img/preview-dashboard.png';

export class CatalogueManagement extends React.Component<any, any>{
    breadCrumbs: any;
    constructor(props: any) {
        super(props)
        this.state = {
            catalogueManagement: {
                Dev: {
                    AppBlocks: {
                        commonMicroservices: [],
                        generators: [],
                        workflows: []
                    },
                    LibraryAndSDKs: {},
                    BuildDeployTemplates: {},
                    ISVSolutions: {},
                    DataFlows: {}
                },
                Sec: {
                    ComplianceRules: {},
                    CompliancePolicies: {},
                    ComplianceAuditors: {},
                    CodeSecurityTemplates: {},
                    ConainerSecurityTemplates: {},
                    DataSecurityTemplates: {}
                },
                Ops: {
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
                            id: 4,
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
                            id: 5,
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
                            id: 6,
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
                            id: 7,
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
                    ProvisioningTemplates: {},
                    AlertRules: {},
                    Workflows: {},
                    Collectors: {},
                    Diagonostics: {},
                    kubeOperators: {}
                }
            },
navHandle:{
            index: 0,
            topKey:"Dev",
            lowerkey:"commonMicroservices"
}
        }
        this.breadCrumbs = [
            {
                label: 'Home',
                route: `/`,
            },
            {
                label: 'Assets | Discovered Assets',
                isCurrentPage: true,
            },
        ];
    }
    handleUpperMenu = (inx: any , name:any) => {
        let { catalogueManagement , navHandle} = this.state
        this.state.navHandle.index=inx
        this.setState({ navHandle, catalogueManagement: catalogueManagement , objKey:name})
    }
    handleLowerMenu = (val:any) => {
        let {navHandle }=this.state
        navHandle.lowerkey=val;
        this.setState({navHandle})
    }
    render() {
        const { catalogueManagement, navHandle} = this.state;
        const {topKey, index, lowerkey}=navHandle
        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="CATALOGUE MANAGEMENT" />
                <div className="catalogue-management-container">
                    <div className="common-container">
                        <div className="catalogue-tabs">
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    {catalogueManagement && <ul>
                                        {Object.keys(catalogueManagement).map((cat: any, inx: any) =>
                                            <li key={inx} className={`${index === inx ? 'active' : ''}`}
                                                onClick={(e) => this.handleUpperMenu(inx , cat)}>{`${cat} Catalogue`}</li>)}
                                    </ul>}
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <TopMenu />
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-tabs-container">
                            <div className="catalogue-inner-tabs">
                                {catalogueManagement && <ul>
                                    {Object.keys(catalogueManagement[topKey]).map((cat: any, inx: any) => <li key={inx} 
                                    className={[lowerkey] == cat ? 'active' : ''}
                                     onClick={(e) => this.handleLowerMenu(cat)}>{cat}</li>)}
                                </ul>}
                            </div>
                            <div className="catalogue-inner-tabs-container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
                                        <div className="catalogue-filters">
                                            <div className="filter-search">
                                                <strong>Filters</strong>
                                                <div className="filter-input">
                                                    <input type="text" placeholder="Search" />
                                                    <button className=""><i className="fa fa-close"></i> Clear filter</button>
                                                </div>
                                            </div>
                                            <div className="catalogue-category">
                                                <strong>Tier</strong>
                                                <ul>
                                                    <li>
                                                        <input type="checkbox" id="1" name="Filter1" value="filter1" />
                                                        <label>Filter 1</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="2" name="Filter2" value="filter2" />
                                                        <label>Filter 2</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="3" name="Filter3" value="filter3" />
                                                        <label>Filter 3</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="4" name="Filter4" value="filter4" />
                                                        <label>Filter 4</label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="catalogue-category">
                                                <strong>Category</strong>
                                                <ul>
                                                    <li>
                                                        <input type="checkbox" id="1" name="Filter1" value="filter1" />
                                                        <label>Filter 1</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="2" name="Filter2" value="filter2" />
                                                        <label>Filter 2</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="3" name="Filter3" value="filter3" />
                                                        <label>Filter 3</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="4" name="Filter4" value="filter4" />
                                                        <label>Filter 4</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="5" name="Filter5" value="filter5" />
                                                        <label>Filter 5</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="6" name="Filter6" value="filter6" />
                                                        <label>Filter 6</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-l-p">
                                        <div className="catalogue-right-container">
                                            <div className="heading">
                                                <div className="row">
                                                    <div className="col-md-9 col-sm-12">
                                                        <h3>Catalogue</h3>
                                                        <p>A catalogue is collection of dashboards</p>
                                                    </div>
                                                    <div className="col-md-3 col-sm-12">
                                                        <button className="create-btn">Add Catalogue</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="catalogue-boxes">
                                                {/* {cardData && cardData.length > 0 ? cardData.map((card: any, index: any) => {
                                                    return (
                                                        <div key={card.id} className="blog-list-item box">
                                                            <div className="module-card-content">
                                                                <div className="row">
                                                                    <div className="col-md-1 col-sm-12 p-r-0">
                                                                        <img src={card.image} alt={card.name} />
                                                                    </div>
                                                                    <div className="col-md-11 col-sm-12">
                                                                        <h3 className="title is-block">{card.name}</h3>
                                                                        <p className="subtitle is-block">{card.category}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="module-card-footer">
                                                                <div className="module-card-footer-details">
                                                                    <a>
                                                                        <img src={libraryIcon} alt="" />
                                                                        {`Add Catalog To library`}
                                                                    </a>
                                                                </div>
                                                                <div className="module-card-footer-provider">
                                                                    <a>
                                                                        <img src={previewDashboardIcon} alt="" />
                                                                        {`Preview Dashboard`}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                    : <div className="loading-text">Loading....</div>
                                                } */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}