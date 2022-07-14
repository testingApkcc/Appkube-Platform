import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { configFun } from '../../config';
import { images } from '../../img';
// import { CommonService } from '../_common/common';
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
			sourceList: [],
			environmentList: []
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
				// this.setState({
				// 	sourceList: response
				// });
				this.manipulateData(response);
				console.log('Loading Asstes : ', response);
			});
		} catch (err) {
			console.log('Loading Asstes failed. Error: ', err);
		}
	};

	manipulateData = (data: any) => {
		let { environmentList } = this.state;
		// let datasource: any = [];
		let dataobj: any = {};
		if (data && data.length > 0) {
			for (let i = 0; i < data.length; i++) {
				dataobj[data[i].typeName] = dataobj[data[i].typeName] || [];
				dataobj[data[i].typeName].push(data[i]);
				if (environmentList && environmentList.length > 0) {
					if (environmentList.indexOf(data[i].typeName) === -1) {
						environmentList.push(data[i].typeName);
					}
				} else {
					environmentList.push(data[i].typeName);
				}
			}
		}
		this.setState({
			sourceList: dataobj,
			environmentList
		});
	};

	displayDataSource = () => {
		let retData: any = [];
		const { sourceList, environment } = this.state;
		// let accountId = CommonService.getParameterByName('accountId', window.location.href);
		if (sourceList) {
			Object.keys(sourceList).map((source, indexedDB) => {
				if (source == environment || environment === '') {
					retData.push(
						<React.Fragment>
							<div className="account-details-heading">
								<span>
									<img src={images.awsLogo} alt="" />
								</span>
								<h5>{source}</h5>
							</div>
							<div className="row">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<p className="account-input-heading">{source} Account specific Input sources</p>
								</div>
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div className="services-heading">
										<p>
											Account &#8282; <span>{source} (657907747545)</span>
										</p>
									</div>
								</div>
							</div>
							<div className="source-boxs">
								<div className="row">
									{sourceList[source] &&
										sourceList[source].map((accountdata: any, i: any) => {
											return (
												<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
													<div className="source-box">
														<div className="images">
															<img
																src={accountdata.typeLogoUrl}
																height="50px"
																width="50px"
																alt=""
															/>
														</div>
														<div className="source-content">
															<label>{accountdata.name}</label>
															<span>{accountdata.typeName}</span>
															<p>Pull AWS matrics with cloud API</p>
															{/* {Object.keys(accountdata.jsonData).length > 0 && (
															<span> | {accountdata.jsonData.authType}</span>
														)} */}
														</div>
													</div>
												</div>
											);
										})}
								</div>
							</div>
						</React.Fragment>
					);
				}
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
	handleStateChange = (e: any) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		const { environmentList, environment, account } = this.state;
		return (
			<div className="add-data-source-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
				<div className="add-data-source-page-container">
					<div className="data-source-product">
						<div className="source-head">
							<h3>inputs</h3>
						</div>
						<div className="source-content">
							<div className="add-input-content">
								<div className="row justify-content-end">
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group description-content">
											<select
												className="input-group-text"
												name="environment"
												value={environment}
												onChange={this.onChangeDataSource}
											>
												<option key={-1} value={''}>
													Select Environment
												</option>
												{environmentList &&
													environmentList.length > 0 &&
													environmentList.map((val: any, index: any) => {
														return (
															<option key={index} value={val}>
																{val}
															</option>
														);
													})}
											</select>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group description-content">
											<select
												className="input-group-text"
												name="account"
												value={account}
												onChange={this.onChangeDataSource}
											>
												<option key={-1} value={''}>
													Select Account
												</option>
												<option key="1" value="567373484">
													AWS 567373484
												</option>
												<option key="2" value="237373414">
													AWS 237373414
												</option>
												<option key="3" value="562573484">
													AWS 562573484
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
									<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12">
										<div className="back-btn">
											<Link
												to={`${PLUGIN_BASE_URL}/add-data-source?accountId=567373484&&cloudName=AWS`}
												type="button"
												className="asset-blue-button"
											>
												Add input
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="specific-input-inner-content">{this.displayDataSource()}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
