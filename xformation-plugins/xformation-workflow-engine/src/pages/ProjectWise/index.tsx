import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import headerIcon from '../../img/header-icon.png';
import resourcesUserImg from '../../img/resources-user-img.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import 'simplebar/dist/simplebar.min.css';

export class ProjectWise extends React.Component<any, any> {
	breadCrumbs: any;
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
			useCaseList: [
				{
					name: 'Usecase 1',
					requirements: 90,
					mockdevlopment: 95,
					actualDevlopment: 80,
					cdTest: 0,
					release: 0,
					publish: 0
				},
				{
					name: 'Usecase 2',
					requirements: 90,
					mockdevlopment: 95,
					actualDevlopment: 92,
					cdTest: 70,
					release: 0,
					publish: 0
				},
				{
					name: 'Usecase 3',
					requirements: 90,
					mockdevlopment: 95,
					actualDevlopment: 80,
					cdTest: 60,
					release: 0,
					publish: 0
				},
				{
					name: 'Usecase 4',
					requirements: 90,
					mockdevlopment: 95,
					actualDevlopment: 97,
					cdTest: 92,
					release: 90,
					publish: 80
				},
				{
					name: 'Usecase 5',
					requirements: 90,
					mockdevlopment: 95,
					actualDevlopment: 93,
					cdTest: 96,
					release: 97,
					publish: 90
				},
				{
					name: 'Usecase 6',
					requirements: 90,
					mockdevlopment: 95,
					actualDevlopment: 90,
					cdTest: 96,
					release: 70,
					publish: 0
				},
				{
					name: 'Usecase 7',
					requirements: 90,
					mockdevlopment: 95,
					actualDevlopment: 80,
					cdTest: 0,
					release: 0,
					publish: 0
				},
				{
					name: 'Usecase 8',
					requirements: 90,
					mockdevlopment: 95,
					actualDevlopment: 99,
					cdTest: 100,
					release: 95,
					publish: 90
				}
			],
			searchKey: ''
		};
		this.breadCrumbs = [
			{
				label: 'Home',
				route: `/`
			},
			{
				label: 'Kubernetes | Overview',
				isCurrentPage: true
			}
		];
	}

	searchUseCase = (e: any) => {
		const { value, name } = e.target;
		const { useCaseList } = this.state;
		this.setState({
			[name]: value
		});
		if (useCaseList && useCaseList.length > 0) {
			for (let i = 0; i < useCaseList.length; i++) {
				if (value && value !== '') {
					if (useCaseList[i].name.toLowerCase().indexOf(value) === -1) {
						useCaseList[i].isHide = true;
					} else {
						useCaseList[i].isHide = false;
					}
				} else {
					useCaseList[i].isHide = false;
				}
			}
		}
		this.setState({
			useCaseList
		});
	};

	render() {
		const { useCaseList, searchKey } = this.state;
		return (
			<div className="owrkflow-project-wise-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="WORKFLOW MANAGEMENT" />
				<div className="project-wise-page-container">
					<div className="project-wise-page-heading">
						<div className="row">
							<div className="col-lx-10 col-lg-10 col-md-10 col-sm-10 col-xs-10">
								<div className="heading-content-left">
									<div className="heading-icon">
										<img src={headerIcon} alt="" />
									</div>
									<div className="heading-content">
										<h3>Xformation Platform</h3>
										<span>Last updated by Siddhesh D 24 min ago</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim, quis
											nostrud exercitation ullamco laboris nisi...
										</p>
									</div>
								</div>
							</div>
							<div className="col-lx-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
								<div className="heading-content-right">
									<span>
										<Link to="/a/xformation-workflow-engine/dashboard">
											<i className="fa fa-times" aria-hidden="true" />
										</Link>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="project-wise-status">
						<div className="status-fliter">
							<div className="row d-flex align-items-center justify-content-center">
								<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<div className="project-status-heading">Project Status</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<div className="filler-search">
										<select>
											<option>Sort by</option>
											<option>Sort by 1</option>
											<option>Sort by 2</option>
											<option>Sort by 3</option>
										</select>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<div className="search-bar">
										<input
											type="text"
											className="control-form"
											name="searchKey"
											onChange={this.searchUseCase}
											value={searchKey}
											placeholder="Search Usecase"
										/>
										<i className="fa fa-search" aria-hidden="true" />
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
									{useCaseList &&
										useCaseList.map((val: any, index: any) => {
											if (!val.isHide) {
												return (
													<div className="tr" key={`usecase-${index}`}>
														<div className="td">
															<Link
																to={`/a/xformation-workflow-engine/procurement-detail/${index}`}
															>
																{val.name}
															</Link>
														</div>
														<div className="td">
															{val.requirements > 0 && (
																<i
																	className={
																		val.requirements >= 90 ? (
																			'fa fa-check green'
																		) : (
																			'fa fa-check orange'
																		)
																	}
																	aria-hidden="true"
																/>
															)}
														</div>
														<div className="td">
															{val.mockdevlopment > 0 && (
																<i
																	className={
																		val.mockdevlopment >= 90 ? (
																			'fa fa-check green'
																		) : (
																			'fa fa-check orange'
																		)
																	}
																	aria-hidden="true"
																/>
															)}
														</div>
														<div className="td">
															{val.actualDevlopment > 0 && (
																<i
																	className={
																		val.actualDevlopment >= 90 ? (
																			'fa fa-check green'
																		) : (
																			'fa fa-check orange'
																		)
																	}
																	aria-hidden="true"
																/>
															)}
														</div>
														<div className="td">
															{val.cdTest > 0 && (
																<i
																	className={
																		val.cdTest >= 90 ? (
																			'fa fa-check green'
																		) : (
																			'fa fa-check orange'
																		)
																	}
																	aria-hidden="true"
																/>
															)}
														</div>
														<div className="td">
															{val.release > 0 && (
																<i
																	className={
																		val.release >= 90 ? (
																			'fa fa-check green'
																		) : (
																			'fa fa-check orange'
																		)
																	}
																	aria-hidden="true"
																/>
															)}
														</div>
														<div className="td">
															{val.publish > 0 && (
																<i
																	className={
																		val.publish >= 90 ? (
																			'fa fa-check green'
																		) : (
																			'fa fa-check orange'
																		)
																	}
																	aria-hidden="true"
																/>
															)}
														</div>
													</div>
												);
											} else {
												return null;
											}
										})}
								</div>
							</div>
						</div>
					</div>
					<div className="project-wise-resources">
						<div className="project-resources-heading">Project Resources</div>
						<div className="project-resources-section">
							<div className="project-resources-inner">
								<div className="project-resources-box">
									<div className="user-content">
										<div className="user-img">
											<img src={resourcesUserImg} alt="" />
										</div>
										<div className="user-text">
											<span>Angela Moss</span>
											<p>Project Manager</p>
										</div>
									</div>
									<div className="resources-progress-heading">
										<h4>Current Task-User Document</h4>
										<span>Total Task- 10</span>
									</div>
									<div className="project-progressbar text-center">
										<CircularProgressbar
											value={66}
											text={`80%`}
											strokeWidth={15}
											styles={buildStyles({
												strokeLinecap: {},
												trailColor: '#E5E7E9',
												pathColor: '#6317c2',
												textColor: 'black'
											})}
										/>
										<p>Task Completed</p>
									</div>
								</div>
								<div className="project-resources-box">
									<div className="user-content">
										<div className="user-img">
											<img src={resourcesUserImg} alt="" />
										</div>
										<div className="user-text">
											<span>Angela Moss</span>
											<p>Project Manager</p>
										</div>
									</div>
									<div className="resources-progress-heading">
										<h4>Current Task-User Document</h4>
										<span>Total Task- 10</span>
									</div>
									<div className="project-progressbar text-center">
										<CircularProgressbar
											value={66}
											text={`80%`}
											strokeWidth={15}
											styles={buildStyles({
												strokeLinecap: {},
												trailColor: '#E5E7E9',
												pathColor: '#6317c2',
												textColor: 'black'
											})}
										/>
										<p>Task Completed</p>
									</div>
								</div>
								<div className="project-resources-box">
									<div className="user-content">
										<div className="user-img">
											<img src={resourcesUserImg} alt="" />
										</div>
										<div className="user-text">
											<span>Angela Moss</span>
											<p>Project Manager</p>
										</div>
									</div>
									<div className="resources-progress-heading">
										<h4>Current Task-User Document</h4>
										<span>Total Task- 10</span>
									</div>
									<div className="project-progressbar text-center">
										<CircularProgressbar
											value={66}
											text={`80%`}
											strokeWidth={15}
											styles={buildStyles({
												strokeLinecap: {},
												trailColor: '#E5E7E9',
												pathColor: '#6317c2',
												textColor: 'black'
											})}
										/>
										<p>Task Completed</p>
									</div>
								</div>
								<div className="project-resources-box">
									<div className="user-content">
										<div className="user-img">
											<img src={resourcesUserImg} alt="" />
										</div>
										<div className="user-text">
											<span>Angela Moss</span>
											<p>Project Manager</p>
										</div>
									</div>
									<div className="resources-progress-heading">
										<h4>Current Task-User Document</h4>
										<span>Total Task- 10</span>
									</div>
									<div className="project-progressbar text-center">
										<CircularProgressbar
											value={66}
											text={`80%`}
											strokeWidth={15}
											styles={buildStyles({
												strokeLinecap: {},
												trailColor: '#E5E7E9',
												pathColor: '#6317c2',
												textColor: 'black'
											})}
										/>
										<p>Task Completed</p>
									</div>
								</div>
								<div className="project-resources-box">
									<div className="user-content">
										<div className="user-img">
											<img src={resourcesUserImg} alt="" />
										</div>
										<div className="user-text">
											<span>Angela Moss</span>
											<p>Project Manager</p>
										</div>
									</div>
									<div className="resources-progress-heading">
										<h4>Current Task-User Document</h4>
										<span>Total Task- 10</span>
									</div>
									<div className="project-progressbar text-center">
										<CircularProgressbar
											value={66}
											text={`80%`}
											strokeWidth={15}
											styles={buildStyles({
												strokeLinecap: {},
												trailColor: '#E5E7E9',
												pathColor: '#6317c2',
												textColor: 'black'
											})}
										/>
										<p>Task Completed</p>
									</div>
								</div>
								<div className="project-resources-box">
									<div className="user-content">
										<div className="user-img">
											<img src={resourcesUserImg} alt="" />
										</div>
										<div className="user-text">
											<span>Angela Moss</span>
											<p>Project Manager</p>
										</div>
									</div>
									<div className="resources-progress-heading">
										<h4>Current Task-User Document</h4>
										<span>Total Task- 10</span>
									</div>
									<div className="project-progressbar text-center">
										<CircularProgressbar
											value={66}
											text={`80%`}
											strokeWidth={15}
											styles={buildStyles({
												strokeLinecap: {},
												trailColor: '#E5E7E9',
												pathColor: '#6317c2',
												textColor: 'black'
											})}
										/>
										<p>Task Completed</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
