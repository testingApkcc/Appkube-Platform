import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { Bar } from 'react-chartjs-2';

export class ProductWiseServicesSla extends React.Component<any, any> {
	breadCrumbs: any;
	constructor(props: any) {
		super(props);
		this.state = {
			chartData: {
				labels: ['Performance', 'Availability', 'Reliability', 'Security', 'End usage'],
				datasets: [
					{
						data: [97, 77, 39, 42, 59],
						backgroundColor: ['#5AB66F', '#E08600', '#DC3F1F', '#DC3F1F', '#E08600'],
					},
				],
			}
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

	render() {
		const { chartData } = this.state;
		return (
			<div className="asset-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
				<div className="services-sla-container">
					<div className="common-container border-bottom-0">
						<div className="services-heading">
							Product Wise Services SLA
						</div>
						<div className="services-sla-boxs">
							<div className="services-sla-inner">
								<div className="services-sla-box">
									<a href='#' className="heading">HRMS</a>
									<div className="contents">
										<ul>
											<li>
												<label>No of Env:</label>
												<span>2</span>
											</li>
											<li>
												<label>No of App Services:</label>
												<span>10</span>
											</li>
											<li>
												<label>No of Data Services:</label>
												<span>5</span>
											</li>
										</ul>
										<div className="production-chart">
											<Bar
												data={chartData}
												height={200}
												options={{
													responsive: false,
													plugins: {
														legend: {
															position: 'top',
															display: false,
														},
														title: {
															display: true,
															text: 'Total Cost : $80',
															color: '#202020',
															font: {
																size: 18
															}
														},
													},
												}}
											/>
										</div>
									</div>
								</div>
								<div className="services-sla-box">
									<a href='#' className="heading">EMS</a>
									<div className="contents">
										<ul>
											<li>
												<label>No of Products:</label>
												<span>2</span>
											</li>
											<li>
												<label>No of App Services:</label>
												<span>10</span>
											</li>
											<li>
												<label>No of Data Services:</label>
												<span>5</span>
											</li>
										</ul>
										<div className="production-chart">
											<Bar
												data={chartData}
												height={200}
												options={{
													responsive: false,
													plugins: {
														legend: {
															position: 'top',
															display: false,
														},
														title: {
															display: true,
															text: 'Total Cost : $80',
															color: '#202020',
															font: {
																size: 18
															}
														},
													},
												}}
											/>
										</div>
									</div>
								</div>
								<div className="services-sla-box">
									<a href='#' className="heading">Procurement</a>
									<div className="contents">
										<ul>
											<li>
												<label>No of Products:</label>
												<span>2</span>
											</li>
											<li>
												<label>No of App Services:</label>
												<span>10</span>
											</li>
											<li>
												<label>No of Data Services:</label>
												<span>5</span>
											</li>
										</ul>
										<div className="production-chart">
											<Bar
												data={chartData}
												height={200}
												options={{
													responsive: false,
													plugins: {
														legend: {
															position: 'top',
															display: false,
														},
														title: {
															display: true,
															text: 'Total Cost : $80',
															color: '#202020',
															font: {
																size: 18
															}
														},
													},
												}}
											/>
										</div>
									</div>
								</div>
								<div className="services-sla-box">
									<a href='#' className="heading">Service Desk</a>
									<div className="contents">
										<ul>
											<li>
												<label>No of Products:</label>
												<span>2</span>
											</li>
											<li>
												<label>No of App Services:</label>
												<span>10</span>
											</li>
											<li>
												<label>No of Data Services:</label>
												<span>5</span>
											</li>
										</ul>
										<div className="production-chart">
											<Bar
												data={chartData}
												height={200}
												options={{
													responsive: false,
													plugins: {
														legend: {
															position: 'top',
															display: false,
														},
														title: {
															display: true,
															text: 'Total Cost : $80',
															color: '#202020',
															font: {
																size: 18
															}
														},
													},
												}}
											/>
										</div>
									</div>
								</div>
								<div className="services-sla-box">
									<a href='#' className="heading">Purchase</a>
									<div className="contents">
										<ul>
											<li>
												<label>No of Products:</label>
												<span>2</span>
											</li>
											<li>
												<label>No of App Services:</label>
												<span>10</span>
											</li>
											<li>
												<label>No of Data Services:</label>
												<span>5</span>
											</li>
										</ul>
										<div className="production-chart">
											<Bar
												data={chartData}
												height={200}
												options={{
													responsive: false,
													plugins: {
														legend: {
															position: 'top',
															display: false,
														},
														title: {
															display: true,
															text: 'Total Cost : $80',
															color: '#202020',
															font: {
																size: 18
															}
														},
													},
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="common-container border-bottom-0">
						<div className="services-heading">
							EMS - Environment wise SLA
						</div>
						<div className="services-tabs">
							<ul className="tabs">
								<li className="active">Production</li>
								<li>Test</li>
								<li>Stage</li>
								<li>Development</li>
							</ul>
							<div className="services-contents active">
								<div className="environment-services">
									<div className="heading">
										<div className="row">
											<div className="col-md-7">
												<h3>Gateway Services</h3>
											</div>
											<div className="col-md-5">
												<div className="show-more">Show More <i className="fa fa-chevron-down"></i></div>
												<div className="form-group search-control m-b-0">
													<button className="btn btn-search"><i className="fa fa-search"></i></button>
													<input type="text" className="input-group-text" placeholder="Search" />
												</div>
											</div>
										</div>
									</div>
									<div className="services-boxes">
										<div className="service-box">
											<div className="heading">API Gateway</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">Load Balancer</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">CDN</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">Firewall</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">Firewall</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="environment-services">
									<div className="heading">
										<div className="row">
											<div className="col-md-7">
												<h3>Business Services</h3>
											</div>
											<div className="col-md-5">
												<div className="show-more">Show More <i className="fa fa-chevron-down"></i></div>
												<div className="form-group search-control m-b-0">
													<button className="btn btn-search"><i className="fa fa-search"></i></button>
													<input type="text" className="input-group-text" placeholder="Search" />
												</div>
											</div>
										</div>
									</div>
									<div className="services-boxes">
										<div className="service-box">
											<div className="heading">API Gateway</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">Load Balancer</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">CDN</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">Firewall</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="environment-services">
									<div className="heading">
										<div className="row">
											<div className="col-md-7">
												<h3>Common Services</h3>
											</div>
											<div className="col-md-5">
												<div className="show-more">Show More <i className="fa fa-chevron-down"></i></div>
												<div className="form-group search-control m-b-0">
													<button className="btn btn-search"><i className="fa fa-search"></i></button>
													<input type="text" className="input-group-text" placeholder="Search" />
												</div>
											</div>
										</div>
									</div>
									<div className="services-boxes">
										<div className="service-box">
											<div className="heading">API Gateway</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">Load Balancer</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">CDN</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
										<div className="service-box">
											<div className="heading">Firewall</div>
											<div className="contents">
												<div className="total-cost-text">Total Cost : $80</div>
												<div className="quality-score-text">Quality Score : 80%</div>
												<ul>
													<li>
														<label>Performance:</label>
														<span>97% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>Availability:</label>
														<span>77% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
													<li>
														<label>Reliability:</label>
														<span>39% <span style={{ backgroundColor: '#DC3F1F' }}></span></span>
													</li>
													<li>
														<label>Security:</label>
														<span>42% <span style={{ backgroundColor: '#5AB66F' }}></span></span>
													</li>
													<li>
														<label>End Usage:</label>
														<span>59% <span style={{ backgroundColor: '#E08600' }}></span></span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
