import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
// import { configFun } from '../../config';
import { images } from '../../img';
import { CommonService } from '../_common/common';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
// import { RestService } from '../_service/RestService';
import { PLUGIN_BASE_URL } from '../../constants';

export class ExploreDataSourceDetail extends React.Component<any, any> {
	breadCrumbs: any;
	constructor(props: any) {
		super(props);
		this.state = {
			environment: '',
			account: '',
			sourceList: [
				{ name: 'AWS-PullMetric-API', cloud: 'Cloud Watch', description: 'pull aws metrics with cloud api' },
				{ name: 'AWS-PullLogs-API', cloud: 'Cloud Watch', description: 'pull aws Logs with cloud api' },
				{
					name: 'AWS-StoreTrace-Local',
					cloud: 'AWS',
					description: 'Receive traces and store in local Zipkin DB'
				},
				{ name: 'AWS-PullLogs-Local', cloud: 'AWS', description: 'Receive AWS Logs and store in Local ES' }
			]
		};
		this.breadCrumbs = [
			{
				label: 'Home',
				route: `/`
			},
			{
				label: 'Assets | Environments',
				isCurrentPage: true
			}
		];
	}

	async componentDidMount() {
		// await this.getAccountList();
	}

	getAccountList = async () => {
		// try {
		// 	await RestService.getData(this.config.GET_ALL_ACCOUNT, null, null).then((response: any) => {
		// 		this.setState({
		// 			accountList: response
		// 		});
		// 		console.log('Loading Asstes : ', response);
		// 	});
		// } catch (err) {
		// 	console.log('Loading Asstes failed. Error: ', err);
		// }
	};

	displayDataSource = () => {
		let retData = [];
		const { sourceList } = this.state;
		let accountId = CommonService.getParameterByName('accountId', window.location.href);
		if (sourceList && sourceList.length > 0) {
			for (let i = 0; i < sourceList.length; i++) {
				retData.push(
					<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<Link
							to={`${PLUGIN_BASE_URL}/add-datasource-credential?sourceName=${sourceList[i]
								.name}&&accountId=${accountId}`}
						>
							<div className="source-box">
								<div className="images">
									<img src={images.awsLogo} alt="" />
								</div>
								<div className="Source-content">
									<label>{sourceList[i].name}</label>
									<span>{sourceList[i].cloud}</span>
									<p>{sourceList[i].description}</p>
								</div>
							</div>
						</Link>
					</div>
				);
			}
		}
		return retData;
	};

	onChangeDataSource = (e: any) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className="add-data-source-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
				<div className="add-data-source-page-container">
					<div className="data-source-section">
						<div className="source-head">
							<h3>inputs</h3>
							<div className="d-flex">
								<div className="form-group search-control m-b-0">
									<button className="btn btn-search">
										<i className="fa fa-search" />
									</button>
									<input type="text" className="input-group-text" placeholder="Search" />
								</div>
								<div className="back-btn">
									<button type="button" className="btn btn-link">
										<i className="far fa-arrow-alt-circle-left" />Back
									</button>
								</div>
							</div>
						</div>
						<div className="source-content">
							<div className="heading">
								<h4>Add inputs</h4>
							</div>
							<div className="source-content">
								<div className="source-details">
									<div className="row">
										<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
											<div className="source-box">
												<div className="source-detail-content">
													<div className="images">
														<img src={images.awsLogo} alt="" />
													</div>
													<div className="source-content">
														<label>AWS-pullMetric-Api</label>
														<span>cloud watch</span>
														<p>Pull aes metrix with cloud API</p>
													</div>
												</div>
												<div className="explore-content">
													<div className="explore-head">
														<div className="row">
															<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
																<div className="explore-head-left">
																	<label>Query Name</label>
																	<input type="text" className="form-control" />
																</div>
															</div>
															<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
																<div className="explore-head-right">
																	<ul>
																		<li>
																			<button type="button" className="btn btn-light split-btn">
																				<i className="fal fa-pause"></i>
																				Split
																			</button>
																		</li>
																		<li>
																			<div className="form-group time-content">
																				<select
																					className="input-group-text"
																					name="environment"
																					value=""
																					onChange={this.onChangeDataSource}
																				>
																					<option key="1" value="Last 1 hours">
																						Last 1 hours
																					</option>
																					<option key="2" value="Last 2 hours">
																						Last 2 hours
																					</option>
																					<option key="3" value="Last 3 hours">
																						Last 3 hours
																					</option>
																					<option key="4" value="Last 4 hours">
																						Last 4 hours
																					</option>
																					<option key="5" value="Last 5 hours">
																						Last 5 hours
																					</option>
																				</select>
																				<i className="far fa-clock"></i>
																			</div>
																		</li>
																		<li>
																			<button className="asset-blue-button">Run Query</button>
																		</li>
																		<li>
																			<button type="button" className="btn btn-link list-btn">
																				<i className="fas fa-bars"></i>
																			</button>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
													<div className="region-head">
														<div className="row d-flex align-items-center justify-content-start">
															<div className="col-xl-1 col-lg-3 col-md-4 col-sm-12 col-xs-12">
																<label>Region &#8758;</label>
															</div>
															<div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12">
																<div className="time-content">
																	<select
																		className="input-group-text"
																		name="environment"
																		value=""
																		onChange={this.onChangeDataSource}
																	>
																		<option key="1" value="Default">
																			Default
																		</option>
																		<option key="2" value="1">
																			1
																		</option>
																		<option key="2" value="2">
																			2
																		</option>
																	</select>
																</div>
															</div>
															<div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12">
																<div className="time-content">
																	<select
																		className="input-group-text"
																		name="environment"
																		value=""
																		onChange={this.onChangeDataSource}
																	>
																		<option key="1" value="Default">
																			CloudWatch Metrics
																		</option>
																		<option key="2" value="1">
																			1
																		</option>
																		<option key="2" value="2">
																			2
																		</option>
																	</select>
																</div>
															</div>
															<div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12">
																<div className="time-content">
																	<select
																		className="input-group-text"
																		name="environment"
																		value=""
																		onChange={this.onChangeDataSource}
																	>
																		<option key="1" value="Default">
																			Metrics Search
																		</option>
																		<option key="2" value="1">
																			1
																		</option>
																		<option key="2" value="2">
																			2
																		</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
													<div className="environgment-details metrics-name">
														<div className="row">
															<div className="col-xl-4 col-lg-4 col-md-4 col-smm-12 col-xs-12">
																<div className="form-group description-content">
																	<label htmlFor="description">Name Space</label>
																	<select
																		className="input-group-text"
																		name="environment"
																		value=""
																		onChange={this.onChangeDataSource}
																	>
																		<option key="1" value="aws">
																			Select
																		</option>
																		<option key="2" value="Cloud">
																			1
																		</option>
																	</select>
																</div>
															</div>
															<div className="col-xl-4 col-lg-4 col-md-4 col-smm-12 col-xs-12">
																<div className="form-group description-content">
																	<label htmlFor="description">Metrics Name</label>
																	<select
																		className="input-group-text"
																		name="environment"
																		value=""
																		onChange={this.onChangeDataSource}
																	>
																		<option key="1" value="aws">
																			Select
																		</option>
																		<option key="2" value="Cloud">
																			1
																		</option>
																	</select>
																</div>
															</div>
															<div className="col-xl-4 col-lg-4 col-md-4 col-smm-12 col-xs-12">
																<div className="form-group description-content">
																	<label htmlFor="description">Statistic</label>
																	<select
																		className="input-group-text"
																		name="environment"
																		value=""
																		onChange={this.onChangeDataSource}
																	>
																		<option key="1" value="aws">
																			Select
																		</option>
																		<option key="2" value="Cloud">
																			1
																		</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
													<div className="dimension-heading">
														<label>Dimension</label>
														<button type="button" className="btn btn-light dimension-add-btn">
															<i className="fas fa-plus"></i>
														</button>
													</div>
													<div className="dimension-heading">
														<label>Match exact &#8722; <span>optional</span><i className="fal fa-exclamation-circle"></i></label>
														<div className="checkbox switcher">
															<label>
																<input type="checkbox" id="test1" value="" checked />
																<span><small></small></span>
															</label>
														</div>
													</div>
													<div className="environgment-details metrics-name">
														<div className="row">
															<div className="col-xl-4 col-lg-4 col-md-4 col-smm-12 col-xs-12">
																<div className="form-group description-content">
																	<label htmlFor="description">ID &#8722; <span>optional</span><i className="fal fa-exclamation-circle"></i></label>
																	<input type="text" className="form-control" />
																</div>
															</div>
															<div className="col-xl-4 col-lg-4 col-md-4 col-smm-12 col-xs-12">
																<div className="form-group description-content">
																	<label htmlFor="description">Period<span></span><i className="fal fa-exclamation-circle"></i></label>
																	<input type="text" className="form-control" placeholder="Auto" />
																</div>
															</div>
															<div className="col-xl-4 col-lg-4 col-md-4 col-smm-12 col-xs-12">
																<div className="form-group description-content">
																	<label htmlFor="description">Alias &#8722; <span>optional</span><i className="fal fa-exclamation-circle"></i></label>
																	<input type="text" className="form-control" />
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="explore-buttons">
													<button className="asset-blue-button"><i className="fas fa-plus"></i> Add query</button>
													<button className="asset-blue-button"><i className="far fa-clock"></i>Query history</button>
													<button className="asset-blue-button"><i className="fal fa-exclamation-circle"></i>inspector</button>
												</div>
											</div>
										</div>
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
