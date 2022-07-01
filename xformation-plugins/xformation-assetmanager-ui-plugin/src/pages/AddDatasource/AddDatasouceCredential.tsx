import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
// import { configFun } from '../../config';
// import { images } from '../../img';
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

	componentDidMount() {}

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
					<div className="common-container">
						<h4>Inputs</h4>
						<label>Add Inputs</label>
					</div>
					<div className="row">
						<div className="account-detail-header">
							<h5>Account Details</h5>
						</div>
						<div className="account-detail">
							<div className="form-group">
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
							<div className="form-group">
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
						<div className="row">
							<div className="col-lg-3 col-md-3 col-sm-6">
								<img src="" />
							</div>
							<div className="col-lg-9 col-md-9 col-sm-6">
								<h5>AWS-pullMetric-Api</h5>
								<label>cloud watch</label>
								<p>Pull aes metrix with cloud API</p>
							</div>
						</div>
						{addCredForm && (
							<div className="">
								<div className="form-group">
									<label htmlFor="description">Access Key Id</label>
									<input
										type="text"
										className="input-group-text"
										name="accesskey"
										value=""
										onChange={this.onChangeDataSource}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="description">Secret Key Id</label>
									<input
										type="text"
										className="input-group-text"
										name="secretkey"
										value=""
										onChange={this.onChangeDataSource}
									/>
								</div>
							</div>
						)}
						<span>Please click on the button to add credential using vault</span>
						{!addCredForm && (
							<button className="asset-blue-button" onClick={this.toggle}>
								Add Credential
							</button>
						)}
						{addCredForm && (
							<React.Fragment>
								<button className="asset-blue-button" onClick={this.toggle}>
									Add Credential
								</button>
								<button className="asset-blue-button" onClick={this.toggle}>
									Add Credential
								</button>
								<button className="asset-blue-button" onClick={this.toggle}>
									Add Credential
								</button>
							</React.Fragment>
						)}
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
							overflowX: 'hidden'
						}}
					>
						<div className="row">
							<span>Showing credential for account: </span>
							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="form-group">
									<label htmlFor="description">Data Source</label>
									<input type="checkbox" />Credentials
								</div>
							</div>
						</div>
						<button className="asset-blue-button" onClick={this.addDataSourceCred}>
							Proceed
						</button>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
