import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { configFun } from '../../config';
import { images } from '../../img';
import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { RestService } from '../_service/RestService';
import { Action } from './Action';
import { PLUGIN_BASE_URL } from '../../constants';

export class Environments extends React.Component<any, any> {
	breadCrumbs: any;
	AddAccountRef: any;
	AddfolderRef: any;
	EditEnviornmentRef: any;
	config: any;
	constructor(props: any) {
		super(props);
		this.state = {
			awsAccounts: 0,
			azureAccounts: 0,
			gcpAccounts: 0,
			synectiksAccounts: 0,
			kubernatesAccounts: 0,
			Environment: [],
			accountList: [],
			codeEditorValue: '',
			awsRegionList: [],
			optionJsonData: [],
			displayJsonData: [],
			selectedTeg: [],
			showTagFilter: false,
			showRecentFilter: false,
			showAddNewFilter: false,
			filterJsonData: [
				{
					name: 'Products',
					key: 'products',
					id: 1,
					filter: [
						{
							label: 'Ems',
							value: 'ems',
							id: 2
						},
						{
							label: 'Procurement',
							value: 'procurement',
							id: 3
						},
						{
							label: 'HRMS',
							value: 'hrms',
							id: 4
						},
						{
							label: 'Supply Chain',
							value: 'supply-chain',
							id: 5
						}
					]
				},
				{
					name: 'Environments',
					key: 'environments',
					id: 2,
					filter: [
						{
							label: 'AWS',
							value: 'aws',
							id: 6
						},
						{
							label: 'GCP',
							value: 'gcp',
							id: 7
						},
						{
							label: 'Kubernets',
							value: 'kubernets',
							id: 8
						},
						{
							label: 'Acronic',
							value: 'acronic',
							id: 9
						}
					]
				},
				{
					name: 'APP Services',
					key: 'app-services',
					id: 3,
					filter: [
						{
							label: 'Search',
							value: 'search',
							id: 10
						},
						{
							label: 'Security/RBMS',
							value: 'security-rbms',
							id: 11
						},
						{
							label: 'Preferance',
							value: 'preferance',
							id: 12
						},
						{
							label: 'Dataflow',
							value: 'dataflow',
							id: 13
						},
						{
							label: 'CMS/catlogue',
							value: 'cms-catalogue',
							id: 14
						}
					]
				},
				{
					name: 'Data Services',
					key: 'data-services',
					id: 4,
					filter: [
						{
							label: 'PostGreSQL',
							value: 'post-ger-sql',
							id: 15
						},
						{
							label: 'ElasticSearch',
							value: 'eastic-search',
							id: 16
						},
						{
							label: 'MongoDB',
							value: 'mongo-db',
							id: 17
						},
						{
							label: 'S3',
							value: 's3',
							id: 18
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

		this.AddAccountRef = React.createRef();
		this.AddfolderRef = React.createRef();
		this.EditEnviornmentRef = React.createRef();
		this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
	}
	handleMenuToggle = (key: any) => {
		const { accountList } = this.state;
		accountList[key].showMenu = !accountList[key].showMenu;
		this.setState({
			accountList
		});
	};

	displaySelectedTags = () => {
		const { optionJsonData } = this.state;
		let retData = [];
		if (optionJsonData.length > 0) {
			for (let i = 0; i < optionJsonData.length; i++) {
				if (optionJsonData[i].isChecked) {
					retData.push(
						<div className="fliter-selected" onClick={() => this.setChildData(optionJsonData[i])} key={i}>
							{optionJsonData[i].name}{' '}
							<i
								className="fa fa-times"
								onClick={() => this.removeSelectedTag(optionJsonData[i].value)}
							/>
						</div>
					);
					if (optionJsonData[i].subdata) {
						for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
							if (optionJsonData[i].subdata[j].isChecked) {
								retData.push(
									<div
										className="fliter-selected"
										onClick={() => this.setState({ showTagFilter: false })}
										key={j}
									>
										{optionJsonData[i].subdata[j].name}{' '}
										<i
											className="fa fa-times"
											onClick={() => this.removeSelectedTag(optionJsonData[i].subdata[j].value)}
										/>
									</div>
								);
							}
						}
					}
				}
			}
		}
		return retData;
	};

	setChildData = (data: any) => {
		if (data.subdata.length > 0) {
			this.setState({
				showTagFilter: true,
				displayJsonData: data.subdata
			});
		} else {
			this.setState({
				showTagFilter: false
			});
		}
	};

	removeSelectedTag = (value: any) => {
		const { optionJsonData } = this.state;
		for (let i = 0; i < optionJsonData.length; i++) {
			let row = optionJsonData[i];
			if (row.value == value) {
				optionJsonData[i].isChecked = !optionJsonData[i].isChecked;
			} else {
				if (optionJsonData[i].subdata) {
					for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
						if (optionJsonData[i].subdata[j].value == value) {
							optionJsonData[i].subdata[j].isChecked = !optionJsonData[i].subdata[j].isChecked;
						}
					}
				}
			}
		}
		this.setState({
			optionJsonData,
			displayJsonData: optionJsonData
		});
	};

	displayTagList = () => {
		const { displayJsonData } = this.state;
		let retData = [];
		for (let i = 0; i < displayJsonData.length; i++) {
			retData.push(
				<div className="form-check" onClick={() => this.changeHandleState(i, displayJsonData[i].value)} key={i}>
					<input type="checkbox" checked={displayJsonData[i].isChecked} className="checkbox" />
					<label htmlFor={displayJsonData[i].value}>{displayJsonData[i].name}</label>
				</div>
			);
		}
		return retData;
	};

	changeHandleState = (index: any, value: any) => {
		let { displayJsonData, optionJsonData, selectedTeg } = this.state;
		for (let i = 0; i < optionJsonData.length; i++) {
			if (optionJsonData[i].value === value) {
				if (!selectedTeg.includes(value)) {
					selectedTeg.push(value);
					optionJsonData[i].isChecked = !optionJsonData[i].isChecked;
					if (optionJsonData[i].subdata.length > 0) {
						displayJsonData = [];
						for (let k = 0; k < optionJsonData[i].subdata.length; k++) {
							displayJsonData.push(optionJsonData[i].subdata[k]);
						}
						this.setState({
							displayJsonData
						});
					} else {
						this.setState({
							displayJsonData: optionJsonData
						});
					}
				} else {
					selectedTeg.splice(selectedTeg.indexOf(value), 1);
					optionJsonData[i].isChecked = !optionJsonData[i].isChecked;
					displayJsonData = optionJsonData;
				}
			} else {
				if (optionJsonData[i].subdata.length > 0) {
					displayJsonData = [];
					for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
						if (optionJsonData[i].subdata[j].value === value) {
							if (!selectedTeg.includes(value)) {
								selectedTeg.push(value);
								optionJsonData[i].subdata[j].isChecked = !optionJsonData[i].subdata[j].isChecked;
								this.setState({
									displayJsonData: optionJsonData
								});
							} else {
								selectedTeg.splice(selectedTeg.indexOf(value), 1);
								optionJsonData[i].subdata[j].isChecked = !optionJsonData[i].subdata[j].isChecked;
								displayJsonData = optionJsonData;
							}
						}
					}
				}
			}
		}
		this.setState({
			selectedTeg
		});
	};

	async componentDidMount() {
		await this.getAccountList();
		// await this.getAwsRegionsList();
	}

	getAwsRegionsList = async () => {
		try {
			await RestService.getData(this.config.GET_AWS_REGIONS, null, null).then((response: any) => {
				this.setState({
					awsRegionList: response
				});
				// console.log("Loading aws regions : ", response);
			});
		} catch (err) {
			console.log('Loading aws regions failed. Error: ', err);
		}
	};

	getAccountList = async () => {
		try {
			await RestService.getData(this.config.GET_ALL_ACCOUNT, null, null).then((response: any) => {
				this.setState({
					accountList: response
				});
				console.log('Loading Asstes : ', response);
			});
		} catch (err) {
			console.log('Loading Asstes failed. Error: ', err);
		}
	};

	refreshEnvironment = async () => {
		this.getAccountList();
	};

	onClickEditAccount = (e: any, selectedEnviornment: any) => {
		this.EditEnviornmentRef.current.toggle(selectedEnviornment);
	};

	onClickAddAccount = (e: any, selectedEnviornment: any) => {
		this.AddAccountRef.current.toggle(selectedEnviornment);
	};

	displayAWSAccountList() {
		const { accountList, awsRegionList } = this.state;
		let retData = [];
		for (let i = 0; i < accountList.length; i++) {
			let row = accountList[i];
			if (row.cloud.name.toLowerCase() === 'AWS'.toLowerCase()) {
				// console.log("AWS data : ", row);
				retData.push(
					<tr key={i}>
						<td>
							<Link to={`${PLUGIN_BASE_URL}/amazon-services?accountId=${row.accountId}`}>
								AWS ({row.accountId})
							</Link>
						</td>
						<td>{row.totalProductEnclave}</td>
						<td>{row.totalProducts}</td>
						<td>{row.totalAppServices}</td>
						<td>
							{row.totalDataServices}
							{/* <div className={row.status === 'ACTIVE' ? 'status enable' : 'status disable'}></div> */}
						</td>
						<td>
							<div className="d-block text-center action-edit">
								{row.showMenu &&
									<>
										<div className="open-create-menu-close" onClick={(e) => { this.handleMenuToggle(i) }}></div>
										<div className="text-center open-create-menu">
											<a href={(row.accountId && row.cloud.name) ? `${PLUGIN_BASE_URL}/add-data-source?accountId=${row.accountId}&&cloudName=${row.cloud.name}` : `${PLUGIN_BASE_URL}/add-data-source-product`}>Add New Product</a>
											<a>Add Cluster</a>
											<a>Add Cloud Managed Services</a>
											<a>Add Gateway Services</a>
										</div>
									</>
								}

								<button className="asset-white-button min-width-inherit m-r-0" onClick={(e) => { this.handleMenuToggle(i) }}>
									{/* <Rbac parentName={config.PARENT_NAME} childName="library-index-addfolderbtn"> */}
									{awsRegionList.length > 0 && (
										<Action detail={row} regionList={awsRegionList} {...this.props} />
									)}
									{/* </Rbac>                                   */}
									<i className="fa fa-ellipsis-h"></i>
								</button>
							</div>
						</td>
					</tr>
				);
			}
		}
		return retData;
	}

	displayAzureTableData() {
		const { accountList } = this.state;
		let retData = [];
		for (let i = 0; i < accountList.length; i++) {
			let row = accountList[i];
			if (row.cloud.name.toLowerCase() === 'AZURE'.toLowerCase()) {
				retData.push(
					console.log('Loading azure data : ', row),
					<tr key={i}>
						<td>
							{/* <Link to={`${config.basePath}/amazonservices?asset_id=${row.id}&orgId=${row.organization ? row.organization.id : null}`}> */}
							AZURE ({row.tenantId})
							{/* </Link> */}
						</td>
						<td>{row.organization && row.organization.name}</td>
						<td>{row.organizationalUnit && row.organizationalUnit.name}</td>
						<td>N/A</td>
						<td>
							<div className={row.status ? 'status enable' : 'status disable'} />
						</td>
						<td>
							<div className="d-block text-center">
								<button className="asset-white-button min-width-inherit m-r-0">
									{/* <Rbac parentName={config.PARENT_NAME} childName="library-index-addfolderbtn"> */}
									<Action detail={row} {...this.props} />
									{/* </Rbac> */}
								</button>
							</div>
						</td>
					</tr>
				);
			}
		}

		return retData;
	}

	onClickAddfolder = (link: any) => {
		this.AddfolderRef.current.setLink(link);
		this.AddfolderRef.current.toggle();
	};

	_displayEnvironmentBox() {
		const EnvironmentBox = this.state.accountList.map((val: any, key: any) => {
			return (
				<div key={key}>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="services-box">
							<div className="heading">
								{(() => {
									if (val.type == 'AWS') {
										return (
											<span>
												<img src={images.awsLogo} alt="" />
											</span>
										);
									} else {
										if (val.type == 'AZURE') {
											return (
												<span>
													<img src={images.microsoftAzureLogo} alt="" />
												</span>
											);
										} else {
											if (val.type == 'Synectiks') {
												return (
													<span>
														<img src={images.KubernetesLogo} alt="" />
													</span>
												);
											} else {
												if (val.type == 'GCP') {
													return (
														<span>
															<img src={images.gcpLogo} alt="" />
														</span>
													);
												} else {
													return null;
												}
											}
										}
									}
								})()}
							</div>
							<div className="table-box">
								<table className="table">
									<tbody>
										<a
											style={{
												float: 'left',
												marginRight: '-54px',
												fontSize: '14px'
											}}
											onClick={(e) => this.onClickAddAccount(e, val)}
										>
											<i>Add Account</i>
										</a>
										<tr>
											<td>Accounts</td>
											<td>20</td>
										</tr>
										<tr>
											<td>Assets</td>
											<td>150</td>
										</tr>
										<tr>
											<td>Log Monitored</td>
											<td>100 </td>
										</tr>
										<tr>
											<td>KPI Monitored</td>
											<td>18</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			);
		});
		return EnvironmentBox;
	}

	render() {
		const { showRecentFilter, showAddNewFilter, filterJsonData } = this.state;
		return (
			<div className="asset-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
				<div className="environments-page-container">
					<div className="common-container">
						<div className="row">
							<div className="col-lg-9 col-md-9 col-sm-12">
								<div className="asset-heading">Environments</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-12">
								<div className="float-right common-right-btn">
									<Link
										to={`${PLUGIN_BASE_URL}/department-wise-products`}
										className="asset-white-button min-width-inherit"
									>
										<img src={images.Jobs} alt="" style={{ maxWidth: '20px' }} />
									</Link>
									{/* <Link to={`${PLUGIN_BASE_URL}/environments`} className="asset-white-button min-width-inherit">
                    <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back
                  </Link> */}
								</div>
							</div>
						</div>
					</div>
					<div className="common-container border-bottom-0 environments-services-container">
						<div className="row">
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
								<div className="services-box">
									<div className="heading">
										<span>
											<img src={images.awsLogo} alt="" />
										</span>
										<h3>AWS</h3>
									</div>
									<div className="table-box">
										<table className="table">
											<tbody>
												<tr>
													<td>Accounts</td>
													<td>{this.displayAWSAccountList().length}</td>
												</tr>
												<tr>
													<td>Assets</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Alerts</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Total Billing</td>
													<td>0</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
								<div className="services-box">
									<div className="heading">
										<span>
											<img src={images.microsoftAzureLogo} alt="" />
										</span>
										<h3>Azure</h3>
									</div>
									<div className="table-box">
										<table className="table">
											<tbody>
												<tr>
													<td>Accounts</td>
													<td>{this.displayAzureTableData().length}</td>
												</tr>
												<tr>
													<td>Assets</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Alerts</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Total Billing</td>
													<td>0</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
								<div className="services-box">
									<div className="heading">
										<span>
											<img src={images.gcpLogo} alt="" />
										</span>
										<h3>CGP</h3>
									</div>
									<div className="table-box">
										<table className="table">
											<tbody>
												<tr>
													<td>Accounts</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Assets</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Alerts</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Total Billing</td>
													<td>0</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
								<div className="services-box">
									<div className="heading">
										<span>
											<img src={images.KubernetesLogo} alt="" />
										</span>
										<h3>Kubernates</h3>
									</div>
									<div className="table-box">
										<table className="table">
											<tbody>
												<tr>
													<td>Accounts</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Assets</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Alerts</td>
													<td>0</td>
												</tr>
												<tr>
													<td>Total Billing</td>
													<td>0</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="common-container border-bottom-0 environments-table-container">
						<SelectCloudFilter filterJsonData={filterJsonData} />
						<div className="recent-fliters-container">
							<div className="row">
								<div className="col-lg-8 col-md-8 col-sm-12">
									<div className="row">
										<div className="col-lg-4 col-md-4 col-sm-12">
											<div className="fliter">
												<div
													className="fliter-toggel"
													onClick={() =>
														this.setState({
															showRecentFilter: !showRecentFilter
														})}
												>
													<i className="fa fa-clock-o" />
													<span>Recent</span>
												</div>
												<div
													className={
														showRecentFilter === true ? (
															'fliter-collapse active'
														) : (
															'fliter-collapse'
														)
													}
												>
													<ul>
														<li>
															<Link to={`${PLUGIN_BASE_URL}/account-setup`}>
																<span>
																	<img src={images.awsLogo} alt="" />
																</span>
																<p>AWS (657907747545)</p>
															</Link>
														</li>
														<li>
															<Link to={`${PLUGIN_BASE_URL}/account-setup`}>
																<span>
																	<img src={images.awsLogo} alt="" />
																</span>
																<p>AWS (655668745458)</p>
															</Link>
														</li>
													</ul>
												</div>
												<div
													className={
														showRecentFilter === true ? (
															'fliters-collapse-bg active'
														) : (
															'fliters-collapse-bg'
														)
													}
													onClick={() =>
														this.setState({ showRecentFilter: !showRecentFilter })}
												/>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-12">
											<div className="fliter">
												<div
													className="fliter-toggel"
													onClick={() =>
														this.setState({
															showAddNewFilter: !showAddNewFilter
														})}
												>
													<i className="fa fa-plus" />
													<span>Add New Environment</span>
												</div>
												<div
													className={
														showAddNewFilter === true ? (
															'fliter-collapse active'
														) : (
															'fliter-collapse'
														)
													}
												>
													<ul>
														<li>
															<Link to={`${PLUGIN_BASE_URL}/account-setup`}>
																<span>
																	<img src={images.awsLogo} alt="" />
																</span>
																<p>AWS Environment</p>
															</Link>
														</li>
														<li>
															<Link to={`${PLUGIN_BASE_URL}/account-setup`}>
																<span>
																	<img src={images.microsoftAzureLogo} alt="" />
																</span>
																<p>Azure Environment</p>
															</Link>
														</li>
														<li>
															<Link to={`${PLUGIN_BASE_URL}/account-setup`}>
																<span>
																	<img src={images.gcpLogo} alt="" />
																</span>
																<p>GCP Environment</p>
															</Link>
														</li>
														<li>
															<Link to={`${PLUGIN_BASE_URL}/account-setup`}>
																<span>
																	<img src={images.KubernetesLogo} alt="" />
																</span>
																<p>Kubernetes</p>
															</Link>
														</li>
													</ul>
												</div>
												<div
													className={
														showAddNewFilter === true ? (
															'fliters-collapse-bg active'
														) : (
															'fliters-collapse-bg'
														)
													}
													onClick={() =>
														this.setState({ showAddNewFilter: !showAddNewFilter })}
												/>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-12">
											<div className="fliter">
												<div className="fliter-toggel">
													<i className="fa fa-sign-out" />
													<span>Export</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="form-group search-control m-b-0">
										<button className="btn btn-search">
											<i className="fa fa-search" />
										</button>
										<input type="text" className="input-group-text" placeholder="Search" />
									</div>
								</div>
							</div>
						</div>
						<div className="environments-table">
							<table className="table">
								<thead>
									<tr>
										<th>
											<span>
												<img src={images.awsLogo} alt="" />
											</span>{' '}
											AWS
										</th>
										<th>Product Enclave</th>
										<th>Products</th>
										<th>App Services</th>
										<th>Data Services</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>{this.displayAWSAccountList()}</tbody>
							</table>
							<table className="table">
								<thead>
									<tr>
										<th colSpan={5}>
											<span>
												<img src={images.microsoftAzureLogo} alt="" />
											</span>{' '}
											Azure Cloud
										</th>
									</tr>
								</thead>
								<tbody>{this.displayAzureTableData()}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
