import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { images } from '../../img';

export class ServiceView extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            data: null,
            modalData: []
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    componentDidMount() {
        const { data, isDataLoaded } = this.props;
        if (isDataLoaded) {
            this.setState({
                data: data
            });
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (this.props.isDataLoaded && JSON.stringify(this.props.data) !== JSON.stringify(prevProps.data)) {
            this.setState({
                data: this.props.data
            });
        }
    }

    getColorBasedOnScore = (score: any) => {
        if (score >= 75) {
            return '#5AB66F';
        } else if (score >= 50) {
            return '#FF9429';
        } else if (score >= 25) {
            return '#FFF700';
        } else {
            return '#DC3F1F';
        }
    };

    onClickService = (serviceNature: any, serviceName: any) => {
        this.createModalData(serviceNature, serviceName);
        this.toggle();
    };

    createModalData = (serviceNature: any, serviceName: any) => {
        const { data } = this.state;
        if (data && data[serviceNature] && data[serviceNature][serviceName]) {
            const services = data[serviceNature][serviceName];
            const modalData: any = {
                cost: 0,
                performance: 0,
                availability: 0,
                endusage: 0,
                security: 0,
                compliance: 0,
                appServices: [],
                dataServices: [],
                avg: 0,
                serviceName
            };
            let avgPerformance = 0;
            let avgSecurity = 0;
            let avgAvailability = 0;
            let avgEndUsage = 0;
            let avgCompliance = 0;
            services.map((service: any) => {
                const { serviceType, name, serviceNature, associatedManagedCloudServiceLocation, stats, associatedLandingZone, dbType, appType } = service.metadata_json;
                if (service.sla_json) {
                    const { availability, performance, security, compliance, endusage } = service.sla_json;
                    avgPerformance += performance.sla;
                    avgAvailability += availability.sla;
                    avgEndUsage += endusage.sla;
                    avgSecurity += security.sla;
                    avgCompliance += compliance.sla;
                }
                if (serviceType === "Data") {
                    modalData.dataServices.push({
                        name,
                        serviceNature,
                        location: associatedManagedCloudServiceLocation,
                        account: associatedLandingZone,
                        dbType: dbType
                    });
                } else {
                    modalData.appServices.push({
                        name,
                        serviceNature,
                        location: associatedManagedCloudServiceLocation,
                        account: associatedLandingZone,
                        appType
                    });
                }
                modalData.cost += stats.totalCostSoFar ? parseInt(stats.totalCostSoFar) : 0;
            });
            modalData.performance = avgPerformance / services.length;
            modalData.security = avgSecurity / services.length;
            modalData.availability = avgAvailability / services.length;
            modalData.endusage = avgEndUsage / services.length;
            modalData.compliance = avgCompliance / services.length;
            modalData.avg = (modalData.performance + modalData.security + modalData.availability + modalData.endusage + modalData.compliance) / 5;
            this.setState({
                modalData
            });
        }
    };

    displayServiceData = () => {
        const { data } = this.state;
        let retServiceData: any = [];
        let servicesJSX: any = [];
        if (data) {
            Object.keys(data).map((serviceNature, j) => {
                servicesJSX = [];
                let associatedServices = data[serviceNature];
                Object.keys(associatedServices).map((associatedService) => {
                    let serviceByType: any = {};
                    serviceByType['performance'] = serviceByType['performance'] || 0;
                    serviceByType['availability'] = serviceByType['availability'] || 0;
                    serviceByType['security'] = serviceByType['security'] || 0;
                    serviceByType['compliance'] = serviceByType['compliance'] || 0;
                    serviceByType['endusage'] = serviceByType['endusage'] || 0;
                    let servicearry = associatedServices[associatedService];
                    let totalCost = 0;
                    if (servicearry && servicearry.length > 0) {
                        servicearry.map((service: any) => {
                            const { metadata_json, sla_json } = service;
                            if (sla_json) {
                                const { availability, performance, security, compliance, endusage } = sla_json;
                                serviceByType['performance'] =
                                    serviceByType['performance'] + (performance ? performance['sla'] : 0);
                                serviceByType['availability'] =
                                    serviceByType['availability'] + (availability ? availability['sla'] : 0);
                                serviceByType['security'] =
                                    serviceByType['security'] + (security ? security['sla'] : 0);
                                serviceByType['compliance'] =
                                    serviceByType['compliance'] + (compliance ? compliance['sla'] : 0);
                                serviceByType['endusage'] =
                                    serviceByType['endusage'] + (endusage ? endusage['sla'] : 0);
                            }
                            totalCost = totalCost + parseInt(metadata_json.stats.totalCostSoFar);
                        });
                    }
                    servicesJSX.push(
                        <div className="service-box">
                            <div className="heading" style={{ cursor: "pointer" }} onClick={() => this.onClickService(serviceNature, associatedService)} >{associatedService}</div>
                            <div className="contents">
                                <div className="total-cost-text">
                                    Total Cost : $
                                    {totalCost}
                                </div>
                                <div className="quality-score-text">
                                    Quality Score :
                                    {((serviceByType['performance'] / servicearry.length +
                                        serviceByType['availability'] / servicearry.length +
                                        serviceByType['security'] / servicearry.length +
                                        serviceByType['compliance'] / servicearry.length +
                                        serviceByType['endusage'] / servicearry.length) / 5).toFixed(2)
                                    }%
                                </div>
                                <ul>
                                    <li>
                                        <label>Performance:</label>
                                        <span>
                                            {Math.round(serviceByType['performance'] / servicearry.length)}%{' '}
                                            <span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['performance'] / servicearry.length) }} />
                                        </span>
                                    </li>
                                    <li>
                                        <label>Availability:</label>
                                        <span>
                                            {Math.round(
                                                serviceByType['availability'] / servicearry.length
                                            )}% <span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['availability'] / servicearry.length) }} />
                                        </span>
                                    </li>
                                    <li>
                                        <label>Compliance:</label>
                                        <span>
                                            {Math.round(
                                                serviceByType['compliance'] / servicearry.length
                                            )}% <span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['compliance'] / servicearry.length) }} />
                                        </span>
                                    </li>
                                    <li>
                                        <label>Security:</label>
                                        <span>
                                            {Math.round(serviceByType['security'] / servicearry.length)}%{' '}
                                            <span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['security'] / servicearry.length) }} />
                                        </span>
                                    </li>
                                    <li>
                                        <label>End Usage:</label>
                                        <span>
                                            {Math.round(serviceByType['endusage'] / servicearry.length)}%{' '}
                                            <span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['endusage'] / servicearry.length) }} />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                });
                retServiceData.push(
                    <React.Fragment>
                        <div className="heading">
                            <div className="row">
                                <div className="col-md-7">
                                    <h3>{serviceNature}</h3>
                                </div>
                                <div className="col-md-5">
                                    {/* <div className="show-more">
                                    Show More <i className="fa fa-chevron-down" />
                                </div> */}
                                    <div className="form-group search-control m-b-0">
                                        <button className="btn btn-search">
                                            <i className="fa fa-search" />
                                        </button>
                                        <input
                                            type="text"
                                            className="input-group-text"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="services-boxes">{servicesJSX}</div>
                    </React.Fragment>
                );
            });
        }
        return retServiceData;
    };

    getClassBasedOnScore = (score: any) => {
        if (score >= 75) {
            return 'green';
        } else if (score >= 50) {
            return 'orange';
        } else if (score >= 25) {
            return 'yellow';
        } else {
            return 'red';
        }
    };

    renderModalData = (serviceType: any, isDataService: any) => {
        const { modalData } = this.state;
        const services = modalData[serviceType];
        const retData: any = [];
        if (services) {
            services.map((service: any) => {
                retData.push(
                    <div className="row">
                        <div className="col-md-3">
                            <span>{service.name}</span>
                        </div>
                        <div className="col-md-3">
                            <span>{service.serviceNature}</span>
                        </div>
                        <div className="col-md-3">
                            <span>{service.location}</span>
                        </div>
                        <div className="col-md-3">
                            {
                                isDataService ?
                                    <span>
                                        <img src={images[service.dbType]} alt="" style={{ maxWidth: '20px', marginRight: '5px' }} /> {service.dbType}
                                    </span> :
                                    <span>{service.appType}</span>
                            }
                        </div>
                    </div>
                );
            });
        }
        return retData;
    };

    render() {
        const { modal, modalData } = this.state;
        return (
            <>
                <div className="services-boxes">{this.displayServiceData()}</div>
                <Modal isOpen={modal} toggle={this.toggle} className="modal-topology-view">
                    <ModalHeader toggle={this.toggle}>{modalData.serviceName}</ModalHeader>
                    <ModalBody style={{ height: 'calc(80vh - 50px)', overflowY: 'auto', overflowX: 'hidden' }}>
                        <div className="cost-score">
                            <div className="header">
                                <div className="total-cost-text">Total Cost : ${modalData.cost}</div>
                                <div className="total-cost-text">Quality Score : {modalData.avg ? modalData.avg.toFixed(2) : 0}%</div>
                            </div>
                            <div className="body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="content">
                                            <label>Performance:</label>
                                            <p>
                                                {modalData.performance ? modalData.performance.toFixed(2) : 0}% <span className={this.getClassBasedOnScore(modalData.performance ? modalData.performance.toFixed(2) : 0)}></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="content">
                                            <label>Availability:</label>
                                            <p>
                                                {modalData.availability ? modalData.availability.toFixed(2) : 0}% <span className={this.getClassBasedOnScore(modalData.availability ? modalData.availability.toFixed(2) : 0)}></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="content">
                                            <label>Security:</label>
                                            <p>
                                                {modalData.security ? modalData.security.toFixed(2) : 0}% <span className={this.getClassBasedOnScore(modalData.security ? modalData.security.toFixed(2) : 0)}></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="content">
                                            <label>End Usage:</label>
                                            <p>
                                                {modalData.endusage ? modalData.endusage.toFixed(2) : 0}% <span className={this.getClassBasedOnScore(modalData.endusage ? modalData.endusage.toFixed(2) : 0)}></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="content">
                                            <label>Compliance:</label>
                                            <p>
                                                {modalData.compliance ? modalData.compliance.toFixed(2) : 0}% <span className={this.getClassBasedOnScore(modalData.compliance ? modalData.compliance.toFixed(2) : 0)}></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table">
                            <div className="thead">
                                <div className="row">
                                    <div className="col-md-3">
                                        <span className="first">Service Type</span>
                                    </div>
                                    <div className='col-md-9'>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <span>Services</span>
                                            </div>
                                            <div className="col-md-3">
                                                <span>Service Nature</span>
                                            </div>
                                            <div className="col-md-3">
                                                <span>Location</span>
                                            </div>
                                            <div className="col-md-3">
                                                <span>Type</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                modalData['appServices'] && modalData['appServices'].length > 0 ?
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <strong>App Services</strong>
                                            </div>
                                            <div className="col-md-9">
                                                {this.renderModalData("appServices", false)}
                                            </div>
                                        </div>
                                    </div> : <></>
                            }
                            {
                                modalData['dataServices'] && modalData['dataServices'].length > 0 ?
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <strong>Data Services</strong>
                                            </div>
                                            <div className="col-md-9">
                                                {this.renderModalData("dataServices", true)}
                                            </div>
                                        </div>
                                    </div> : <></>
                            }
                        </div>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
