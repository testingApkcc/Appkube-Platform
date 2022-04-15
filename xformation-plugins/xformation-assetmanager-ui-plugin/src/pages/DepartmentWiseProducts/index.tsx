import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { images } from '../../img';
import { PLUGIN_BASE_URL } from '../../constants';
import { RestService } from '../_service/RestService';
import { configFun } from '../../config';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { ProductWiseServices } from '../../components/ProductWiseServices';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import _departmentData from './_dummyData/departments.json';
// import { values } from 'lodash';
// import {products} from './_dummyData/products';

ChartJS.register(ArcElement, Tooltip, Legend);

export class DepartmentWiseProducts extends React.Component<any, any> {
  breadCrumbs: any;
  colorMapping: any = {
    75: '#5dbc73',
    50: '#ef8f00',
    25: '#e34120'
  };
  config: any;
  constructor(props: any) {
    super(props);
    this.state = {
      showRecentFilter: false,
      showAddNewFilter: false,
      product: [],
      departmentWiseData: [],
      graphData: {
        productionvsOthersData: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                'rgb(255, 153, 0)',
                'rgba(112, 222, 174, 1)',
              ]
            }
          ],
        },
        productWiseCostData: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                'rgba(255, 74, 85, 1)',
                'rgba(113, 167, 254, 1)',
                'rgba(253, 191, 98, 1)',
                'rgba(112, 222, 174, 1)',
              ]
            }
          ],
        },
        serviceWiseCoastData: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                'rgb(255, 153, 0)',
                'rgba(112, 222, 174, 1)',
              ]
            }
          ],
        }
      },
      productWiseCostOptions: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
            },
            display: true,
            position: 'bottom',
            responsive: true,
            align: 'middle',
          },
          title: {
            display: true,
            text: '',
            position: 'bottom',
            color: '#202020',
            font: {
              size: 18
            },
          },
        },
      },
      productionvsOthersOptions: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
            },
            display: true,
            position: 'bottom',
            responsive: true,
            align: 'middle',
          },
          title: {
            display: true,
            text: 'Total Cost: $6,71,246',
            position: 'bottom',
            color: '#202020',
            font: {
              size: 18
            },
          },
        },
      },
      serviceWiseCoastOptions: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
            },
            display: true,
            position: 'bottom',
            responsive: true,
            align: 'middle',
          },
          title: {
            display: true,
            text: 'Total Cost: $6,71,246',
            position: 'bottom',
            color: '#202020',
            font: {
              size: 18
            },
          },
        },
      }
    };
    this.breadCrumbs = [
      {
        label: 'Home',
        route: `/`,
      },
      {
        label: 'Assets | Environments',
        isCurrentPage: true,
      },
    ];
    this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
  }

  componentDidMount() {
    this.getDepartmentData();
    this.getProductData();
  }

  getDepartmentData = async () => {
    try {
      await RestService.getData(
        `${this.config.GET_PRODUCT_DATA}`,
        null,
        null
      ).then((response: any) => {
        this.setState({
          departmentWiseData: response.organization.departmentList,
        });
        this.setProductGraphData();
        this.setProductionOthers();
        this.setServiceCostData();
      });
    } catch (err) {
      console.log("Loading accounts failed. Error: ", err);
    }
  }

  getProductData = async () => {
    try {
      await RestService.getData(
        `${this.config.GET_PRODUCT_DATA}`,
        null,
        null
      ).then((response: any) => {
        this.manipulateDepartmentWiseProductData(response.organization.departmentList)
        this.setState({
          product: response.organization.departmentList,
        });
      });
    } catch (err) {
      console.log("Loading accounts failed. Error: ", err);
    }
  }

  calculatePercentage = (value: any, total: any) => {
    return Math.ceil(value * 100 / total);
  };

  manipulateDepartmentWiseProductData = (departmentList: any) => {
    for (let i = 0; i < departmentList.length; i++) {
      const department = departmentList[i];
      const productList = department.productList;
      const newProductList: any = [];
      productList.forEach((product: any) => {
        newProductList.push([product, product]);
      });
      department.productList = newProductList;
    }
    this.setState({
      product: departmentList
    });
  }

  setProductGraphData = () => {
    let { departmentWiseData, graphData, productWiseCostOptions } = this.state;
    let data = [];
    let labels: any = [];
    let totalCount = 0;
    if (departmentWiseData && departmentWiseData.length > 0) {
      for (let i = 0; i < departmentWiseData.length; i++) {
        let count = 0;
        let department = departmentWiseData[i];
        if (department.productList) {
          for (let j = 0; j < department.productList.length; j++) {
            let product = department.productList[j];
            if (labels.indexOf(product.name) === -1) {
              labels.push(product.name);
            }
            if (product.deploymentEnvironmentList) {
              for (let k = 0; k < product.deploymentEnvironmentList.length; k++) {
                let service = product.deploymentEnvironmentList[k];
                count += service.productBilling.amount;
              }
            }
          }
          totalCount += count;
          data.push(count);
        }
      }
    }
    graphData.productWiseCostData.labels = labels;
    graphData.productWiseCostData.datasets[0].data = data;
    productWiseCostOptions.plugins.title.text = `Total Cost: $${totalCount}`
    this.setState({
      graphData: graphData,
      productWiseCostOptions
    })
  }

  setProductionOthers = () => {
    const { departmentWiseData, graphData, productionvsOthersOptions } = this.state;
    let data: any = [];
    let productioncount = 0;
    let otherCount = 0;
    let labels: any = ['Production', 'Others'];
    if (departmentWiseData && departmentWiseData.length > 0) {
      for (let i = 0; i < departmentWiseData.length; i++) {
        let department = departmentWiseData[i];
        if (department.productList) {
          for (let j = 0; j < department.productList.length; j++) {
            let product = department.productList[j];
            if (product.deploymentEnvironmentList) {
              for (let k = 0; k < product.deploymentEnvironmentList.length; k++) {
                let service = product.deploymentEnvironmentList[k];
                if (service.name === 'Production') {
                  productioncount += service.productBilling.amount;
                } else {
                  otherCount += service.productBilling.amount;
                }
              }
            }
          }
        }
      }
      data.push(productioncount);
      data.push(otherCount);
      graphData.productionvsOthersData.labels = labels;
      graphData.productionvsOthersData.datasets[0].data = data;
      productionvsOthersOptions.plugins.title.text = `Total Cost: $${productioncount + otherCount}`
      this.setState({
        graphData: graphData,
        productionvsOthersOptions,
      })
    }
  }

  setServiceCostData = () => {
    let { departmentWiseData, graphData, serviceWiseCoastOptions } = this.state;
    let data = [];
    let totalCount = 0;
    let labels: any = [];
    let serviceByType: any = {};
    if (departmentWiseData && departmentWiseData.length > 0) {
      for (let i = 0; i < departmentWiseData.length; i++) {
        let department = departmentWiseData[i];
        if (department.productList) {
          for (let j = 0; j < department.productList.length; j++) {
            let product = department.productList[j];
            if (product.deploymentEnvironmentList) {
              for (let k = 0; k < product.deploymentEnvironmentList.length; k++) {
                let service = product.deploymentEnvironmentList[k];
                if (service.serviceCategoryList && service.serviceCategoryList.length > 0) {
                  for (let l = 0; l < service.serviceCategoryList.length; l++) {
                    if (service.serviceCategoryList[l].serviceList && service.serviceCategoryList[l].serviceList.length > 0) {
                      for (let m = 0; m < service.serviceCategoryList[l].serviceList.length; m++) {
                        let subServices = service.serviceCategoryList[l].serviceList[m];
                        serviceByType[subServices.type] = serviceByType[subServices.type] || 0;
                        serviceByType[subServices.type] += subServices.serviceBilling.amount;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      for (var key in serviceByType) {
        totalCount += serviceByType[key];
        data.push(serviceByType[key]);
        labels.push(key);
      }
    }
    graphData.serviceWiseCoastData.labels = labels;
    graphData.serviceWiseCoastData.datasets[0].data = data;
    serviceWiseCoastOptions.plugins.title.text = `Total Cost: $${totalCount}`
    this.setState({
      graphData: graphData
    })
  }

  renderDepartmentWiseData = (departments: any) => {
    if (departments) {
      return departments.map((department: any, index: any) => {
        let serviceByType: any = {};
        var productionTotal = 0;
        var othersTotal = 0;
        if (department.productList) {
          for (let i = 0; i < department.productList.length; i++) {
            let product = department.productList[i];
            for (let b = 0; b < product.deploymentEnvironmentList.length; b++) {
              let service = product.deploymentEnvironmentList[b];
              if (service.serviceCategoryList && service.serviceCategoryList.length > 0) {
                for (let a = 0; a < service.serviceCategoryList.length; a++) {
                  if (service.serviceCategoryList[a].serviceList) {
                    service.serviceCategoryList[a].serviceList.map(
                      (subServices: any) => {
                        serviceByType[subServices.type] = serviceByType[subServices.type] || 0;
                        serviceByType[subServices.type] += 1;
                      }, 0);
                  }
                }
              }
            }

            if (product.deploymentEnvironmentList) {
              for (let j = 0; j < product.deploymentEnvironmentList.length; j++) {
                debugger;
                let row = product.deploymentEnvironmentList[j];
                if (row.name == 'Production') {
                  productionTotal += row.productBilling.amount;
                } else {
                  othersTotal += row.productBilling.amount;
                }
              }
            }
          }
        }
        const percentage = this.calculatePercentage(productionTotal, productionTotal + othersTotal);
        let color = "";
        if (percentage >= 75) {
          color = this.colorMapping[75];
        } else if (percentage >= 50) {
          color = this.colorMapping[50];
        } else {
          color = this.colorMapping[25];
        }
        return (
          <div className="department-box">
            <Link to={`${PLUGIN_BASE_URL}/department-wise-charts`} className="heading">{department.name}</Link>
            <div className="contents">
              <ul>
                <li>
                  <label>No. of Products</label>
                  <span>{department.productList.length}</span>
                </li>
                <li>
                  <label>No. of App Services</label>
                  <span>{serviceByType.APP}</span>
                </li>
                <li>
                  <label>No. of Data Services</label>
                  <span>{serviceByType.DATA}</span>
                </li>
              </ul>
              <div className="production-heading">
                <label>Production Usage Ratio:&nbsp;</label>
                <span>{percentage}%</span>
              </div>
              <div className="production-chart">
                <CircularProgressbar
                  value={percentage}
                  text={`$${productionTotal + othersTotal}`}
                  strokeWidth={20}
                  styles={{
                    trail: {
                      stroke: "#F6EEFF",
                    },
                    path: {
                      stroke: color,
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fontSize: "10px",
                      fontWeight: "bold",
                      fill: "#000",
                    }
                  }}
                />
              </div>
              <div className="production-billing-text">
                <label style={{ color }}>Production Billing:</label>
                <span style={{ color }}>${productionTotal}</span>
              </div>
              <div className="production-billing-text">
                <label>Other Billing:</label>
                <span>${othersTotal}</span>
              </div>
            </div>
          </div>
        );
      });
    }
    return [];
  };

  render() {
    const { departmentWiseData, graphData, productWiseCostOptions,
      productionvsOthersOptions, serviceWiseCoastOptions, product } = this.state;
    return (
      <div className="asset-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
        <div className="department-wise-container">
          <div className="common-container border-bottom-0">
            <div className="department-heading">
              <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-6">
                  <div className="asset-heading">Cost Analysis</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="float-right common-right-btn">
                    <Link to={`${PLUGIN_BASE_URL}/environments`} className="asset-white-button min-width-inherit">
                      <img src={images.Jobs} alt="" style={{ maxWidth: '20px' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {graphData && <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="cost-analysis-chart">
                  <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10">
                      <div className="heading">Product wise Cost</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="edit">
                        <a href={`${PLUGIN_BASE_URL}/department-wise-charts`} target="_blank">
                          <i className="fa fa-external-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chart">
                    {graphData.productWiseCostData && graphData.productWiseCostData.datasets[0].data.length > 0 && graphData.productWiseCostData.labels.length > 0 ?
                      <Doughnut data={graphData.productWiseCostData} options={productWiseCostOptions} /> : <div className="chart-spinner"><i className="fa fa-spinner fa-spin"></i> Loading...</div>
                    }
                  </div>
                  <div className="view-details-link">
                    <Link to={`${PLUGIN_BASE_URL}/department-wise-charts`}>View details <i className="fa fa-chevron-down"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="cost-analysis-chart">
                  <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10">
                      <div className="heading">Production Vs Others</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="edit">
                        <a target="_blank">
                          <i className="fa fa-external-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chart">
                    {graphData.productionvsOthersData && graphData.productionvsOthersData.datasets[0].data.length > 0 && graphData.productionvsOthersData.labels.length > 0 ?
                      <Pie data={graphData.productionvsOthersData} options={productionvsOthersOptions} /> : <div className="chart-spinner"><i className="fa fa-spinner fa-spin"></i> Loading...</div>
                    }
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="cost-analysis-chart">
                  <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10">
                      <div className="heading">Service Type wise Cost</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="edit">
                        <a target="_blank">
                          <i className="fa fa-external-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chart">
                    {graphData.serviceWiseCoastData && graphData.serviceWiseCoastData.datasets[0].data.length > 0 && graphData.serviceWiseCoastData.labels.length > 0 ?
                      <Pie data={graphData.serviceWiseCoastData} options={serviceWiseCoastOptions} /> : <div className="chart-spinner"><i className="fa fa-spinner fa-spin"></i> Loading...</div>
                    }
                  </div>
                </div>
              </div>
            </div>}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="asset-heading">Department wise</div>
              </div>
            </div>
            <div className="department-wise-boxs">
              <div className="department-wise-inner">
                {this.renderDepartmentWiseData(departmentWiseData)}
              </div>
            </div>
          </div>
          {product &&
            <ProductWiseServices product={product} type="department" />}
        </div>
      </div>
    );
  }
}
