import * as React from 'react';
import { images } from '../../img';

export class ServicesPerformance extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: props.product
    };
  }

  toggleStageView = (index: number) => {
    const { product } = this.state;
    product.stages.forEach((service: any) => {
      service.isOpen = false;
    });
    product.stages[index].isOpen = true;
    this.setState({
      product
    });
  }

  toggleServices = (k: any, l: any) => {
    const { product } = this.state;
    product.stages[k].services[l].isOpen = !product.stages[k].services[l].isOpen;
    this.setState({
      product
    });
  }

  openServices = (indexArr: any) => {
    const { product } = this.state;
    const stage = product.stages[indexArr[0]];
    if (stage) {
      indexArr.splice(0, 1);
      let services = stage.services;
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
    product.stages[k].services[l].menuOpen = !product.stages[k].services[l].menuOpen;
    this.setState({
      product
    });
  };

  renderStages = (stages: any) => {
    if (stages) {
      return stages.map((stageData: any, stageNumber: number) => {
        return (
          <li onClick={() => this.toggleStageView(stageNumber)} className={stageData.isOpen == true ? 'active' : ''}>{stageData.stage}</li>
        )
      })
    }
    return [];
  };

  renderServices = (services: any, indexArr: any) => {
    const retData: any = [];
    if (services) {
      services.forEach((service: any, index: any) => {
        if (service.services) {
          retData.push(
            <div className='tbody'>
              <div className='td title' onClick={() => this.openServices([...indexArr, index])}>
                <strong>{service.title}<i className={service.isOpen == true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i></strong>
              </div>
              {
                service.isOpen ?
                  this.renderServices(service.services, [...indexArr, index]) : <></>
              }
            </div>
          );
        } else if (service.list) {
          retData.push(
            <div className='table performance-table'>
              <div className='tbody'>
                <div className='td'><strong>{service.title}</strong></div>
                <>
                  <div className='td'>Performance</div>
                  <div className='td'>Availability</div>
                  <div className='td'>Security</div>
                  <div className='td'>Data Protection</div>
                  <div className='td'>User exp</div>
                </>
              </div>
              {service.list && service.list.map((name: any, i: any) => {
                return (
                  <div className='tbody'>
                    <div className='td'><span>{name.title}</span></div>
                    <div className='td'><div className={(name.performance > 75) ? 'progress-circle green' : (name.performance <= 75 && name.performance > 50) ? 'progress-circle orange' : (name.performance <= 50 && name.performance > 25) ? 'progress-circle yellow' : 'progress-circle red'} ><i className='fa fa-check-circle'></i></div></div>
                    <div className='td'><div className={(name.availibility > 75) ? 'progress-circle green' : (name.availibility <= 75 && name.availibility > 50) ? 'progress-circle orange' : (name.availibility <= 50 && name.availibility > 25) ? 'progress-circle yellow' : 'progress-circle red'}><i className='fa fa-check-circle'></i></div></div>
                    <div className='td'><div className={(name.security > 75) ? 'progress-circle green' : (name.security <= 75 && name.security > 50) ? 'progress-circle orange' : (name.security <= 50 && name.security > 25) ? 'progress-circle yellow' : 'progress-circle red'}><i className='fa fa-check-circle'></i></div></div>
                    <div className='td'><div className={(name.data_protection > 75) ? 'progress-circle green' : (name.data_protection <= 75 && name.data_protection > 50) ? 'progress-circle orange' : (name.data_protection <= 50 && name.data_protection > 25) ? 'progress-circle yellow' : 'progress-circle red'}><i className='fa fa-check-circle'></i></div></div>
                    <div className='td'><div className={(name.user_exp > 75) ? 'progress-circle green' : (name.user_exp <= 75 && name.user_exp > 50) ? 'progress-circle orange' : (name.user_exp <= 50 && name.user_exp > 25) ? 'progress-circle yellow' : 'progress-circle red'}><i className='fa fa-check-circle'></i></div></div>
                  </div >
                )
              })
              }
            </div >
          );
        }
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
                  {this.renderStages(product.stages)}
                </ul>
              </div>
              {product.stages && product.stages.map((stage: any, stageIndex: any) => {
                if (stage.isOpen == true) {
                  return (
                    <div className='tabs-content'>
                      <ul>
                        {stage.services && stage.services.map((mainservicedata: any, mainindex: any) => {
                          return (
                            <li>
                              {mainservicedata.isOpen === false && <div className='icon'><img src={images.Icon} alt="" /></div>}
                              <div className={mainservicedata.isOpen === true ? 'heading full' : 'heading'} >
                                <span onClick={() => this.toggleServices(stageIndex, mainindex)}>
                                  {mainservicedata.title}
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
                                    {this.renderServices(mainservicedata.services, [stageIndex, mainindex])}
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
