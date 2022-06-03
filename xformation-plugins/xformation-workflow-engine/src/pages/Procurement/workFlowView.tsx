import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const WorkFlowView = (props: any) => {
	const [ usecaseData, setUsecaseData ] = useState({
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
					{ label: 'et', description: 'string', link: 'https://waino.org', status: 'string', id: 7 },
					{ label: 'eum', description: 'string', link: 'https://noemi.org', status: 'string', id: 7 }
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
					{ label: 'dolores', description: 'string', link: 'http://camron.com', status: 'string', id: 9 },
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
					{ label: 'corporis', description: 'string', link: 'http://hershel.com', status: 'string', id: 6 },
					{ label: 'dolorum', description: 'string', link: 'http://elisabeth.net', status: 'string', id: 5 }
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
					{ label: 'error', description: 'string', link: 'https://triston.us', status: 'string', id: 8 },
					{ label: 'aspernatur', description: 'string', link: 'http://blanca.us', status: 'string', id: 2 }
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
					{ label: 'aut', description: 'string', link: 'https://audie.us', status: 'string', id: 1 },
					{ label: 'provident', description: 'string', link: 'http://gavin.biz', status: 'string', id: 3 }
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
					{ label: 'qui', description: 'string', link: 'http://candida.us', status: 'string', id: 10 },
					{ label: 'in', description: 'string', link: 'https://antonette.info', status: 'string', id: 8 }
				],
				name: 'non',
				assignedTo: 'string',
				description: 'string',
				id: 4,
				status: 'string'
			}
		]
	});
	// const [Id, setId] = useState(props.id);
	const [ activeStage, setActivestage ] = useState(0);

	const displayUsecase = () => {
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
							</div>
							<div className="api-content">
								<label>Github Link:</label>
								<input
									type="text"
									name="link"
									value={row.link}
									onChange={(e) => handleStateChange(e, i)}
								/>
								<button onClick={() => updateStep(row)} className="btn btn-primary code-update-btn">
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

	const displayCheckList = () => {
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
								onChange={(e) => handleStateChangeCheckList(e, i)}
							/>
							<span>{row.label}</span>
						</div>
					);
				}
			}
		}
		return retData;
	};

	const getUsecaseStageData = (data: any, index: any) => {
		setActivestage(index);
	};

	const displayWorkflowStage = () => {
		let retData = [];
		if (usecaseData && usecaseData.stages && usecaseData.stages.length > 0) {
			for (let i = 0; i < usecaseData.stages.length; i++) {
				let row = usecaseData.stages[i];
				retData.push(
					<li
						onClick={() => getUsecaseStageData(row, i)}
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
								onChange={(e) => handleStageChange(e, i)}
								readOnly
							/>
						</div>
					</li>
				);
			}
		}
		return retData;
	};

	const handleStageChange = (e: any, index: any) => {
		const { name, value } = e.target;
		let stages: any = usecaseData.stages;
		if (usecaseData.stages) {
			stages[index][name] = value;
		}
	};

	const handleStateChange = (event: any, index: any) => {
		const { name, value } = event.target;
		const workflowDetail: any = usecaseData.stages[activeStage];
		if (workflowDetail.steps) {
			workflowDetail.steps[index][name] = value;
		}
		setUsecaseData(JSON.parse(JSON.stringify(usecaseData)));
	};

	const handleStateChangeCheckList = (e: any, index: any) => {
		const { checked } = e.target;
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
		// setWorkflowDetail({ ...workflowDetail, workflowDetail });
		if (count == workflowDetail.checkList.length) {
			usecaseData.stages[activeStage]['status'] = 'completed';
		} else if (count < workflowDetail.checkList.length) {
			usecaseData.stages[activeStage]['status'] = 'inprogress';
		} else if (count == 0) {
			usecaseData.stages[activeStage]['status'] = '';
		}
		setUsecaseData({ ...usecaseData });
	};

	const updateStep = (updatedStep: any) => {
		// props.dispatch(WorkflowAction.updateWorkflowStep({ id: Id, step: updatedStep }));
	};

	// const updateStage = () => {
	// 	// props.dispatch(WorkflowAction.updateWorkflowStage({ id: Id, stage: usecaseData }));
	// };

	const moveToNextPage = (type: any) => {
		if (type == 'next') {
			if (usecaseData && usecaseData.stages) {
				// let data = usecaseData.stages[activeStage];
				// setWorkflowDetail({})
				// setWorkflowDetail(JSON.parse(JSON.stringify(data)));
				setActivestage(activeStage + 1);
			}
		} else {
			if (usecaseData && usecaseData.stages) {
				let index = activeStage - 1;
				// let data = usecaseData.stages[index];
				// setWorkflowDetail({})
				// setWorkflowDetail(JSON.parse(JSON.stringify(data)));
				setActivestage(index);
			}
		}
	};

	return (
		<div className="workflow-content">
			<div className="workflow-stage">
				<ul>{displayWorkflowStage()}</ul>
				{/* <Link to={`/editworkflow/${Id}`} className="btn btn-primary btn-edit">
					<img src={editIcon} alt="" />&nbsp; Edit
				</Link> */}
			</div>
			<div className="workflow-data">{displayUsecase()}</div>
			<div className="workflow-requirement">
				<div className="heading">
					<h5>Checklist for Requirements</h5>
				</div>
				{displayCheckList()}
			</div>
			<div className="d-flex justify-content-end workflow-buttons">
				<button
					type="button"
					disabled={activeStage == 0}
					className="btn btn-primary"
					onClick={() => moveToNextPage('previous')}
				>
					Previous
				</button>
				{usecaseData &&
				usecaseData.stages && (
					<button
						type="button"
						disabled={activeStage == usecaseData.stages.length - 1}
						className="btn btn-primary"
						onClick={() => moveToNextPage('next')}
					>
						Next
					</button>
				)}
			</div>
		</div>
	);
};

export default WorkFlowView;
