import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { configFun } from '../../config';
import { images } from '../../img';
import { CommonService } from '../_common/common';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { RestService } from '../_service/RestService';
import { PLUGIN_BASE_URL } from '../../constants';

export class AddDatasource extends React.Component<any, any> {
	breadCrumbs: any;
	config: any;
	constructor(props: any) {
		super(props);
		let accountId = CommonService.getParameterByName('accountId', window.location.href);
		let serverName = CommonService.getParameterByName('cloudName', window.location.href);
		this.state = {
			environment: serverName,
			account: accountId,
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
				this.manipulateData(response);
				console.log('Loading Asstes : ', response);
			});
		} catch (err) {
			console.log('Loading Asstes failed. Error: ', err);
		}
	};

	manipulateData = (data: any) => {
		let { environmentList } = this.state;
		let dataobj: any = [];
		if (data && data.length > 0) {
			for (let i = 0; i < data.length; i++) {
				dataobj.push(data[i]);
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
		let retData = [];
		const { sourceList, environment } = this.state;
		console.log(sourceList);
		// let accountId = CommonService.getParameterByName('accountId', window.location.href);
		if (sourceList && sourceList.length > 0) {
			for (let i = 0; i < sourceList.length; i++) {
				if (sourceList[i].typeName === environment) {
					retData.push(
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-md-n5">
							<Link
								to={`${PLUGIN_BASE_URL}/add-datasource-credential?sourceName=${sourceList[i]
									.name}&&accountId=${sourceList[i].uid}`}
							>
								<div className="source-box">
									<div className="images">
										<img src={sourceList[i].typeLogoUrl} height="50px" width="50px" alt="" />
									</div>
									<div className="source-content">
										<label>{sourceList[i].name}</label>
										<span>{sourceList[i].type}</span>
										<p>Receive traces and store in local Zipkin DB</p>
									</div>
								</div>
							</Link>
						</div>
					);
				}
			}
		}
		if (retData && retData.length == 0) {
			retData.push(
				<div className="">
					<span>Data source not found, select other account.</span>
				</div>
			);
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
		const { environment, account, environmentList } = this.state;
		return (
			<div className="add-data-source-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
				<div className="add-data-source-page-container">
					<div className="data-source-section">
						<div className="source-head">
							<h3>inputs</h3>
							<div className="right-search-bar">
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
							<div className="services-heading">
								<span>
									<img src={images.awsLogo} alt="" />
								</span>
								<h5>Account Details</h5>
							</div>
							<div className="source-boxs">
								<div className="row">{this.displayDataSource()}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
