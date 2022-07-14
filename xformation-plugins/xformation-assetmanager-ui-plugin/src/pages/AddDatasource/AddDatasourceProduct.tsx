import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { configFun } from '../../config';
// import { images } from '../../img';
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
			sourceList: []
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
					sourceList: response
				});
				// this.manipulateData(response);
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
		// let accountId = CommonService.getParameterByName('accountId', window.location.href);
		if (sourceList && sourceList.length > 0) {
			for (let i = 0; i < sourceList.length; i++) {
				let source = sourceList[i];
				retData.push(
					<div className="source-boxs">
						<div className="row">
							<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="source-box">
									<div className="images">
										<img src={source.typeLogoUrl} height="50px" width="50px" alt="" />
									</div>
									<div className="source-text">
										<label>{source.name}</label>
										<span>{source.typeName}</span>
										{Object.keys(source.jsonData).length > 0 && (
											<span> | {source.jsonData.authType}</span>
										)}
									</div>
								</div>
							</div>
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
		return (
			<div className="add-data-source-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
				<div className="add-data-source-page-container">
					<div className="data-source-section">
						{/* <div className="source-head">
							<h3>inputs</h3>
						</div> */}
						<div className="source-content">
							<div className="add-input-content">
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
								<div className="back-btn">
									<Link
										to={`${PLUGIN_BASE_URL}/add-data-source-inputs`}
										type="button"
										className="asset-blue-button"
									>
										Add input
									</Link>
								</div>
								{/* <div className="row justify-content-end">
									<div className="col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12">

									</div>
									<div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12">
										<div className="back-btn">
											<Link
												to={`${PLUGIN_BASE_URL}/add-data-source-inputs`}
												type="button"
												className="asset-blue-button"
											>
												Add input
											</Link>
										</div>
									</div>
								</div> */}
							</div>
							<div className="specific-input-content">{this.displayDataSource()}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
