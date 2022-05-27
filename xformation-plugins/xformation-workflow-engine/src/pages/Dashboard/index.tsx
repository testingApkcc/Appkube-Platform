import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import rfpImg from '../../img/rfp-img.png';
import resourcesUserImg from '../../img/resources-user-img.png';
// import DateFormat from './DateFormat';
import headerIcon from '../../img/header-icon.png';

export class Dashboard extends React.Component<any, any> {
  breadCrumbs: any;
  constructor(props: any) {
    super(props);
    this.state = {
    };
    this.breadCrumbs = [
      {
        label: 'Home',
        route: `/`,
      },
      {
        label: 'Kubernetes | Overview',
        isCurrentPage: true,
      },
    ];

  }

  render() {
    return (
      <div className="owrkflow-dashboard-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="WORKFLOW MANAGEMENT" />
        <div className="dashboard-container">
          <div className="fliter-container">
            <div className="row">
              <div className="col-md-6">
                <div className="heading">
                  Procurement Workflow management
                </div>
              </div>
              <div className="col-md-6">
                <div className="fliter-search">
                  <div className="fliter-box">
                    <select>
                      <option>Fliter by</option>
                      <option>Fliter by 1</option>
                      <option>Fliter by 2</option>
                      <option>Fliter by 3</option>
                    </select>
                  </div>
                  <div className="fliter-search-box">
                    <input type={'Search for...'} className="input-group-text" placeholder={'Search for...'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashbord-top-section">
            <div className="row">
              <div className="col-lg-4">
                <div className="heading">
                  <h3>{"Dashboard"}</h3>
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="calender">
                  {/* <DateFormat className="d-block" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="progress-rfp-boxs">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="progress-box">
                  <div className="progress-img">
                    <img src={rfpImg} alt="" />
                  </div>
                  <div className="progress-content" >
                    <h3>215</h3>
                    <span>{"Today's RFP"}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="progress-box">
                  <div className="progress-img">
                    <img src={rfpImg} alt="" />
                  </div>
                  <div className="progress-content">
                    <h3>26685</h3>
                    <span>{"Total RFP"}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="progress-box">
                  <div className="progress-img">
                    <div className="mail-icon"><i className="fa fa-envelope"></i></div>
                    <span>&#33;</span>
                  </div>
                  <div className="progress-content">
                    <h3>35</h3>
                    <span>{"Important Emails"}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="progress-box">
                  <div className="progress-img order">
                    <div className="in-progress"></div>
                    <div className="complate-progress"></div>
                  </div>
                  <div className="progress-content">
                    <div className="completed">
                      <h5>2,841</h5>
                      <span>{"Completed Orders"}</span>
                    </div>
                    <div className="in-progrss">
                      <h5>1.456</h5>
                      <span>{"In-progrss Orders"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="average-section">
            <div className="row">
              <div className="col-md-6">
                <div className="statistics-graph">
                  <div className="requistions-heading">
                    <h5 className="d-block">{'Workflow Statistics'}</h5>
                  </div>
                  <div className="requistions-graph">

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="statistics-graph">
                  <div className="requistions-heading">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <h5 className="d-block">{'Project Overview'}</h5>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="requistions-dropdown">
                          <div className="opensens-dropdown">
                            <select className="opensens-content">
                              <option value="">Monthly</option>
                              <option value={10}>abc</option>
                              <option value={20}>def</option>
                              <option value={30}>abc</option>
                            </select>
                            <div className="meore-menu-icon">
                              <i className="fa fa-ellipsis-v"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="totalpaid">
                      <div className="paid-content">
                        <span>{"Completed Task"}</span>
                      </div>
                      <div className="paid-content unpaid">
                        <span>{"Pending Task"}</span>
                      </div>
                    </div>
                  </div>
                  {/* <SimpleBar style={{ maxHeight: '300px' }} className="user-content">
                    <div className="chartbar-content">
                      <BarChart
                        width={550}
                        height={255}
                        data={data}
                        margin={{
                          right: 30,
                        }}
                      >
                        <XAxis dataKey="name" />
                        <YAxis tickCount={6} />
                        <Tooltip />
                        <Bar dataKey="TotalUnpaid" fill="#8884d8" />
                        <Bar dataKey="TotalPaid" fill="#82ca9d" />
                      </BarChart>
                    </div>
                  </SimpleBar> */}
                </div>
              </div>
            </div>
          </div>
          <div className="project-resources-section">
            <div className="row">
              <div className="col-md-9">
                <div className="project-list">
                  <div className="heading">
                    <div className="row">
                      <div className="col-md-7">
                        <h5>Project List</h5>
                      </div>
                      <div className="col-md-5">
                        <ul className="tabs">
                          <li className="active">All Projects</li>
                          <li>Completed</li>
                          <li>In Progress</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="projects">
                    <div className="project active">
                      <div className="star-box active">
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="icon">
                        <img src={headerIcon} alt="" />
                      </div>
                      <div className="content">
                        <h4>Xformation Platform</h4>
                        <span>Last updated by Siddhesh D <i className="fa fa-circle"></i> 24 min ago</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                    <div className="project">
                      <div className="star-box">
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="icon">
                        <img src={headerIcon} alt="" />
                      </div>
                      <div className="content">
                        <h4>Xformation Platform</h4>
                        <span>Last updated by Siddhesh D <i className="fa fa-circle"></i> 24 min ago</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                    <div className="project">
                      <div className="star-box">
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="icon">
                        <img src={headerIcon} alt="" />
                      </div>
                      <div className="content">
                        <h4>Xformation Platform</h4>
                        <span>Last updated by Siddhesh D <i className="fa fa-circle"></i> 24 min ago</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                    <div className="project">
                      <div className="star-box">
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="icon">
                        <img src={headerIcon} alt="" />
                      </div>
                      <div className="content">
                        <h4>Xformation Platform</h4>
                        <span>Last updated by Siddhesh D <i className="fa fa-circle"></i> 24 min ago</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                    <div className="project">
                      <div className="star-box">
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="icon">
                        <img src={headerIcon} alt="" />
                      </div>
                      <div className="content">
                        <h4>Xformation Platform</h4>
                        <span>Last updated by Siddhesh D <i className="fa fa-circle"></i> 24 min ago</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                    <div className="project">
                      <div className="star-box">
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="icon">
                        <img src={headerIcon} alt="" />
                      </div>
                      <div className="content">
                        <h4>Xformation Platform</h4>
                        <span>Last updated by Siddhesh D <i className="fa fa-circle"></i> 24 min ago</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="resources-list">
                  <div className="heading">
                    <h5>Resources</h5>
                    <p>All Resources</p>
                  </div>
                  <div className="resources">
                    <div className="resource">
                      <div className="image"><img src={resourcesUserImg} alt="" /></div>
                      <div className="content">
                        <h3>Angela Moss</h3>
                        <p>Project - Xformation</p>
                      </div>
                      <div className="plus-icon">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="resource">
                      <div className="image"><img src={resourcesUserImg} alt="" /></div>
                      <div className="content">
                        <h3>Angela Moss</h3>
                        <p>Project - Xformation</p>
                      </div>
                      <div className="plus-icon">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="resource">
                      <div className="image"><img src={resourcesUserImg} alt="" /></div>
                      <div className="content">
                        <h3>Angela Moss</h3>
                        <p>Project - Xformation</p>
                      </div>
                      <div className="plus-icon">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="resource">
                      <div className="image"><img src={resourcesUserImg} alt="" /></div>
                      <div className="content">
                        <h3>Angela Moss</h3>
                        <p>Project - Xformation</p>
                      </div>
                      <div className="plus-icon">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="resource">
                      <div className="image"><img src={resourcesUserImg} alt="" /></div>
                      <div className="content">
                        <h3>Angela Moss</h3>
                        <p>Project - Xformation</p>
                      </div>
                      <div className="plus-icon">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="resource">
                      <div className="image"><img src={resourcesUserImg} alt="" /></div>
                      <div className="content">
                        <h3>Angela Moss</h3>
                        <p>Project - Xformation</p>
                      </div>
                      <div className="plus-icon">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="resource">
                      <div className="image"><img src={resourcesUserImg} alt="" /></div>
                      <div className="content">
                        <h3>Angela Moss</h3>
                        <p>Project - Xformation</p>
                      </div>
                      <div className="plus-icon">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="resource">
                      <div className="image"><img src={resourcesUserImg} alt="" /></div>
                      <div className="content">
                        <h3>Angela Moss</h3>
                        <p>Project - Xformation</p>
                      </div>
                      <div className="plus-icon">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="resource">
                      <div className="image"><img src={resourcesUserImg} alt="" /></div>
                      <div className="content">
                        <h3>Angela Moss</h3>
                        <p>Project - Xformation</p>
                      </div>
                      <div className="plus-icon">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-overview-section">
            <div className="heading">
              <h5>Project Overview</h5>
            </div>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Total Usecase</th>
                    <th>Project Manager</th>
                    <th>Assigned date</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Activity Logs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong><a href="#">Xformation</a></strong>
                    </td>
                    <td>80</td>
                    <td><span>Ganesh</span></td>
                    <td>15/02/2021</td>
                    <td>7d</td>
                    <td><div className="progress">In progress</div></td>
                    <td><a href="#">View Logs</a></td>
                  </tr>
                  <tr>
                    <td>
                      <strong><a href="#">Procurement</a></strong>
                    </td>
                    <td>95</td>
                    <td><span>Akhila</span></td>
                    <td>17/02/2021</td>
                    <td>5d</td>
                    <td><div className="pending">Pending for review</div></td>
                    <td><a href="#">View Logs</a></td>
                  </tr>
                  <tr>
                    <td>
                      <strong><a href="#">Supply chail</a></strong>
                    </td>
                    <td>70</td>
                    <td><span>Zakir</span></td>
                    <td>15/02/2021</td>
                    <td>7d</td>
                    <td><div className="progress">In progress</div></td>
                    <td><a href="#">View Logs</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="project-overview-section">
            <div className="heading">
              <h5>Project Progress Overview</h5>
            </div>
            <div className="table progress">
              <table>
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Reuirements</th>
                    <th>Mock Development</th>
                    <th>Actual Development</th>
                    <th>CI/CD Test</th>
                    <th>Staging/Release</th>
                    <th>Publish/Operate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={7}></td>
                  </tr>
                  <tr>
                    <td>
                      <strong><a href="#">Xformation</a></strong>
                    </td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check orange"></i></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <strong><a href="#">Procurement</a></strong>
                    </td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check orange"></i></td>
                  </tr>
                  <tr>
                    <td>
                      <strong><a href="#">Supply chail</a></strong>
                    </td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check green"></i></td>
                    <td><i className="fa fa-check orange"></i></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="project-allocation-section">
            <div className="heading">
              <h5>Project Wise Resource Allocation</h5>
            </div>
            <div className="resource-allocation">
              <div className="allocation-box">
                <h3>Xformation</h3>
                <div className="resource-box">
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allocation-box">
                <h3>Xformation</h3>
                <div className="resource-box">
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allocation-box">
                <h3>Xformation</h3>
                <div className="resource-box">
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allocation-box">
                <h3>Xformation</h3>
                <div className="resource-box">
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allocation-box">
                <h3>Xformation</h3>
                <div className="resource-box">
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allocation-box">
                <h3>Xformation</h3>
                <div className="resource-box">
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="resource">
                    <div className="image"><img src={resourcesUserImg} alt="" /></div>
                    <div className="content">
                      <h4>Angela Moss</h4>
                      <p>Employee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-overview-section">
            <div className="heading">
              <h5>Rask wise Resource Progress Overview</h5>
            </div>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Resource Name</th>
                    <th>Reuirements</th>
                    <th>Mock Development</th>
                    <th>Actual Development</th>
                    <th>CI/CD Test</th>
                    <th>Staging/Release</th>
                    <th>Publish/Operate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">Siddhesh</a>
                    </td>
                    <td>4851232</td>
                    <td>Kubernets</td>
                    <td><span>Akhila</span></td>
                    <td>17/022021</td>
                    <td>5d</td>
                    <td><div className="completed">Completed</div></td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">Siddhesh</a>
                    </td>
                    <td>4851232</td>
                    <td>Kubernets</td>
                    <td><span>Akhila</span></td>
                    <td>17/022021</td>
                    <td>5d</td>
                    <td><div className="progress">In progress</div></td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">Siddhesh</a>
                    </td>
                    <td>4851232</td>
                    <td>Kubernets</td>
                    <td><span>Akhila</span></td>
                    <td>17/022021</td>
                    <td>5d</td>
                    <td><div className="completed">Completed</div></td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">Siddhesh</a>
                    </td>
                    <td>4851232</td>
                    <td>Kubernets</td>
                    <td><span>Akhila</span></td>
                    <td>17/022021</td>
                    <td>5d</td>
                    <td><div className="progress">In progress</div></td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">Siddhesh</a>
                    </td>
                    <td>4851232</td>
                    <td>Kubernets</td>
                    <td><span>Akhila</span></td>
                    <td>17/022021</td>
                    <td>5d</td>
                    <td><div className="completed">Completed</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
