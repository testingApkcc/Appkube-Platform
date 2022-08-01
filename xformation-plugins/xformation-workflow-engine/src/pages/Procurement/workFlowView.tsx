import * as React from 'react';
// import { Link } from 'react-router-dom';

export class WorkFlowView extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			usecaseData: {
				name: 'ipsa',
				description: 'Recusandae libero eveniet ducimus.',
				assignTo: 'string',
				id: 3,
				stages: [
					{
						checkList: [
							{ label: 'string', id: 3 },
							{ label: 'string', id: 10 },
							{ label: 'string', id: 6 },
							{ label: 'string', id: 6 },
							{ label: 'string', id: 1 }
						],
						steps: [
							{
								label: 'et',
								description: 'string',
								link: 'https://waino.org',
								status: 'string',
								id: 7
							},
							{
								label: 'eum',
								description: 'string',
								link: 'https://noemi.org',
								status: 'string',
								id: 7
							}
						],
						name: 'quaerat',
						assignedTo: 'string',
						description: 'string',
						id: 7,
						status: 'string'
					},
					{
						checkList: [
							{ label: 'string', id: 6 },
							{ label: 'string', id: 7 },
							{ label: 'string', id: 9 },
							{ label: 'string', id: 8 },
							{ label: 'string', id: 8 }
						],
						steps: [
							{
								label: 'dolores',
								description: 'string',
								link: 'http://camron.com',
								status: 'string',
								id: 9
							},
							{
								label: 'voluptatem',
								description: 'string',
								link: 'https://nicholaus.biz',
								status: 'string',
								id: 7
							}
						],
						name: 'qui',
						assignedTo: 'string',
						description: 'string',
						id: 8,
						status: 'string'
					},
					{
						checkList: [
							{ label: 'string', id: 2 },
							{ label: 'string', id: 7 },
							{ label: 'string', id: 4 },
							{ label: 'string', id: 1 },
							{ label: 'string', id: 2 }
						],
						steps: [
							{
								label: 'corporis',
								description: 'string',
								link: 'http://hershel.com',
								status: 'string',
								id: 6
							},
							{
								label: 'dolorum',
								description: 'string',
								link: 'http://elisabeth.net',
								status: 'string',
								id: 5
							}
						],
						name: 'omnis',
						assignedTo: 'string',
						description: 'string',
						id: 5,
						status: 'string'
					},
					{
						checkList: [
							{ label: 'string', id: 7 },
							{ label: 'string', id: 6 },
							{ label: 'string', id: 4 },
							{ label: 'string', id: 7 },
							{ label: 'string', id: 4 }
						],
						steps: [
							{
								label: 'error',
								description: 'string',
								link: 'https://triston.us',
								status: 'string',
								id: 8
							},
							{
								label: 'aspernatur',
								description: 'string',
								link: 'http://blanca.us',
								status: 'string',
								id: 2
							}
						],
						name: 'veritatis',
						assignedTo: 'string',
						description: 'string',
						id: 6,
						status: 'string'
					},
					{
						checkList: [
							{ label: 'string', id: 5 },
							{ label: 'string', id: 3 },
							{ label: 'string', id: 7 },
							{ label: 'string', id: 10 },
							{ label: 'string', id: 6 }
						],
						steps: [
							{
								label: 'aut',
								description: 'string',
								link: 'https://audie.us',
								status: 'string',
								id: 1
							},
							{
								label: 'provident',
								description: 'string',
								link: 'http://gavin.biz',
								status: 'string',
								id: 3
							}
						],
						name: 'nostrum',
						assignedTo: 'string',
						description: 'string',
						id: 8,
						status: 'string'
					},
					{
						checkList: [
							{ label: 'string', id: 5 },
							{ label: 'string', id: 9 },
							{ label: 'string', id: 4 },
							{ label: 'string', id: 8 },
							{ label: 'string', id: 7 }
						],
						steps: [
							{
								label: 'qui',
								description: 'string',
								link: 'http://candida.us',
								status: 'string',
								id: 10
							},
							{
								label: 'in',
								description: 'string',
								link: 'https://antonette.info',
								status: 'string',
								id: 8
							}
						],
						name: 'non',
						assignedTo: 'string',
						description: 'string',
						id: 4,
						status: 'string'
					}
				]
			},
			activeStage: 0,
			stageList: [
				{
					name: 'Requirements',
					stepList: [
						{
							name: 'Create Usecase Document',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Create Screen Design',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Updating Usecase in Netlifi',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				},
				{
					name: 'Mock Development',
					stepList: [
						{
							name: 'Create API Spec',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Create Postman Test',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Create UI Screen with Mock API',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Create Test API',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				},
				{
					name: 'Actual Development',
					stepList: [
						{
							name: 'Data Design GitHub Page',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'API Source Code in GitHub',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Populate Test data in GitHub',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Junit5 Test in GitHub',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Cucumber BDD tests in GitHub',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Gatling Performance',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Code Review with Tech Lead',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Actual UI-API Integration',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Branch Merge after Review',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						}
					]
				},
				{
					name: 'CI/CD Test',
					stepList: [
						{
							name: 'Create CI/CD Pipeline',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Create Kubernetes Operator',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Link API with GitHub and Netlifi',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Upload Test results in S3 Website',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Upload Test env URL in Netlifi site',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Stage after review',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				},
				{
					name: 'Stage Release',
					stepList: [
						{
							name: 'Stage Test and Review',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Promote to Prod',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'API Security Test in Prod',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Create/Update Release Note',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				},
				{
					name: 'Publish and Operate',
					stepList: [
						{
							name: 'Security & Operation Readiness',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Release Note',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				}
			],
			useCase:{},
		};
	}

	setUseCaseData = (data: any) => {
		console.log(data);
		this.setState({
			useCase: data
		})
	}
	displayUsecase = () => {
		const { usecaseData, activeStage } = this.state;
		let retData = [];
		if (usecaseData && usecaseData.stages) {
			const workflowDetail = usecaseData.stages[activeStage];
			if (workflowDetail && workflowDetail.steps && workflowDetail.steps.length > 0) {
				for (let i = 0; i < workflowDetail.steps.length; i++) {
					let row = workflowDetail.steps[i];
					retData.push(
						<div key={`${i}-usecase`} className="api-code">
							<div className="heading">
								<h5>{row.label}</h5>
								<i className="fa fa-angle-down" aria-hidden="true"></i>
							</div>
							<div className="api-content">
								<label>Github Link:</label>
								<input
									type="text"
									name="link"
									value={row.link}
									onChange={(e) => this.handleStateChange(e, i)}
								/>
								<button
									onClick={() => this.updateStep(row)}
									className="btn btn-primary code-update-btn"
								>
									Update
								</button>
							</div>
						</div>
					);
				}
			}
		}
		return retData;
	};

	displayCheckList = () => {
		const { usecaseData, activeStage } = this.state;
		let retData = [];
		if (usecaseData && usecaseData.stages) {
			const workflowDetail: any = usecaseData.stages[activeStage];
			if (workflowDetail && workflowDetail.checkList && workflowDetail.checkList.length > 0) {
				for (let i = 0; i < workflowDetail.checkList.length; i++) {
					let row = workflowDetail.checkList[i];
					retData.push(
						<div key={i + 'checkbox'} className="requirement-data">
							<input
								type="checkbox"
								checked={row.isChecked}
								onChange={(e) => this.handleStateChangeCheckList(e, i)}
							/>
							<span>{row.label}</span>
						</div>
					);
				}
			}
		}
		return retData;
	};

	getUsecaseStageData = (data: any, index: any) => {
		this.setState({
			activeStage: index
		});
	};

	displayWorkflowStage = () => {
		const { usecaseData, activeStage } = this.state;
		let retData = [];
		if (usecaseData && usecaseData.stages && usecaseData.stages.length > 0) {
			for (let i = 0; i < usecaseData.stages.length; i++) {
				let row = usecaseData.stages[i];
				retData.push(
					<li
						onClick={() => this.getUsecaseStageData(row, i)}
						className={
							row.status == 'completed' ? 'completed' : row.status == 'inprogress' ? 'inprosseg' : ''
						}
					>
						<span>{i + 1}</span>
						<div className={i == activeStage ? 'active form-control' : 'form-control'}>
							<input
								type="text"
								value={row.name}
								name="name"
								onChange={(e) => this.handleStageChange(e, i)}
								readOnly
							/>
						</div>
					</li>
				);
			}
		}
		return retData;
	};

	handleStageChange = (e: any, index: any) => {
		const { usecaseData } = this.state;
		const { name, value } = e.target;
		let stages: any = usecaseData.stages;
		if (usecaseData.stages) {
			stages[index][name] = value;
		}
	};

	handleStateChange = (event: any, index: any) => {
		const { usecaseData, activeStage } = this.state;
		const { name, value } = event.target;
		const workflowDetail: any = usecaseData.stages[activeStage];
		if (workflowDetail.steps) {
			workflowDetail.steps[index][name] = value;
		}
		this.setState({
			usecaseData: JSON.parse(JSON.stringify(usecaseData))
		});
	};

	handleStateChangeCheckList = (e: any, index: any) => {
		const { checked } = e.target;
		const { usecaseData, activeStage } = this.state;
		let count = 0;
		const workflowDetail: any = usecaseData.stages[activeStage];
		if (workflowDetail.checkList) {
			workflowDetail.checkList[index]['isChecked'] = checked;
			for (let i = 0; i < workflowDetail.checkList.length; i++) {
				if (workflowDetail.checkList[i].isChecked) {
					count++;
				}
			}
		}
		if (count == workflowDetail.checkList.length) {
			usecaseData.stages[activeStage]['status'] = 'completed';
		} else if (count < workflowDetail.checkList.length) {
			usecaseData.stages[activeStage]['status'] = 'inprogress';
		} else if (count == 0) {
			usecaseData.stages[activeStage]['status'] = '';
		}
		this.setState({
			usecaseData
		});
	};

	updateStep = (updatedStep: any) => {
		// props.dispatch(WorkflowAction.updateWorkflowStep({ id: Id, step: updatedStep }));
	};

	// const updateStage = () => {
	// 	// props.dispatch(WorkflowAction.updateWorkflowStage({ id: Id, stage: usecaseData }));
	// };

	moveToNextPage = (type: any) => {
		const { usecaseData, activeStage } = this.state;
		if (type == 'next') {
			if (usecaseData && usecaseData.stages) {
				this.setState({
					activeStage: activeStage + 1
				});
			}
		} else {
			if (usecaseData && usecaseData.stages) {
				let index = activeStage - 1;
				this.setState({
					activeStage: index
				});
			}
		}
	};

	displayStageList = () => {
		let retData = [];
		const { stageList } = this.state;
		if (stageList && stageList.length > 0) {
			for (let i = 0; i < stageList.length; i++) {
				let stepJSXList = [];
				let stage = stageList[i];
				if (stage && stage.stepList && stage.stepList.length > 0) {
					for (let j = 0; j < stage.stepList.length; j++) {
						let step = stage.stepList[j];
						stepJSXList.push(
							<tr className="workflow-inner-table">
								<td><span>{step.name}</span></td>
								<td>{step.assignTo}</td>
								<td>{step.startDate}</td>
								<td>{step.startDeviation}</td>
								<td>{step.endDate}</td>
								<td>{step.endDeviation}</td>
							</tr>
						);
					}
				}
				retData.push(
					<>
						<tr className="workflow-inner-table-head">
							<td colSpan={6}><strong>{stage.name}</strong></td>
						</tr>
						{stepJSXList}
					</>
				);
			}
		}
		return retData;
	};

	render() {
		const { usecaseData, activeStage } = this.state;
		return (
			<div className="workflow-content">
				<div className="workflow-stage">
					<ul>{this.displayWorkflowStage()}</ul>
					{/* <Link to={`/editworkflow/${Id}`} className="btn btn-primary btn-edit">
					<img src={editIcon} alt="" />&nbsp; Edit
				</Link> */}
				</div>
				<div className="workflow-data">{this.displayUsecase()}</div>
				<div className="workflow-view-table-section">
					<div className="heading">
						<h5></h5>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</div>
					<div className="workflow-view-table">
						<table className="table">
							<thead>
								<tr>
									<th>Stages</th>
									<th>Assigned to</th>
									<th>Start Date</th>
									<th>Deviation</th>
									<th>End Date</th>
									<th>Deviation</th>
								</tr>
							</thead>
							<tbody>{this.displayStageList()}</tbody>
						</table>
					</div>
				</div>
				<div className="workflow-requirement">
					<div className="heading">
						<h5>Checklist for Requirements</h5>
					</div>
					{this.displayCheckList()}
				</div>
				<div className="d-flex justify-content-end workflow-buttons">
					<button
						type="button"
						disabled={activeStage == 0}
						className="btn btn-primary"
						onClick={() => this.moveToNextPage('previous')}
					>
						Previous
					</button>
					{usecaseData &&
						usecaseData.stages && (
							<button
								type="button"
								disabled={activeStage == usecaseData.stages.length - 1}
								className="btn btn-primary"
								onClick={() => this.moveToNextPage('next')}
							>
								Next
							</button>
						)}
				</div>
			</div>
		);
	}
}

export default WorkFlowView;
