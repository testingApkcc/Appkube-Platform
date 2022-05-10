import React from 'react';
import awsIcon from '../../../img/aws.png';
import { Filter } from './../filter';
import { AwsAccountCreation, AwsDocumentManagement, AwsLandingZone, AwsProductEnclave } from './ProvisionTemplateComponents';

export class ProvisioningTemplates extends React.Component<any, any>{
    componentMapping = [AwsAccountCreation, AwsDocumentManagement, AwsLandingZone, AwsProductEnclave];
    constructor(props: any) {
        super(props)
        this.state = {
            view: 'grid',
            activeView: -1,
        }
    }

    dashboardsView = (type: any) => {
        this.setState({ view: type })
    }

    showMainView = () => {
        this.setState({
            activeView: -1,
        });
    };

    formFields = () => {
        const { view } = this.state;
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
                        <div className={`col-sm-12 ${view === 'grid' ? 'col-md-6' : 'col-md-12'}`}>
                            <div className="template-box">
                                <div className="heading">
                                    <img src={awsIcon} alt='' />
                                    Landing Zone
                                </div>
                                <div className="sub-text">
                                    Create Landing Zone with DevSecOps best practice in AWS
                                </div>
                                <div className="text">
                                    Description text related to creating LAmding zone on AWS will be displayed here
                                </div>
                            </div>
                        </div>
                        <div className={`col-sm-12 ${view === 'grid' ? 'col-md-6' : 'col-md-12'}`} onClick={() => this.setActiveView(1)}>
                            <div className="template-box">
                                <div className="heading">
                                    <img src={awsIcon} alt='' />
                                    Document management
                                </div>
                                <div className="sub-text">
                                    Create Landing Zone with DevSecOps best practice in AWS
                                </div>
                                <div className="text">
                                    Description text related to creating LAmding zone on AWS will be displayed here
                                </div>
                            </div>
                        </div>
                        <div className={`col-sm-12 ${view === 'grid' ? 'col-md-6' : 'col-md-12'}`} onClick={() => this.setActiveView(3)}>
                            <div className="template-box">
                                <div className="heading">
                                    <img src={awsIcon} alt='' />
                                    Product Enclave
                                </div>
                                <div className="sub-text">
                                    Create Landing Zone with DevSecOps best practice in AWS
                                </div>
                                <div className="text">
                                    Description text related to creating LAmding zone on AWS will be displayed here
                                </div>
                            </div>
                        </div>
                        <div className={`col-sm-12 ${view === 'grid' ? 'col-md-6' : 'col-md-12'}`} onClick={() => this.setActiveView(2)}>
                            <div className="template-box">
                                <div className="heading">
                                    <img src={awsIcon} alt='' />
                                    Landing Zone
                                </div>
                                <div className="sub-text">
                                    Create Landing Zone with DevSecOps best practice in AWS
                                </div>
                                <div className="text">
                                    Description text related to creating LAmding zone on AWS will be displayed here
                                </div>
                            </div>
                        </div>
                        <div className={`col-sm-12 ${view === 'grid' ? 'col-md-6' : 'col-md-12'}`} onClick={() => this.setActiveView(0)}>
                            <div className="template-box">
                                <div className="heading">
                                    <img src={awsIcon} alt='' />
                                    Account Creation
                                </div>
                                <div className="sub-text">
                                    Create Landing Zone with DevSecOps best practice in AWS
                                </div>
                                <div className="text">
                                    Description text related to creating LAmding zone on AWS will be displayed here
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    setActiveView = (activeView: any) => {
        this.setState({
            activeView
        });
    };

    render() {
        const { activeView } = this.state;
        let ActiveViewComponent = null;
        if (activeView !== -1) {
            ActiveViewComponent = this.componentMapping[activeView];
        }
        return (
            ActiveViewComponent ?
                <ActiveViewComponent showMainView={this.showMainView} /> :
                <div className="catalogue-inner-tabs-container templates-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
                            <Filter />
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