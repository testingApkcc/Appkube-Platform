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

  toggleEnvironmentView = (index: number) => {
    const { product } = this.state;
    product.deploymentEnvironmentList.forEach((environment: any) => {
      environment.isOpen = false;
    });
    product.deploymentEnvironmentList[index].isOpen = true;
    this.setState({
      product
    });
  }

  toggleCategories = (environmentIndex: any, categoryIndex: any) => {
    const { product } = this.state;
    if (product.deploymentEnvironmentList[environmentIndex].serviceCategoryList[categoryIndex].serviceNameList && product.deploymentEnvironmentList[environmentIndex].serviceCategoryList[categoryIndex].serviceNameList.length > 0) {
      for (let j = 0; j < product.deploymentEnvironmentList[environmentIndex].serviceCategoryList.length; j++) {
        if (j !== categoryIndex) {
          product.deploymentEnvironmentList[environmentIndex].serviceCategoryList[j].isOpen = false;
        }
      }
      product.deploymentEnvironmentList[environmentIndex].serviceCategoryList[categoryIndex].isOpen = !product.deploymentEnvironmentList[environmentIndex].serviceCategoryList[categoryIndex].isOpen;
      this.setState({
        product
      });
    }
  }

  handleView = () => {
    this.props.handleChangeViewOfProduct();
  }

  onClickMenu = (k: any, l: any) => {
    const { product } = this.state;
    if (product.deploymentEnvironmentList[k].serviceCategoryList && product.deploymentEnvironmentList[k].serviceCategoryList.length > 0) {
      for (let i = 0; i < product.deploymentEnvironmentList[k].serviceCategoryList.length; i++) {
        if (i !== l) {
          product.deploymentEnvironmentList[k].serviceCategoryList[i].menuOpen = false;
        }
      }
    }
    product.deploymentEnvironmentList[k].serviceCategoryList[l].menuOpen = !product.deploymentEnvironmentList[k].serviceCategoryList[l].menuOpen;
    this.setState({
      product
    });
  };

  renderStages = (deploymentEnvironmentList: any) => {
    if (deploymentEnvironmentList) {
      return deploymentEnvironmentList.map((environment: any, environmentIndex: number) => {
        return (
          <li onClick={() => this.toggleEnvironmentView(environmentIndex)} className={environment.isOpen == true ? 'active' : ''}>
            {environment.name}
          </li>
        )
      })
    }
    return [];
  };

  renderCategories = (categories: any, environmentIndex: number) => {
    if (categories) {
      return categories.map((category: any, categoryIndex: number) => {
        return (
          <li>
            {!category.isOpen && <div className='icon'><img src={images.Icon} alt="" /></div>}
            <div className={category.isOpen === true ? 'heading full' : 'heading'} >
              <span onClick={() => this.toggleCategories(environmentIndex, categoryIndex)}>
                {category.name}
              </span>
              <div className='icon'>
                <div
                  className='fa-icon'
                  onClick={() => this.toggleCategories(environmentIndex, categoryIndex)}
                >
                  <i className={category.isOpen === true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
                </div>
                <div className='edit'>
                  <div
                    className='bars'
                    onClick={() => this.onClickMenu(environmentIndex, categoryIndex)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  {category.menuOpen == true && (
                    <div className="text-center open-create-menu" style={{ right: '5px', top: '30px', backgroundColor: '#ffffff' }}>
                      <a href='#'> Add Firewall </a>
                      <a href='#'> Remove Firewall </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {category.isOpen === true && category.serviceNameList && category.serviceNameList.length > 0 &&
              <div className='content-table'>
                <div className='table'>
                  <div className='thead'>
                    <div className='th'>Name</div>
                  </div>
                  {this.renderServiceName(category.serviceNameList, [environmentIndex, categoryIndex])}
                </div>
              </div>
            }
          </li>
        );
      });
    }
    return [];
  };

  renderServiceName = (serviceNames: any, indexArr: any) => {
    const retData: any = [];
    serviceNames.map((serviceName: any, index: any) => {
      retData.push(<div className='table performance-table'>
        <div className='tbody'>
          <div className='tbody' onClick={() => this.openTagServices(indexArr, index)}>
            <div className='td' style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <strong style={{ marginRight: "15px" }}>{serviceName.name}</strong>
              <i className={serviceName.isOpen === true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
            </div>
            {index == 0 &&
              <>
                <div className='td'>Performance</div>
                <div className='td'>Availability</div>
                <div className='td'>Security</div>
                <div className='td'>Data Protection</div>
                <div className='td'>User exp</div>
              </>
            }
          </div>
          {
            serviceName.tagList && serviceName.tagList.length > 0 ?
              (serviceName.isOpen ? this.renderTags(serviceName.tagList) : <></>)
              :
              <div className='tbody'>
                <div className='td title'>
                  <strong>{serviceName.name}<i className={serviceName.isOpen == true ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i></strong>
                </div>
              </div>
          }
        </div>
      </div>);
    });
    return retData;
  };

  renderTags = (tagList: any) => {
    const retData: any = [];
    const renderIndex = ['APP', 'DATA', 'NETWORK', 'OTHER'];
    renderIndex.forEach((renderTag: any) => {
      tagList.forEach((tag: any, i: any) => {
        if (tag.tagName === renderTag) {
          retData.push(
            <div className='tbody'>
              <div className='td'><span>{tag.tagName}</span></div>
              {tag.serviceList && tag.serviceList.map((service: any, i: any) => {
                return (
                  <div className='tbody'>
                    <div className='td' style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}><span style={{ paddingLeft: '45px' }}>{service.name}</span></div>
                    <div className='td'>
                      <div className={`progress-circle ${this.getPerformanceClass(service.performance.score)}`} >
                        <i className='fa fa-check-circle'></i>
                      </div>
                    </div>
                    <div className='td'>
                      <div className={`progress-circle ${this.getPerformanceClass(service.availability.score)}`} >
                        <i className='fa fa-check-circle'></i>
                      </div>
                    </div>
                    <div className='td'>
                      <div className={`progress-circle ${this.getPerformanceClass(service.security.score)}`} >
                        <i className='fa fa-check-circle'></i>
                      </div>
                    </div>
                    <div className='td'>
                      <div className={`progress-circle ${this.getPerformanceClass(service.dataProtection.score)}`} >
                        <i className='fa fa-check-circle'></i>
                      </div>
                    </div>
                    <div className='td'>
                      <div className={`progress-circle ${this.getPerformanceClass(service.userExperiance.score)}`} >
                        <i className='fa fa-check-circle'></i>
                      </div>
                    </div>
                  </div>
                )
              })
              }
            </div>
          );
        }
      });
    });
    return retData;
  };

  openTagServices = (parentIndex: any, currentIndex: any) => {
    const { product } = this.state;
    if (product.deploymentEnvironmentList[parentIndex[0]].serviceCategoryList[parentIndex[1]].serviceNameList && product.deploymentEnvironmentList[parentIndex[0]].serviceCategoryList[parentIndex[1]].serviceNameList.length > 0) {
      if (product.deploymentEnvironmentList[parentIndex[0]].serviceCategoryList[parentIndex[1]].serviceNameList[currentIndex].isOpen) {
        product.deploymentEnvironmentList[parentIndex[0]].serviceCategoryList[parentIndex[1]].serviceNameList[currentIndex].isOpen = !product.deploymentEnvironmentList[parentIndex[0]].serviceCategoryList[parentIndex[1]].serviceNameList[currentIndex].isOpen;
      } else {
        product.deploymentEnvironmentList[parentIndex[0]].serviceCategoryList[parentIndex[1]].serviceNameList[currentIndex].isOpen = true;
      }
    }
    this.setState({
      product,
    })
    console.log(product);
  }

  getPerformanceClass = (score: any) => {
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
    const { product } = this.state;
    return (
      <div className='environments'>
        <div className='environments-inner'>
          <div className='heading'>
            <h3>Deployment environments</h3>
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
              {product.deploymentEnvironmentList && product.deploymentEnvironmentList.map((environment: any, environmentIndex: any) => {
                if (environment.isOpen == true) {
                  return (
                    <div className='tabs-content'>
                      <ul>
                        {this.renderCategories(environment.serviceCategoryList, environmentIndex)}
                      </ul>
                    </div>
                  )
                } else {
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
