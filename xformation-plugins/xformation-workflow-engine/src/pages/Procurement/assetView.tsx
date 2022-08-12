import * as React from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

export class AssetView extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			// usecaseList: {
			// 	name: 'ipsa',
			// 	description: 'Recusandae libero eveniet ducimus.',
			// 	assignTo: 'string',
			// 	id: 3,
			// 	useCase: {},
			// 	stages: [
			// 		{
			// 			checkList: [
			// 				{ label: 'string', id: 3 },
			// 				{ label: 'string', id: 10 },
			// 				{ label: 'string', id: 6 },
			// 				{ label: 'string', id: 6 },
			// 				{ label: 'string', id: 1 }
			// 			],
			// 			steps: [
			// 				{ label: 'et', description: 'string', link: 'https://waino.org', status: 'string', id: 7 },
			// 				{ label: 'eum', description: 'string', link: 'https://noemi.org', status: 'string', id: 7 }
			// 			],
			// 			name: 'quaerat',
			// 			assignedTo: 'string',
			// 			description: 'string',
			// 			id: 7,
			// 			status: 'string'
			// 		},
			// 		{
			// 			checkList: [
			// 				{ label: 'string', id: 6 },
			// 				{ label: 'string', id: 7 },
			// 				{ label: 'string', id: 9 },
			// 				{ label: 'string', id: 8 },
			// 				{ label: 'string', id: 8 }
			// 			],
			// 			steps: [
			// 				{
			// 					label: 'dolores',
			// 					description: 'string',
			// 					link: 'http://camron.com',
			// 					status: 'string',
			// 					id: 9
			// 				},
			// 				{
			// 					label: 'voluptatem',
			// 					description: 'string',
			// 					link: 'https://nicholaus.biz',
			// 					status: 'string',
			// 					id: 7
			// 				}
			// 			],
			// 			name: 'qui',
			// 			assignedTo: 'string',
			// 			description: 'string',
			// 			id: 8,
			// 			status: 'string'
			// 		},
			// 		{
			// 			checkList: [
			// 				{ label: 'string', id: 2 },
			// 				{ label: 'string', id: 7 },
			// 				{ label: 'string', id: 4 },
			// 				{ label: 'string', id: 1 },
			// 				{ label: 'string', id: 2 }
			// 			],
			// 			steps: [
			// 				{
			// 					label: 'corporis',
			// 					description: 'string',
			// 					link: 'http://hershel.com',
			// 					status: 'string',
			// 					id: 6
			// 				},
			// 				{
			// 					label: 'dolorum',
			// 					description: 'string',
			// 					link: 'http://elisabeth.net',
			// 					status: 'string',
			// 					id: 5
			// 				}
			// 			],
			// 			name: 'omnis',
			// 			assignedTo: 'string',
			// 			description: 'string',
			// 			id: 5,
			// 			status: 'string'
			// 		},
			// 		{
			// 			checkList: [
			// 				{ label: 'string', id: 7 },
			// 				{ label: 'string', id: 6 },
			// 				{ label: 'string', id: 4 },
			// 				{ label: 'string', id: 7 },
			// 				{ label: 'string', id: 4 }
			// 			],
			// 			steps: [
			// 				{
			// 					label: 'error',
			// 					description: 'string',
			// 					link: 'https://triston.us',
			// 					status: 'string',
			// 					id: 8
			// 				},
			// 				{
			// 					label: 'aspernatur',
			// 					description: 'string',
			// 					link: 'http://blanca.us',
			// 					status: 'string',
			// 					id: 2
			// 				}
			// 			],
			// 			name: 'veritatis',
			// 			assignedTo: 'string',
			// 			description: 'string',
			// 			id: 6,
			// 			status: 'string'
			// 		},
			// 		{
			// 			checkList: [
			// 				{ label: 'string', id: 5 },
			// 				{ label: 'string', id: 3 },
			// 				{ label: 'string', id: 7 },
			// 				{ label: 'string', id: 10 },
			// 				{ label: 'string', id: 6 }
			// 			],
			// 			steps: [
			// 				{ label: 'aut', description: 'string', link: 'https://audie.us', status: 'string', id: 1 },
			// 				{
			// 					label: 'provident',
			// 					description: 'string',
			// 					link: 'http://gavin.biz',
			// 					status: 'string',
			// 					id: 3
			// 				}
			// 			],
			// 			name: 'nostrum',
			// 			assignedTo: 'string',
			// 			description: 'string',
			// 			id: 8,
			// 			status: 'string'
			// 		},
			// 		{
			// 			checkList: [
			// 				{ label: 'string', id: 5 },
			// 				{ label: 'string', id: 9 },
			// 				{ label: 'string', id: 4 },
			// 				{ label: 'string', id: 8 },
			// 				{ label: 'string', id: 7 }
			// 			],
			// 			steps: [
			// 				{
			// 					label: 'qui',
			// 					description: 'string',
			// 					link: 'http://candida.us',
			// 					status: 'string',
			// 					id: 10
			// 				},
			// 				{
			// 					label: 'in',
			// 					description: 'string',
			// 					link: 'https://antonette.info',
			// 					status: 'string',
			// 					id: 8
			// 				}
			// 			],
			// 			name: 'non',
			// 			assignedTo: 'string',
			// 			description: 'string',
			// 			id: 4,
			// 			status: 'string'
			// 		}
			// 	]
			// },
			useCase: {},
			usecaseList: [],
		};
	}

	setUseCaseData = (data: any) => {
		console.log(data)
		if (data && data.stepInput && data.stepInput.S && data.stepInput.S.stages && data.stepInput.S.stages.length > 0) {
			this.setState({
				useCase: data,
				usecaseList: data.stepInput.S.stages
			});
		}
	};

	displayUsecaseList = () => {
		const { usecaseList } = this.state;
		console.log(usecaseList, " usecaseList")
		let retData = [];
		if (usecaseList && usecaseList.length > 0) {
			for (let i = 0; i < usecaseList.length; i++) {
				let row = usecaseList[i];
				retData.push(
					<div className="col-md-4 col-12">
						<div
							className={
								i == 0 ? (
									'active receive-rfq-box'
								) : i == 1 ? (
									'inprosseg receive-rfq-box'
								) : (
									'receive-rfq-box'
								)
							}
						>
							<div className="receive-number">{i + 1}</div>
							<div className="heading">
								<h5>{row.name}</h5>
							</div>
							<SimpleBar style={{ maxHeight: 145 }}>
								<ul>{this.displaySteps(row.details)}</ul>
							</SimpleBar>
						</div>
					</div>
				);
			}
		}
		return retData;
	};

	displaySteps = (step: any) => {
		const retStepData = [];
		if (step && step.length > 0) {
			for (let i = 0; i < step.length; i++) {
				retStepData.push(
					<Link to="/a/xformation-workflow-engine/matrixView">
						<li className={step[i].link !== '' ? 'active' : ''}>{step[i].subStageName}</li>
					</Link>
				);
			}
		}
		return retStepData;
	};
	render() {
		return (
			<div className="receive-rfq-content">
				<div className="line">
					<span className="line1" />
					<span className="line2" />
					<span className="line3" />
				</div>
				<div className="row">{this.displayUsecaseList()}</div>
			</div>
		);
	}
}
