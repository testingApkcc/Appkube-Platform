import * as React from 'react';
// import { Breadcrumbs } from '../Breadcrumbs';
import 'react-circular-progressbar/dist/styles.css';
// import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export class OverView extends React.Component<any, any> {
	createStreamRef: any;
	newStreamRef: any;
	manageOutputRef: any;
	allEventRef: any;
	constructor(props: any) {
		super(props);
		this.state = {
			tcpInputs: [],
			openCreateMenu: false,
			streamTableData: [],
			indexSets: [],
		};

	}

	render() {
		return (
			<>
				<div className="project-wise-status">
					<div className="project-wise-table">
						<div className="table">
							<div className="thead">
								<div className="th">Usecase </div>
								<div className="th">Requirements</div>
								<div className="th">Mock Development</div>
								<div className="th">Actual Development</div>
								<div className="th">CI/CD Test</div>
								<div className="th">Staging/Release</div>
								<div className="th last">Publish/Operate</div>
							</div>
							<div className="tbody">
								<div className="tr">
									<div className="td">Usecase 1</div>
									<div className="td"><i className="fa fa-check green" aria-hidden="true"></i></div>
									<div className="td"><i className="fa fa-check green" aria-hidden="true"></i></div>
									<div className="td"><i className="fa fa-check orange" aria-hidden="true"></i></div>
									<div className="td"></div>
									<div className="td"></div>
									<div className="td"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="overview-inner-content">
					<div className="row">
						<div className="col-lg-4">
							<div className="overview-left-content">
								<div className="assigned-content">
									<label>Assigned To </label>
									<div className="assigned-box">
										<div className="user-datails">
											<div className="user-image">
												<img src="https://www.pinoytechnoguide.com/wp-content/uploads/2021/10/vivo-X70-sample-picture-person-portrait-mode.jpg" alt="image" />
											</div>
											<div className="user-text">
												<strong>Angela Moss</strong>
												<p>Project Manager</p>
											</div>
										</div>
										<div className="user-content">
											<p><strong>Current Task - User Document</strong></p>
											<span>Total Task - 10</span>
										</div>
									</div>
								</div>
								<div className="assigned-content">
									<label>Details</label>
									<div className="assigned-box">
										<ul>
											<li><label>Assigned date</label><span>20/05/2022</span></li>
											<li><label>Planned start date</label><span>27/05/2022</span></li>
											<li><label>Actual start date</label><span>27/05/2022</span></li>
											<li><label>Deviation</label><span>0 Days</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="overview-right-content">
								<div className="overview-heading">
									<div className="heading-left">
										<button type="button" className="btn btn-primary detailed-btn">View Detailed Log</button>
									</div>
									<div className="heading-right">
										<label>Sort By&#58;</label>  <Link to={""}>Most Recent </Link>
									</div>
								</div>
								<div className="overview-right-inner-content">
									<SimpleBar style={{ maxHeight: 380 }}>
										<ul>
											<li>
												<p><strong>Task Created</strong> Day 1</p>
												<span>Created by Zakir on 25 Feb 2021 at 03.00PM</span>
											</li>
											<li>
												<p><strong>Task Assigned</strong></p>
												<span>Assigned by Zakir to Ganesh on 25 Feb 2021 at 03.01PM</span>
											</li>
											<li>
												<p><strong>Dashboard Details</strong> Day 1</p>
												<span>Filled in by Ganesh on 25 Feb 2021 at 04.00PM</span>
											</li>
											<li>
												<p><strong>Create Edit Dashboard</strong> Day 1</p>
												<span>Ganesh Started working on creating dashboard on 25 Feb 2021 at 04.15PM</span>
											</li>
											<li>
												<p><strong>Import Dashboard</strong> Day 1</p>
												<span>create by Zakir 25 Feb 2021 at 03.01 PM</span>
											</li>
											<li>
												<p><strong>Import Dashboard</strong> Day 1</p>
												<span>create by Zakir 25 Feb 2021 at 03.01 PM</span>
											</li>
											<li>
												<p><strong>Import Dashboard</strong> Day 1</p>
												<span>create by Zakir 25 Feb 2021 at 03.01 PM</span>
											</li>
											<li>
												<p><strong>Import Dashboard</strong> Day 1</p>
												<span>create by Zakir 25 Feb 2021 at 03.01 PM</span>
											</li>
											<li>
												<p><strong>Import Dashboard</strong> Day 1</p>
												<span>create by Zakir 25 Feb 2021 at 03.01 PM</span>
											</li>
											<li>
												<p><strong>Import Dashboard</strong> Day 1</p>
												<span>create by Zakir 25 Feb 2021 at 03.01 PM</span>
											</li>
											<li>
												<p><strong>Import Dashboard</strong> Day 1</p>
												<span>create by Zakir 25 Feb 2021 at 03.01 PM</span>
											</li>
											<li>
												<p><strong>Import Dashboard</strong> Day 1</p>
												<span>create by Zakir 25 Feb 2021 at 03.01 PM</span>
											</li>
											<li>
												<p><strong>Import Dashboard</strong> Day 1</p>
												<span>create by Zakir 25 Feb 2021 at 03.01 PM</span>
											</li>
										</ul>
									</SimpleBar>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="updates-comments-section">
								<label>Updates and Comments</label>
								<div className="update-content-box">
									<div className="search-bar">
										<input type="text" className="control-form" placeholder='Add new comment here' />
									</div>
									<div className="user-comments-content">
										<div className="user-image">
											<img src="https://www.pinoytechnoguide.com/wp-content/uploads/2021/10/vivo-X70-sample-picture-person-portrait-mode.jpg" alt="image" />
										</div>
										<div className="user-comments-text">
											<div className="user-name">
												<p><Link to="">Angela Moss</Link>  Added a comment - 30 minutes ago</p>
											</div>
											<div className="user-text">
												<p>Code is developed and updated in GitHub</p>
											</div>
											<div className="user-coment">
												<label>comment</label> <Link to=''> Like</Link>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
