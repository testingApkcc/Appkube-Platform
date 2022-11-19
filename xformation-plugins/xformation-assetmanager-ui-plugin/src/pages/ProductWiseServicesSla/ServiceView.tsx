import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

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
                userExperiance: 0,
                security: 0,
                dataProtection: 0,
                appServices: [],
                dataServices: [],
                avg: 0,
                serviceName
            };
            let avgPerformance = 0;
            let avgSecurity = 0;
            let avgAvailability = 0;
            let avgUserExp = 0;
            let avgDataProtection = 0;
            services.map((service: any) => {
                const { serviceType, name, serviceNature, associatedManagedCloudServiceLocation, performance, security, availability, userExperiance, dataProtection, stats, associatedLandingZone, dbType } = service.metadata_json;
                avgPerformance += performance.score;
                avgAvailability += availability.score;
                avgUserExp += userExperiance.score;
                avgSecurity += security.score;
                avgDataProtection += dataProtection.score;
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
                        account: associatedLandingZone
                    });
                }
                modalData.cost += stats.totalCostSoFar ? parseInt(stats.totalCostSoFar) : 0;
            });
            modalData.performance = avgPerformance / services.length;
            modalData.security = avgSecurity / services.length;
            modalData.availability = avgAvailability / services.length;
            modalData.userExperiance = avgUserExp / services.length;
            modalData.dataProtection = avgDataProtection / services.length;
            modalData.avg = (modalData.performance + modalData.security + modalData.availability + modalData.userExperiance + modalData.dataProtection) / 5;
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
                    serviceByType['Data Protection'] = serviceByType['Data Protection'] || 0;
                    serviceByType['User Exp'] = serviceByType['User Exp'] || 0;
                    let servicearry = associatedServices[associatedService];
                    let totalCost = 0;
                    if (servicearry && servicearry.length > 0) {
                        servicearry.map((service: any) => {
                            const { metadata_json } = service;
                            serviceByType['performance'] =
                                serviceByType['performance'] + (metadata_json.performance ? metadata_json.performance['score'] : 0);
                            serviceByType['availability'] =
                                serviceByType['availability'] + (metadata_json.availability ? metadata_json.availability['score'] : 0);
                            serviceByType['security'] =
                                serviceByType['security'] + (metadata_json.security ? metadata_json.security['score'] : 0);
                            serviceByType['Data Protection'] =
                                serviceByType['Data Protection'] + (metadata_json.dataProtection ? metadata_json.dataProtection['score'] : 0);
                            serviceByType['User Exp'] =
                                serviceByType['User Exp'] + (metadata_json.userExperiance ? metadata_json.userExperiance['score'] : 0);
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
                                        serviceByType['Data Protection'] / servicearry.length +
                                        serviceByType['User Exp'] / servicearry.length) / 5).toFixed(2)
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
                                        <label>Data Protection:</label>
                                        <span>
                                            {Math.round(
                                                serviceByType['Data Protection'] / servicearry.length
                                            )}% <span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['Data Protection'] / servicearry.length) }} />
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
                                        <label>User Exp:</label>
                                        <span>
                                            {Math.round(serviceByType['User Exp'] / servicearry.length)}%{' '}
                                            <span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['User Exp'] / servicearry.length) }} />
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
                        <div className="col-md-4">
                            <span>{service.name}</span>
                        </div>
                        <div className="col-md-4">
                            <span>{service.serviceNature}</span>
                        </div>
                        <div className="col-md-4">
                            <span>{service.location}</span>
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
                                            <label>User Experience:</label>
                                            <p>
                                                {modalData.userExperiance ? modalData.userExperiance.toFixed(2) : 0}% <span className={this.getClassBasedOnScore(modalData.userExperiance ? modalData.userExperiance.toFixed(2) : 0)}></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="content">
                                            <label>Data Protection:</label>
                                            <p>
                                                {modalData.dataProtection ? modalData.dataProtection.toFixed(2) : 0}% <span className={this.getClassBasedOnScore(modalData.dataProtection ? modalData.dataProtection.toFixed(2) : 0)}></span>
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
                                            <div className="col-md-4">
                                                <span>Services</span>
                                            </div>
                                            <div className="col-md-4">
                                                <span>Service Nature</span>
                                            </div>
                                            <div className="col-md-4">
                                                <span>Location</span>
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
