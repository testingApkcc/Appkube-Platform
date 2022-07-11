// import { values } from 'lodash';
import * as React from 'react';
import downloadIcon from '../../img/projectoverview/download-icon.png';
import overviewMenu1 from '../../img/projectoverview/overview-menu1.png';
import overviewMenu2 from '../../img/projectoverview/overview-menu2.png';
import overviewMenu3 from '../../img/projectoverview/overview-menu3.png';
import overviewMenu4 from '../../img/projectoverview/overview-menu4.png';
import overviewMenu5 from '../../img/projectoverview/overview-menu5.png';
import overviewMenu6 from '../../img/projectoverview/overview-menu6.png';
import overviewMenu7 from '../../img/projectoverview/overview-menu7.png';
import { Link } from 'react-router-dom';

export class CreateUsecase extends React.Component<any, any> {
	id: any;
	constructor(props: any) {
		super(props);
		this.state = {
			subStageDetails: { subStageName: '', assignto: '', startDate: '', endDate: '', comments: '' },
			stages: [
				{ name: 'Requirements', description: '', assignedTo: '', details: [] },
				{ name: 'Mock Development', description: '', assignedTo: '', details: [] },
				{ name: 'Actual Development', description: '', assignedTo: '', details: [] },
				{ name: 'CI/CD/TEST', description: '', assignedTo: '', details: [] },
				{ name: 'Stage / Release', description: '', assignedTo: '', details: [] },
				{ name: 'Publish/Operate', description: '', assignedTo: '', details: [] }
			],
			usecase: { name: '' },
			isSubmitted: false,
			subStageName: '',
			activeIndex: -1,
			useCaseList: [
				{ name: 'New Usecase', id: '1', img: overviewMenu1 },
				{ name: 'Receive RFQ', id: '2', img: overviewMenu2 },
				{ name: 'Kanban', id: '3', img: overviewMenu3 },
				{ name: 'Setup Committee', id: '4', img: overviewMenu4 },
				{ name: 'Approval Requisation', id: '5', img: overviewMenu5 },
				{ name: 'Approved Requisation', id: '6', img: overviewMenu6 },
				{ name: 'New RFQ', id: '7', img: overviewMenu7 },
				{ name: 'Conditional Approval', id: '8', img: overviewMenu1 }
			]
		};
		this.id = 10;
	}

	// const { id } = useParams();
	// const [usecase, setUsecase] = useState({});
	// const [isSubmitted, setSubmitted] = useState(false);
	// const [stages, setStaging] = useState([]);

	// useEffect(() => {
	//   if (id && id != '') {
	//     props.dispatch(WorkflowAction.getWorkflowEditDetail({ 'id': id }));
	//   } else {
	//     setUsecase({});
	//     setStaging([]);
	//   }
	// }, [id]);

	// useEffect(() => {
	//   if (props.get_workflow_data_status === status.SUCCESS && id && id !== '') {
	//     if (props.get_workflow_data) {
	//       let data = {
	//         'assignTo': props.get_workflow_data.assignTo,
	//         'description': props.get_workflow_data.description,
	//         'id': props.get_workflow_data.id,
	//         'name': props.get_workflow_data.name,
	//       }
	//       setUsecase(data);
	//       setStaging(JSON.parse(JSON.stringify(props.get_workflow_data.stages)));
	//     }
	//   }
	// }, [props.get_workflow_data_status])

	// useEffect(() => {
	//   if (props.edit_workflow_status === status.SUCCESS) {
	//     if (props.edit_workflow_data) {
	//       navigate(`/workflow/${props.edit_workflow_data.id}`, { replace: true })
	//     }
	//   }
	// }, [props.edit_workflow_status])

	handleStateChange = (e: any) => {
		const { name, value } = e.target;
		const { usecase } = this.state;
		this.setState({ usecase: { ...usecase, [name]: value } });
	};

	handleStageDetail = (e: any, index: any) => {
		const { name, value } = e.target;
		const { stages } = this.state;
		stages[index] = {
			...stages[index],
			[name]: value
		};
		this.setState({ stages: JSON.parse(JSON.stringify(stages)) });
	};

	addDetails = (index: any) => {
		let { activeIndex, subStageName, stages } = this.state;
		// if (index === activeIndex) {
		// 	activeIndex = -1;
		// } else {
		activeIndex = index;
		// }
		// if (subStageName) {
		// if (stages[activeIndex].details.length > 0) {
		//   let existName = -1;
		//   for (let i = 0; i < stages[activeIndex].details.length; i++) {
		//     if (stages[activeIndex].details[i].name === subStageName) {
		//       existName = 1;
		//     }
		//   }
		//   if (existName === -1) {
		//     let obj = { name: subStageName, ...JSON.parse(JSON.stringify(this.state.subStageDetails)) };
		//     stages[activeIndex].details.push(obj);
		//   }
		// } else {
		let obj = { name: subStageName, ...JSON.parse(JSON.stringify(this.state.subStageDetails)) };
		if (stages[activeIndex].details && stages[activeIndex].details.length < 5) {
			stages[activeIndex].details.push(obj);
		}
		this.setState({ stages, subStageName: '', activeIndex });
	};

	validateForm = (submitted: any) => {
		const { usecase, stages } = this.state;
		const validObj = {
			isValid: true,
			message: ''
		};
		let isValid = true;
		const retData = {
			name: validObj,
			description: validObj,
			assignTo: validObj,
			stageDetail: validObj,
			isValid
		};
		if (submitted) {
			if (!usecase.name) {
				retData.name = {
					isValid: false,
					message: 'Name is required'
				};
				isValid = false;
			}
			if (!usecase.description) {
				retData.description = {
					isValid: false,
					message: 'Description is required'
				};
				isValid = false;
			}
			if (!usecase.assignTo) {
				retData.assignTo = {
					isValid: false,
					message: 'Assig to is required'
				};
				isValid = false;
			}
			if (stages && stages.length > 0) {
				for (let i = 0; i < stages.length; i++) {
					if (!stages[i].description || !stages[i].assignedTo || !stages[i].name) {
						retData.stageDetail = {
							isValid: false,
							message: 'Stage Detail is required'
						};
						isValid = false;
					}
				}
			}
		}
		retData.isValid = isValid;
		return retData;
	};

	submitWorkflow = () => {
		// const { usecase, stages } = this.state;
		this.setState({ isSubmitted: true });

		// const errorData = this.validateForm(true);
		// if (errorData.isValid) {
		//   let sendData = {
		//     ...usecase,
		//     stages,
		//     id: this.id
		//   }
		//   if (this.id && this.id !== '') {
		//     // this.props.dispatch(WorkflowAction.editWorkflow(sendData));
		//   } else {
		//     // this.props.dispatch(WorkflowAction.createNewWorkflow(sendData));
		//   }
		// }
	};

	// addMoreworkflowStage = () => {
	// 	let { stages } = this.state;
	// 	this.setState({ stages: [ ...stages, { name: '', description: '', assignedTo: '' } ] });
	// };

	handleSubStageName = (index: any, e: any) => {
		const { activeIndex, stages } = this.state;
		const { name, value } = e.target;
		stages[activeIndex].details[index][name] = value;
		console.log(stages[activeIndex].details[index]);
		this.setState({ stages });
	};

	removeSubString = (stageIndex: any, subStringIndex: any) => {
		const { stages } = this.state;
		this.state.stages[stageIndex].details.splice(subStringIndex, 1);
		this.setState({ stages });
	};

	handleSubStageData = (e: any, i: any, index: any) => {
		const { name, value } = e.target;
		const { stages } = this.state;
		let details = stages[i].details[index];
		details[name] = value;
		this.setState({ stages });
	};

	displayUseCaseList = () => {
		const { useCaseList } = this.state;
		let retData = [];
		if (useCaseList && useCaseList.length > 0) {
			for (let i = 0; i < useCaseList.length; i++) {
				retData.push(
					<li className={i == 0 ? 'active' : ''}>
						{/* <Link to="/"> */}
						<img src={useCaseList[i].img} alt="" />
						<span>{useCaseList[i].name}</span>
						{/* </Link> */}
					</li>
				);
			}
		}
		return retData;
	};

	render() {
		const errorData = this.validateForm(this.state.isSubmitted);
		const { stages, activeIndex } = this.state;
		return (
			<div className="project-over-view-container">
				<div className="project-over-view-section">
					<div className="fliter-container">
						<div className="row">
							<div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-xs-12">
								<div className="heading">Procurement Workflow management</div>
							</div>
							<div className="col-xl-7 col-lg-8 col-md-12 col-sm-12 col-xs-12">
								<div className="fliter-right-content">
									<div className="image">
										<img src={downloadIcon} alt="" />
									</div>
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
											<input
												type={'Search for...'}
												className="input-group-text"
												placeholder={'Search for...'}
											/>
										</div>
									</div>
									<Link
										to="/a/xformation-workflow-engine/project-overview"
										className="btn-primary pro-overview-btn"
									>
										<i className="fas fa-chevron-left" /> Back
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="project-over-view-inner-content">
						<div className="project-over-view-left-content">
							<div className="sidebar">
								<ul>{this.displayUseCaseList()}</ul>
							</div>
						</div>
						<div className="project-over-view-right-content">
							<div className="create-new-usecase">
								<div className="basic-details">
									<h4>Basic Details</h4>
									<div className="input-group">
										<label>Usecase Name</label>
										<input
											className="form-control name-usecase"
											type="text"
											name="name"
											placeholder="name of usecase"
										/>
									</div>
									{errorData && errorData.name && <span>{errorData.name.message}</span>}
									<div className="input-group">
										<label>Usecase Description</label>
										<textarea
											className="form-control"
											rows={3}
											name="description"
											placeholder="name of usecase"
										/>
									</div>
									{errorData && errorData.description && <span>{errorData.description.message}</span>}
									<div className="input-group menu-dropdown">
										<label>Assign To</label>
										<select
											name="assignTo"
											className="assign"
											onChange={(e: any) => this.handleStateChange(e)}
										>
											<option value="">--select--</option>
											<option value="1">abc</option>.
											<option value="2">def</option>
											<option value="2">xyz</option>
										</select>
									</div>
									{errorData && errorData.assignTo && <span>{errorData.assignTo.message}</span>}
								</div>
								<div className="workflow-detail">
									<h4>Workflow Stage Detail</h4>
								</div>
								{errorData &&
								errorData.stageDetail && <span className="error">{errorData.stageDetail.message}</span>}
								{stages &&
									stages.length > 0 &&
									stages.map((val: any, i: any) => {
										return (
											<div className="add-workflow-list">
												<span>{i + 1}</span>
												<div className="workflow-type">
													<input
														className="form-control"
														type="text"
														name="name"
														placeholder="Enter your workflow type"
														value={val.name}
														onChange={(e) => this.handleStageDetail(e, i)}
													/>
												</div>
												<div className="workflow-details-content">
													<div className="workflow-dropdown">
														<label>Assign To</label>
														<select
															name="assignedTo"
															className="assign"
															value={val.assignedTo}
															onChange={(e) => this.handleStageDetail(e, i)}
														>
															<option value="">--select--</option>
															<option value="1">abc</option>
															<option value="2">def</option>
															<option value="3">xyz</option>
														</select>
													</div>
													<div className="description">
														<label>Description</label>
														<input
															className="form-control"
															name="description"
															placeholder="describe task and checklist to be followed at this stage"
															value={val.description}
															onChange={(e) => this.handleStageDetail(e, i)}
														/>
													</div>
												</div>
												{/*  */}
												<button className="add-stage-btn" onClick={(e) => this.addDetails(i)}>
													<div className="d-inline-block">
														<i className="fa fa-plus" aria-hidden="true" />
													</div>Add Stage{' '}
												</button>

												{this.state.activeIndex === i && (
													<div className="requirement-details">
														<div className="requirement-inner-content">
															{val.details &&
															val.details.length > 0 && (
																<h4 className="heading">
																	Requirement Sub-Stage details
																</h4>
															)}
															{val.details &&
															val.details.length > 0 && (
																<table>
																	<thead>
																		<tr>
																			<th />
																			<th>Assign to</th>
																			<th>Start Date</th>
																			<th>End Date</th>
																			<th>Comments</th>
																		</tr>
																	</thead>
																	<tbody>
																		{val.details.map(
																			(
																				{
																					name,
																					assignto,
																					startDate,
																					endDate,
																					comments
																				}: any,
																				index: any
																			) => (
																				<tr>
																					<td className="user-name">
																						<div className="add-stage-name">
																							<input
																								type="text"
																								className="form-control"
																								name="subStageName"
																								value={
																									stages[activeIndex]
																										.details[index]
																										.subStageName
																								}
																								onChange={(e) =>
																									this.handleSubStageName(
																										index,
																										e
																									)}
																							/>
																						</div>
																					</td>
																					<td>
																						<select
																							name="assignto"
																							id="assignto"
																							onChange={(e) =>
																								this.handleSubStageData(
																									e,
																									i,
																									index
																								)}
																						>
																							<option value="">
																								--select--
																							</option>
																							<option value="1">
																								abc
																							</option>
																							<option value="2">
																								def
																							</option>
																							<option value="3">
																								xyz
																							</option>
																						</select>
																					</td>
																					<td className="start-date">
																						<input
																							type="date"
																							className="form-control"
																							name="startDate"
																							value={startDate}
																							placeholder="Select"
																							onChange={(e) =>
																								this.handleSubStageData(
																									e,
																									i,
																									index
																								)}
																						/>
																					</td>
																					<td className="start-date end-date">
																						<input
																							type="date"
																							className="form-control"
																							name="endDate"
																							placeholder="Select"
																							onChange={(e) =>
																								this.handleSubStageData(
																									e,
																									i,
																									index
																								)}
																							value={endDate}
																						/>
																					</td>
																					<td className="comment-box">
																						<input
																							type="comments"
																							className="form-control"
																							name="comments"
																							placeholder="Select"
																							onChange={(e) =>
																								this.handleSubStageData(
																									e,
																									i,
																									index
																								)}
																							value={comments}
																						/>
																					</td>
																					<td
																						className="remove-btn"
																						onClick={() => {
																							this.removeSubString(
																								i,
																								index
																							);
																						}}
																					>
																						<i
																							className="fa fa-times"
																							aria-hidden="true"
																						/>
																					</td>
																				</tr>
																			)
																		)}
																	</tbody>
																</table>
															)}
														</div>
													</div>
												)}
											</div>
										);
									})}
								{stages &&
								stages.length > 0 && (
									<div className="basic-details-btn">
										<button className="btn btn-primary" onClick={this.submitWorkflow}>
											Save
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
