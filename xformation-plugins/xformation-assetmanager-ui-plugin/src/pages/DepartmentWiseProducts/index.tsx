import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { images } from '../../img';
import { PLUGIN_BASE_URL } from '../../constants';
import { RestService } from '../_service/RestService';
import { config } from '../../config';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { ProductWiseServices } from '../../components/ProductWiseServices';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import _departmentData from './_dummyData/departments.json';
// import {products} from './_dummyData/products';

ChartJS.register(ArcElement, Tooltip, Legend);

export class DepartmentWiseProducts extends React.Component<any, any> {
  breadCrumbs: any;
  colorMapping: any = {
    75: '#5dbc73',
    50: '#ef8f00',
    25: '#e34120'
  };
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
            position: 'right',
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
            position: 'right',
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
            position: 'right',
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
  }

  componentDidMount() {
    this.getDepartmentData();
  }

  calculatePercentage = (value: any, total: any) => {
    return Math.ceil(value * 100 / total);
  };

  getDepartmentData = async () => {
    try {
      await RestService.getData(
        `${config.GET_DEPARTMENTWISE_PRODUCT}`,
        null,
        null
      ).then((response: any) => {
        this.setState({
          departmentWiseData: response,
        });
        this.setProductGraphData();
        this.setProductionOthers();
        this.setServiceCostData();
      });
    } catch (err) {
      console.log("Loading accounts failed. Error: ", err);
    }
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
            if (product.serviceList) {
              for (let k = 0; k < product.serviceList.length; k++) {
                let service = product.serviceList[k];
                count += service.totalBillingAmount;
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
                if (service.serviceList) {
                  for (let m = 0; m < service.serviceList.length; m++) {
                    let list = service.serviceList[m];
                    if (service.name === 'Production') {
                      productioncount += list.totalBillingAmount;
                    } else {
                      otherCount += list.totalBillingAmount;
                    }
                  }
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
            if (product.serviceList) {
              for (let k = 0; k < product.serviceList.length; k++) {
                let service = product.serviceList[k];
                serviceByType[service.type] = serviceByType[service.type] || 0;
                serviceByType[service.type] += service.totalBillingAmount;
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
            product.serviceList.map(
              (service: any) => {
                serviceByType[service.type] = serviceByType[service.type] || 0;
                serviceByType[service.type] += 1;
              }, 0);
            if (product.deploymentEnvironmentList) {
              for (let j = 0; j < product.deploymentEnvironmentList.length; j++) {
                let row = product.deploymentEnvironmentList[j];
                if (row.name == 'Production') {
                  if (row.serviceList && row.serviceList.length > 0) {
                    for (let k = 0; k < row.serviceList.length; k++) {
                      productionTotal += row.serviceList[k].totalBillingAmount;
                    }
                  }
                } else {
                  if (row.serviceList && row.serviceList.length > 0) {
                    for (let k = 0; k < row.serviceList.length; k++) {
                      othersTotal += row.serviceList[k].totalBillingAmount;
                    }
                  }
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
                  <span>{serviceByType.App}</span>
                </li>
                <li>
                  <label>No. of Data Services</label>
                  <span>{serviceByType.Data}</span>
                </li>
              </ul>
              <div className="production-heading">
                <label>Production Usage Ratio :</label>
                <span>{percentage}%</span>
              </div>
              <div className="production-chart">
                <CircularProgressbar
                  value={percentage}
                  text={`$${productionTotal + othersTotal}`}
                  strokeWidth={20}
                  styles={buildStyles({
                    trailColor: "#F6EEFF",
                    pathColor: color,
                    textColor: "#000000",
                    strokeLinecap: 'butt'
                  })}
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
    const { departmentWiseData, graphData, productWiseCostOptions, productionvsOthersOptions, serviceWiseCoastOptions } = this.state;
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
                        <a>
                          <i className="fa fa-edit"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chart">
                    {graphData.productWiseCostData && graphData.productWiseCostData.datasets[0].data.length > 0 && graphData.productWiseCostData.labels.length > 0 &&
                      <Doughnut data={graphData.productWiseCostData} options={productWiseCostOptions} />
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
                        <a>
                          <i className="fa fa-edit"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chart">
                    {graphData.productionvsOthersData && graphData.productionvsOthersData.datasets[0].data.length > 0 && graphData.productionvsOthersData.labels.length > 0 &&
                      <Pie data={graphData.productionvsOthersData} options={productionvsOthersOptions} />
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
                        <a>
                          <i className="fa fa-edit"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chart">
                    {graphData.serviceWiseCoastData && graphData.serviceWiseCoastData.datasets[0].data.length > 0 && graphData.serviceWiseCoastData.labels.length > 0 &&
                      <Pie data={graphData.serviceWiseCoastData} options={serviceWiseCoastOptions} />
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
          <ProductWiseServices product={this.state.product} type="department" />
        </div>
      </div>
    );
  }
}
