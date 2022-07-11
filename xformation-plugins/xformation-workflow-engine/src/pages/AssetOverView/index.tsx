import * as React from 'react';
import { Link } from 'react-router-dom';
import downloadIcon from '../../img/projectoverview/download-icon.png';
import overviewMenu1 from '../../img/projectoverview/overview-menu1.png';
import overviewMenu2 from '../../img/projectoverview/overview-menu2.png';
import overviewMenu3 from '../../img/projectoverview/overview-menu3.png';
import overviewMenu4 from '../../img/projectoverview/overview-menu4.png';
import overviewMenu5 from '../../img/projectoverview/overview-menu5.png';
import overviewMenu6 from '../../img/projectoverview/overview-menu6.png';
import overviewMenu7 from '../../img/projectoverview/overview-menu7.png';

export class AssetOverView extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			usecaseList: {
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
							{ label: 'aut', description: 'string', link: 'https://audie.us', status: 'string', id: 1 },
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
			sideMenuList: [
				{ name: 'Send RFQ', id: '1', img: overviewMenu1 },
				{ name: 'Receive RFQ', id: '2', img: overviewMenu2 },
				{ name: 'Kanban', id: '3', img: overviewMenu3 },
				{ name: 'Setup Committee', id: '4', img: overviewMenu4 },
				{ name: 'Approval Requisation', id: '5', img: overviewMenu5 },
				{ name: 'Approved Requisation', id: '6', img: overviewMenu6 },
				{ name: 'New RFQ', id: '7', img: overviewMenu7 },
				{ name: 'Conditional Approval', id: '8', img: overviewMenu1 }
			]
		};
	}

	displayUsecaseList = () => {
		const { usecaseList } = this.state;
		let retData = [];
		if (usecaseList && usecaseList.stages && usecaseList.stages.length > 0) {
			for (let i = 0; i < usecaseList.stages.length; i++) {
				let row = usecaseList.stages[i];
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
							<ul>{this.displaySteps(row.steps)}</ul>
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
						<li className={step[i].link !== '' ? 'active' : ''}>{step[i].label}</li>
					</Link>
				);
			}
		}
		return retStepData;
	};

	displaySideMenuList = () => {
		const { sideMenuList } = this.state;
		let retData = [];
		if (sideMenuList && sideMenuList.length > 0) {
			for (let i = 0; i < sideMenuList.length; i++) {
				retData.push(
					<li className={i == 0 ? 'active' : ''}>
						{/* <Link to="/"> */}
						<img src={sideMenuList[i].img} alt="" />
						<span>{sideMenuList[i].name}</span>
						{/* </Link> */}
					</li>
				);
			}
		}
		return retData;
	};

	render() {
		return (
			<div className="asset-over-view-container">
				<div className="asset-over-view-section">
					<div className="fliter-container">
						<div className="row">
							<div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="heading">All Usecases</div>
							</div>
							<div className="col-xl-7 col-lg-8 col-md-8 col-sm-12 col-xs-12">
								<div className="fliter-right-content">
									<div className="plus-icon col-12">
										<Link to="/a/xformation-workflow-engine/create-new-usecase">
											<i className="fa fa-plus" />
										</Link>
									</div>
									<div className="image">
										<Link to="/a/xformation-workflow-engine/asset-overview">
											<img src={downloadIcon} alt="" />
										</Link>
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
								<ul>{this.displaySideMenuList()}</ul>
							</div>
						</div>
						<div className="project-over-view-right-content">
							<div className="receive-rfq-content">
								<div className="line">
									<span className="line1" />
									<span className="line2" />
									<span className="line3" />
								</div>
								<div className="row">{this.displayUsecaseList()}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
