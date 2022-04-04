import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
// import { images } from '../../img';
// import { PLUGIN_BASE_URL } from '../../constants';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

export class DepartmentWiseCharts extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            labels: ['01', '02', '03', '04', '05', '06'],
            datasets: [
                {
                    label: 'Line Dataset',
                    lineTension: 0.2,
                    fill: false,
                    borderColor: 'rgba(255,255,255,0.5)',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 2,
                    type: 'line',
                },
            ],
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
                    fontColor: 'white',
                    stepSize: 10,
                    beginAtZero: true,
                },
            },
            x: {
                ticks: {
                    fontColor: 'white',
                    stepSize: 10,
                },
            },
        },
        legend: {
            display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    render() {
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
                <div className="department-wise-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-8 col-sm-6">
                                <div className="asset-heading">Product Wise Cost</div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="float-right common-right-btn">
                                    <input type="checkbox" />Bar Graph
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h4>Human Resources</h4>
                            <span>Total cost: $415624 - 40% off the total cost</span>
                            <div style={{ width: '100%', height: '400px' }}>
                                <Bar data={{ datasets: this.state.datasets, labels: this.state.labels }} options={this.options} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h4>Human Resources</h4>
                            <span>Total cost: $415624 - 40% off the total cost</span>
                            <div className="" style={{ width: '100%', height: '100%' }}>
                                <div style={{ width: '100%', height: '300px' }}>
                                    <Bar data={{ datasets: this.state.datasets, labels: this.state.labels }} options={this.options} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h4>Human Resources</h4>
                            <span>Total cost: $415624 - 40% off the total cost</span>
                            <div className="" style={{ width: '100%', height: '100%' }}>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <Bar data={barchart} options={options} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h4>Human Resources</h4>
                            <span>Total cost: $415624 - 40% off the total cost</span>
                            <div className="" style={{ width: '100%', height: '100%' }}>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <Bar data={barchart} options={options} />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}
