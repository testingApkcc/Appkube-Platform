import * as React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../img';
import { PLUGIN_BASE_URL } from '../constants';
import { SelectCloudFilter } from '../components/SelectCloudFilter';

export class DepartmentWiseProduct extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showRecentFilter: false,
      showAddNewFilter: false,
      departmentList: [
        {
          name: 'Human Resources',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'It Infra',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'IT Devlopment',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'Finance',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'Finance',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        },
        {
          name: 'It Infra',
          noOfProduct: '150',
          prodBilling: '$100',
          otherBilling: '$275'
        }
      ],
    };
  }

  openProduct = (i: any, j: any) => {
    const { product } = this.props;
    for (let m = 0; m < product[i].productList.length; m++) {
      if (j !== m) {
        product[i].productList[m].isOpen = false;
      }
    }
    product[i].productList[j].isOpen = !product[i].productList[j].isOpen;
    this.setState({
      product
    });
  }

  openServiceOfProduct = (i: any, j: any, k: any) => {
    const { product } = this.props;
    for (let m = 0; m < product[i].productList[j].services.length; m++) {
      if (k !== m) {
        product[i].productList[j].services[m].isOpen = false;
      }
    }
    product[i].productList[j].services[k].isOpen = true;
    this.setState({
      product
    });
  }

  openProductMainServices = (i: any, j: any, k: any, l: any) => {
    const { product } = this.props;
    for (let m = 0; m < product[i].productList[j].services[k].mainservices.length; m++) {
      if (l !== m) {
        product[i].productList[j].services[k].mainservices[m].isOpen = false;
      }
    }
    product[i].productList[j].services[k].mainservices[l].isOpen = !product[i].productList[j].services[k].mainservices[l].isOpen;
    this.setState({
      product
    });
  }

  openServices = (i: any, j: any, k: any, l: any, m: any) => {
    const { product } = this.props;
    for (let n = 0; n < product[i].productList[j].services[k].mainservices[m].services.length; n++) {
      if (l !== n) {
        product[i].productList[j].services[k].mainservices[m].services[n].isOpen = false;
      }
    }
    product[i].productList[j].services[k].mainservices[l].services[m].isOpen = !product[i].productList[j].services[k].mainservices[l].services[m].isOpen;
    this.setState({
      product
    });
  }

  onClickOpenSubLink = (i: any, j: any, k: any, l: any) => {
    const { product } = this.props;
    for (let m = 0; m < product[i].productList[j].services[k].mainservices.length; m++) {
      if (l !== m) {
        product[i].productList[j].services[k].mainservices[m].menuOpen = false;
      }
    }
    product[i].productList[j].services[k].mainservices[l].menuOpen = !product[i].productList[j].services[k].mainservices[l].menuOpen;
    this.setState({
      product
    });
  };

  displayProductServices = () => {
    const { product } = this.props;
    let retData = [];
    if (product && product.length > 0) {
      for (let i = 0; i < product.length; i++) {
        let row = product[i];
        retData.push(
          <div className="inner-table">
            <div className="thead">{row.title}</div>
            {row.productList && row.productList.map((val: any, index: any) => {
              return (
                <div className="tbody">
                  <div className="name" onClick={() => this.openProduct(i, index)}><span>{val.title}</span> <i className={val.isOpen == true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i></div>
                  <div className="app-services">10</div>
                  <div className="data-services">5</div>
                  <div className="ou">Admin, Accounts Adminssion, Transport</div>
                  <div className="edit">
                    <button className="edit-btn">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                  {val.isOpen == true &&
                    <div className='environments'>
                      <div className='environments-inner'>
                        <div className='heading'>
                          <h3>EMS - Environments</h3>
                          <div className='buttons'>
                            <button className='btn'>
                              <i className='fa fa-plus'></i>
                            </button>
                            <button className='btn'>
                              <i className='fa fa-eye'></i>
                            </button>
                            <button className='btn'>
                              <i className='fa fa-bars'></i>
                            </button>
                          </div>
                        </div>
                        <div className='content'>
                          <div className='tabs-container'>
                            <div className='tabs'>
                              <ul>
                                {val.services && val.services.map((serviceData: any, serviceindex: any) => {
                                  return (
                                    <li onClick={() => this.openServiceOfProduct(i, index, serviceindex)} className={serviceData.isOpen == true ? 'active' : ''}>{serviceData.stage}</li>
                                  )
                                })
                                }
                              </ul>
                            </div>
                            {val.services && val.services.map((serviceres: any, serviceindex: any) => {
                              if (serviceres.isOpen == true) {
                                return (
                                  <div className='tabs-content'>
                                    <ul>
                                      {serviceres.mainservices && serviceres.mainservices.map((mainservicedata: any, mainindex: any) => {
                                        return (
                                          <li>
                                            {mainservicedata.isOpen === false && <div className='icon'><img src={images.Icon} alt="" /></div>}
                                            <div className={mainservicedata.isOpen === true ? 'heading full' : 'heading'} >
                                              <span onClick={() => this.openProductMainServices(i, index, serviceindex, mainindex)}>          
                                                {mainservicedata.title}
                                              </span>
                                              <div className='icon'>
                                                <div
                                                  className='fa-icon'
                                                  onClick={() => this.openProductMainServices(i, index, serviceindex, mainindex)}
                                                >
                                                  <i className={mainservicedata.isOpen === true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
                                                </div>
                                                <div className='edit'>
                                                  <div 
                                                    className='bars'
                                                    onClick={() => this.onClickOpenSubLink(i, index, serviceindex, mainindex)}
                                                  >
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                  </div>
                                                  {mainservicedata.menuOpen == true && (
                                                    <div className="text-center open-create-menu" style={{ right: '5px', top: '30px', backgroundColor: '#ffffff' }}>
                                                      <a href='#'> Add Firewall </a>
                                                      <a href='#'> Remove Firewall </a>
                                                    </div>
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                            {
                                              mainservicedata.isOpen === true &&
                                              <div className='content-table'>
                                                <div className='table'>
                                                  <div className='thead'>
                                                    <div className='th'>Name</div>
                                                  </div>
                                                  {mainservicedata.services && mainservicedata.services.map((service: any, subindex: any) => {
                                                    return (
                                                      <div className='tbody'>
                                                        <div className='td title' onClick={() => this.openServices(i, index, serviceindex, mainindex, subindex)}>
                                                          <strong>{service.title}<i className={service.isOpen == true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i></strong>
                                                        </div>
                                                        {service.isOpen == true &&
                                                          <div className='table performance-table'>
                                                            {service.subServices && service.subServices.map((subData: any, key: any) => {
                                                              return (
                                                                <>
                                                                  <div className='tbody'>
                                                                    <div className='td'><strong>{subData.title}</strong></div>
                                                                    {key === 0 &&
                                                                      <>
                                                                        <div className='td'>Performance</div>
                                                                        <div className='td'>Availability</div>
                                                                        <div className='td'>Security</div>
                                                                        <div className='td'>Data Protection</div>
                                                                        <div className='td'>User exp</div>
                                                                      </>
                                                                    }
                                                                  </div>
                                                                  {/* {subData.isOpen === true && */}
                                                                  <>
                                                                    {subData.list && subData.list.map((name: any, i: any) => {
                                                                      return (
                                                                        <div className='tbody'>
                                                                          <div className='td'><span>{name.title}</span></div>
                                                                          <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                                                          <div className='td'><div className='progress-circle orange'><i className='fa fa-check-circle'></i></div></div>
                                                                          <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                                                          <div className='td'><div className='progress-circle red'><i className='fa fa-check-circle'></i></div></div>
                                                                          <div className='td'><div className='progress-circle yellow'><i className='fa fa-check-circle'></i></div></div>
                                                                        </div>
                                                                      )
                                                                    })
                                                                    }
                                                                  </>
                                                                  {/* } */}
                                                                </>
                                                              )
                                                            })
                                                            }
                                                          </div>
                                                        }
                                                      </div>
                                                    )
                                                  })
                                                  }
                                                </div>
                                              </div>
                                            }
                                          </li>
                                        );
                                      })
                                      }
                                    </ul>
                                  </div>
                                )
                              }
                              else {
                                return null;
                              }
                            })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              )
            })
            }
          </div >
        );
      }
    }
    return retData;
  }

  render() {
    const { showRecentFilter, showAddNewFilter } = this.state;
    return (
      <div className="common-container department-fliters-container">
        <div className="selects-container">
          <SelectCloudFilter />
        </div>
        <div className="fliter-container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="fliter">
                    <div
                      className="fliter-toggel"
                      onClick={() =>
                        this.setState({
                          showRecentFilter: !showRecentFilter,
                        })
                      }
                    >
                      <i className="fa fa-clock-o"></i>
                      <span>Recent</span>
                    </div>
                    <div className={showRecentFilter === true ? 'fliter-collapse active' : 'fliter-collapse'}>
                      <ul>
                        <li>
                          <Link to={`${PLUGIN_BASE_URL}/account-setup`}>
                            <span><img src={images.awsLogo} alt="" /></span>
                            <p>AWS (657907747545)</p>
                          </Link>
                        </li>
                        <li>
                          <Link to={`${PLUGIN_BASE_URL}/account-setup`}>
                            <span><img src={images.awsLogo} alt="" /></span>
                            <p>AWS (655668745458)</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className={showRecentFilter === true ? "fliters-collapse-bg active" : "fliters-collapse-bg"} onClick={() => this.setState({ showRecentFilter: !showRecentFilter })}></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="fliter">
                    <div
                      className="fliter-toggel"
                      onClick={() =>
                        this.setState({
                          showAddNewFilter: !showAddNewFilter,
                        })
                      }
                    >
                      <i className="fa fa-plus"></i>
                      <span>Add New Environment</span>
                    </div>
                    <div className={showAddNewFilter === true ? 'fliter-collapse active' : 'fliter-collapse'}>
                      <ul>
                        <li>
                          <Link to={`${PLUGIN_BASE_URL}/account-setup`}>
                            <span><img src={images.awsLogo} alt="" /></span>
                            <p>AWS Environment</p>
                          </Link>
                        </li>
                        <li>
                          <Link to={`${PLUGIN_BASE_URL}/account-setup`}>
                            <span><img src={images.microsoftAzureLogo} alt="" /></span>
                            <p>Azure Environment</p>
                          </Link>
                        </li>
                        <li>
                          <Link to={`${PLUGIN_BASE_URL}/account-setup`}>
                            <span><img src={images.gcpLogo} alt="" /></span>
                            <p>GCP Environment</p>
                          </Link>
                        </li>
                        <li>
                          <Link to={`${PLUGIN_BASE_URL}/account-setup`}>
                            <span><img src={images.KubernetesLogo} alt="" /></span>
                            <p>Kubernetes</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className={showAddNewFilter === true ? "fliters-collapse-bg active" : "fliters-collapse-bg"} onClick={() => this.setState({ showAddNewFilter: !showAddNewFilter })}></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="fliter">
                    <div className="fliter-toggel">
                      <i className="fa fa-sign-out"></i>
                      <span>Export</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="form-group search-control m-b-0">
                <button className="btn btn-search">
                  <i className="fa fa-search"></i>
                </button>
                <input type="text" className="input-group-text" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
        <div className="data-table">
          <div className="thead">
            <div className="name">Name</div>
            <div className="app-services">App Services</div>
            <div className="data-services">Data Services</div>
            <div className="ou">OU</div>
            <div className="edit">
              <button className="edit-btn">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          <div className="tbody">
            {this.displayProductServices()}
          </div>
        </div>
      </div>
    );
  }
}
