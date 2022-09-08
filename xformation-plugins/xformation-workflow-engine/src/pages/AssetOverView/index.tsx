import * as React from 'react';
import { AwsHelper } from '../AwsHelpers';
import downloadIcon from '../../img/projectoverview/download-icon.png';
import { Link } from 'react-router-dom';
import AssetOverViewReusableComp from '../../components/AssetOverViewCommonComponent'


export class AssetOverView extends React.Component<any, any> {
	awsHelper: any;
	constructor(props: any) {
		super(props);
		this.state = {
			useCaseList: [],
			matrixView:false,
			activeUseCaseIndex: 0,
		};
		this.awsHelper = new AwsHelper({ meta: props.meta });
	}
	toggleMatrixView=()=>{
        this.setState({matrixView:!this.state.matrixView})
    }

	componentDidMount() {
		this.awsHelper.getUsecaseList((useCaseList: any) => {
			useCaseList.forEach((useCase: any) => {
				this.awsHelper.getExecutionHistory(
					"arn:aws:states:us-east-1:657907747545:execution:send-to-pre-state:9bc49c92-4016-47a5-8a22-88d353e912ab",
					(items: any) => {
						if (useCase?.stepinput) {

							const useCases = this.state.useCaseList;
							if (useCase.stepinput.stages.length > 0) {
								useCases.push({
									...useCase,
									steps: items,
									executionArn: { S: "arn:aws:states:us-east-1:657907747545:execution:send-to-pre-state:9bc49c92-4016-47a5-8a22-88d353e912ab" }
								})
							}
							this.setState({
								useCaseList: useCases
							});

						}
					},
					(err: any) => { console.log(err) }
				);
			});
		}, () => { });
		this.awsHelper.gettingMachineDef(
			this.state.machineArn,
			(states: any) => {
				// console.log(states);
			},
			(err: any) => {
				console.log(err);
			}
		);
	}

	displaySideMenuList = (useCaseList: any) => {
		const { activeUseCaseIndex } = this.state;
		let retData = [];
		if (useCaseList && useCaseList.length > 0) {
			for (let i = 0; i < useCaseList.length; i++) {
				let row = useCaseList[i];
				if (row?.usecasename) {
					retData.push(
						<li className={i == activeUseCaseIndex ? 'active' : ''} onClick={() => this.setState({ activeUseCaseIndex: i, matrixView:"" })}>
							<span>{row?.usecasename}</span>
						</li>
					);
				}
			}
		}
		return retData;
	};
	render() {
		const { useCaseList, matrixView } = this.state;
		let AssetOverViewPropsData={
			usecasename:useCaseList[this.state.activeUseCaseIndex]?.usecasename?useCaseList[this.state.activeUseCaseIndex].usecasename:'',
			usecaseStageList:useCaseList[this.state.activeUseCaseIndex]?.stepinput?.stages?useCaseList[this.state.activeUseCaseIndex].stepinput.stages:"",
			matrixView:matrixView
		}
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
										<Link to="/a/xformation-workflow-engine/project-overview">
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
								{useCaseList && useCaseList.length > 0 && <ul>{this.displaySideMenuList(useCaseList)}</ul>}
							</div>
						</div>
						<div className="project-over-view-right-content">
							<div className="receive-rfq-content">
								{ !matrixView && <div className="line">
									<span className="line1" />
									<span className="line2" />
									<span className="line3" />
								</div>}
								{useCaseList[this.state.activeUseCaseIndex]?.stepinput?.stages && <div className="row">
											<AssetOverViewReusableComp  AssetOverViewPropsData={{...AssetOverViewPropsData}} toggleMatrixView={this.toggleMatrixView}/>
								</div>}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
