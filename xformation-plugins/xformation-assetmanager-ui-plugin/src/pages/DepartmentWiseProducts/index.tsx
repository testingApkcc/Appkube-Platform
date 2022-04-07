import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { images } from '../../img';
import { PLUGIN_BASE_URL } from '../../constants';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { DepartmentWiseProduct } from './../../components/DepartmentWiseProduct';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import _departmentData from './_dummyData/departments.json';
import {products} from './_dummyData/products';

ChartJS.register(ArcElement, Tooltip, Legend);

export class DepartmentWiseProducts extends React.Component<any, any> {
  breadCrumbs: any;
  colorMapping:any = {
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
        pieData: {
          labels: ['Procurement', 'Human Resource', 'Supply chain', 'EMS'],
          datasets: [
            {
              data: [40, 60],
              backgroundColor: [
                'rgb(255, 153, 0)',
                'rgba(112, 222, 174, 1)',
              ]
            }
          ],
        },
        doughnutData: {
          labels: ['Procurement', 'Human Resource', 'Supply chain', 'EMS'],
          datasets: [
            {
              data: [29, 11, 20, 40],
              backgroundColor: [
                'rgba(255, 74, 85, 1)',
                'rgba(113, 167, 254, 1)',
                'rgba(253, 191, 98, 1)',
                'rgba(112, 222, 174, 1)',
              ]
            }
          ],
        }
      },
      graphOptions: {
        plugins: {
          legend:{
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
            },
            display:true,
            position:'right',
            responsive: true,
            align: 'middle',
          },
          title: {
            display: true,
            text: 'Total Cost: $6,71,246',
            position: 'bottom',
            color:'#202020',
            font: {
              size:18
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

  componentDidMount(){
    this.setState({
      departmentWiseData: _departmentData,
      product: products
    });
  }

  openProduct = (i: any, j: any) => {
    const { product } = this.state;
    for (let m = 0; m < product[i].productList.length; m++) {
      if (j !== m) {
        product[i].productList[m].isOpen = false;
      }
    }
    product[i].productList[j].isOpen = !product[i].productList[j].isOpen;
    this.setState({
      product,
    });
  };

  openServiceOfProduct = (i: any, j: any, k: any) => {
    const { product } = this.state;
    for (let m = 0; m < product[i].productList[j].services.length; m++) {
      if (k !== m) {
        product[i].productList[j].services[m].isOpen = false;
      }
    }
    product[i].productList[j].services[k].isOpen = !product[i].productList[j].services[k].isOpen;
    this.setState({
      product,
    });
  };

  openProductMainServices = (i: any, j: any, k: any, l: any) => {
    const { product } = this.state;
    for (let m = 0; m < product[i].productList[j].services[k].mainservices.length; m++) {
      if (l !== m) {
        product[i].productList[j].services[k].mainservices[m].isOpen = false;
      }
    }
    product[i].productList[j].services[k].mainservices[l].isOpen = !product[i].productList[j].services[k].mainservices[
      l
    ].isOpen;
    this.setState({
      product,
    });
  };

  openServices = (i: any, j: any, k: any, l: any, m: any) => {
    const { product } = this.state;
    for (let n = 0; n < product[i].productList[j].services[k].mainservices.length; n++) {
      if (l !== n) {
        product[i].productList[j].services[k].mainservices[m].services[n].isOpen = false;
      }
    }
    product[i].productList[j].services[k].mainservices[l].services[m].isOpen = !product[i].productList[j].services[k]
      .mainservices[l].services[m].isOpen;
    this.setState({
      product,
    });
  };

  calculatePercentage = (value:any, total: any) => {
    return Math.ceil(value*100/total);
  };

  renderDepartmentWiseData = (departments: any) => {
    if(departments){
      return departments.map((department: any) => {
        const percentage = this.calculatePercentage(department.prodBilling, department.prodBilling + department.otherBilling);
        let color = "";
        if(percentage >= 75){
          color = this.colorMapping[75];
        } else if(percentage >= 50){
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
                  <span>{department.noOfProduct}</span>
                </li>
                <li>
                  <label>No. of App Services</label>
                  <span>{department.appServices}</span>
                </li>
                <li>
                  <label>No. of Data Services</label>
                  <span>{department.dataServices}</span>
                </li>
              </ul>
              <div className="production-heading">
                <label>Production Usage Ratio :</label>
                <span>{percentage}%</span>
              </div>
              <div className="production-chart">
                <CircularProgressbar 
                  value={percentage} 
                  text={`$${department.prodBilling + department.otherBilling}`} 
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
                <span style={{ color }}>${department.prodBilling}</span>
              </div>
              <div className="production-billing-text">
                <label>Other Billing:</label>
                <span>${department.otherBilling}</span>
              </div>
            </div>
          </div>
        );
      });
    }
    return [];
  };

  render() {
    const { departmentWiseData, graphData, graphOptions } = this.state;
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
                    {graphData.doughnutData && <Doughnut data={graphData.doughnutData} options={graphOptions} />}
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
                    {graphData.pieData && <Pie data={graphData.pieData} options={graphOptions} />}
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
                    {graphData.pieData && <Doughnut data={graphData.doughnutData} options={graphOptions} />}
                  </div>
                  <div className="view-details-link">
                    <Link to={`${PLUGIN_BASE_URL}/department-wise-charts`}>View details <i className="fa fa-chevron-down"></i></Link>
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
                { this.renderDepartmentWiseData(departmentWiseData)}
              </div>
            </div>
          </div>
          <DepartmentWiseProduct product={this.state.product} type="department" />
        </div>
      </div>
    );
  }
}
