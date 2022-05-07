import * as React from 'react';
import { images } from '../../img';
import { Collapse } from 'reactstrap';
import { RestService } from '../_service/RestService';
import { configFun } from '../../config';
import { PLUGIN_BASE_URL } from '../../constants';
import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { Link } from 'react-router-dom';

const SERVICE_MAPPING: any = {
  'App': 'App Services',
  'Data': 'Data Services',
  'Other': 'Other Services',
  'Network': 'Network Services',
  'Common': 'Common Services',
  'Business': 'Business Services'
};

export class DiscoveredAssets extends React.Component<any, any>{
  CreateNewOURef: any;
  config: any;
  constructor(props: any) {
    super(props);
    this.state = {
      tableData: {},
      backupData: {},
      labelText: '',
      openCreateMenu: '',
      servicesData: null,
      servicesLength: {},
      activeNode: '',
      accountId: '',
      filterData: [{
        name: 'Nodes',
        key: 'nodes',
        filter: []
      }, {
        name: 'Clusters',
        key: 'clusters',
        filter: []
      }, {
        name: 'Service Type',
        key: 'serviceType',
        filter: []
      }, {
        name: 'Service Nature',
        key: 'serviceNature',
        filter: []
      }, {
        name: 'Products',
        key: 'products',
        filter: []
      }],
      filters: [],
    };
    this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
  }

  componentDidMount() {
    this.getServicesData();
    const queryPrm = new URLSearchParams(this.props.location.search);
    const accountId = queryPrm.get("accountId");
    this.setState({
      accountId
    });
  }

  getServicesData = async () => {
    try {
      await RestService.getData(
        `${this.config.GET_SERVICES_DATA}`,
        null,
        null
      ).then((response: any) => {
        this.manipulateServiceData(response.services);
      });
    } catch (err) {
      console.log("Loading accounts failed. Error: ", err);
    }
  }

  manipulateServiceData = (services: any) => {
    const treeData: any = [];
    const { filterData } = this.state;
    const filteredNodes: any = {};
    const filteredClusters: any = {};
    const filteredServiceType: any = {};
    const filteredServiceNature: any = {};
    const filteredProducts: any = {};
    services.forEach((service: any) => {
      const { associatedProductEnclave, associatedCluster, serviceType, serviceNature, associatedProduct } =
        service.details;
      const id = service.id;
      if (associatedProductEnclave) {
        const node = treeData[associatedProductEnclave] || {};
        filteredNodes[associatedProductEnclave] = {
          value: associatedProductEnclave,
          label: associatedProductEnclave,
        };
        const clusterData = node[associatedCluster] || {};
        filteredClusters[associatedCluster] = {
          value: associatedCluster,
          label: associatedCluster,
        };
        const serviceTypeData = clusterData[serviceType] || {};
        filteredServiceType[serviceType] = {
          value: serviceType,
          label: serviceType,
        };
        const assiciatedServiceData = serviceTypeData[serviceNature] || {};
        filteredServiceNature[serviceNature] = {
          value: serviceNature,
          label: serviceNature,
        };
        const productData = assiciatedServiceData[associatedProduct] || { title: associatedProduct, services: [] };
        productData.services.push({
          id,
          ...service.details
        });
        filteredProducts[associatedProduct] = {
          value: associatedProduct,
          label: associatedProduct,
        };
        assiciatedServiceData[associatedProduct] = productData;
        serviceTypeData[serviceNature] = assiciatedServiceData;
        clusterData[serviceType] = serviceTypeData;
        node[associatedCluster] = clusterData;
        treeData[associatedProductEnclave] = node;
      } else {
        const node = treeData['Global Services'] || {};
        filteredNodes['Global Services'] = {
          value: 'Global Services',
          label: 'Global Services',
        };
        node.isGlobalService = true;
        const assiciatedServiceData = node[serviceNature] || {};
        filteredServiceNature[serviceNature] = {
          value: serviceNature,
          label: serviceNature,
        };
        const productData = assiciatedServiceData[associatedProduct] || { title: associatedProduct, services: [] };
        productData.services.push({
          id,
          ...service.details
        });
        filteredProducts[associatedProduct] = {
          value: associatedProduct,
          label: associatedProduct,
        };
        assiciatedServiceData[associatedProduct] = productData;
        node[serviceNature] = assiciatedServiceData;
        treeData['Global Services'] = node;
      }
    });
    filterData[0].filter = this.convertObjectIntoArray(filteredNodes);
    filterData[1].filter = this.convertObjectIntoArray(filteredClusters);
    filterData[2].filter = this.convertObjectIntoArray(filteredServiceType);
    filterData[3].filter = this.convertObjectIntoArray(filteredServiceNature);
    filterData[4].filter = this.convertObjectIntoArray(filteredProducts);
    this.setState({
      tableData: treeData,
      backupData: JSON.parse(JSON.stringify(treeData)),
      filterData
    });
    this.getAppDataServices(treeData);
  }

  convertObjectIntoArray = (obj: any) => {
    const keys = Object.keys(obj);
    return keys.map((key) => {
      return obj[key];
    });
  };

  getAppDataServices = (treeData: any) => {
    const nodeKeys = Object.keys(treeData);
    const servicesLength: any = {};
    nodeKeys.forEach((nodeKey: any) => {
      if (nodeKey === 'Global Services') {
        const uniqueProducts: any = [];
        const commonBusinessServices = treeData['Global Services'];
        const commonBusinessKeys = Object.keys(commonBusinessServices);
        commonBusinessKeys.forEach((commonBusinessKey: any) => {
          const productData = commonBusinessServices[commonBusinessKey];
          const productKeys = Object.keys(productData);
          productKeys.forEach((productKey: any) => {
            if (uniqueProducts.indexOf(productKey) === -1) {
              uniqueProducts.push(productKey);
            }
            servicesLength[nodeKey] = servicesLength[nodeKey] || {};
            servicesLength[nodeKey].uniqueProducts = uniqueProducts.length;
          });
        });
      } else {
        const uniqueProducts: any = [];
        const clusterData = treeData[nodeKey];
        const clusterKeys = Object.keys(clusterData);
        clusterKeys.forEach((clusterKey: any) => {
          const appDataServices = clusterData[clusterKey];
          const appDataKeys = Object.keys(appDataServices);
          appDataKeys.forEach((appDataKey: any) => {
            const commonBusinessServices = appDataServices[appDataKey];
            const commonBusinessKeys = Object.keys(commonBusinessServices);
            commonBusinessKeys.forEach((commonBusinessKey: any) => {
              const productData = commonBusinessServices[commonBusinessKey];
              const productKeys = Object.keys(productData);
              productKeys.forEach((productKey: any) => {
                if (uniqueProducts.indexOf(productKey) === -1) {
                  uniqueProducts.push(productKey);
                }
                servicesLength[nodeKey] = servicesLength[nodeKey] || {};
                servicesLength[nodeKey][appDataKey] = servicesLength[nodeKey][appDataKey] || 0;
                servicesLength[nodeKey][appDataKey] += productData[productKey].services.length;
                servicesLength[nodeKey].uniqueProducts = uniqueProducts.length;
              });
            });
          });
        });
      }
    });
    this.setState({
      servicesLength
    });
  };

  toggleNode = (key: any) => {
    const { tableData } = this.state;
    if (tableData[key].isGlobalService) {
      const data = JSON.parse(JSON.stringify(tableData[key]));
      delete data.isGlobalService;
      this.setState({
        servicesData: data,
        activeNode: key
      });
    } else {
      tableData[key].isOpened = !tableData[key].isOpened;
      this.setState({
        tableData,
        servicesData: null,
        activeNode: key,
      });
    }
  }

  toggleCluster = (nodeKey: any, clusterKey: any) => {
    const { tableData } = this.state;
    tableData[nodeKey][clusterKey].isOpened = !tableData[nodeKey][clusterKey].isOpened;
    this.setState({
      tableData,
      servicesData: null,
      activeNode: clusterKey
    });
  }

  onClickAppDataService = (nodeKey: any, clusterKey: any, serviceKey: any) => {
    const { tableData } = this.state;
    let text = nodeKey + ' > ' + clusterKey + ' > ' + serviceKey + ' Services';
    this.setState({
      servicesData: tableData[nodeKey][clusterKey][serviceKey],
      labelText: text,
      activeNode: serviceKey
    });
  };

  handleMenuToggle = (key: any) => {
    const { tableData } = this.state;
    tableData[key].showMenu = !tableData[key].showMenu;
    this.setState({
      tableData
    });
  };

  renderNodes = (nodes: any) => {
    const { servicesLength, activeNode, filters } = this.state;
    const retData: any = [];
    if (nodes) {
      const filteredNodes = filters['Nodes'];
      const keys = Object.keys(nodes);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const node = nodes[key];
        if ((filteredNodes && filteredNodes.indexOf(key) !== -1) || !filteredNodes) {
          retData.push(
            <div className="tbody">
              <div className="tbody-inner">
                <div className={`tbody-td first ${activeNode === key ? 'active' : ''}`} onClick={() => this.toggleNode(key)}>
                  <div className={node.isOpened ? "caret-down" : "caret-right"}></div>
                  {key}
                </div>
                <div className="tbody-td">{servicesLength[key] ? (servicesLength[key]['uniqueProducts'] || 0) : 0}</div>
                <div className="tbody-td">{servicesLength[key] ? (servicesLength[key]['App'] || 0) : 0}</div>
                <div className="tbody-td">{servicesLength[key] ? (servicesLength[key]['Data'] || 0) : 0}</div>
                <div className="tbody-td">
                  <div className="d-block text-center action-edit">
                    {node.showMenu &&
                      <>
                        <div className="open-create-menu-close" onClick={(e) => { this.handleMenuToggle(key) }}></div>
                        <div className="text-center open-create-menu">
                          <a>Add New Product</a>
                          <a>Add Cluster</a>
                          <a>Add Cloud Managed Services</a>
                          <a>Add Gateway Services</a>
                        </div>
                      </>
                    }
                    <button className="asset-white-button min-width-inherit m-r-0" onClick={(e) => { this.handleMenuToggle(key) }}>
                      <a className="fa fa-ellipsis-h"></a>
                    </button>
                  </div>
                </div>
              </div>
              {
                !node.isGlobalService && node.isOpened ?
                  <Collapse className="collapse-content" isOpen={node.isOpened}>
                    {this.renderClusters(key, node)}
                  </Collapse> : <></>
              }
            </div>
          );
        }
      }
    }
    return retData;
  };

  renderClusters = (nodeKey: any, clusters: any) => {
    const { activeNode, filters } = this.state;
    const filteredClusters = filters['Clusters'];
    const keys = Object.keys(clusters);
    const retData: any = [];
    keys.forEach(((key: any) => {
      if ((filteredClusters && filteredClusters.indexOf(key) !== -1) || !filteredClusters) {
        if (key !== 'isOpened' && key !== 'showMenu') {
          const cluster = clusters[key];
          retData.push(
            <div className="tbody">
              <div className="tbody-inner">
                <div className={`tbody-td first ${activeNode === key ? 'active' : ''}`} onClick={() => this.toggleCluster(nodeKey, key)}>
                  <div className={cluster.isOpened ? "caret-down" : "caret-right"}></div>
                  {key}
                </div >
                {/* </Link> */}
              </div >
              {
                cluster.isOpened ?
                  <Collapse className="collapse-content" isOpen={cluster.isOpened}>
                    {this.renerAppDataServices(nodeKey, key, cluster)}
                  </Collapse> : <></>
              }
            </div >
          );
        }
      }
    }));
    return retData;
  };

  renerAppDataServices = (nodeKey: any, clusterKey: any, services: any) => {
    const { activeNode, filters } = this.state;
    const filteredServiceType = filters['Service Type'];
    const retData: any = [];
    const keys = Object.keys(services);
    keys.forEach(((key: any) => {
      if ((filteredServiceType && filteredServiceType.indexOf(key) !== -1) || !filteredServiceType) {
        if (SERVICE_MAPPING[key]) {
          retData.push(
            <div className="tbody">
              <div className="tbody-inner">
                <div className={`tbody-td first ${activeNode === key ? 'active' : ''}`} onClick={() => this.onClickAppDataService(nodeKey, clusterKey, key)}>
                  {SERVICE_MAPPING[key]}
                </div>
              </div>
            </div>
          );
        }
      }
    }));
    return retData;
  };

  toggleCommonBusinessService = (serviceKey: any) => {
    const { servicesData } = this.state;
    servicesData[serviceKey].isOpened = !servicesData[serviceKey].isOpened;
    this.setState({
      servicesData
    });
  };

  toggleProducts = (serviceKey: any, productKey: any) => {
    const { servicesData } = this.state;
    servicesData[serviceKey][productKey].isOpened = !servicesData[serviceKey][productKey].isOpened;
    this.setState({
      servicesData
    });
  };

  renderCommonBusinessServices = () => {
    const { servicesData, filters } = this.state;
    const filteredServiceNature = filters['Service Nature'];
    if (servicesData) {
      const tableHead = <div className="thead">
        <div className="name">
          Name
        </div>
        <div className="performance">
          Performance
        </div>
        <div className="availability">
          Availability
        </div>
        <div className="security">
          Security
        </div>
        <div className="data-protection">
          Data Protection
        </div>
        <div className="user-exp">
          User exp
        </div>
      </div>;
      let servicesJSX: any = [];
      const keys = Object.keys(servicesData);
      keys.forEach((key: any) => {
        if ((filteredServiceNature && filteredServiceNature.indexOf(key) !== -1) || !filteredServiceNature) {
          if (SERVICE_MAPPING[key]) {
            const service = servicesData[key];
            servicesJSX.push(
              <>
                <div className="tbody" onClick={() => this.toggleCommonBusinessService(key)}>
                  <div className="name" style={{ paddingLeft: '15px' }}>
                    {SERVICE_MAPPING[key]} <span><i className="fa fa-angle-down"></i></span>
                  </div>
                </div>
                {
                  service.isOpened ?
                    this.renderProducts(key, service) : <></>
                }
              </>
            );
          }
        }
      });
      return <div className="data-table">
        {tableHead}
        {servicesJSX}
      </div>;
    }
    return <></>;
  };

  renderProducts = (serviceKey: any, service: any) => {
    const { filters } = this.state;
    const keys = Object.keys(service);
    const filteredProducts = filters['Products'];
    let retData: any = [];
    keys.forEach((key: any) => {
      if ((filteredProducts && filteredProducts.indexOf(key) !== -1) || !filteredProducts) {
        if (key !== 'isOpened') {
          const product = service[key];
          retData.push(
            <div className="data-table">
              <div className="tbody" onClick={() => this.toggleProducts(serviceKey, key)}>
                <div className="name" style={{ paddingLeft: '30px' }}>
                  {key} <span><i className="fa fa-angle-down"></i></span>
                </div>
              </div>
              {
                product.isOpened ?
                  this.renderDirectServices(product.services) : <></>
              }
            </div>
          );
        }
      }
    });
    return retData;
  };

  renderDirectServices = (list: any) => {
    let retData = [];
    const { accountId } = this.state;
    if (list) {
      retData = list.map((service: any) => {
        return (<div className="tbody">
          <div className="service-name" style={{ paddingLeft: '45px' }} title={service.description}> <Link onClick={(e: any) => this.onClickDirectService(e, service)} to={`${PLUGIN_BASE_URL}/storage-details?accountId=${accountId}`}>{service.name}</Link></div>
          <div className="performance">
            <div className={`status ${this.getPerformanceClass(service.performance.score)}`}>
              <i className="fa fa-check"></i>
            </div>
          </div>
          <div className="availability">
            <div className={`status ${this.getPerformanceClass(service.availability.score)}`}>
              <i className="fa fa-check"></i>
            </div>
          </div>
          <div className="security">
            <div className={`status ${this.getPerformanceClass(service.security.score)}`}>
              <i className="fa fa-check"></i>
            </div>
          </div>
          <div className="data-protection">
            <div className={`status ${this.getPerformanceClass(service.dataProtection.score)}`}>
              <i className="fa fa-check"></i>
            </div>
          </div>
          <div className="user-exp">
            <div className={`status ${this.getPerformanceClass(service.userExperiance.score)}`}>
              <i className="fa fa-check"></i>
            </div>
          </div>
        </div>);
      });
    }
    return retData;
  };

  onClickDirectService = (e: any, service: any) => {
    const { labelText } = this.state;
    let serviceData: any = localStorage.getItem('added-services');
    if (serviceData) {
      serviceData = JSON.parse(serviceData);
    } else {
      serviceData = [];
    }
    let existingIndex = -1;
    for (let i = 0; i < serviceData.length; i++) {
      if (serviceData[i].id === service.id) {
        existingIndex = i;
        break;
      }
    }
    if (existingIndex !== -1) {
      serviceData.splice(existingIndex, 1);
    }
    serviceData.push({
      id: service.id,
      name: service.name,
      labelText,
      organizationUnit: service.associatedOU,
      serviceType: service.serviceType,
      serviceScore: '',
      associatedProduct: service.associatedProduct,
      asscociatedEnv: service.associatedEnv,
    });
    localStorage.setItem('added-services', JSON.stringify(serviceData));
  };

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

  onChangeFilter = (filters: any) => {
    this.setState({
      filters
    });
  };

  render() {
    const { labelText, tableData, servicesData, filterData } = this.state;
    return (
      <>
        {/* <div className="Filters-box">
          <p>Select and add Filters</p>
          <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
        </div> */}
        <div style={{ margin: '0px 10px' }}>
          <SelectCloudFilter filterJsonData={filterData} onChangeFilter={this.onChangeFilter} />
        </div>
        <div className="showing-export">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="showing-heading">
                {/* Showing results 81 of 81 */}
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="export-files">
                <span><i className="fa fa-sign-out"></i></span>
                <p>Export</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="search-box form-group">
                <input type="text" className="control-form" placeholder="Search" value="" /><button><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="organisational-details">
          <div className="container-inner">
            <div className="organisational-data-table">
              <div className={servicesData ? "organisational-data-table-left" : ""}>
                <div className="thead">
                  <div className="thead-th organisational-heading"><span><img src={images.awsLogo} alt="" /></span> AWS</div>
                  <div className="thead-th">Products</div>
                  <div className="thead-th">App Services</div>
                  <div className="thead-th">Data Services</div>
                  <div className="thead-th">Action</div>
                </div>
                {this.renderNodes(tableData)}
              </div>
              <div className={servicesData ? "organisational-data-table-right" : ""}>
                <div className="right-part-filters">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="filters-breadcrumbs">
                        <ul>
                          <li>{labelText}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="filters-buttons">
                        <button className="asset-white-button min-width-inherit">
                          <i className="fa fa-plus"></i> Add
                        </button>
                        <button className="asset-white-button min-width-inherit">
                          <i className="fa fa-refresh"></i> Refresh
                        </button>
                        <button className="asset-white-button min-width-inherit m-r-0">
                          <i className="fa fa-trash"></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="filters-search">
                        <label>Filter by deployment name</label>
                        <div className="form-group">
                          <input type="text" className="control-form" placeholder="Enter the full deployment name" value="" />
                          <button><i className="fa fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="filters-search">
                        <label>Filter by App</label>
                        <div className="form-group">
                          <input type="text" className="control-form" placeholder="foo-bar,key!=value" value="" />
                          <button><i className="fa fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="filters-search">
                        <label>Filter by SLA</label>
                        <div className="form-group">
                          <input type="text" className="control-form" placeholder="All SLA" value="" />
                          <button><i className="fa fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {this.renderCommonBusinessServices()}
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}