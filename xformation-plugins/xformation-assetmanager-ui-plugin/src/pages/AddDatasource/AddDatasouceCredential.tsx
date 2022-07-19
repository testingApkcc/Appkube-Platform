import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { configFun } from '../../config';
// import { images } from '../../img';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
import { RestService } from '../_service/RestService';
import { PLUGIN_BASE_URL } from '../../constants';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CommonService } from '../_common/common';

export class AddDatasourceCredential extends React.Component<any, any> {
	breadCrumbs: any;
	config: any;
	constructor(props: any) {
		super(props);
		let accountId = CommonService.getParameterByName('accountId', window.location.href);
		let serverName = CommonService.getParameterByName('sourceName', window.location.href);
		this.state = {
			addCredForm: false,
			addcredpopup: false,
			datasourceData: {},
			environmentList: [],
			environment: serverName,
			account: accountId
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
			await RestService.getData(this.config.GET_MASTER_DATASOURCE, null, null).then((response: any) => {
				this.manipulateData(response);
				console.log('Loading Asstes : ', response);
			});
		} catch (err) {
			console.log('Loading Asstes failed. Error: ', err);
		}
	};

	manipulateData = (data: any) => {
		let { environmentList } = this.state;
		let dataobj: any = {};
		// let cloudName = CommonService.getParameterByName('sourceName', window.location.href);
		let accountId = CommonService.getParameterByName('Id', window.location.href);
		if (data && data.length > 0) {
			for (let i = 0; i < data.length; i++) {
				let datasource= data[i]
				if (data[i].id == accountId) {
					dataobj = data[i].jsonData;
				}
				if (environmentList && environmentList.length > 0) {
					if (environmentList.indexOf(datasource.cloudType) === -1) {
						environmentList.push(datasource.cloudType);
					}
				} else {
					environmentList.push(datasource.cloudType);
				}
			}
		}
		this.setState({
			datasourceData: dataobj,
			environmentList
		});
	};

	toggle = () => {
		const { addcredpopup } = this.state;
		this.setState({
			addcredpopup: !addcredpopup
		});
	};

	onChangeDataSource = (e: any) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	addDataSourceCred = () => {
		this.setState({
			addCredForm: true,
			addcredpopup: false
		});
	};

	render() {
		const { addcredpopup, addCredForm, datasourceData, environment, account } = this.state;
		return (
			<div className="add-data-source-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGER" />
				<div className="add-data-source-page-container">
					<div className="data-source-section">
						<div className="source-head">
							<h3>inputs</h3>
							<div className="right-search-bar">
								{/* <div className="form-group search-control m-b-0">
									<button className="btn btn-search">
										<i className="fa fa-search" />
									</button>
									<input type="text" className="input-group-text" placeholder="Search" />
								</div> */}
								<div className="back-btn">
									<Link
										to={`${PLUGIN_BASE_URL}/add-data-source?accountId=${account}&&cloudName=${environment}`}
										type="button"
										className="btn btn-link"
									>
										<i className="far fa-arrow-alt-circle-left" />Back
									</Link>
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
									<input readOnly value={environment} />
									{/* <select
										className="input-group-text"
										name="environment"
										value={environment}
										// onChange={this.onChangeDataSource}
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
									</select> */}
								</div>
								<div className="form-group description-content">
									<label htmlFor="description">Select Account</label>
									<input readOnly value={account} />
									{/* <select
										className="input-group-text"
										name="account"
										value=""
										// onChange={this.onChangeDataSource}
									>
										<option key="1" value="567373484">
											AWS 567373484
										</option>
										<option key="2" value="237373414">
											AWS 237373414
										</option>
									</select> */}
								</div>
							</div>
							<div className="source-details">
								<div className="row">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="source-box">
											{datasourceData && (
												<div className="source-detail-content">
													{datasourceData.info && (
														<div className="images">
															<img
																src={datasourceData.info.logos.small}
																height="50px"
																width="50px"
																alt=""
															/>
														</div>
													)}
													<div className="source-content">
														<label>{datasourceData.name}</label>
														<span>{datasourceData.type}</span>
														{datasourceData.info && (
															<p>{datasourceData.info.description}</p>
														)}
													</div>
												</div>
											)}
											<div className="source-massage-content">
												{!addCredForm && (
													<span>
														Please click on the button to add credential using vault
													</span>
												)}
												{!addCredForm && (
													<button className="asset-blue-button" onClick={this.toggle}>
														Add Credential
													</button>
												)}
												{addCredForm && (
													<div className="environgment-details">
														<h5>Connection Detail</h5>
														<div className="form-group description-content">
															<label htmlFor="description">Access Key Id</label>
															<input
																type="text"
																className="input-group-text"
																name="accesskey"
																value=""
																placeholder="configured"
																onChange={this.onChangeDataSource}
															/>
														</div>
														<div className="form-group description-content">
															<label htmlFor="description">Secret Key Id</label>
															<input
																type="text"
																className="input-group-text"
																name="secretkey"
																value=""
																placeholder="configured"
																onChange={this.onChangeDataSource}
															/>
														</div>
													</div>
												)}
												{addCredForm && (
													<React.Fragment>
														<button className="asset-blue-button" onClick={this.toggle}>
															Back
														</button>
														<Link to={`${PLUGIN_BASE_URL}/explore-datasource`}>
															<button className="asset-blue-button">Explore</button>
														</Link>
														<button className="asset-blue-button" onClick={this.toggle}>
															Save &#38; Test
														</button>
													</React.Fragment>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Modal
					isOpen={addcredpopup}
					toggle={this.toggle}
					className="modal-container assetmanager-modal-container"
				>
					<ModalHeader toggle={this.toggle}>Synectiks Vault</ModalHeader>
					<ModalBody
						style={{
							height: 'calc(60vh - 50px)',
							overflowY: 'auto',
							display: 'grid',
							overflowX: 'hidden'
						}}
					>
						<div className="syneckit-content">
							<div className="heading">
								<p>
									Showing Credentials for Account &#8758; <span>AWS (657907747545)</span>
								</p>
							</div>
							<div className="form-group credentials-text">
								<input type="checkbox" />
								<span>Credentials</span>
							</div>
						</div>
						<div className="modal-submit-button">
							<button className="asset-blue-button" onClick={this.addDataSourceCred}>
								Proceed
							</button>
						</div>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
