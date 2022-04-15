import * as React from 'react';
import { images } from '../../img';

export class ServicesPerformance extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: props.product,
      productToggle: { index: 0, isOpened: false }
    };
  }

  toggleStageView = (index: number) => {
    const { product } = this.state;
    product.deploymentEnvironmentList.forEach((service: any) => {
      service.isOpen = false;
    });
    product.deploymentEnvironmentList[index].isOpen = true;
    this.setState({
      product
    });
  }

  toggleServices = (k: any, l: any) => {
    const { product } = this.state;
    if (product.deploymentEnvironmentList[k].serviceCategoryList[l].serviceList) {
      product.deploymentEnvironmentList[k].serviceCategoryList[l].isOpen = !product.deploymentEnvironmentList[k].serviceCategoryList[l].isOpen;
      this.setState({
        product
      });
    }
  }

  // toggleServicesStage = (i: any, j: any) => {
  //   const { product } = this.state;
  //   console.log('call');
  //   // product.deploymentEnvironmentList[i].serviceCategoryList[j].isOpen = !product.deploymentEnvironmentList[k].serviceCategoryList[l].isOpen;
  //   // this.setState({
  //   //   product
  //   // });
  // }


  handleView = () => {
    this.props.handleChangeViewOfProduct();
  }
  openServices = (indexArr: any) => {
    const { product } = this.state;
    const stage = product.deploymentEnvironmentList[indexArr[0]];
    if (stage) {
      indexArr.splice(0, 1);
      let services = stage.serviceCategoryList;
      for (let i = 0; i < indexArr.length; i++) {
        const index = indexArr[i];
        if (i === indexArr.length - 1) {
          services[index].isOpen = !services[index].isOpen;
          break;
        }
        if (services[index] && services[index].services) {
          services = services[index].services;
        }
      };
    }
    this.setState({
      product
    });
  }

  onClickMenu = (k: any, l: any) => {
    const { product } = this.state;
    for (let i = 0; i < product.deploymentEnvironmentList[k].serviceCategoryList.length; i++) {
      if (i == l) {
        product.deploymentEnvironmentList[k].serviceCategoryList[i].menuOpen = !product.deploymentEnvironmentList[k].serviceCategoryList[i].menuOpen
      }
      else {
        product.deploymentEnvironmentList[k].serviceCategoryList[i].menuOpen = false
      }
    }
    this.setState({
      product
    });
  };

  renderStages = (deploymentEnvironmentList: any) => {
    if (deploymentEnvironmentList) {
      return deploymentEnvironmentList.map((stageData: any, stageNumber: number) => {
        return (
          <li onClick={() => this.toggleStageView(stageNumber)} className={stageData.isOpen == true ? 'active' : ''}>{stageData.name}</li>
        )
      })
    }
    return [];
  };

  renderServices = (services: any, indexArr: any) => {
    const retData: any = [];
    if (services) {
      services.forEach((service: any, index: any) => {
        // if (service.serviceList) {
        //   retData.push(
        //     <div className='tbody'>
        //       <div className='td title' onClick={() => this.openServices([...indexArr, index])}>
        //         <strong>{service.name}<i className={service.isOpen == true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i></strong>
        //       </div>
        //       {
        //         service.isOpen ?
        //           this.renderServices(service.serviceList, [...indexArr, index]) : <></>
        //       }
        //     </div>
        //   );
        // } else if (service.serviceList) {
        retData.push(
          <div className='table performance-table'>
            {index === 0 && <div className='tbody'>
              <div className='td'><strong>Name</strong></div>
              <>
                <div className='td'>Performance</div>
                <div className='td'>Availability</div>
                <div className='td'>Security</div>
                <div className='td'>Data Protection</div>
                <div className='td'>User exp</div>
              </>
            </div>
            }
            {/* {service.serviceList && service.serviceList.map((name: any, i: any) => { */}
            {/* return ( */}
            <div className='tbody'>
              <div className='td'><span>{service.name}</span></div>
              <div className='td'><div className={(service.performance.score > 75) ? 'progress-circle green' : (service.performance.score <= 75 && service.performance.score > 50) ? 'progress-circle orange' : (service.performance.score <= 50 && service.performance.score > 25) ? 'progress-circle yellow' : 'progress-circle red'} ><i className='fa fa-check-circle'></i></div></div>
              <div className='td'><div className={(service.availability.score > 75) ? 'progress-circle green' : (service.availability.score <= 75 && service.availability.score > 50) ? 'progress-circle orange' : (service.availability.score <= 50 && service.availability.score > 25) ? 'progress-circle yellow' : 'progress-circle red'}><i className='fa fa-check-circle'></i></div></div>
              <div className='td'><div className={(service.security.score > 75) ? 'progress-circle green' : (service.security.score <= 75 && service.security.score > 50) ? 'progress-circle orange' : (service.security.score <= 50 && service.security.score > 25) ? 'progress-circle yellow' : 'progress-circle red'}><i className='fa fa-check-circle'></i></div></div>
              <div className='td'><div className={(service.dataProtection.score > 75) ? 'progress-circle green' : (service.dataProtection.score <= 75 && service.dataProtection.score > 50) ? 'progress-circle orange' : (service.dataProtection.score <= 50 && service.dataProtection.score > 25) ? 'progress-circle yellow' : 'progress-circle red'}><i className='fa fa-check-circle'></i></div></div>
              <div className='td'><div className={(service.userExperiance.score > 75) ? 'progress-circle green' : (service.userExperiance.score <= 75 && service.userExperiance.score > 50) ? 'progress-circle orange' : (service.userExperiance.score <= 50 && service.userExperiance.score > 25) ? 'progress-circle yellow' : 'progress-circle red'}><i className='fa fa-check-circle'></i></div></div>
            </div>
            {/* ) */}
            {/* }) */}
            {/* } */}
          </div >
        );
        // }
      });
    }
    return retData;
  };

  render() {
    const { product } = this.state;
    return (
      <div className='environments'>
        <div className='environments-inner'>
          <div className='heading'>
            <h3>EMS - Environments</h3>
            <div className='buttons'>
              <button className='btn'>
                <i className='fa fa-plus'></i>
              </button>
              <button className='btn' onClick={() => this.handleView()}>
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
                  {this.renderStages(product.deploymentEnvironmentList)}
                </ul>
              </div>
              {product.deploymentEnvironmentList && product.deploymentEnvironmentList.map((stage: any, stageIndex: any) => {
                if (stage.isOpen == true) {
                  return (
                    <div className='tabs-content'>
                      <ul>
                        {stage.serviceCategoryList && stage.serviceCategoryList.map((mainservicedata: any, mainindex: any) => {
                          mainservicedata["menuOpen"] = mainservicedata["menuOpen"]

                          return (
                            <li>
                              {(!mainservicedata.isOpen) && <div className='icon'><img src={images.Icon} alt="" /></div>}
                              <div className={(mainservicedata.isOpen === true && mainservicedata.serviceList) ? 'heading full' : 'heading'} >
                                <span onClick={() => this.toggleServices(stageIndex, mainindex)}>
                                  {mainservicedata.name}
                                </span>
                                <div className='icon'>
                                  <div
                                    className='fa-icon'
                                    onClick={() => this.toggleServices(stageIndex, mainindex)}
                                  >
                                    <i className={mainservicedata.isOpen === true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
                                  </div>
                                  <div className='edit'>
                                    <div
                                      className='bars'
                                      onClick={() => this.onClickMenu(stageIndex, mainindex)}
                                    >
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                    {mainservicedata.menuOpen == true && (
                                      <>
                                        <div className="text-center open-create-menu" style={{ right: '5px', top: '30px', backgroundColor: '#ffffff' }}>
                                          <a href='#'> Add Firewall </a>
                                          <a href='#'> Remove Firewall </a>
                                        </div>
                                        <div className='open-create-menu-close' onClick={() => this.onClickMenu(stageIndex, mainindex)}></div>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              {
                                mainservicedata.isOpen === true && mainservicedata.serviceList &&
                                <div className='content-table'>
                                  <div className='table'>
                                    <div className='thead'>
                                      {/* <div className='th'></div> */}
                                    </div>
                                    {this.renderServices(mainservicedata.serviceList, [stageIndex, mainindex])}
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
    );
  }
}
