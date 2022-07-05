import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { configFun } from '../../config';
import { images } from '../../img';
import { CommonService } from '../_common/common';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { RestService } from '../_service/RestService';
import { PLUGIN_BASE_URL } from '../../constants';

export class AddDatasourceProduct extends React.Component<any, any> {
	breadCrumbs: any;
	config: any;
	constructor(props: any) {
		super(props);
		this.state = {
			environment: '',
			account: '',
			sourceList: [
				{
					cloud: 'AWS',
					icon: '',
					accountIdList: [
						{
							accountID: '6478462154795',
							datasources: [
								{
									name: 'AWS-PullMetric-API',
									cloud: 'Cloud Watch',
									description: 'pull aws metrics with cloud api',
									icon: ''
								},
								{
									name: 'AWS-PullLogs-API',
									cloud: 'Cloud Watch',
									description: 'pull aws Logs with cloud api',
									icon: ''
								},
								{
									name: 'AWS-StoreTrace-Local',
									cloud: 'AWS',
									description: 'Receive traces and store in local Zipkin DB',
									icon: ''
								}
							]
						},
						{
							accountID: '6478462154795',
							datasources: [
								{
									name: 'AWS-StoreTrace-Local',
									cloud: 'AWS',
									description: 'Receive traces and store in local Zipkin DB',
									icon: ''
								},
								{
									name: 'AWS-PullLogs-Local',
									cloud: 'AWS',
									description: 'Receive AWS Logs and store in Local ES',
									icon: ''
								}
							]
						}
					]
				},
				{
					cloud: 'AZURE',
					icon: '',
					accountIdList: [
						{
							accountID: '6478462154795',
							datasources: [
								{
									name: 'AWS-PullMetric-API',
									cloud: 'Cloud Watch',
									description: 'pull aws metrics with cloud api',
									icon: ''
								},
								{
									name: 'AWS-PullLogs-API',
									cloud: 'Cloud Watch',
									description: 'pull aws Logs with cloud api',
									icon: ''
								},
								{
									name: 'AWS-StoreTrace-Local',
									cloud: 'AWS',
									description: 'Receive traces and store in local Zipkin DB',
									icon: ''
								}
							]
						},
						{
							accountID: '6478462154795',
							datasources: [
								{
									name: 'AWS-StoreTrace-Local',
									cloud: 'AWS',
									description: 'Receive traces and store in local Zipkin DB',
									icon: ''
								},
								{
									name: 'AWS-PullLogs-Local',
									cloud: 'AWS',
									description: 'Receive AWS Logs and store in Local ES',
									icon: ''
								}
							]
						}
					]
				},
				{
					cloud: 'Google Cloud Plateform',
					icon: '',
					accountIdList: [
						{
							accountID: '6478462154795',
							datasources: [
								{
									name: 'AWS-PullMetric-API',
									cloud: 'Cloud Watch',
									description: 'pull aws metrics with cloud api',
									icon: ''
								},
								{
									name: 'AWS-PullLogs-API',
									cloud: 'Cloud Watch',
									description: 'pull aws Logs with cloud api',
									icon: ''
								},
								{
									name: 'AWS-StoreTrace-Local',
									cloud: 'AWS',
									description: 'Receive traces and store in local Zipkin DB',
									icon: ''
								}
							]
						},
						{
							accountID: '6478462154795',
							datasources: [
								{
									name: 'AWS-StoreTrace-Local',
									cloud: 'AWS',
									description: 'Receive traces and store in local Zipkin DB',
									icon: ''
								},
								{
									name: 'AWS-PullLogs-Local',
									cloud: 'AWS',
									description: 'Receive AWS Logs and store in Local ES',
									icon: ''
								}
							]
						}
					]
				}
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
		this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
	}

	async componentDidMount() {
		await this.getAccountList();
	}

	getAccountList = async () => {
		try {
			await RestService.getData(this.config.GET_ALL_DATASOURCE, null, null).then((response: any) => {
				this.setState({
					accountList: response
				});
				console.log('Loading Asstes : ', response);
			});
		} catch (err) {
			console.log('Loading Asstes failed. Error: ', err);
		}
	};

	displayDataSource = () => {
		let retData = [];
		const { sourceList } = this.state;
		let accountId = CommonService.getParameterByName('accountId', window.location.href);
		if (sourceList && sourceList.length > 0) {
			for (let i = 0; i < sourceList.length; i++) {
				let row = sourceList[i];
				retData.push(
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="services-heading">
								<span>
									<img src={images.awsLogo} alt="" />
								</span>
								<h5>{row.cloud}</h5>
							</div>
							{row.accountIdList &&
								row.accountIdList.map((accountdata: any, i: any) => {
									return (
										<React.Fragment>
											<div>
												<span>{row.cloud} Account specific input source</span>
												<p>Account: {accountdata.accountID}</p>
											</div>
											{accountdata.datasources &&
											accountdata.datasources.length > 0 && (
												<React.Fragment>
													{accountdata.datasources.map((list: any, index: any) => {
														return (
															<div className="source-boxs">
																<div className="row">
																	<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
																		<Link
																			to={`${PLUGIN_BASE_URL}/add-datasource-credential?sourceName=${list.name}&&accountId=${accountId}`}
																		>
																			<div className="source-box">
																				<div className="images">
																					<img src={images.awsLogo} alt="" />
																				</div>
																				<div className="source-content">
																					<label>{list.name}</label>
																					<span>{list.cloud}</span>
																					<p>{list.description}</p>
																				</div>
																			</div>
																		</Link>
																	</div>
																</div>
															</div>
														);
													})}
												</React.Fragment>
											)}
										</React.Fragment>
									);
								})}
						</div>
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
		const { environment, account } = this.state;
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
							{/* <div className="heading">
								<h4>Add inputs</h4>
							</div> */}
							<div className="account-details-heading">
								<h5>Account Details</h5>
							</div>
							<div className="environgment-details">
								<div className="form-group description-content">
									<label htmlFor="description">Select Environment</label>
									<select
										className="input-group-text"
										name="environment"
										value={environment}
										onChange={this.onChangeDataSource}
									>
										<option key="1" value="aws">
											AWS
										</option>
										<option key="2" value="Cloud">
											Cloud
										</option>
									</select>
								</div>
								<div className="form-group description-content">
									<label htmlFor="description">Select Account</label>
									<select
										className="input-group-text"
										name="account"
										value={account}
										onChange={this.onChangeDataSource}
									>
										<option key="1" value="567373484">
											AWS 567373484
										</option>
										<option key="2" value="237373414">
											AWS 237373414
										</option>
									</select>
								</div>
							</div>
							<div className="">{this.displayDataSource()}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
