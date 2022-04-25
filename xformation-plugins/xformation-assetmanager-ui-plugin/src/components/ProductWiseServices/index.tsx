import * as React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../img';
import { PLUGIN_BASE_URL } from '../../constants';
import { SelectCloudFilter } from '../SelectCloudFilter';
import { ServicesPerformance } from './ServicesPerformance';
import { v4 } from 'uuid';

// const ViewMapping: any = {
//   BUSINESS_VIEW: "0",
//   CLOUD_VIEW: "1"
// };

export class ProductWiseServices extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showRecentFilter: false,
      showAddNewFilter: false,
      productComponent: [],
      product: [],
      isDataLoaded: false,
      hostingType: 'CloudManaged',
    };
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (!this.state.isDataLoaded && this.props.product) {
      this.setState({
        product: this.props.product,
        isDataLoaded: true
      });
    }
  }

  openProduct = (i: any, j: any) => {
    const { product } = this.state;
    for (let m = 0; m < product[i].productList.length; m++) {
      if (j !== m) {
        const viewData = product[i].productList[m];
        viewData.isOpen = false;
      }
    }
    const viewData = product[i].productList[j];
    viewData.isOpen = !viewData.isOpen;
    this.setState({
      product
    });
  }

  handleChangeViewOfProduct = () => {
    const { hostingType, product } = this.state;
    if (hostingType === 'CloudManaged') {
      this.setState({
        hostingType: 'InCluster'
      })
    } else {
      this.setState({
        hostingType: 'CloudManaged'
      })
    }
    // if (product && product.length > 0) {
    //   console.log(product.length);
    //   let data = product;
    //   for (let i = 0; i < product.length; i++) {
    //     let CloudManaged: any = [];
    //     let InCluster: any = [];
    //     let row = product[i];
    //     {
    //       row.productList && row.productList.map((viewData: any, index: any) => {
    //         const val = viewData;
    //         let productServiceList = [];
    //         if (val && val.deploymentEnvironmentList) {
    //           for (let b = 0; b < val.deploymentEnvironmentList.length; b++) {
    //             productServiceList.push(val.deploymentEnvironmentList[b].name);
    //             let environment = val.deploymentEnvironmentList[b];
    //             if (environment.serviceCategoryList && environment.serviceCategoryList.length > 0) {
    //               for (let a = 0; a < environment.serviceCategoryList.length; a++) {
    //                 const serviceCategory = environment.serviceCategoryList[a];
    //                 if (serviceCategory.serviceNameList && serviceCategory.serviceNameList.length > 0) {
    //                   for (let n = 0; n < serviceCategory.serviceNameList.length; n++) {
    //                     if (serviceCategory.serviceNameList[n]) {
    //                       for (let o = 0; o < serviceCategory.serviceNameList[n].tagList.length; o++) {
    //                         const tagList = serviceCategory.serviceNameList[n].tagList[o]
    //                         if (tagList) {
    //                           let serviceList = tagList.serviceList
    //                           if (serviceList) {
    //                             for (let q = 0; q < serviceList.length; q++) {
    //                               if (serviceList[q].hostingType === hostingType) {
    //                                 CloudManaged.push(val.deploymentEnvironmentList);
    //                                 // data.push(row);
    //                                 // break;
    //                               }
    //                               else {
    //                                 // data.push(row);
    //                                 InCluster.push(val.deploymentEnvironmentList);
    //                                 // break;
    //                               }
    //                             }
    //                           }
    //                         }
    //                       }
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       })
    //       console.log(InCluster);
    //       console.log(CloudManaged);
    //       data.push([InCluster, CloudManaged]);
    //       console.log(data)
    //     }
    //   }
    //   // this.setState({
    //   //   product: CloudManaged,
    //   // })
    // }
  }

  displayProductServices = () => {
    const { product, hostingType } = this.state;
    let retData = [];
    if (product && product.length > 0) {
      for (let i = 0; i < product.length; i++) {
        let serviceByType: any = {};
        let row = product[i];
        retData.push(
          <div key={v4()} className="inner-table">
            <div className="thead">{row.name}</div>
            {row.productList && row.productList.map((viewData: any, index: any) => {
              const val = viewData;
              let productServiceList = [];
              if (val && val.deploymentEnvironmentList) {
                for (let b = 0; b < val.deploymentEnvironmentList.length; b++) {
                  productServiceList.push(val.deploymentEnvironmentList[b].name);
                  let environment = val.deploymentEnvironmentList[b];
                  if (environment.serviceCategoryList && environment.serviceCategoryList.length > 0) {
                    for (let a = 0; a < environment.serviceCategoryList.length; a++) {
                      const serviceCategory = environment.serviceCategoryList[a];
                      if (serviceCategory.serviceNameList && serviceCategory.serviceNameList.length > 0) {
                        for (let n = 0; n < serviceCategory.serviceNameList.length; n++) {
                          let serviceName = serviceCategory.serviceNameList[n];
                          if (serviceName.tagList) {
                            serviceName.tagList.map(
                              (subServices: any) => {
                                serviceByType[subServices.tagName] = serviceByType[subServices.tagName] || 0;
                                serviceByType[subServices.tagName] += subServices.serviceList ? subServices.serviceList.length : 0;
                                // if (subServices.serviceList) {
                                //   for (let d = 0; d < subServices.serviceList.length; d++) {
                                //     if (subServices.serviceList[d].hostingType == hostingType) {
                                //       val.deploymentEnvironmentList[b].hostingShow = true;
                                //     } else {
                                //       val.deploymentEnvironmentList[b].hostingShow = false;
                                //     }
                                //   }
                                // }
                              }, 0);
                          }
                        }
                      }
                    }
                  }
                }
              }
              return (
                <div className="tbody">
                  <div className="name" onClick={() => this.openProduct(i, index)}>
                    <span>{val.name}</span>
                    <i className={val.isOpen == true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} />
                  </div>
                  <div className="app-services"></div>
                  <div className="app-services">{serviceByType.APP || 0}</div>
                  <div className="data-services">{serviceByType.DATA || 0}</div>
                  <div className="data-services">{productServiceList.join()}</div>
                  <div className="edit">
                    {/* onClick={() => this.onClickMenu(defaultView, i)} */}
                    <button className="edit-btn" onClick={() => this.onClickMenu(i, index)} >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    {val.menuOpen === true && (
                      <>
                        <div className="text-center open-create-menu-close" onClick={() => this.onClickMenu(i, index)} ></div>
                        <div className="text-center open-create-menu" >
                          <a>Add Services</a>
                          <a>Associate to Department</a>
                          <a>Migrate</a>
                        </div>
                      </>
                    )}
                  </div>
                  {val.isOpen == true &&
                    <ServicesPerformance
                      handleChangeViewOfProduct={() => this.handleChangeViewOfProduct()}
                      product={val}
                      hostingType={hostingType}
                    />
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

  onClickMenu = (i: any, j: any) => {
    const { product } = this.state;
    for (let m = 0; m < product.length; m++) {
      for (let k = 0; k < product[m].productList.length; k++) {
        if (m === i) {
          let viewData = product[m].productList[k]
          if (j == k) {
            viewData.menuOpen = !viewData.menuOpen;
          }
          else {
            viewData.menuOpen = false
          }
        }
        else {
          let viewData = product[m].productList[k];
          viewData.menuOpen = false;
        }
      }
    }
    this.setState({
      product
    });
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
                      <span>Add New Product</span>
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
            <div className="app-services">Cloud Environment</div>
            <div className="app-services">App Services</div>
            <div className="data-services">Data Services</div>
            <div className="data-services">Product Environment</div>
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
