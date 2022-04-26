import * as React from 'react';
import { images } from '../../img';
import { Collapse } from 'reactstrap';
import _dummyData from './_discovered_assets.json';
import { RestService } from '../_service/RestService';
import { configFun } from '../../config';
import { Link } from 'react-router-dom';
// import { PLUGIN_BASE_URL } from '../../constants';
// import { Link } from 'react-router-dom';

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
      labelText: '',
      openCreateMenu: '',
      servicesData: null,
      servicesLength: {},
      totalProducts: 0
    };
    this.config = configFun('http://3.208.22.155:5057', '');
  }

  componentDidMount() {
    this.getServicesData();
    // this.manipulateServiceData(_dummyData.services);
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
    services.forEach((service: any) => {
      const { associatedProductEnclave, associatedCluster, serviceType, serviceNature, associatedProduct } =
        service.details;
      if (associatedProductEnclave) {
        const node = treeData[associatedProductEnclave] || {};
        const clusterData = node[associatedCluster] || {};
        const serviceTypeData = clusterData[serviceType] || {};
        const assiciatedServiceData = serviceTypeData[serviceNature] || {};
        const productData = assiciatedServiceData[associatedProduct] || { title: associatedProduct, services: [] };
        productData.services.push(service.details);
        assiciatedServiceData[associatedProduct] = productData;
        serviceTypeData[serviceNature] = assiciatedServiceData;
        clusterData[serviceType] = serviceTypeData;
        node[associatedCluster] = clusterData;
        treeData[associatedProductEnclave] = node;
      } else {
        const node = treeData['Global Services'] || {};
        node.isGlobalService = true;
        const assiciatedServiceData = node[serviceNature] || {};
        const productData = assiciatedServiceData[associatedProduct] || { title: associatedProduct, services: [] };
        productData.services.push(service.details);
        assiciatedServiceData[associatedProduct] = productData;
        node[serviceNature] = assiciatedServiceData;
        treeData['Global Services'] = node;
      }
    });
    this.setState({
      tableData: treeData
    });
    this.getAppDataServices(treeData);
  }

  getAppDataServices = (treeData: any) => {
    const nodeKeys = Object.keys(treeData);
    const uniqueProducts: any = [];
    const servicesLength: any = {};
    nodeKeys.forEach((nodeKey: any) => {
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
            });
          });
        });
      });
    });
    this.setState({
      totalProducts: uniqueProducts.length,
      servicesLength
    });
  };

  toggleNode = (key: any) => {
    const { tableData } = this.state;
    if (tableData[key].isGlobalService) {
      const data = JSON.parse(JSON.stringify(tableData[key]));
      delete data.isGlobalService;
      this.setState({
        servicesData: data
      });
    } else {
      tableData[key].isOpened = !tableData[key].isOpened;
      this.setState({
        tableData,
        servicesData: null
      });
    }
  }

  toggleCluster = (nodeKey: any, clusterKey: any) => {
    const { tableData } = this.state;
    tableData[nodeKey][clusterKey].isOpened = !tableData[nodeKey][clusterKey].isOpened;
    this.setState({
      tableData,
      servicesData: null
    });
  }

  onClickAppDataService = (nodeKey: any, clusterKey: any, serviceKey: any) => {
    const { tableData, labelText } = this.state;
    let text = labelText;
    text = nodeKey + '>' + clusterKey + '>' + serviceKey + ' Services';
    this.setState({
      servicesData: tableData[nodeKey][clusterKey][serviceKey],
      labelText: text
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
    const { totalProducts, servicesLength } = this.state;
    const retData: any = [];
    if (nodes) {
      const keys = Object.keys(nodes);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const node = nodes[key];
        retData.push(
          <div className="tbody">
            <div className="tbody-inner">
              <div className="tbody-td first" onClick={() => this.toggleNode(key)}>
                <div className={node.isOpened ? "caret-down" : "caret-right"}></div>
                {key}
              </div>
              <div className="tbody-td">{totalProducts}</div>
              {servicesLength[key] && <div className="tbody-td">{servicesLength[key]['App']}</div>}
              {servicesLength[key] && <div className="tbody-td">{servicesLength[key]['Data']}</div>}
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
    return retData;
  };

  renderClusters = (nodeKey: any, clusters: any) => {
    const keys = Object.keys(clusters);
    const retData: any = [];
    keys.forEach(((key: any) => {
      if (key !== 'isOpened' && key !== 'showMenu') {
        const cluster = clusters[key];
        retData.push(
          <div className="tbody">
            <div className="tbody-inner">
              {/* <Link to='/a/xformation-assetmanager-ui-plugin?path=storage-details'> */}
              <div className="tbody-td first" onClick={() => this.toggleCluster(nodeKey, key)}>
                <div className={cluster.isOpened ? "caret-down" : "caret-right"}></div>
                {key}
              </div>
              {/* </Link> */}
            </div>
            {
              cluster.isOpened ?
                <Collapse className="collapse-content" isOpen={cluster.isOpened}>
                  {this.renerAppDataServices(nodeKey, key, cluster)}
                </Collapse> : <></>
            }
          </div>
        );
      }
    }));
    return retData;
  };

  renerAppDataServices = (nodeKey: any, clusterKey: any, services: any) => {
    const retData: any = [];
    const keys = Object.keys(services);
    keys.forEach(((key: any) => {
      if (SERVICE_MAPPING[key]) {
        retData.push(
          <div className="tbody">
            <div className="tbody-inner">
              <div className="tbody-td first" onClick={() => this.onClickAppDataService(nodeKey, clusterKey, key)}>
                {SERVICE_MAPPING[key]}
              </div>
            </div>
          </div>
        );
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
    const { servicesData } = this.state;
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
      let retData: any = [];
      const keys = Object.keys(servicesData);
      keys.forEach((key: any) => {
        if (SERVICE_MAPPING[key]) {
          const service = servicesData[key];
          retData.push(
            <div className="data-table">
              {tableHead}
              <div className="tbody" onClick={() => this.toggleCommonBusinessService(key)}>
                <div className="name" style={{ paddingLeft: '15px' }}>
                  {SERVICE_MAPPING[key]} <span><i className="fa fa-angle-down"></i></span>
                </div>
              </div>
              {
                service.isOpened ?
                  this.renderProducts(key, service) : <></>
              }
            </div>
          );
        }
      });
      return retData;
    }
    return <></>;
  };

  renderProducts = (serviceKey: any, service: any) => {
    const keys = Object.keys(service);
    let retData: any = [];
    keys.forEach((key: any) => {
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
    });
    return retData;
  };

  renderDirectServices = (list: any) => {
    let retData = [];
    if (list) {
      retData = list.map((service: any) => {
        return (<div className="tbody">
          <div className="service-name" style={{ paddingLeft: '45px' }}>{service.name}</div>
          <div className="performance"><div className="status yellow"><i className="fa fa-check"></i></div></div>
          <div className="availability"><div className="status red"><i className="fa fa-check"></i></div></div>
          <div className="security"><div className="status orange"><i className="fa fa-check"></i></div></div>
          <div className="data-protection"><div className="status red"><i className="fa fa-check"></i></div></div>
          <div className="user-exp"><div className="status green"><i className="fa fa-check"></i></div></div>
        </div>);
      });
    }
    return retData;
  };

  render() {
    const { labelText, tableData, servicesData } = this.state;
    return (
      <>
        <div className="Filters-box">
          <p>Select and add Filters</p>
          <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
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