import React from 'react';
import awsIcon from '../../../img/aws-2.png';
import azureIcon from '../../../img/azure-1.png';
import googleCloudIcon from '../../../img/google-cloud-1.png';
import acronisIcon from '../../../img/acronis.png';

import { Filter } from './../filter';
import { AwsAccountCreation, AwsDocumentManagement, AwsLandingZone, AzureLandingZone, GoogleLandingZone, AwsProductEnclave } from './ProvisionTemplateComponents';

export class ProvisioningTemplates extends React.Component<any, any>{
    componentMapping: any = {
        'LandingZone-AWS': AwsLandingZone,
        'LandingZone-Azure': AzureLandingZone,
        'LandingZone-Google': GoogleLandingZone,
        'ProductEnclave-AWS': AwsProductEnclave,
        'ProductEnclave-Azure': AwsProductEnclave,
        'ProductEnclave-Google': AwsProductEnclave,
        'ProductCluster-AWS': AwsAccountCreation,
        'ProductCluster-Azure': AwsAccountCreation,
        'ProductCluster-Google': AwsAccountCreation,
        'CommonService-Google': AwsDocumentManagement,
    };
    constructor(props: any) {
        super(props)
        this.state = {
            view: 'grid',
            type: '',
            associatedCloud: '',
            dashboards: this.props.data || [],

            filterData: [
                {
                    name: "Associated Cloud",
                    key: "associatedCloud",
                    filter: [],
                },
                {
                    name: "Associated Creds",
                    key: "associatedCreds",
                    filter: [],
                },
            ]
        }
    }

    componentDidMount(){
        this.createFilterJson(); 
    }
    dashboardsView = (type: any) => {
        this.setState({ view: type })
    }

    showMainView = () => {
        this.setState({
            type: '',
            associatedCloud: '',
        });
    };

    createFilterJson = () => {
        let { dashboards, filterData } = this.state;
        const filterKeys = ['associatedCloud', 'associatedCreds'];
        const filteredData: any = {};
        for (let i = 0; i < dashboards.length; i++) {
            let dashboard = dashboards[i];
            for (let j = 0; j < filterKeys.length; j++) {
                const filter = filterKeys[j];
                filteredData[filter] = filteredData[filter] || [];
                if (filteredData[filter].indexOf(dashboard[filter]) === -1) {
                    filteredData[filter].push(dashboard[filter]);
                }
            }
        }
        if (filterKeys && filterData && filterData.length > 0 && filterKeys.length > 0) {
            for (let i = 0; i < filterData.length; i++) {
                for (let k = 0; k < filterKeys.length; k++) {
                    const filter = filterKeys[k];
                    for (let j = 0; j < filteredData[filter].length; j++) {
                        let filters = filteredData[filter][j]
                        if (filterData[i].key == filter) {
                            filterData[i].filter.push({ value: filters, label: filters });
                        }
                    }
                }
            }
        }
        this.setState({
            filterData
        })
    }
    renderDashboards = (dashboards: any) => {
        let retData = []
        if (dashboards && dashboards.length > 0) {
            retData = [];
            for (let i = 0; i < dashboards.length; i++) {
                const { associatedCloud, name, Type, description } = dashboards[i];
                const { view } = this.state;
                retData.push(
                    <div className={`col-sm-12 ${view === 'grid' ? 'col-md-6' : 'col-md-12'}`} onClick={() => this.setActiveView(Type, associatedCloud)}>
                        <div className="template-box">
                            <div className="heading">
                                {associatedCloud === 'AWS' &&
                                    <img src={awsIcon} alt={name} />
                                }
                                {associatedCloud === 'Azure' &&
                                    <img src={azureIcon} alt={name} />
                                }
                                {associatedCloud === 'Google' &&
                                    <img src={googleCloudIcon} alt={name} />
                                }
                                {associatedCloud === 'Acronis' &&
                                    <img src={acronisIcon} alt={name} />
                                }
                                {name}
                            </div>
                            {/* <div className="sub-text">
                                {Type}
                            </div> */}
                            <div className="text">
                                {description}
                            </div>
                        </div>
                    </div>
                )
            }
        }
        else {
            retData = [];
            retData.push(<div>No Data Found</div>)
        }
        return retData
    }

    formFields = () => {
        const { view, dashboards } = this.state;
        return (
            <div className="catalogue-right-container">
                <div>
                    Select a template to start with. You can use filters or the seach box the scope.
                </div>
                <div className="templated-search">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="search-box">
                                <button className="search-button"><i className="fa fa-search"></i></button>
                                <input type="text" placeholder="Search Template here" className="input" />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="btnContainer">
                                <button className={view == 'grid' ? "btn btn-grid btn-active" : "btn btn-grid"} onClick={() => this.dashboardsView('grid')}><i className="fa fa-th-large"></i></button>
                                <button className={view == 'list' ? "btn btn-list btn-active" : "btn btn-list"} onClick={() => this.dashboardsView('list')}><i className="fa fa-list"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="templated-boxs">
                    <div className="row">
                        {this.renderDashboards(dashboards)}
                    </div>
                </div>
            </div>
        )

    }

    setActiveView = (type: any, associatedCloud: any) => {
        this.setState({
            type,
            associatedCloud
        });
    };

    render() {
        const { type, associatedCloud, filterData } = this.state;
        let ActiveViewComponent = null;
        if (type !== '' && associatedCloud !== '') {
            ActiveViewComponent = this.componentMapping[`${type}-${associatedCloud}`];
        }
        return (
            ActiveViewComponent ?
                <ActiveViewComponent showMainView={this.showMainView} /> :
                <div className="catalogue-inner-tabs-container templates-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
                            <Filter filterJsonData={filterData} />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-l-p">
                            {
                                this.formFields()
                            }
                        </div>
                    </div>
                </div>
        )
    }
}