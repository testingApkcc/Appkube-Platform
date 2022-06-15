import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { Node } from './Node';
import { PLUGIN_BASE_URL } from '../../constants';
import { CommonService } from '../_common/common';

export class StorageViewDetails extends React.Component<any, any> {
	breadCrumbs: any;
	constructor(props: any) {
		let serviceData: any = localStorage.getItem('viewData');
		if (serviceData) {
			serviceData = JSON.parse(serviceData);
		} else {
			const accountId = CommonService.getParameterByName('accountId', window.location.href);
			props.history.push(`${PLUGIN_BASE_URL}/amazon-services?accountId=${accountId}`);
		}
		super(props);
		let viewid = CommonService.getParameterByName('viewId', window.location.href);
		this.state = {
			activeTab: serviceData.length - 1,
			serviceDetails: [],
			openView: false,
			viewName: '',
			isSubmitted: false,
			viewId: viewid,
			activeId: 0,
			serviceList: serviceData
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

	componentDidMount() {
		let serviceData: any = localStorage.getItem('viewData');
		const { viewId, serviceDetails } = this.state;
		let servicedetail = [];
		let activeId: any = 0;
		if (serviceData) {
			serviceData = JSON.parse(serviceData);
			for (let i = 0; i < serviceData.length; i++) {
				console.log(serviceData[i]);
				if (serviceData[i].id == viewId) {
					servicedetail = serviceData[i].services;
					activeId = i;
				}
			}
			this.setState({
				serviceDetails: servicedetail,
				activeId: activeId,
				activeTab: serviceDetails.length > 0 ? serviceDetails.length - 1 : 0,
			});
		}
	}

	setActiveTab = (activeTab: any) => {
		this.setState({
			activeTab
		});
	};

	displayTabs = () => {
		const { activeTab, serviceDetails } = this.state;
		let retData = [];
		if (serviceDetails && serviceDetails.length > 0) {
			for (let i = 0; i < serviceDetails.length; i++) {
				let node = serviceDetails[i];
				retData.push(
					<li className={activeTab === i ? 'active' : ''} onClick={(e) => this.setActiveTab(i)}>
						<a>
							{node.name}
							<i className="fa fa-times" aria-hidden="true" onClick={(e: any) => this.removeTab(i, e)} />
						</a>
					</li>
				);
			}
		}
		return retData;
	};

	removeTab = (index: any, e: any) => {
		e.stopPropagation();
		const { serviceDetails, activeTab, activeId } = this.state;
		let serviceData: any = localStorage.getItem('viewData');
		if (serviceData) {
			serviceData = JSON.parse(serviceData);
			if (serviceDetails.length > 1) {
				serviceDetails.splice(index, 1);
				this.setState({
					serviceDetails,
					activeTab: serviceDetails[activeTab] ? activeTab : serviceDetails.length - 1
				});
				serviceData[activeId].services = serviceDetails;
				this.setState({
					serviceList: serviceData
				});
			} else {
				serviceData.splice(activeId, 1);
				this.setState({
					serviceList: serviceData
				});
				const accountId = CommonService.getParameterByName('accountId', window.location.href);
				this.props.history.push(`${PLUGIN_BASE_URL}/amazon-services?accountId=${accountId}`);
			}
		}
	};

	saveEnvironmentView = () => {
		const { serviceList } = this.state;
		localStorage.removeItem('viewData');
		localStorage.setItem('viewData', JSON.stringify(serviceList));
	};

	render() {
		const { activeTab, serviceDetails } = this.state;
		console.log(activeTab);
		const accountId = CommonService.getParameterByName('accountId', window.location.href);
		return (
			<div className="asset-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
				<div className="service-container">
					<div className="common-container">
						<div className="row">
							<div className="col-lg-9 col-md-9 col-sm-12">
								<div className="asset-heading">Environments</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-12">
								<div className="float-right common-right-btn">
									<Link
										to={`${PLUGIN_BASE_URL}/amazon-services?accountId=${accountId}`}
										className="asset-white-button min-width-inherit m-r-0"
									>
										<i className="fa fa-arrow-circle-left" />&nbsp;&nbsp; Back
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="common-container">
						<div className="service-account-container">
							<div className="d-flex" style={{ width: '100%', justifyContent: 'space-between' }}>
								<div className="account-tabs">
									<ul>{this.displayTabs()}</ul>
								</div>
								<div className="float-right">
									<button className="asset-blue-button" onClick={this.saveEnvironmentView}>
										Save view
									</button>
								</div>
							</div>
							{serviceDetails &&
							serviceDetails.length > 0 && (
								<div className="webservice-container">
									<Node
										// key={serviceDetails[activeTab].id}
										serviceData={serviceDetails[activeTab]}
										{...this.props}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
