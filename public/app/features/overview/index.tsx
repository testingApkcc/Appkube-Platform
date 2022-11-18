import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { Line } from 'react-chartjs-2';
import { SlaCenter } from './SlaCenter';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { backendSrv } from 'app/core/services/backend_srv';
import { config } from '../config';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const images: any = {
  aws: '/public/img/overview/aws.svg',
  azure: '/public/img/overview/azure.svg',
  gcp: '/public/img/overview/gcp.svg',
  other: '/public/img/overview/cloud.svg',
};

const colors: any = {
  aws: 'orange',
  azure: 'blue',
  gcp: 'red',
  other: 'orange',
};

class Overview extends React.Component<any, any> {
  breadCrumbs: any = [
    {
      label: 'Home',
      route: '',
    },
    {
      label: 'Monitor | Alerts',
      isCurrentPage: true,
    },
  ];
  constructor(props: any) {
    super(props);
    this.state = {
      dashboardData: {
        totalSpent: {
          value: '$6,71,456',
          diff: '+4 from last week',
          status: 'down',
          data: [20, 40, 30, 60],
        },
        lastWeekSpent: {
          value: '412,531',
          diff: '+5%',
          status: 'up',
          data: [40, 20, 60],
        },
        currentSpentRate: {
          perHR: '$21',
          perDay: '$504',
        },
        spentToday: {
          value: '$5245',
          diff: '+5%',
        },
        spentYesterDay: {
          value: '$4567',
          diff: '2%',
        },
        totalBudget: {
          total: '10,00,000',
          remaining: '3,28,457',
          percentage: '55%',
        },
      },
      totalSpend: {
        data: {
          labels: ['', '', '', '', ''],
          datasets: [
            {
              fill: false,
              borderColor: 'rgba(225, 5, 5, 1)',
              cubicInterpolationMode: 'monotone',
              // tension: 0.4,
              pointRadius: 0,
              data: [20, 40, 30, 60],
            },
          ],
        },
        lineOptions: {
          plugins: {
            legend: {
              display: false,
              labels: {
                usePointStyle: true,
              },
            },
            tooltips: {
              enabled: false,
            },
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          },
        },
      },
      cloutWiseSpend: {},
      slaCentralData: {},
    };
  }

  componentDidMount() {
    backendSrv.get(config.CLOUD_WISE_SPEND).then(
      (res: any) => {
        this.setState({
          cloutWiseSpend: res,
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
    backendSrv.get(config.SLA_CENTRAL_DATA).then(
      (res: any) => {
        this.setState({
          slaCentralData: res,
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  handletableColor = (val: any) => {
    let color = '';
    if (val * 1 > 98) {
      color = 'green';
    } else if (val * 1 <= 75) {
      color = 'red';
    } else if (val * 1 <= 98 || val * 1 > 75) {
      color = 'orange';
    }
    return color;
  };

  renderCloudWiseSpend = (data: any) => {
    const retData: any = [];
    if (data) {
      const clouds = Object.keys(data);
      clouds.forEach((cloud: any, index: any) => {
        const cloudData = data[cloud];
        retData.push(
          <div className="content" key={index}>
            <div className="icon">
              <img alt={cloud} src={images[cloud.toLowerCase()]} />
            </div>
            <div className="progress-content">
              <div className="text">
                <span className="name">{cloud}</span>
                <span className="value">{cloudData.currentTotal}</span>
                <span className={cloudData.variance > 0 ? 'diff up' : 'diff down'}>
                  <i className={cloudData.variance > 0 ? 'fa fa-caret-up' : 'fa fa-caret-down'}></i>
                  {cloudData.variance}%
                </span>
              </div>
              <div className="progress">
                <span className={colors[cloud.toLowerCase()]} style={{ width: `${cloudData.variance}%` }}></span>
              </div>
            </div>
          </div>
        );
      });
    }
    return retData;
  };

  renderSLACentral = (data: any) => {
    const retData: any = [];
    if (data) {
      const products = Object.keys(data);
      products.forEach((product: any, index: any) => {
        const productData: any = data[product];
        retData.push(
          <tr key={`${index}-sla-central`}>
            <td className="products"> {product} </td>
            <td className={this.handletableColor(productData.Performance)}> {productData.Performance}% </td>
            <td className={this.handletableColor(productData.Availibility)}> {productData.Availibility}% </td>
            <td className={this.handletableColor(productData.Reliability)}> {productData.Reliability}% </td>
            <td className={this.handletableColor(productData.Security)}> {productData.Security}% </td>
            <td className={this.handletableColor(productData['End Usage'])}> {productData['End Usage']}% </td>
          </tr>
        );
      });
    }
    return retData;
  };

  render() {
    const breadCrumbs = this.breadCrumbs;
    const pageTitle = 'MONITOR | OVERVIEW';
    const { dashboardData, cloutWiseSpend, slaCentralData } = this.state;
    return (
      <React.Fragment>
        <div className="breadcrumbs-container">
          {pageTitle && <div className="page-title">{pageTitle}</div>}
          <div className="breadcrumbs">
            {breadCrumbs.map((breadcrumb: any, index: any) => {
              if (breadcrumb.isCurrentPage) {
                return (
                  <span key={index} className="current-page">
                    {breadcrumb.label}
                  </span>
                );
              } else {
                return (
                  <React.Fragment key={index}>
                    <a className="breadcrumbs-link">{breadcrumb.label}</a>
                    <span className="separator">
                      <i className="fa fa-chevron-right"></i>
                    </span>
                  </React.Fragment>
                );
              }
            })}
          </div>
        </div>
        <div className="overview-container">
          <div className="applications-container">
            {dashboardData && (
              <div className="applications-inner-container">
                <div className="dashboard-spent-main">
                  <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="dashboard-spent">
                            <div className="dashboard-spent-left">
                              <label>Total Spend</label>
                              <strong>{dashboardData.totalSpent.value}</strong>
                            </div>
                            <div className="dashboard-spent-right">
                              {this.state.totalSpend && (
                                <Line data={this.state.totalSpend.data} options={this.state.totalSpend.lineOptions} />
                              )}
                              <span>{dashboardData.totalSpent.diff}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="dashboard-spent">
                            <div className="dashboard-days-spent-left">
                              <label>Last 7 days Spend</label>
                              <strong>
                                {dashboardData.lastWeekSpent.value}
                                <span>
                                  <i className="fa fa-caret-up"></i>
                                  {dashboardData.lastWeekSpent.diff}
                                </span>
                              </strong>
                            </div>
                            <div className="dashboard-days-spent-right">
                              <span>
                                <span className="orange" style={{ height: '50%' }}></span>
                              </span>
                              <span>
                                <span className="blue" style={{ height: '20%' }}></span>
                              </span>
                              <span>
                                <span className="red" style={{ height: '70%' }}></span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="dashboard-spent">
                            <div className="current-spend-rate">
                              <label>Current spend Rate</label>
                              <div className="rate-text">
                                <strong>{dashboardData.currentSpentRate.perHR}</strong>
                                <span>Per Hour</span>
                              </div>
                              <div className="rate-line"></div>
                              <div className="rate-text">
                                <strong>{dashboardData.currentSpentRate.perDay}</strong>
                                <span>Per Day</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="dashboard-spent">
                            <div className="total-budget">
                              <div className="heading">
                                <label>Total Budget(Q1)</label>
                                <span>${dashboardData.totalBudget.total}</span>
                              </div>
                              <div className="content">
                                <div className="remaining-graph">
                                  <div className="gauge gauge--liveupdate" id="gauge">
                                    <div className="gauge__container">
                                      <div className="gauge__background"></div>
                                      <div className="gauge__center__center"></div>
                                      <div className="gauge__center"></div>
                                      <div
                                        className="gauge__data"
                                        style={{
                                          transform: `rotate(${
                                            parseInt(dashboardData.totalBudget.percentage.split('%')[0].trim(), 10) /
                                              200 +
                                            0.5
                                          }turn)`,
                                        }}
                                      ></div>
                                      <div
                                        className="gauge__needle"
                                        style={{
                                          transform: `rotate(${
                                            parseInt(dashboardData.totalBudget.percentage.split('%')[0].trim(), 10) /
                                              200 +
                                            0.5
                                          }turn)`,
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="used-text">{dashboardData.totalBudget.percentage} Used</div>
                                </div>
                                <div className="remaining-text">
                                  <span>Remaining</span>
                                  <strong>${dashboardData.totalBudget.remaining}</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="dashboard-spent">
                            <div className="spends-today">
                              <div className="spends-today-left">
                                <i className="fa fa-caret-up"></i>
                                <span>{dashboardData.spentToday.diff}</span>
                              </div>
                              <div className="spends-today-right">
                                <label>Spends today</label>
                                <strong>{dashboardData.spentToday.value}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="dashboard-spent">
                            <div className="spends-yesterday">
                              <div className="spends-yesterday-left">
                                <label>Spends yesterday</label>
                                <strong>{dashboardData.spentToday.value}</strong>
                              </div>
                              <div className="spends-yesterday-right">
                                <i className="fa fa-caret-down"></i>
                                <span>{dashboardData.spentToday.diff}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
                      <div className="cloud-wise-spend">
                        <div className="heading">
                          <label>Cloud wise spend</label>
                          <i className="fa fa-ellipsis-v"></i>
                        </div>
                        <div className="contents">{this.renderCloudWiseSpend(cloutWiseSpend)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {dashboardData && (
          <div className="overview-container">
            <div className="applications-container">
              <div className="header">
                <div className="heading">SLA Central</div>
              </div>
              <div className="applications-inner-container">
                <div className="metrics-table">
                  <div className="metrics-table-inner">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="products"> Products </th>
                          <th> Performance </th>
                          <th> Availibility </th>
                          <th> Reliability </th>
                          <th> Security </th>
                          <th> End Usage </th>
                        </tr>
                      </thead>
                      <tbody>{this.renderSLACentral(slaCentralData)}</tbody>
                    </table>
                  </div>
                  <div className="metrics-performance">
                    <div className="performance-box green">
                      <span>&#10095;</span>98%
                    </div>
                    <div className="performance-box" style={{ marginRight: '2px', paddingLeft: '0px' }}>
                      75%<span>&#10095;</span>
                    </div>
                    <div className="performance-box orange">
                      <span>&#10095;</span>90%
                    </div>
                    <div className="performance-box red">
                      <span>&#10094;</span>75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <SlaCenter />
      </React.Fragment>
    );
  }
}

export default Overview;
