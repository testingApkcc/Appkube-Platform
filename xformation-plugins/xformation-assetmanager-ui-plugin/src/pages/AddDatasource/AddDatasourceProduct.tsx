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
			// sourceList: [
			// 	{
			// 		cloud: 'AWS',
			// 		icon: '',
			// 		accountIdList: [
			// 			{
			// 				accountID: '6478462154795',
			// 				datasources: [
			// 					{
			// 						name: 'AWS-PullMetric-API',
			// 						cloud: 'Cloud Watch',
			// 						description: 'pull aws metrics with cloud api',
			// 						icon: ''
			// 					},
			// 					{
			// 						name: 'AWS-PullLogs-API',
			// 						cloud: 'Cloud Watch',
			// 						description: 'pull aws Logs with cloud api',
			// 						icon: ''
			// 					},
			// 					{
			// 						name: 'AWS-StoreTrace-Local',
			// 						cloud: 'AWS',
			// 						description: 'Receive traces and store in local Zipkin DB',
			// 						icon: ''
			// 					}
			// 				]
			// 			},
			// 			{
			// 				accountID: '6478462154795',
			// 				datasources: [
			// 					{
			// 						name: 'AWS-StoreTrace-Local',
			// 						cloud: 'AWS',
			// 						description: 'Receive traces and store in local Zipkin DB',
			// 						icon: ''
			// 					},
			// 					{
			// 						name: 'AWS-PullLogs-Local',
			// 						cloud: 'AWS',
			// 						description: 'Receive AWS Logs and store in Local ES',
			// 						icon: ''
			// 					}
			// 				]
			// 			}
			// 		]
			// 	},
			// 	{
			// 		cloud: 'AZURE',
			// 		icon: '',
			// 		accountIdList: [
			// 			{
			// 				accountID: '6478462154795',
			// 				datasources: [
			// 					{
			// 						name: 'AWS-PullMetric-API',
			// 						cloud: 'Cloud Watch',
			// 						description: 'pull aws metrics with cloud api',
			// 						icon: ''
			// 					},
			// 					{
			// 						name: 'AWS-PullLogs-API',
			// 						cloud: 'Cloud Watch',
			// 						description: 'pull aws Logs with cloud api',
			// 						icon: ''
			// 					},
			// 					{
			// 						name: 'AWS-StoreTrace-Local',
			// 						cloud: 'AWS',
			// 						description: 'Receive traces and store in local Zipkin DB',
			// 						icon: ''
			// 					}
			// 				]
			// 			},
			// 			{
			// 				accountID: '6478462154795',
			// 				datasources: [
			// 					{
			// 						name: 'AWS-StoreTrace-Local',
			// 						cloud: 'AWS',
			// 						description: 'Receive traces and store in local Zipkin DB',
			// 						icon: ''
			// 					},
			// 					{
			// 						name: 'AWS-PullLogs-Local',
			// 						cloud: 'AWS',
			// 						description: 'Receive AWS Logs and store in Local ES',
			// 						icon: ''
			// 					}
			// 				]
			// 			}
			// 		]
			// 	},
			// 	{
			// 		cloud: 'Google Cloud Plateform',
			// 		icon: '',
			// 		accountIdList: [
			// 			{
			// 				accountID: '6478462154795',
			// 				datasources: [
			// 					{
			// 						name: 'AWS-PullMetric-API',
			// 						cloud: 'Cloud Watch',
			// 						description: 'pull aws metrics with cloud api',
			// 						icon: ''
			// 					},
			// 					{
			// 						name: 'AWS-PullLogs-API',
			// 						cloud: 'Cloud Watch',
			// 						description: 'pull aws Logs with cloud api',
			// 						icon: ''
			// 					},
			// 					{
			// 						name: 'AWS-StoreTrace-Local',
			// 						cloud: 'AWS',
			// 						description: 'Receive traces and store in local Zipkin DB',
			// 						icon: ''
			// 					}
			// 				]
			// 			},
			// 			{
			// 				accountID: '6478462154795',
			// 				datasources: [
			// 					{
			// 						name: 'AWS-StoreTrace-Local',
			// 						cloud: 'AWS',
			// 						description: 'Receive traces and store in local Zipkin DB',
			// 						icon: ''
			// 					},
			// 					{
			// 						name: 'AWS-PullLogs-Local',
			// 						cloud: 'AWS',
			// 						description: 'Receive AWS Logs and store in Local ES',
			// 						icon: ''
			// 					}
			// 				]
			// 			}
			// 		]
			// 	}
			// ]
			sourceList: {}
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
				this.manipulateData(response);
				// this.setState({
				// 	accountList: response
				// });
				console.log('Loading Asstes : ', response);
			});
		} catch (err) {
			console.log('Loading Asstes failed. Error: ', err);
		}
	};

	manipulateData = (data: any) => {
		// let datasource: any = [];
		let dataobj: any = {};
		if (data && data.length > 0) {
			for (let i = 0; i < data.length; i++) {
				dataobj[data[i].typeName] = dataobj[data[i].typeName] || [];
				dataobj[data[i].typeName].push(data[i]);
			}
		}
		this.setState({
			sourceList: dataobj
		});
	};

	displayDataSource = () => {
		let retData: any = [];
		const { sourceList } = this.state;
		let accountId = CommonService.getParameterByName('accountId', window.location.href);
		if (sourceList) {
			Object.keys(sourceList).map((source, indexedDB) => {
				retData.push(
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="services-heading">
								<span>
									<img src={images.awsLogo} alt="" />
								</span>
								<h5>{source}</h5>
							</div>
							<div className="account-specific-content">
								<span>{source} Account specific input source</span>
								<div className="specific-heading">
									<p>
										Account &#8758;
										{/* <span>{accountdata.uid}</span> */}
									</p>
								</div>
							</div>
							<div className="source-boxs">
								<div className="row">
									{sourceList[source] &&
										sourceList[source].map((accountdata: any, i: any) => {
											return (
												<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
													<Link
														to={`${PLUGIN_BASE_URL}/add-datasource-credential?sourceName=${accountdata.name}&&accountId=${accountId}`}
													>
														<div className="source-box">
															<div className="images">
																<img src={accountdata.typeLogoUrl} height="50px" width="50px" alt="" />
															</div>
															<div className="source-content">
																<label>{accountdata.name}</label>
																<span>{accountdata.type}</span>
																<p>Receive traces and store in local Zipkin DB</p>
															</div>
														</div>
													</Link>
												</div>
											);
										})}
								</div>
							</div>
						</div>
					</div>
				);
			});
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
						</div>
						<div className="source-content">
							<div className="add-input-content">
								<div className="row justify-content-end">
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<select
												className="input-group-text"
												name="environment"
												value={environment}
												onChange={this.onChangeDataSource}
											>
												<option key="1" value="aws">
													Select Environment
												</option>
												<option key="2" value="Cloud">
													Cloud
												</option>
											</select>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<select
												className="input-group-text"
												name="account"
												value={account}
												onChange={this.onChangeDataSource}
											>
												<option key="1" value="567373484">
													Select Account
												</option>
												<option key="2" value="237373414">
													Cloud
												</option>
											</select>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<div className="right-search-bar">
												<div className="form-group search-control m-b-0">
													<i className="fa fa-search" />
													<input
														type="text"
														className="input-group-text"
														placeholder="Search"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12">
										<div className="back-btn">
											<button type="button" className="asset-blue-button">
												Add input
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="specific-input-content">{this.displayDataSource()}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
