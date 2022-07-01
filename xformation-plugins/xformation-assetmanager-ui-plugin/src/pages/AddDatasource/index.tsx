import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
// import { configFun } from '../../config';
import { images } from '../../img';
// import { SelectCloudFilter } from '../../components/SelectCloudFilter';
// import { RestService } from '../_service/RestService';
// import { PLUGIN_BASE_URL } from '../../constants';

export class AddDatasource extends React.Component<any, any> {
	breadCrumbs: any;
	constructor(props: any) {
		super(props);
		this.state = {
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
		if (sourceList && sourceList.length > 0) {
			for (let i = 0; i < sourceList.length; i++) {
				retData.push(
					<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div className="source-box">
							<div className="images"><img src={images.awsLogo} alt="" /></div>
							<div className="Source-content">
								<label>AWS-PullMetrice-Api</label>
								<span>CloudWatch</span>
								<p>Pull AWS metrics with Cloud API</p>
							</div>
						</div>
					</div>
				)
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
								<div className='back-btn'>
									<button type="button" className="btn btn-link"><i className="far fa-arrow-alt-circle-left"></i>Back</button>
								</div>
							</div>
						</div>
						<div className="source-content">
							<div className="heading"><h4>Add inputs</h4></div>
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
							<div className="services-heading">
								<span>
									<img src={images.awsLogo} alt="" />
								</span>
								<h5>Account Details</h5>
							</div>
							<div className="Source-boxs">
								<div className="row">
									{this.displayDataSource()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
