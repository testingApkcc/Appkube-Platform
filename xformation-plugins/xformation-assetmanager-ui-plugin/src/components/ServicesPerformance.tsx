import * as React from 'react';
import { images } from '../img';

export class ServicesPerformance extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: props.product
    };
  }

  toggleStageView = (index: number) => {
    const { product } = this.state;
    product.services[index].isOpen = !product.services[index].isOpen;
    this.setState({
      product
    });
  }

  toggleServices = (k: any, l: any) => {
    const { product } = this.state;
    product.services[k].mainservices[l].isOpen = !product.services[k].mainservices[l].isOpen;
    this.setState({
      product
    });
  }

  openServices = (k: any, l: any, m: any) => {
    const { product } = this.state;
    product.services[k].mainservices[l].services[m].isOpen = !product.services[k].mainservices[l].services[m].isOpen;
    this.setState({
      product
    });
  }

  onClickOpenSubLink = (k: any, l: any) => {
    const { product } = this.state;
    product.services[k].mainservices[l].menuOpen = !product.services[k].mainservices[l].menuOpen;
    this.setState({
      product
    });
  };


  render() {
      const {product} = this.state;
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
                  {product.services && product.services.map((serviceData: any, serviceindex: number) => {
                    return (
                      <li onClick={() => this.toggleStageView(serviceindex)} className={serviceData.isOpen == true ? 'active' : ''}>{serviceData.stage}</li>
                    )
                  })
                  }
                </ul>
              </div>
              {product.services && product.services.map((serviceres: any, serviceindex: any) => {
                if (serviceres.isOpen == true) {
                  return (
                    <div className='tabs-content'>
                      <ul>
                        {serviceres.mainservices && serviceres.mainservices.map((mainservicedata: any, mainindex: any) => {
                          return (
                            <li>
                              {mainservicedata.isOpen === false && <div className='icon'><img src={images.Icon} alt="" /></div>}
                              <div className={mainservicedata.isOpen === true ? 'heading full' : 'heading'} >
                                <span onClick={() => this.toggleServices(serviceindex, mainindex)}>          
                                  {mainservicedata.title}
                                </span>
                                <div className='icon'>
                                  <div
                                    className='fa-icon'
                                    onClick={() => this.toggleServices(serviceindex, mainindex)}
                                  >
                                    <i className={mainservicedata.isOpen === true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
                                  </div>
                                  <div className='edit'>
                                    <div 
                                      className='bars'
                                      onClick={() => this.onClickOpenSubLink(serviceindex, mainindex)}
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
                                          <div className='td title' onClick={() => this.openServices(serviceindex, mainindex, subindex)}>
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
    );
  }
}
