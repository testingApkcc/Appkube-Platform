// Libraries
import React from 'react';
import { CurrentAvrageWaitTimeChart } from './CurrentAvrageWaitTimeChart';
import { AlertVolumeChart } from './AlertVolumeChart';
import { AlertVolumeByStatusChart } from './AlertVolumeByStatusChart';
import { AlertVolumeAnalysis } from './AlertVolumeAnalysis';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import 'react-multi-carousel/lib/styles.css';
// import Carousel from 'react-multi-carousel';
import { config } from '../config';
import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//     slidesToSlide: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

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
      topAlertsTodayData: [
        {
          name: 'CPU',
          severity: 'low',
          time: '11:29:02',
        },
        {
          name: 'CPU',
          severity: 'high',
          time: '11:29:02',
        },
        {
          name: 'CPU',
          severity: 'medium',
          time: '11:29:02',
        },
        {
          name: 'CPU',
          severity: 'critical',
          time: '11:29:02',
        },
        {
          name: 'CPU',
          severity: 'urgent',
          time: '11:29:02',
        },
      ],
      avgWaitTimeData: {},
      dailyAvgWaitTime: 0,
      organizationModal: false,
      organizationName: '',
      isSubmitted: false,
      userId: '',
      isLoading: false,
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
        productList: [
          { name: 'Product 1', performance: 89, availabilty: '99', reliability: '67', security: '99', endUsage: '92' },
          {
            name: 'Product 2',
            performance: '99',
            availabilty: '91',
            reliability: '75',
            security: '92',
            endUsage: '96',
          },
          {
            name: 'Product 3',
            performance: '85',
            availabilty: '91',
            reliability: '75',
            security: '92',
            endUsage: '91',
          },
          {
            name: 'Product 4',
            performance: '78',
            availabilty: '92',
            reliability: '68',
            security: '79',
            endUsage: '90',
          },
          {
            name: 'Product 5',
            performance: '81',
            availabilty: '98',
            reliability: '91',
            security: '88',
            endUsage: '87',
          },
        ],
        cloudWiseProduct: [
          { name: 'AWS', value: '$2,47,518', diff: '5%', status: 'down' },
          { name: 'AZURE', value: '$90756', diff: '2%', status: 'up' },
          { name: 'GCP', value: '$11,508', diff: '1%', status: 'up' },
        ],
      },
      totalSpend: {
        // type: 'line',
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
    };
  }

  componentDidMount() {
    let userInfo: any = localStorage.getItem('userInfo');
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      // console.log(`Setup Org, user :`, userInfo);
      if (!userInfo.info.organization) {
        this.setState({
          organizationModal: true,
          userId: userInfo.info.credentials.name,
        });
      }
    }
  }

  createTopAlertsTodayTable = () => {
    const retData = [];
    const topAlertsToday = this.state.topAlertsTodayData.length;
    for (let i = 0; i < topAlertsToday; i++) {
      const topAlerts = this.state.topAlertsTodayData[i];
      retData.push(
        <tr key={topAlerts.name}>
          <td>{topAlerts.name}</td>
          <td>
            {topAlerts.severity === 'high' && <div className="high">High</div>}
            {topAlerts.severity === 'low' && <div className="low">Low</div>}
            {topAlerts.severity === 'medium' && <div className="medium">Medium</div>}
            {topAlerts.severity === 'critical' && <div className="medium">Critical</div>}
            {topAlerts.severity === 'urgent' && <div className="medium">Urgent</div>}
          </td>
          <td>{topAlerts.time}</td>
        </tr>
      );
    }
    return retData;
  };

  onSelectAvgWaitDate = (e: any) => {
    const value = e.target.value;
    const { avgWaitTimeData } = this.state;
    this.setState({
      dailyAvgWaitTime: avgWaitTimeData.lineDataSetList[value],
    });
  };

  createOptionForAvgWaitTime = () => {
    const { avgWaitTimeData } = this.state;
    const retData = [];
    let i;
    for (i in avgWaitTimeData.daysList) {
      retData.push(<option value={i}>{avgWaitTimeData.daysList[i]}</option>);
    }
    return retData;
  };

  showOrgModal = (show: any) => {
    this.setState({
      organizationModal: show,
    });
  };

  handleStateChange = (e: any) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onClickSubmit = () => {
    this.setState({
      isSubmitted: true,
    });
    const { organizationName, userId } = this.state;
    if (organizationName && organizationName.trim()) {
      var myHeaders = new Headers();
      myHeaders.append(`Content-Type`, `application/json`);
      var raw = JSON.stringify({
        userName: `${userId}`,
        organizationName: `${organizationName}`,
      });
      const options = {
        headers: myHeaders,
        method: `POST`,
        body: raw,
      };
      this.setState({
        isLoading: true,
      });
      const url = config.UPDATE_ORGANIZATION;
      fetch(url, options).then(
        (response: any) => {
          this.setState({
            organizationModal: false,
            isLoading: false,
          });
          let userInfo: any = localStorage.getItem('userInfo');
          if (userInfo) {
            userInfo = JSON.parse(userInfo);
            userInfo.info.organization = organizationName;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
          }
        },
        (error: any) => {
          this.setState({
            isLoading: false,
          });
        }
      );
    }
  };

  render() {
    const breadCrumbs = this.breadCrumbs;
    const pageTitle = 'MONITOR | OVERVIEW';
    const { dailyAvgWaitTime, organizationName, organizationModal, isSubmitted, isLoading, dashboardData } = this.state;
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
            <div className="header">
              <div className="row">
                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
                  <div className="heading">Monitor your applications and infrastructure</div>
                  <div className="description">
                    Get full stack visibility, find and fix problems, optimize your performance and understand customer
                    behavior all in one place.
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                  <div className="new-discovery-btn">
                    <a href="#" className="overview-blue-button">
                      New Discovery
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {dashboardData && (
              <>
                <div className="applications-inner-container">
                  <div className="row">
                    <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6">
                      <div className="dashboard-spent">
                        <label>Total Spend</label>
                        {/* <Line data={{ datasets: this.state.totalSpend.data.datasets, labels: this.state.totalSpend.data.labels }} options={this.state.totalSpend.options} /> */}
                        <p>{dashboardData.totalSpent.value}</p>
                        <div>
                          {this.state.totalSpend && (
                            <Line data={this.state.totalSpend.data} options={this.state.totalSpend.lineOptions} />
                          )}
                        </div>
                        <span>{dashboardData.totalSpent.diff}</span>
                      </div>
                      <div className="dashboard-spent">
                        <label>Last 7 days Spend</label>
                        <p>
                          {dashboardData.lastWeekSpent.value} <span>{dashboardData.lastWeekSpent.diff}</span>
                        </p>
                      </div>
                      <div className="dashboard-spent">
                        <label>Current spend Rate</label>
                        <p>
                          {dashboardData.currentSpentRate.perHR} | {dashboardData.currentSpentRate.perDay}
                        </p>
                      </div>
                      <div className="dashboard-spent">
                        <label>Total Budget(Q1)</label>
                        <p>{dashboardData.totalBudget.total}</p>
                        <span>{dashboardData.totalBudget.remaining}</span>
                        <p>{dashboardData.totalBudget.percentage}</p>
                      </div>
                      <div className="dashboard-spent">
                        <label>Spends today</label>
                        <p>
                          {dashboardData.spentToday.value} <span>{dashboardData.spentToday.diff}</span>
                        </p>
                      </div>
                      <div className="dashboard-spent">
                        <label>Spends yesterday</label>
                        <p>
                          {dashboardData.spentYesterDay.value} <span>{dashboardData.spentYesterDay.diff}</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                      <label>Cloud wise spend</label>
                      <span>...</span>
                      {dashboardData.cloudWiseProduct &&
                        dashboardData.cloudWiseProduct.length > 0 &&
                        dashboardData.cloudWiseProduct.map((val: any, index: any) => {
                          return (
                            <div key={index}>
                              <div>
                                <span>
                                  <img alt={val.name} src=""></img>
                                </span>
                                <div>
                                  <span>{val.name}</span>
                                  <span>{val.value}</span>
                                  <span>{val.diff}</span>
                                </div>
                                <div>progress bar</div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th> Products </th>
                        <th> Performance </th>
                        <th> Availibility </th>
                        <th> Reliability </th>
                        <th> Security </th>
                        <th> End Usage </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboardData.productList &&
                        dashboardData.productList.length > 0 &&
                        dashboardData.productList.map((val: any, index: any) => {
                          return (
                            <tr key={index}>
                              <td> {val.name} </td>
                              <td> {val.performance} </td>
                              <td> {val.availabilty} </td>
                              <td> {val.reliability} </td>
                              <td> {val.security} </td>
                              <td> {val.endUsage} </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {/* <div className="applications-inner-container">
              <Carousel
                responsive={responsive}
                showDots={false}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
              >
                <div className="overview-item-container">
                  <img src="/public/img/monitor-icons/monitor_view_metrics.jpg" className="item-image" />
                  <div className="item-header">Monitor &amp; Visualize Metrics</div>
                  <div className="item-description">
                    Metrics are numerical values available from Azure Resources helping you understand the health,
                    operation &amp; performance of your system.
                  </div>
                  <a
                    className="overview-blue-button m-t-2"
                    href="/plugins/xformation-perfmanager-ui-plugin/page/dashboard"
                  >
                    Explore Metrics
                  </a>
                </div>
                <div className="overview-item-container">
                  <img src="/public/img/monitor-icons/query_analyze.png" className="item-image" />
                  <div className="item-header">Query &amp; Analyze Logs</div>
                  <div className="item-description">
                    Logs are activity logs, diagnostic logs and telemetry from monitoring solutions; Analytics queries
                    help with troubleshooting &amp; visualizations.
                  </div>
                  <button className="overview-blue-button m-t-2">Search Logs</button>
                </div>
                <div className="overview-item-container">
                  <img src="/public/img/monitor-icons/alert_actions.png" className="item-image" />
                  <div className="item-header">Setup Alert &amp; Actions</div>
                  <div className="item-description">
                    Alerts notify you of critical conditions and potentially take corrective automated actions based on
                    triggers from metrics or logs.
                  </div>
                  <a
                    className="overview-blue-button m-t-2"
                    href="/plugins/xformation-alertmanager-ui-plugin/page/monitoralerts"
                  >
                    Manage Alert
                  </a>
                </div>
                <div className="overview-item-container">
                  <img src="/public/img/monitor-icons/monitor_view_metrics.jpg" className="item-image" />
                  <div className="item-header">Monitor &amp; Visualize Metrics</div>
                  <div className="item-description">
                    Metrics are numerical values available from Azure Resources helping you understand the health,
                    operation &amp; performance of your system.
                  </div>
                  <a
                    className="overview-blue-button m-t-2"
                    href="/plugins/xformation-perfmanager-ui-plugin/page/dashboard"
                  >
                    Explore Metrics
                  </a>
                </div>
                <div className="overview-item-container">
                  <img src="/public/img/monitor-icons/query_analyze.png" className="item-image" />
                  <div className="item-header">Query &amp; Analyze Logs</div>
                  <div className="item-description">
                    Logs are activity logs, diagnostic logs and telemetry from monitoring solutions; Analytics queries
                    help with troubleshooting &amp; visualizations.
                  </div>
                  <button className="overview-blue-button m-t-2">Search Logs</button>
                </div>
                <div className="overview-item-container">
                  <img src="/public/img/monitor-icons/alert_actions.png" className="item-image" />
                  <div className="item-header">Setup Alert &amp; Actions</div>
                  <div className="item-description">
                    Alerts notify you of critical conditions and potentially take corrective automated actions based on
                    triggers from metrics or logs.
                  </div>
                  <a
                    className="overview-blue-button m-t-2"
                    href="/plugins/xformation-alertmanager-ui-plugin/page/monitoralerts"
                  >
                    Manage Alert
                  </a>
                </div>
              </Carousel>
            </div> */}
          </div>
        </div>
        <div className="overview-container">
          <div className="applications-container">
            <div className="header">
              <div className="heading">Dashboards</div>
            </div>
            <div className="applications-inner-container">
              <div className="charts-container row">
                <div className="chart-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="chart-inner alerts">
                    <div className="label">
                      Top Alerts Today
                      <i className="fa fa-arrows-alt"></i>
                    </div>
                    <div className="chart-data-table">
                      <table className="table">
                        <tbody>
                          <tr className="chart-header">
                            <th>Name</th>
                            <th>Severity</th>
                            <th>Time</th>
                          </tr>
                          {this.createTopAlertsTodayTable()}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="chart-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="chart-inner current">
                    <div className="label">
                      Current Wait Time
                      <i className="fa fa-arrows-alt"></i>
                    </div>
                    <div className="row">
                      <div className="col-sm-5 p-r-0">
                        <div className="current-text">
                          21 <sub>min</sub>
                        </div>
                        <div className="current-today-text">Today</div>
                      </div>
                      <div className="col-sm-7 p-l-20">
                        <div className="current-responce-time-chart">
                          <CurrentAvrageWaitTimeChart />
                        </div>
                      </div>
                    </div>
                    <div className="current-bottom row">
                      <div className="col-sm-8">
                        <select name="avgWaitTimeSelectBox" onChange={(e) => this.onSelectAvgWaitDate(e)}>
                          {this.createOptionForAvgWaitTime()}
                        </select>
                      </div>
                      <div className="col-sm-4 minutes-text">{dailyAvgWaitTime}&nbsp;hours</div>
                    </div>
                  </div>
                </div>
                <div className="chart-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="chart-inner alert-volume">
                    <div className="label">
                      Alert Volume
                      <i className="fa fa-arrows-alt"></i>
                    </div>
                    <div className="current-time-chart">
                      <AlertVolumeChart />
                    </div>
                  </div>
                </div>
                <div className="chart-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="chart-inner alerts">
                    <div className="label">
                      Alert Volume By Status
                      <i className="fa fa-arrows-alt"></i>
                    </div>
                    <div className="current-time-chart">
                      <AlertVolumeByStatusChart />
                    </div>
                  </div>
                </div>
                <div className="chart-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="chart-inner alerts">
                    <div className="label">Alert Volume Analysis</div>
                    <div className="current-time-chart">
                      <AlertVolumeAnalysis />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={organizationModal} className="analytics-modal-container">
          <ModalHeader>Setup Organization</ModalHeader>
          <ModalBody style={{ overflowY: 'auto', overflowX: 'hidden' }}>
            <div className="d-block width-100">
              <div className="form-group">
                <label style={{ display: 'inline' }} htmlFor="organizationName">
                  Organization:
                </label>
                <input
                  placeholder=""
                  name="organizationName"
                  value={organizationName}
                  onChange={this.handleStateChange}
                  style={{
                    borderBottom: '1px solid #ababab',
                    marginLeft: '15px',
                  }}
                />
              </div>
              {isSubmitted && (organizationName === '' || (organizationName && organizationName.trim() === '')) && (
                <div style={{ color: 'red' }}>Pleaes enter organization name</div>
              )}
            </div>
            <div className="d-block text-right">
              <button
                disabled={isLoading}
                className="analytics-blue-button m-r-0 continue"
                onClick={this.onClickSubmit}
                style={{ backgroundColor: isLoading ? '#93b7ff' : '#3b7cff' }}
              >
                Submit
              </button>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Overview;
