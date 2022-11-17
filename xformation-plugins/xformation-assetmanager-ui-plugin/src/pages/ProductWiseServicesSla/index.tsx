import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { Bar } from 'react-chartjs-2';
import { RestService } from '../_service/RestService';
import { configFun } from '../../config';
import { TopologyView } from './TopologyView';
import { images } from '../../img';
const GLOBAL_SERVICE = 'Cloud Managed';
const enumServiceNature = {
	common: "Common",
	business: "Business"
};
export class ProductWiseServicesSla extends React.Component<any, any> {
	breadCrumbs: any;
	config: any;
	nodeMapping: any = {};
	clusterMapping: any = {};
	constructor(props: any) {
		super(props);
		this.state = {
			chartData: [],
			auctionchartData: {
				labels: [],
				datasets: [
					{
						data: [],
						backgroundColor: []
					}
				]
			},
			accountId: '',
			tableData: [],
			environmentType: '',
			productName: '',
			topologyMainData: null,
			isTopologyDataLoaded: false,
			isTopologyActive: false
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

	componentDidMount() {
		this.getServicesData();
	}

	getServicesData = async () => {
		try {
			await RestService.getData(`${this.config.GET_SERVICES_DATA}`, null, null).then((response: any) => {
				this.manipulateServiceData(response.services);
			});
		} catch (err) {
			console.log('Loading accounts failed. Error: ', err);
		}
	};

	manipulateServiceData = (services: any) => {
		const treeData: any = [];
		const { filterData } = this.state;
		const topologyMainData: any = {};
		let firstProd = "";
		let firstEnv = "";
		services.forEach((service: any) => {
			const { serviceNature, associatedProduct, associatedEnv, serviceHostingType, associatedCommonService, associatedBusinessService, associatedLandingZone, serviceType } = service.metadata_json;
			if (associatedLandingZone === "897373451") {
				if (!firstProd) {
					firstProd = associatedProduct;
				}
				if (!firstEnv) {
					firstEnv = associatedEnv;
				}
				const node = treeData[associatedProduct] || {};
				const envServicesData = node[associatedEnv] || {};
				const serviceNatureData = envServicesData[serviceNature] || {};
				let associatedService = associatedBusinessService;
				if (serviceNature === enumServiceNature.common) {
					associatedService = associatedCommonService;
				}
				serviceNatureData[associatedService] = serviceNatureData[associatedService] || [];
				serviceNatureData[associatedService].push(service);
				envServicesData[serviceNature] = serviceNatureData;
				node[associatedEnv] = envServicesData;
				treeData[associatedProduct] = node;

				//manipulation for topology view
				const topNode = topologyMainData[associatedProduct] || {};
				const envTopData = topNode[associatedEnv] || {};
				const serviceTypeTopDat = envTopData[serviceType] || {};
				const serviceHostingData = serviceTypeTopDat[serviceHostingType] || {};
				const serviceNatureDataForTop = serviceHostingData[serviceNature] || {};
				let associatedServiceTop = associatedBusinessService;
				if (serviceNature === enumServiceNature.common) {
					associatedServiceTop = associatedCommonService;
				}
				serviceNatureDataForTop[associatedServiceTop] = serviceNatureDataForTop[associatedServiceTop] || [];
				serviceNatureDataForTop[associatedServiceTop].push(service);
				serviceHostingData[serviceNature] = serviceNatureDataForTop;
				serviceTypeTopDat[serviceHostingType] = serviceHostingData;
				envTopData[serviceType] = serviceTypeTopDat;
				topNode[associatedEnv] = envTopData;
				topologyMainData[associatedProduct] = topNode;
			}
		});
		this.setState({
			tableData: treeData,
			filterData,
			environmentType: firstEnv,
			productName: firstProd,
			topologyMainData,
			isTopologyDataLoaded: true
		});
	};

	convertObjectIntoArray = (obj: any) => {
		const keys = Object.keys(obj);
		return keys.map((key) => {
			return obj[key];
		});
	};

	getAppDataServices = (treeData: any) => {
		const nodeKeys = Object.keys(treeData);
		const servicesLength: any = {};
		nodeKeys.forEach((nodeKey: any) => {
			if (nodeKey === GLOBAL_SERVICE) {
				const uniqueProducts: any = [];
				const environmentData = treeData[GLOBAL_SERVICE];
				const environemntKeys = Object.keys(environmentData);
				environemntKeys.forEach((enviornemntKey: any) => {
					const commonBusinessServices = environmentData[enviornemntKey];
					const commonBusinessKeys = Object.keys(commonBusinessServices);
					commonBusinessKeys.forEach((commonBusinessKey: any) => {
						const productData = commonBusinessServices[commonBusinessKey];
						const productKeys = Object.keys(productData);
						productKeys.forEach((productKey: any) => {
							if (uniqueProducts.indexOf(productKey) === -1) {
								uniqueProducts.push(productKey);
							}
							servicesLength[nodeKey] = servicesLength[nodeKey] || {};
							servicesLength[nodeKey].uniqueProducts = uniqueProducts.length;
						});
					});
				});
			} else {
				const uniqueProducts: any = [];
				const clusterData = treeData[nodeKey];
				const clusterKeys = Object.keys(clusterData);
				clusterKeys.forEach((clusterKey: any) => {
					const environmentData = clusterData[clusterKey];
					const environemntKeys = Object.keys(environmentData);
					environemntKeys.forEach((enviornemntKey: any) => {
						const commonBusinessServices = environmentData[enviornemntKey];
						const commonBusinessKeys = Object.keys(commonBusinessServices);
						commonBusinessKeys.forEach((commonBusinessKey: any) => {
							const productData = commonBusinessServices[commonBusinessKey];
							const productKeys = Object.keys(productData);
							productKeys.forEach((productKey: any) => {
								if (uniqueProducts.indexOf(productKey) === -1) {
									uniqueProducts.push(productKey);
								}
								const serviceDatas = productData[productKey];
								const serviceDataKeys = Object.keys(serviceDatas);
								serviceDataKeys.forEach((serviceDataKey: any) => {
									const appData = serviceDatas[serviceDataKey].appData;
									const appDataKeys = Object.keys(appData);
									appDataKeys.forEach((appDataKey: any) => {
										servicesLength[nodeKey] = servicesLength[nodeKey] || {};
										servicesLength[nodeKey][appDataKey] = servicesLength[nodeKey][appDataKey] || 0;
										servicesLength[nodeKey][appDataKey] += appData[appDataKey];
										servicesLength[nodeKey].uniqueProducts = uniqueProducts.length;
									});
								});
							});
						});
					});
				});
			}
		});
		this.setState({
			servicesLength
		});
	};

	displayServiceSLA = () => {
		let { tableData, auctionchartData, productName } = this.state;
		let retData: any = [];
		let labels: any = [];
		if (tableData) {
			const products = Object.keys(tableData);
			products.map((product, index) => {
				let appcount = 0;
				let datacount = 0;
				let data: any = {};
				let chartticksdata: any = [];
				let totalCost = 0;
				let envCount = 0;
				const environments = Object.keys(tableData[product]);
				let serviceByType: any = {};
				environments.map((environment, i) => {
					envCount = envCount + 1;
					const serviceNatureData = tableData[product][environment];
					Object.keys(serviceNatureData).map((serviceNature, j) => {
						const associatedServicesData = serviceNatureData[serviceNature];
						Object.keys(associatedServicesData).map((associatedService) => {
							const servicesArray = associatedServicesData[associatedService];
							if (
								servicesArray &&
								servicesArray.length > 0
							) {
								serviceByType['performance'] = serviceByType['performance'] || 0;
								serviceByType['availability'] = serviceByType['availability'] || 0;
								serviceByType['security'] = serviceByType['security'] || 0;
								serviceByType['Data Protection'] = serviceByType['Data Protection'] || 0;
								serviceByType['User Exp'] = serviceByType['User Exp'] || 0;
								for (let k = 0; k < servicesArray.length; k++) {
									const { metadata_json } = servicesArray[k];
									serviceByType['performance'] =
										serviceByType['performance'] + (metadata_json.performance ? metadata_json.performance['score'] : 0);
									serviceByType['availability'] =
										serviceByType['availability'] + (metadata_json.availability ? metadata_json.availability['score'] : 0);
									serviceByType['security'] =
										serviceByType['security'] + (metadata_json.security ? metadata_json.security['score'] : 0);
									serviceByType['Data Protection'] =
										serviceByType['Data Protection'] + (metadata_json.dataProtection ? metadata_json.dataProtection['score'] : 0);
									serviceByType['User Exp'] =
										serviceByType['User Exp'] + (metadata_json.userExperiance ? metadata_json.userExperiance['score'] : 0);

									totalCost = totalCost + parseInt(metadata_json.stats.totalCostSoFar);
									if (metadata_json.serviceType === 'Data') {
										datacount += 1;
									} else if (metadata_json.serviceType === 'App') {
										appcount += 1;
									}
								}
							}
						});
					});
				});
				serviceByType['performance'] = (serviceByType['performance'] / (appcount + datacount));
				serviceByType['availability'] = serviceByType['availability'] / (appcount + datacount);
				serviceByType['security'] = serviceByType['security'] / (appcount + datacount);
				serviceByType['Data Protection'] = serviceByType['Data Protection'] / (appcount + datacount);
				serviceByType['User Exp'] = serviceByType['User Exp'] / (appcount + datacount);
				for (var val in serviceByType) {
					data[val] = serviceByType[val] || 0;
					if (labels && labels.length > 0) {
						for (let j = 0; j < labels.length; j++) {
							if (labels.indexOf(val) === -1) {
								labels.push(val);
							}
						}
					} else {
						labels.push(val);
					}
				}
				Object.keys(data).map((ser, ind) => {
					chartticksdata.push(data[ser]);
				});
				let chart: any = {};
				chart[product] = JSON.parse(JSON.stringify(auctionchartData));
				chart[product].labels = labels;
				chart[product].datasets[0].data = chartticksdata;
				chart[product].datasets[0].backgroundColor = [this.getColorBasedOnScore(serviceByType['performance']), this.getColorBasedOnScore(serviceByType['availability']), this.getColorBasedOnScore(serviceByType['security']), this.getColorBasedOnScore(serviceByType['Data Protection']), this.getColorBasedOnScore(serviceByType['User Exp'])];
				console.log(chart[product]);
				chartticksdata = [];
				retData.push(
					<div
						className={product == productName ? "services-sla-box active" : "services-sla-box"}
						onClick={() => {
							const envs = Object.keys(tableData[product]);
							this.setState({ productName: product, environmentType: envs.length > 0 ? envs[0] : "" });
						}}
					>
						<a className="heading">{product}</a>
						<div className="contents">
							<ul>
								<li>
									<label>No of Env:</label>
									<span>{envCount}</span>
								</li>
								<li>
									<label>No of App Services:</label>
									<span>{appcount}</span>
								</li>
								<li>
									<label>No of Data Services:</label>
									<span>{datacount}</span>
								</li>
							</ul>
							<div className="production-chart">
								<Bar
									data={chart[product]}
									height={200}
									width={350}
									options={{
										responsive: false,
										plugins: {
											legend: {
												position: 'top',
												display: false
											},
											title: {
												display: true,
												text: `Total Cost : $${totalCost}`,
												color: '#202020',
												font: {
													size: 18
												}
											}
										},
										scales: {
											x: {
												ticks: {
													// maxRotation: 0,
													maxTicksLimit: 5
												}
											}
										}
									}}
								/>
							</div>
						</div>
					</div>
				);
			});
		}

		return retData;
	};

	getColorBasedOnScore = (score: any) => {
		if (score >= 75) {
			return '#5AB66F';
		} else if (score >= 50) {
			return '#FF9429';
		} else if (score >= 25) {
			return '#FFF700';
		} else {
			return '#DC3F1F';
		}
	};

	displayEnvServices = () => {
		const { tableData, environmentType, productName } = this.state;
		let retData: any = [];
		let serviceList: any = [];
		if (tableData) {
			Object.keys(tableData).map((key, index) => {
				if (productName === key) {
					Object.keys(tableData[key]).map((service, i) => {
						if (serviceList && serviceList.length > 0) {
							if (serviceList.indexOf(service) === -1) {
								serviceList.push(service);
							}
						} else {
							serviceList.push(service);
						}
					});
				}
			});
			if (serviceList && serviceList.length > 0) {
				for (let i = 0; i < serviceList.length; i++) {
					retData.push(
						<li
							className={environmentType == serviceList[i] ? 'active' : ''}
							onClick={() => {
								this.setState({ environmentType: serviceList[i] });
							}}
						>
							{serviceList[i]}
						</li>
					);
				}
			}
		}
		return retData;
	};

	displayServiceData = () => {
		const { tableData, environmentType, productName } = this.state;
		let retServiceData: any = [];
		let servicesJSX: any = [];
		Object.keys(tableData).map((key, index) => {
			if (key === productName) {
				const envData = tableData[key];
				Object.keys(envData).map((env, i) => {
					if (env == environmentType) {
						const serviceNatureData = envData[env];
						Object.keys(serviceNatureData).map((serviceNature, j) => {
							servicesJSX = [];
							let associatedServices = serviceNatureData[serviceNature];
							Object.keys(associatedServices).map((associatedService) => {
								let serviceByType: any = {};
								serviceByType['performance'] = serviceByType['performance'] || 0;
								serviceByType['availability'] = serviceByType['availability'] || 0;
								serviceByType['security'] = serviceByType['security'] || 0;
								serviceByType['Data Protection'] = serviceByType['Data Protection'] || 0;
								serviceByType['User Exp'] = serviceByType['User Exp'] || 0;
								let servicearry = associatedServices[associatedService];
								let totalCost = 0;
								if (servicearry && servicearry.length > 0) {
									servicearry.map((service: any) => {
										const { metadata_json } = service;
										serviceByType['performance'] =
											serviceByType['performance'] + (metadata_json.performance ? metadata_json.performance['score'] : 0);
										serviceByType['availability'] =
											serviceByType['availability'] + (metadata_json.availability ? metadata_json.availability['score'] : 0);
										serviceByType['security'] =
											serviceByType['security'] + (metadata_json.security ? metadata_json.security['score'] : 0);
										serviceByType['Data Protection'] =
											serviceByType['Data Protection'] + (metadata_json.dataProtection ? metadata_json.dataProtection['score'] : 0);
										serviceByType['User Exp'] =
											serviceByType['User Exp'] + (metadata_json.userExperiance ? metadata_json.userExperiance['score'] : 0);
										totalCost = totalCost + parseInt(metadata_json.stats.totalCostSoFar);
									});
								}
								servicesJSX.push(
									<div className="service-box">
										<div className="heading">{associatedService}</div>
										<div className="contents">
											<div className="total-cost-text">
												Total Cost : $
												{totalCost}
											</div>
											<div className="quality-score-text">
												Quality Score :
												{((serviceByType['performance'] / servicearry.length +
													serviceByType['availability'] / servicearry.length +
													serviceByType['security'] / servicearry.length +
													serviceByType['Data Protection'] / servicearry.length +
													serviceByType['User Exp'] / servicearry.length) / 5).toFixed(2)
												}%
											</div>
											<ul>
												<li>
													<label>Performance:</label>
													<span>
														{Math.round(serviceByType['performance'] / servicearry.length)}%{' '}
														<span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['performance'] / servicearry.length) }} />
													</span>
												</li>
												<li>
													<label>Availability:</label>
													<span>
														{Math.round(
															serviceByType['availability'] / servicearry.length
														)}% <span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['availability'] / servicearry.length) }} />
													</span>
												</li>
												<li>
													<label>Data Protection:</label>
													<span>
														{Math.round(
															serviceByType['Data Protection'] / servicearry.length
														)}% <span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['Data Protection'] / servicearry.length) }} />
													</span>
												</li>
												<li>
													<label>Security:</label>
													<span>
														{Math.round(serviceByType['security'] / servicearry.length)}%{' '}
														<span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['security'] / servicearry.length) }} />
													</span>
												</li>
												<li>
													<label>User Exp:</label>
													<span>
														{Math.round(serviceByType['User Exp'] / servicearry.length)}%{' '}
														<span style={{ backgroundColor: this.getColorBasedOnScore(serviceByType['User Exp'] / servicearry.length) }} />
													</span>
												</li>
											</ul>
										</div>
									</div>
								);
							});
							retServiceData.push(
								<React.Fragment>
									<div className="heading">
										<div className="row">
											<div className="col-md-7">
												<h3>{serviceNature}</h3>
											</div>
											<div className="col-md-5">
												{/* <div className="show-more">
													Show More <i className="fa fa-chevron-down" />
												</div> */}
												<div className="form-group search-control m-b-0">
													<button className="btn btn-search">
														<i className="fa fa-search" />
													</button>
													<input
														type="text"
														className="input-group-text"
														placeholder="Search"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="services-boxes">{servicesJSX}</div>
								</React.Fragment>
							);
						});
					}
				});
			}
		});
		return retServiceData;
	};

	toggleView = () => {
		this.setState({
			isTopologyActive: !this.state.isTopologyActive,
		});
	};

	render() {
		const { productName, tableData, topologyMainData, environmentType, isTopologyDataLoaded, isTopologyActive } = this.state;
		return (
			<div className="asset-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
				<div className="services-sla-container">
					<div className="common-container border-bottom-0">
						<div className="services-heading">Product Wise Services SLA</div>
						{!tableData ||
							(tableData &&
								Object.keys(tableData).length === 0 && <div className="services-sla-boxs">Loading...</div>)}
						{tableData &&
							Object.keys(tableData).length > 0 && (
								<div className="services-sla-boxs">
									<div className="services-sla-inner">{this.displayServiceSLA()}</div>
								</div>
							)}
					</div>
					<div className="common-container border-bottom-0">
						<div className="services-heading">{productName}</div>
						{!tableData ||
							(tableData &&
								Object.keys(tableData).length === 0 && <div className="services-tabs">Loading...</div>)}
						{tableData &&
							Object.keys(tableData).length > 0 && (
								<div className="services-tabs">
									<ul className="tabs">{this.displayEnvServices()}</ul>
									<div className="common-container bottom-border-none">
										<div className="row">
											<div className="col-lg-9 col-md-9 col-sm-12" style={{ marginBottom: '10px' }}>
												<div className="topology-heading">
													{isTopologyActive ? 'Topology view' : 'Service wise view'}
													<div style={{ marginLeft: "10px", cursor: "pointer" }} className="asset-white-button min-width-inherit" onClick={this.toggleView}>
														<img src={images.Jobs} alt="" style={{ maxWidth: '15px' }} />
													</div>
												</div>
											</div>
											{
												isTopologyActive ?
													<div className="col-lg-3 col-md-3 col-sm-12">
														<div className="search-box">
															<i className="fa fa-search" aria-hidden="true"></i>
															<input type="text" className="input-group-text" placeholder={'Search'} />
														</div>
													</div> : <></>
											}
										</div>
										<div className="services-contents active">
											<div className="environment-services">
												{
													isTopologyActive ?
														<TopologyView data={topologyMainData[productName][environmentType]} isDataLoaded={isTopologyDataLoaded} /> :

														<div className="services-boxes">{this.displayServiceData()}</div>

												}
											</div>
										</div>
									</div>
								</div>
							)}
					</div>
				</div>
			</div>
		);
	}
}
