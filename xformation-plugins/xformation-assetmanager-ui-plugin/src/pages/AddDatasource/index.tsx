import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
// import { configFun } from '../../config';
// import { images } from '../../img';
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
					<div>
						
					</div>
				)
			}
		}
	};

	render() {
		return (
			<div className="asset-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
				<div className="environments-page-container">
					<div className="common-container">
						<div className="row">
							<div className="col-lg-9 col-md-9 col-sm-12">
								<div className="asset-heading">Asset Management</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
