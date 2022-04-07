import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { PLUGIN_BASE_URL } from '../../constants';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

export class DepartmentWiseCharts extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            displayBarChart: true,
            humanResources: {
                labels: ['Production', 'Development', 'Stage', 'Test'],
                datasets: [
                    {
                        data: [80, 16, 4, 10],
                        fill: false,
                        lineTension: 0.2,
                        backgroundColor: [
                            'rgba(82, 177, 65, 1)',
                            'rgba(255, 153, 0, 1)',
                            'rgba(0, 137, 214, 1)',
                            'rgba(216, 69, 57, 1)',
                        ],
                    },
                ],
            },
            procurment: {
                label: ['Production', 'Development', 'Stage', 'Test'],
                datasets: [
                    {
                        lineTension: 0.2,
                        fill: false,
                        data: [80, 16, 4, 10],
                        backgroundColor: [
                            'rgba(82, 177, 65, 1)',
                            'rgba(255, 153, 0, 1)',
                            'rgba(0, 137, 214, 1)',
                            'rgba(216, 69, 57, 1)',
                        ],
                        borderWidth: 1,
                        type: 'bar',
                    },
                ],
            },
            supplyChain: {
                label: ['Production', 'Development', 'Stage', 'Test'],
                datasets: [
                    {
                        lineTension: 0.2,
                        fill: false,
                        data: [80, 16, 4, 10],
                        backgroundColor: [
                            'rgba(82, 177, 65, 1)',
                            'rgba(255, 153, 0, 1)',
                            'rgba(0, 137, 214, 1)',
                            'rgba(216, 69, 57, 1)',
                        ],
                        borderWidth: 1,
                        type: 'bar',
                    },
                ],
            },
            EMS: {
                label: ['Production', 'Development', 'Stage', 'Test'],
                datasets: [
                    {
                        lineTension: 0.2,
                        fill: false,
                        data: [80, 16, 4, 10],
                        backgroundColor: [
                            'rgba(82, 177, 65, 1)',
                            'rgba(255, 153, 0, 1)',
                            'rgba(0, 137, 214, 1)',
                            'rgba(216, 69, 57, 1)',
                        ],
                        borderWidth: 1,
                        type: 'bar',
                    },
                ],
            },
            humanResourcespieData: {
                labels: ['Procurement', 'Human Resource', 'Supply chain', 'EMS'],
                datasets: [
                    {
                        data: [80, 16, 4, 10],
                        backgroundColor: [
                            'rgba(82, 177, 65, 1)',
                            'rgba(255, 153, 0, 1)',
                            'rgba(0, 137, 214, 1)',
                            'rgba(216, 69, 57, 1)',
                        ],
                    }
                ],
            },
            procurmentpieData: {
                labels: ['Procurement', 'Human Resource', 'Supply chain', 'EMS'],
                datasets: [
                    {
                        data: [80, 16, 4, 10],
                        backgroundColor: [
                            'rgba(82, 177, 65, 1)',
                            'rgba(255, 153, 0, 1)',
                            'rgba(0, 137, 214, 1)',
                            'rgba(216, 69, 57, 1)',
                        ],
                    }
                ],
            },
            supplyChainpieData: {
                labels: ['Procurement', 'Human Resource', 'Supply chain', 'EMS'],
                datasets: [
                    {
                        data: [80, 16, 4, 10],
                        backgroundColor: [
                            'rgba(82, 177, 65, 1)',
                            'rgba(255, 153, 0, 1)',
                            'rgba(0, 137, 214, 1)',
                            'rgba(216, 69, 57, 1)',
                        ],
                    }
                ],
            },
            EMSpieData: {
                labels: ['Procurement', 'Human Resource', 'Supply chain', 'EMS'],
                datasets: [
                    {
                        data: [80, 16, 4, 10],
                        backgroundColor: [
                            'rgba(82, 177, 65, 1)',
                            'rgba(255, 153, 0, 1)',
                            'rgba(0, 137, 214, 1)',
                            'rgba(216, 69, 57, 1)',
                        ],
                    }
                ],
            },
            barPptions: {
                plugins: {
                    scales: {
                        y: {
                            ticks: {
                                fontColor: 'black',
                                stepSize: 10,
                                beginAtZero: true,
                            },
                            gridLines: {
                                display: false
                            }
                        },
                        x: {
                            ticks: {
                                fontColor: 'black',
                                display: false,
                                stepSize: 10,
                            },
                            gridLines: {
                                display: false
                            }
                        },
                    },
                    legend: {
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                        },
                        display: true,
                        position:'right',
                        top: 12,
                        bottom: 12,
                        
                    },
                    responsive: true,
                }
            },
            piePptions: {
                plugins: {
                    scales: {
                        y: {
                            ticks: {
                                fontColor: 'black',
                                stepSize: 10,
                                beginAtZero: true,
                            },
                            gridLines: {
                                display: false
                            }
                        },
                        x: {
                            ticks: {
                                fontColor: 'black',
                                display: false,
                                stepSize: 10,
                            },
                            gridLines: {
                                display: false
                            }
                        },
                    },
                    legend: {
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                        },
                        display: true,
                        position:'right',
                        top: 12,
                        bottom: 12,
                    },
                    responsive: true,
                }
            }
        };
        this.breadCrumbs = [
            {
                label: 'Home',
                route: `/`,
            },
            {
                label: 'Assets | Environments',
                isCurrentPage: true,
            },
        ];
    }
    
    

    render() {
        const { displayBarChart, barPptions, piePptions } = this.state
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
                {<div className="department-wise-container">
                    <div className="common-container border-bottom-0">
                        <div className="department-heading">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="asset-heading">Product Wise Cost</div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="float-right common-right-btn">
                                        <button
                                            className="asset-white-button min-width-inherit"
                                            onClick={() => {this.setState({ displayBarChart: !displayBarChart })}} 
                                        >
                                            <i className="fa fa-square-o"></i>&nbsp;&nbsp;
                                            {!displayBarChart ? "Pie Chart" : "Bar Graph"}
                                        </button>
                                        <Link to={`${PLUGIN_BASE_URL}/department-wise-products`} className="asset-white-button min-width-inherit">
                                            <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {displayBarChart ? <>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="cost-analysis-chart">
                                        <div className="heading">Human Resources</div>
                                        <div className="total-cost-text cost"><strong>Total cost: $415624</strong> - 40% off the total cost</div>
                                        <div className="chart">
                                            <Bar data={this.state.humanResources} options={barPptions} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="cost-analysis-chart">
                                        <div className="heading">Procurement</div>
                                        <div className="total-cost-text cost"><strong>Total Cost: $73837</strong> - 40% of the total cost</div>
                                        <div className="chart">
                                            <Bar data={this.state.procurment} options={barPptions} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="cost-analysis-chart">
                                        <div className="heading">Supply Chain Management</div>
                                        <div className="total-cost-text cost"><strong>Total Cost: $73837</strong> - 40% off the total cost</div>
                                        <div className="chart">
                                            <Bar data={{ datasets: this.state.supplyChain.datasets, labels: this.state.supplyChain.labels }} options={barPptions} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="cost-analysis-chart">
                                        <div className="heading">EMS</div>
                                        <div className="total-cost-text cost"><strong>Total Cost: $73837</strong> - 40% off the total cost</div>
                                        <div className="chart">
                                            <Bar data={{ datasets: this.state.EMS.datasets, labels: this.state.EMS.labels }} options={barPptions} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="cost-analysis-chart">
                                        <div className="heading">Human Resources</div>
                                        <div className="total-cost-text cost"><strong>Total cost: $415624</strong> - 40% off the total cost</div>
                                        <div className="chart">
                                            <Pie data={this.state.humanResourcespieData} options={piePptions} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="cost-analysis-chart">
                                        <div className="heading">Procurement</div>
                                        <div className="total-cost-text cost"><strong>Total Cost: $73837</strong> - 40% of the total cost</div>
                                        <div className="chart">
                                            <Pie data={this.state.procurmentpieData} options={piePptions} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="cost-analysis-chart">
                                        <div className="heading">Supply Chain Management</div>
                                        <div className="total-cost-text cost"><strong>Total Cost: $73837</strong> - 40% off the total cost</div>
                                        <div className="chart">
                                            <Pie data={this.state.supplyChainpieData} options={piePptions} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="cost-analysis-chart">
                                        <div className="heading">EMS</div>
                                        <div className="total-cost-text cost"><strong>Total Cost: $73837</strong> - 40% off the total cost</div>
                                        <div className="chart">
                                            <Pie data={this.state.EMSpieData} options={piePptions} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    </div>
                </div>
                }
            </div>
        );
    }
}
