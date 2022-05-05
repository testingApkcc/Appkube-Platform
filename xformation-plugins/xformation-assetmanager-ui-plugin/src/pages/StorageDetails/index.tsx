import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { Node } from './Node';
import { PLUGIN_BASE_URL } from '../../constants';

export class StorageDetails extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        let serviceData: any = localStorage.getItem('added-services');
        if (serviceData) {
            serviceData = JSON.parse(serviceData);
        } else {
            window.history.go(-1);
        }
        super(props);
        this.state = {
            activeTab: 0,
            serviceDetails: serviceData,
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Assets | Environments",
                isCurrentPage: true
            }
        ];
    }

    getParameterByName = (name: any, url: any) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    setActiveTab = (activeTab: any) => {
        this.setState({
            activeTab,
        });
    };

    displayTabs = () => {
        const { activeTab, serviceDetails } = this.state;
        let retData = [];
        if (serviceDetails) {
            for (let i = 0; i < serviceDetails.length; i++) {
                let node = serviceDetails[i];
                retData.push(
                    <li className={activeTab === i ? 'active' : ''} onClick={e => this.setActiveTab(i)}>
                        <a>
                            {node.name}
                            <i className="fa fa-times" aria-hidden="true" onClick={() => this.removeTab(i)}></i>
                        </a>
                    </li>
                );
            }
        }
        return retData;
    }

    removeTab = (index: any) => {
        const { serviceDetails } = this.state;
        if (serviceDetails.length > 1) {
            serviceDetails.splice(index, 1);
            this.setState({
                serviceDetails,
                activeTab: index - 1,
            });
            localStorage.setItem('added-services', JSON.stringify(serviceDetails));
        } else {
            localStorage.setItem('added-services', '');
            window.history.go(-1);
        }
    }

    render() {
        const { activeTab, serviceDetails } = this.state;
        const accountId = this.getParameterByName('accountId', window.location.href);
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
                <div className="service-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="asset-heading">
                                    Environments
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="float-right common-right-btn">
                                    <Link to={`${PLUGIN_BASE_URL}/amazon-services?accountId=${accountId}`} className="asset-white-button min-width-inherit m-r-0">
                                        <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container">
                        <div className="service-account-container">
                            <div className="account-tabs">
                                <ul>
                                    {this.displayTabs()}
                                </ul>
                            </div>
                            <div className="webservice-container">
                                <Node key={serviceDetails[activeTab].id} serviceData={serviceDetails[activeTab]} {...this.props} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};