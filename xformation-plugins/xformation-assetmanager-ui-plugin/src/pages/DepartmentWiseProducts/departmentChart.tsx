import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
// import { images } from '../../img';
// import { PLUGIN_BASE_URL } from '../../constants';
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
                labels: ['', '', '', ''],
                datasets: [
                    {
                        label: ['Production', 'Development', 'Stage', 'Test'],
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
            procurment: {
                labels: ['', '', '', ''],
                datasets: [
                    {
                        label: ['Production', 'Development', 'Stage', 'Test'],
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
                labels: ['', '', '', ''],
                datasets: [
                    {
                        label: ['Production', 'Development', 'Stage', 'Test'],
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
                labels: ['', '', '', ''],
                datasets: [
                    {
                        label: ['Production', 'Development', 'Stage', 'Test'],
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

    options = {
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
            display: true,
            align: "right"
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    render() {
        const { displayBarChart } = this.state
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
                {<div className="department-wise-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-8 col-sm-6">
                                <div className="asset-heading">Product Wise Cost</div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="float-right common-right-btn">
                                    <input type="checkbox" checked={false}
                                        onClick={() => { this.setState({ displayBarChart: !displayBarChart }) }} />{!displayBarChart ? "pieChart" : "Bar Graph"}
                                </div>
                            </div>
                        </div>
                    </div>
                    {displayBarChart ? <div>
                        <div className='row'>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4>Human Resources</h4>
                                <span>Total cost: $415624 - 40% off the total cost</span>
                                <div style={{ width: '70%', height: '300px', marginBottom: '30px' }}>
                                    <Bar data={{ datasets: this.state.humanResources.datasets, labels: this.state.humanResources.labels }} options={this.options} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4>Procurement</h4>
                                <span>Total Cost: $73837 - 40% of the total cost</span>
                                <div className="" style={{ width: '100%', height: '100%', marginBottom: '30px' }}>
                                    <div style={{ width: '70%', height: '300px' }}>
                                        <Bar data={{ datasets: this.state.procurment.datasets, labels: this.state.procurment.labels }} options={this.options} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4>Supply Chain Management</h4>
                                <span>Total Cost: $73837 - 40% off the total cost</span>
                                <div className="" style={{ width: '100%', height: '100%', marginBottom: '30px' }}>
                                    <div style={{ width: '70%', height: '300px' }}>
                                        <Bar data={{ datasets: this.state.supplyChain.datasets, labels: this.state.supplyChain.labels }} options={this.options} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4>EMS</h4>
                                <span>Total Cost: $73837 - 40% off the total cost</span>
                                <div className="" style={{ width: '100%', height: '100%', marginBottom: '30px' }}>
                                    <div style={{ width: '70%', height: '300px' }}>
                                        <Bar data={{ datasets: this.state.EMS.datasets, labels: this.state.EMS.labels }} options={this.options} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        :
                        <div>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <h4>Human Resources</h4>
                                    <span>Total cost: $415624 - 40% off the total cost</span>
                                    <div style={{ width: '70%', height: '300px', marginBottom: '30px' }}>
                                        <Pie data={this.state.humanResourcespieData} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <h4>Procurement</h4>
                                    <span>Total Cost: $73837 - 40% of the total cost</span>
                                    <div className="" style={{ width: '100%', height: '100%', marginBottom: '30px' }}>
                                        <div style={{ width: '70%', height: '300px' }}>
                                            <Pie data={this.state.procurmentpieData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <h4>Supply Chain Management</h4>
                                    <span>Total Cost: $73837 - 40% off the total cost</span>
                                    <div className="" style={{ width: '100%', height: '100%', marginBottom: '30px' }}>
                                        <div style={{ width: '70%', height: '300px' }}>
                                            <Pie data={this.state.supplyChainpieData} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <h4>EMS</h4>
                                    <span>Total Cost: $73837 - 40% off the total cost</span>
                                    <div className="" style={{ width: '100%', height: '100%', marginBottom: '30px' }}>
                                        <div style={{ width: '70%', height: '300px' }}>
                                            <Pie data={this.state.EMSpieData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                }
            </div>
        );
    }
}
