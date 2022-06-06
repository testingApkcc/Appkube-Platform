import * as React from 'react';
// import { Breadcrumbs } from '../Breadcrumbs';
import 'react-circular-progressbar/dist/styles.css';
// import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Link } from 'react-router-dom';

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
			<div className="owrkflow-project-wise-container">
				<div className="project-wise-page-container">
					<div className="project-wise-status">
						<div className="status-fliter">
							<div className="row d-flex align-items-center justify-content-center">
								<div className="col-lg-4">
									<div className="project-status-heading">Project Status</div>
								</div>
								<div className="col-lg-4">
									<div className="filler-search">
										<select>
											<option>Sort by</option>
											<option>Sort by 1</option>
											<option>Sort by 2</option>
											<option>Sort by 3</option>
										</select>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="search-bar">
										<input type="text" className="control-form" placeholder="Search Usecase" />
										<i className="fa fa-search" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>
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
					<div className="row">
						<div className="col-lg-4">
							<div><label>Assigned To</label></div>
							<div>
								<div>
									<img style={{borderRadius:"13px"}} width='50px' height='50px' src="https://www.pinoytechnoguide.com/wp-content/uploads/2021/10/vivo-X70-sample-picture-person-portrait-mode.jpg" alt="image" />
									<strong>Angela Moss</strong>
									<p>Project Manager</p>
								</div>
								<div>
									<p><strong>Current Task - User Document</strong></p>
									<p>Total Task - 10</p>
								</div>
							</div>
							<div><label>Details</label></div>
							<div>
								<div><label>Assigned date</label><p>20/05/2022</p></div>
								<div><label>Planned start date</label><p>27/05/2022</p></div>
								<div><label>Actual start date</label><p>27/05/2022</p></div>
								<div><label>Deviation</label><p>0 Days</p></div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className='row'><button className="col-9">View Detailed Log</button>
								<p><label>Sort By</label>:<Link to={""}>Most Recent </Link></p>
							</div>
							<div>
								<p><strong>Task Created</strong> Day 1</p>
								<p>create by Zakir 25 Feb 2021 at 03.01 PM</p>
							</div>
							<div>
								<p><strong>Task Created</strong> Day 1</p>
								<p>create by Zakir 25 Feb 2021 at 03.01 PM</p>
							</div>
							<div>
								<p><strong>Task Created</strong> Day 1</p>
								<p>create by Zakir 25 Feb 2021 at 03.01 PM</p>
							</div>
							<div>
								<p><strong>Task Created</strong> Day 1</p>
								<p>create by Zakir 25 Feb 2021 at 03.01 PM</p>
							</div>
						</div>
						<div className="col-lg-12">
							<strong>Updates and Comments</strong>
							<div>
								<input type="text" style={{width:"1615px", height:"50px"}} placeholder='Add new comment here'/> 
								<div>
									<img width='30px' height='30px' style={{borderRadius:"50%"}}src="https://www.pinoytechnoguide.com/wp-content/uploads/2021/10/vivo-X70-sample-picture-person-portrait-mode.jpg" alt="image"/>
									<p><Link to="">Angela Moss</Link> Added a comment - 30 minutes ago</p>
									<p>Code is developed and updated in GitHub</p>
									<div><label>comment</label> <Link to=''> Like</Link></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
