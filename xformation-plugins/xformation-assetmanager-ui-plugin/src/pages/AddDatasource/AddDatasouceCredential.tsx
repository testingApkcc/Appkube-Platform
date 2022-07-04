import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
// import { configFun } from '../../config';
import { images } from '../../img';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
// import { RestService } from '../_service/RestService';
// import { PLUGIN_BASE_URL } from '../../constants';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export class AddDatasourceCredential extends React.Component<any, any> {
	breadCrumbs: any;
	constructor(props: any) {
		super(props);
		this.state = {
			addCredForm: false,
			addcredpopup: false
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

	componentDidMount() { }

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
			addcredpopup: false,
		});
	};

	render() {
		const { addcredpopup, addCredForm } = this.state;
		return (
			<div className="add-data-source-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGER" />
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
							<div className="account-details-heading">
								<h5>Account Details</h5>
							</div>
							<div className="environgment-details">
								<div className="form-group description-content">
									<label htmlFor="description">Select Environment</label>
									<select
										className="input-group-text"
										name="environment"
										value=""
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
										value=""
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
											<div className="source-massage-content">
												{!addCredForm && <span>Please click on the button to add credential using vault</span>}
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
														<button className="asset-blue-button" onClick={this.toggle}>
															Explore
														</button>
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
						}}>
						<div className="syneckit-content">
							<div className="heading">
								<p>Showing Credentials for Account &#8758; <span>AWS (657907747545)</span></p>
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
