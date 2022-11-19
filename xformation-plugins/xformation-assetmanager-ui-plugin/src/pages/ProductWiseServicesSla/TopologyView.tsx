import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { images } from '../../img';

export class TopologyView extends React.Component<any, any> {
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

  createModalData = (serviceType: any, hostingType: any, serviceNature: any, serviceName: any) => {
    const { data } = this.state;
    if (data && data[serviceType] && data[serviceType][hostingType] && data[serviceType][hostingType][serviceNature] && data[serviceType][hostingType][serviceNature][serviceName]) {
      const services = data[serviceType][hostingType][serviceNature][serviceName];
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
      console.log(modalData);
      this.setState({
        modalData
      });
    }
  };

  onClickService = (serviceType: any, hostingType: any, serviceNature: any, serviceName: any) => {
    this.createModalData(serviceType, hostingType, serviceNature, serviceName);
    this.toggle();
  };

  renderServices = (serviceType: any, hostingType: any, serviceNature: any) => {
    const { data } = this.state;
    const retData: any = [];
    if (data && data[serviceType] && data[serviceType][hostingType] && data[serviceType][hostingType][serviceNature]) {
      const associatedServices = data[serviceType][hostingType][serviceNature];
      const serviceNames = Object.keys(associatedServices);
      serviceNames.map((serviceName: any) => {
        retData.push(
          <li>
            <a onClick={() => this.onClickService(serviceType, hostingType, serviceNature, serviceName)}>{serviceName}</a>
          </li>
        );
      });
    }
    return retData;
  };

  renderModalData = (serviceType: any, isDataService: any) => {
    const { modalData } = this.state;
    const services = modalData[serviceType];
    const retData: any = [];
    if (services) {
      services.map((service: any) => {
        retData.push(
          <div className="row">
            <div className={`${isDataService ? 'col-md-3' : 'col-md-4'}`}>
              <span>{service.name}</span>
            </div>
            <div className={`${isDataService ? 'col-md-3' : 'col-md-4'}`}>
              <span>{service.serviceNature}</span>
            </div>
            <div className={`${isDataService ? 'col-md-3' : 'col-md-4'}`}>
              <span>{service.location}</span>
            </div>
            {
              isDataService ?
                <div className="col-md-3">

                  <span><img src={images[service.dbType]} alt="" style={{ maxWidth: '20px', marginRight: '5px' }} /> {service.dbType}</span>
                </div> : <></>
            }
          </div>
        );
      });
    }
    return retData;
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

  render() {
    const { modal, modalData } = this.state;
    const isDataModal = modalData && modalData['dataServices'] && modalData['dataServices'].length > 0 ? true : false;
    return (
      <>
        <div className="topology-view-container">
          <div className="topology-view-contains">
            <div className="topology-left-nav">
              <ul>
                <li>
                  <a href="#" className="">
                    <i className="icon">
                      <img src={images.MobileApps} alt="" style={{ maxWidth: '24px' }} />
                    </i>
                    <span>Mobile apps</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <i className="icon">
                      <img src={images.Applications} alt="" style={{ maxWidth: '24px' }} />
                    </i>
                    <span>Applications</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <i className="icon">
                      <img src={images.Dashboard} alt="" style={{ maxWidth: '24px' }} />
                    </i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <i className="icon">
                      <img src={images.Reports} alt="" style={{ maxWidth: '24px' }} />
                    </i>
                    <span>Reports</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <i className="icon">
                      <img src={images.Query} alt="" style={{ maxWidth: '24px' }} />
                    </i>
                    <span>Query</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <i className="icon">
                      <img src={images.Api} alt="" style={{ maxWidth: '24px' }} />
                    </i>
                    <span>API</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topology-buttons">
              <ul>
                <li className="waf">
                  <span>WAF</span>
                </li>
                <li className="api-gateway">
                  <span>API Gateway</span>
                </li>
              </ul>
            </div>
            <div className="app-services">
              <div className="heading" style={{ background: 'transparent' }}>App Services</div>
              <div className="app-services-container">
                <div className="services-nav">
                  <ul>
                    <li className="orchestration">
                      <span>Orchestration</span>
                    </li>
                    <li className="business-service">
                      <span>Business Service</span>
                    </li>
                    <li className="common-service">
                      <span>Common Service</span>
                    </li>
                  </ul>
                </div>
                <div className="services-contains">
                  <div className="contains">
                    <div className="sub-heading">Cluster</div>
                    <ul className="orchestration-buttons">
                      <li>
                        <a style={{ color: '#5ca0f0', fontWeight: 'bold' }}>Load Balancer</a>
                      </li>
                      <li>
                        <a href='http://mesh.synectiks.net/' target="_blank" style={{ color: '#5ca0f0', fontWeight: 'bold' }}>Service Mesh</a>
                      </li>
                    </ul>
                    <ul className="business-service-buttons">
                      {this.renderServices("App", "Cluster", "Business")}
                    </ul>
                    <ul className="common-service-buttons">
                      {this.renderServices("App", "Cluster", "Common")}
                    </ul>
                  </div>
                  <div className="contains">
                    <div className="sub-heading">Server less</div>
                    <ul className="orchestration-buttons">
                    </ul>
                    <ul className="business-service-buttons">
                      {this.renderServices("App", "ServerLess", "Business")}
                    </ul>
                    <ul className="common-service-buttons">
                      {this.renderServices("App", "ServerLess", "Common")}
                    </ul>
                  </div>
                  <div className="contains">
                    <div className="sub-heading">Cloud Managed</div>
                    <ul className="orchestration-buttons">
                    </ul>
                    <ul className="business-service-buttons">
                      {this.renderServices("App", "CloudManaged", "Business")}
                    </ul>
                    <ul className="common-service-buttons">
                      {this.renderServices("App", "CloudManaged", "Common")}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-services-right">
              <div className="data-heading">
                Data Services
              </div>
              <div className="data-services-buttons">
                <div className="sub-heading">Clustered</div>
                <ul className="common-service-buttons">
                  {this.renderServices("Data", "Cluster", "Business")}
                  {this.renderServices("Data", "Cluster", "Common")}
                </ul>
              </div>
              <div className="data-services-buttons">
                <div className="sub-heading">Cloud Managed</div>
                <ul className="common-service-buttons">
                  {this.renderServices("Data", "CloudManaged", "Business")}
                  {this.renderServices("Data", "CloudManaged", "Common")}
                </ul>
              </div>
            </div>
          </div>
        </div>
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
                      <div className={`${isDataModal ? 'col-md-3' : 'col-md-4'}`}>
                        <span>Services</span>
                      </div>
                      <div className={`${isDataModal ? 'col-md-3' : 'col-md-4'}`}>
                        <span>Service Nature</span>
                      </div>
                      <div className={`${isDataModal ? 'col-md-3' : 'col-md-4'}`}>
                        <span>Location</span>
                      </div>
                      {
                        isDataModal ?
                          <div className="col-md-3">
                            <span>DB Type</span>
                          </div> : <></>
                      }
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
