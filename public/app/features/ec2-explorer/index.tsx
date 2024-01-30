import React, { Component } from "react";
import { Modal } from '../../../../packages/grafana-ui/src/components/Modal/Modal';
import { Link } from "react-router-dom";
import Performance from "./Components/Performance";
import Availability from "./Components/Availability";
import Reliability from "./Components/Reliability";
import EndUsage from "./Components/EndUsage";
import Security from "./Components/Security";
import Compliance from "./Components/Compliance";
import DataProtection from "./Components/DataProtection";

const images: any = {
  awsIcon: '/public/img/ec2-explorer/aws.png',
  hostedIcon: '/public/img/ec2-explorer/hosted.png',
  costIcon: '/public/img/ec2-explorer/cost.svg',
  configurationIcon: '/public/img/ec2-explorer/configuration.png',
  organizationIcon: '/public/img/ec2-explorer/organization .png',
  intanceIcon: '/public/img/ec2-explorer/intance.png',
  cpuIcon: '/public/img/ec2-explorer/cpu.png',
  memoryIcon: '/public/img/ec2-explorer/memory-card.png',
  networkIcon: '/public/img/ec2-explorer/network.png',
  storageIcon: '/public/img/ec2-explorer/storage.png',
  hrmsIcon: '/public/img/ec2-explorer/hrms.png',
  procurementIcon: '/public/img/ec2-explorer/procurement.png',
  serviceDeskIcon: '/public/img/ec2-explorer/service-desk.png',
  statusIcon: '/public/img/ec2-explorer/status.png',
};

class EC2Explorer extends Component<any, any> {
  createData(name: any, enviroment: any, module: any, services: any) {
    return { name, enviroment, module, services };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
      configurationModalOpen: false,
      hostedServiceModalOpen: false,
      SlaModalOpen: false,
      activeTab: 0,
    };
  }

  // handleChange = (event: any, newValue: any) => {
  //   this.setState({ value: newValue });
  // };

  setActiveTab = (value: any) => {
    this.setState({
      value,
    });
  };

  handleConfigurationModalOpen = () => {
    this.setState({ configurationModalOpen: true });
  };

  handleConfigurationModalClose = () => {
    this.setState({ configurationModalOpen: false });
  };

  handleHostedServiceModalOpen = () => {
    this.setState({ hostedServiceModalOpen: true });
  };

  handleHostedServiceModalClose = () => {
    this.setState({ hostedServiceModalOpen: false });
  };

  handleSlaModalOpen = () => {
    this.setState({ SlaModalOpen: true });
  };

  handleSlaModalClose = () => {
    this.setState({ SlaModalOpen: false });
  };

  render() {
    const { value } = this.state;
    const rows = [
      this.createData(
        <div className="product-name">
          <div className="d-flex align-items-center">
            <div className="icon hrms">
              <img src={images.hrmsIcon} alt="" />
            </div>
            <span className="name">HRMS</span>
            <div className="tag">
              <span className="d-block">3 TIER</span>
            </div>
          </div>
        </div>,
        "Production",
        "Web Tire",
        "-"
      ),
      this.createData(
        <div className="product-name">
          <div className="d-flex align-items-center">
            <div className="icon da">
              <img src={images.storageIcon} alt="" />
            </div>
            <span className="name">DA</span>
            <div className="tag da">
              <span className="d-block">SOA</span>
            </div>
          </div>
        </div>,
        "Stage",
        "Admissions",
        "JAVA"
      ),
      this.createData(
        <div className="product-name">
          <div className="d-flex align-items-center">
            <div className="icon procurement">
              <img src={images.procurementIcon} alt="" />
            </div>
            <span className="name">Procurement</span>
            <div className="tag">
              <span className="d-block">3 TIER</span>
            </div>
          </div>
        </div>,
        "Test",
        "Auxiliary Layer",
        "-"
      ),
      this.createData(
        <div className="product-name">
          <div className="d-flex align-items-center">
            <div className="icon service-desk">
              <img src={images.serviceDeskIcon} alt="" />
            </div>
            <span className="name">Service Desk</span>
            <div className="tag">
              <span className="d-block">3 TIER</span>
            </div>
          </div>
        </div>,
        "Development",
        "App Tire",
        "-"
      ),
    ];
    return (
      <>
        <div className="aws-topology-container">
          <div className="aws-top-header-container">
            <div className="page-info d-flex align-items-center">
              <div className="page-name d-flex align-items-center justify-content-between">
                <span>VPC-Clu..1_Ec2</span>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="page-name d-flex align-items-center justify-content-between">
                <span>VPC-Clu..1_Ec2</span>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="page-name d-flex align-items-center justify-content-between">
                <span>VPC-Clu..1_Ec2</span>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
          <div className="aws-container d-flex justify-content-between align-items-center">
            <div className="name d-flex align-items-center">
              <div className="icon">
                <img src={images.awsIcon} alt="" />
              </div>
              <span>Amazon Web Services</span>
            </div>
            <div className="toggle-icon">
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="breadCrumb-container d-flex justify-content-between align-items-center">
            <ul>
              <li>
                <Link to="/">AWS (6579077475645)</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <Link to="/">VPC 1</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <Link to="/">App Service</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li className="active">
                <Link  to="/">Ec2</Link>
              </li>
            </ul>
            <div className="alerts d-flex align-items-center">
              <span>Alerts</span>
              <i className="fa-solid fa-bell"></i>
            </div>
          </div>
          <div className="aws-serivce-info d-flex align-items-center">
            <div className="aws-boxs d-flex align-items-center">
              <div className="icon">
                <img src={images.organizationIcon} alt="" />
              </div>
              <div className="d-block">
                <span className="d-block service-name">Organization Unit</span>
                <span className="d-block service-number">Synectiks</span>
              </div>
            </div>
            <div
              className="aws-boxs d-flex align-items-center"
              onClick={this.handleHostedServiceModalOpen}
            >
              <div className="icon hosted-services">
                <img src={images.hostedIcon} alt="" />
              </div>
              <div className="d-block">
                <span className="d-block service-name">Hosted Services</span>
                <span className="d-block service-number">002</span>
              </div>
            </div>
            <div
              className="aws-boxs d-flex align-items-center"
              onClick={this.handleConfigurationModalOpen}
            >
              <div className="icon configuration">
                <img src={images.configurationIcon} alt="" />
              </div>
              <div className="d-block">
                <span className="d-block service-name">Configuration</span>
                <span className="d-block service-number id">
                  ID : i-01234567
                </span>
              </div>
            </div>
            <div
              className="aws-boxs d-flex align-items-center"
              onClick={this.handleSlaModalOpen}
            >
              <div className="icon">
                <img src="" alt="" />
              </div>
              <div className="d-block">
                <span className="d-block service-name">SLA</span>
                <span className="d-block service-number percantage">
                  83.66%
                </span>
              </div>
            </div>
            <div className="aws-boxs d-flex align-items-center">
              <div className="icon cost">
                <img src={images.costIcon} alt="" />
              </div>
              <div className="d-block">
                <span className="d-block service-name">Cost</span>
                <div className="d-flex align-items-center">
                  <span className="d-block service-number">$43,833</span>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-caret-down"></i>
                    <span className="d-block cost-percantage">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aws-panel-tabs">



          



            <div className="manage-dashboard-tabs">
              <ul>
                <li className={value === 0 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(0)}>
                  <a>Performance</a>
                </li>
                <li className={value === 1 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(1)}>
                  <a>Availability</a>
                </li>
                <li className={value === 2 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(2)}>
                  <a>Reliability</a>
                </li>
                <li className={value === 3 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(3)}>
                  <a>EndUsage</a>
                </li>
                <li className={value === 4 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(4)}>
                  <a>Security</a>
                </li>
                <li className={value === 5 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(5)}>
                  <a>Compliance</a>
                </li>
                <li className={value === 6 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(6)}>
                  <a>DataProtection</a>
                </li>
              </ul>
            </div>



            
            <div className="tabs-content">
              {value === 0 ? (
                <Performance />
              ) : value === 1 ? (
                <Availability />
              ) : value === 2 ? (
                <Reliability />
              ) : value === 3 ? (
                <EndUsage />
              ) : value === 4 ? (
                <Security />
              ) : value === 5 ? (
                <Compliance />
              ) : value === 6 ? (
                <DataProtection />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.configurationModalOpen}
          onDismiss={this.handleConfigurationModalClose}
          title=""
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="common-modal"
        >
          <div className="configuration-modal-container">
            <div className="d-flex align-items-center configuration-container">
              <div className="width-50">
                <div className=" d-flex align-items-center">
                  <div className="icon instance">
                    <img src={images.intanceIcon} alt="" />
                  </div>
                  <span className="d-block configuration-name">
                    Instance ID
                  </span>
                </div>
              </div>
              <div className="width-50">
                <span className="d-block configuration-info">i-01234567</span>
              </div>
            </div>
            <div className="d-flex align-items-center configuration-container">
              <div className="width-50">
                <div className=" d-flex align-items-center">
                  <div className="icon cpu">
                   <img src={images.cpuIcon} alt="" />
                  </div>
                  <span className="d-block configuration-name">CPU</span>
                </div>
              </div>
              <div className="width-50">
                <span className="d-block configuration-info">15GB</span>
              </div>
            </div>
            <div className="d-flex align-items-center configuration-container">
              <div className="width-50">
                <div className=" d-flex align-items-center">
                  <div className="icon memory">
                    <img src={images.memoryIcon} alt="" />
                  </div>
                  <span className="d-block configuration-name">Memory</span>
                </div>
              </div>
              <div className="width-50">
                <span className="d-block configuration-info">25GB</span>
              </div>
            </div>
            <div className="d-flex align-items-center configuration-container">
              <div className="width-50">
                <div className=" d-flex align-items-center">
                  <div className="icon network">
                    <img src={images.networkIcon} alt="" />
                  </div>
                  <span className="d-block configuration-name">Network</span>
                </div>
              </div>
              <div className="width-50">
                <span className="d-block configuration-info">2NIC Card</span>
              </div>
            </div>
            <div className="d-flex align-items-center configuration-container">
              <div className="width-50">
                <div className=" d-flex align-items-center">
                  <div className="icon storage">
                    <img src={images.storageIcon} alt="" />
                  </div>
                  <span className="d-block configuration-name">Storage</span>
                </div>
              </div>
              <div className="width-50">
                <span className="d-block configuration-info">64GB</span>
              </div>
            </div>
            <div className="d-flex align-items-center configuration-container">
              <div className="width-50">
                <div className=" d-flex align-items-center">
                  <div className="icon storage">
                    <img src={images.storageIcon} alt="" />
                  </div>
                  <span className="d-block configuration-name">VPC ID</span>
                </div>
              </div>
              <div className="width-50">
                <span className="d-block configuration-info">Default</span>
              </div>
            </div>
            <div className="d-flex align-items-center configuration-container">
              <div className="width-50">
                <div className=" d-flex align-items-center">
                  <div className="icon network">
                    <img src={images.networkIcon} alt="" />
                  </div>
                  <span className="d-block configuration-name">
                    Hostname Type
                  </span>
                </div>
              </div>
              <div className="width-50">
                <span className="d-block configuration-info">
                  ip-172-32-32-222
                </span>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.hostedServiceModalOpen}
          onDismiss={this.handleHostedServiceModalClose}
          title=""
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="common-modal"
        >
          <div className="hostedService-modal-container">
            <table className="hostedService-table">
              <thead>
                <tr>
                  <th>
                    <div className="service-header">
                      <span>Product</span>
                    </div>
                  </th>
                  <th>
                    <div className="service-header">Environment</div>
                  </th>
                  <th>
                    <div className="service-header">Module</div>
                  </th>
                  <th>
                    <div className="service-header">Services</div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row: any) => (
                  <tr>
                    <td scope="row">
                      {row.name}
                    </td>
                    <td align="center">
                      <div className="info">{row.enviroment}</div>
                    </td>
                    <td align="center">
                      <div className="info">{row.module}</div>
                    </td>
                    <td align="center">
                      <div className="info">{row.services}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.SlaModalOpen}
          onDismiss={this.handleSlaModalClose}
          title=""
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="common-modal"
        >
          <div className="sla-modal-container">
            <div className="sla-container">
              <table className="sla-table w-100">
                <thead>
                  <tr>
                    <th>
                      <div className="sla-header d-flex align-items-center">
                        <div className="icon sla">
                          <img src="" alt="" />
                        </div>
                        <span className="header-title">SLA</span>
                      </div>
                    </th>
                    <th>
                      <div className="sla-header d-flex align-items-center">
                        <div className="icon status">
                          <img src={images.statusIcon} alt="" />
                        </div>
                        <span className="header-title">Status</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="d-block sla-name">Peformance</span>
                    </td>
                    <td className="status-info peformance">
                      <span className="d-block percantage">89%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-block sla-name">Reliabilitiy</span>
                    </td>
                    <td className="status-info reliabilitiy">
                      <span className="d-block percantage">99%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-block sla-name">Availability</span>
                    </td>
                    <td className="status-info availability">
                      <span className="d-block percantage">67%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-block sla-name">Security</span>
                    </td>
                    <td className="status-info reliabilitiy">
                      <span className="d-block percantage">99%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-block sla-name">End Usage</span>
                    </td>
                    <td className="status-info reliabilitiy">
                      <span className="d-block percantage">99%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="data-status-info d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center">
                  <div className="icon green"></div>
                  <span className="percantage">{">98%"}</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="icon orange"></div>
                  <span className="percantage">{">90%"}</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="icon red"></div>
                  <span className="percantage">{"<90%"}</span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default EC2Explorer;
