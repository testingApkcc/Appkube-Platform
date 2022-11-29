import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { configFun } from '../../config';
import { CommonService } from '../_common/common';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const labels = ['80%', '16%', '4%', '10%'];
const data = [80, 16, 4, 10];
const colors = ['#52b121', '#ff9900', '#d84539', '#0089d6'];

export class ProductWiseCost extends React.Component<any, any> {
    breadCrumbs: any;
    config: any;
    constructor(props: any) {
        super(props);
        this.state = {
            pieChartData: {
                labels: labels,
                datasets: [
                    {
                        data: labels.map((item, index) => { return data[index] }),
                        backgroundColor: colors.map((item) => { return item }),
                    },
                ],
            },
            chartsData: [
                {
                    title: "Human Resource",
                    totalCost: 73837,
                    costPercentage: "40%",
                    labels: ['80%', '16%', '4%', '10%'],
                    data: [80, 16, 4, 10],
                    colors: ['#52b121', '#ff9900', '#d84539', '#0089d6'],
                    productionCost: 59068.6,
                    developmentCost: 7383.7,
                    stageCost: 4430.22,
                    testCost: 2953.48
                },
                {
                    title: "Procurement",
                    totalCost: 73837,
                    costPercentage: "40%",
                    labels: ['80%', '16%', '4%', '10%'],
                    data: [80, 16, 4, 10],
                    colors: ['#52b121', '#ff9900', '#d84539', '#0089d6'],
                    productionCost: 59068.6,
                    developmentCost: 7383.7,
                    stageCost: 4430.22,
                    testCost: 2953.48
                },
                {
                    title: "Supply Chain Management",
                    totalCost: 73837,
                    costPercentage: "40%",
                    labels: ['80%', '16%', '4%', '10%'],
                    data: [80, 16, 4, 10],
                    colors: ['#52b121', '#ff9900', '#d84539', '#0089d6'],
                    productionCost: 59068.6,
                    developmentCost: 7383.7,
                    stageCost: 4430.22,
                    testCost: 2953.48
                },
                {
                    title: "EMS",
                    totalCost: 73837,
                    costPercentage: "40%",
                    labels: ['80%', '16%', '4%', '10%'],
                    data: [80, 16, 4, 10],
                    colors: ['#52b121', '#ff9900', '#d84539', '#0089d6'],
                    productionCost: 59068.6,
                    developmentCost: 7383.7,
                    stageCost: 4430.22,
                    testCost: 2953.48
                }
            ],
            pieView: true,
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
        this.config = configFun(props.meta.jsonData.apiUrl, props.meta.jsonData.mainProductUrl);
    }

    componentDidMount() {
    }

    handleChartViewToggle = () => {
        this.setState({ pieView: !this.state.pieView })
    }

    render() {
        const { pieChartData, pieView, chartsData } = this.state
        let departmentName: any = CommonService.getParameterByName("department", window.location.href);
        departmentName = departmentName ? departmentName.replace(';amp;', '&') : "All Departments";
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
                <div className="department-wise-container">
                    <div className="common-container border-bottom-0">
                        <div className="services-heading" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            Product Wise Cost
                            <div className="float-right">
                                <input type="checkbox" onChange={this.handleChartViewToggle} style={{ cursor: 'pointer' }} />
                                <span style={{ fontSize: '12px', fontWeight: '500', verticalAlign: 'middle', display: 'inline-block', paddingLeft: '5px' }}>
                                    {pieView ? 'Pie Chart' : 'Bar Graph'}
                                </span>
                            </div>
                        </div>
                        <div className="pie-chart-container">
                            <div className="row">
                                {chartsData.map((item: any) => {
                                    return (
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="chart-box">
                                                <h3>{item.title}</h3>
                                                <div className="total-cost-text text-center">
                                                    <strong>Total Cost : ${item.totalCost}</strong> - {item.costPercentage} of the total cost
                                                </div>
                                                <div className="chart-bar">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                            {pieView ? <Bar
                                                                data={pieChartData}
                                                                height={200}
                                                                width={200}
                                                                options={{
                                                                    responsive: true,
                                                                    plugins: {
                                                                        legend: {
                                                                            position: 'top',
                                                                            display: false
                                                                        },
                                                                    },
                                                                    scales: {
                                                                        x: {
                                                                            ticks: {
                                                                                maxTicksLimit: 5
                                                                            }
                                                                        }
                                                                    }
                                                                }}
                                                            /> : <Pie
                                                                data={pieChartData}
                                                                height={160}
                                                                width={200}
                                                                options={{
                                                                    responsive: true,
                                                                    plugins: {
                                                                        legend: {
                                                                            position: 'top',
                                                                            display: false
                                                                        },
                                                                    },

                                                                }}
                                                            />}

                                                        </div>
                                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                            <div className='chart-data'>
                                                                <ul className="chart-data-text">
                                                                    <li>
                                                                        <span style={{ backgroundColor: '#52b141' }}></span>
                                                                        <p>Production <strong>${item.productionCost}</strong></p>
                                                                    </li>
                                                                    <li>
                                                                        <span style={{ backgroundColor: '#ff9900' }}></span>
                                                                        <p>Development <strong>${item.developmentCost}</strong></p>
                                                                    </li>
                                                                    <li>
                                                                        <span style={{ backgroundColor: '#d84539' }}></span>
                                                                        <p>Stage <strong>${item.stageCost}</strong></p>
                                                                    </li>
                                                                    <li>
                                                                        <span style={{ backgroundColor: '#0089d6' }}></span>
                                                                        <p>Test <strong>${item.testCost}</strong></p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="last-updated-text">
                                                    Last Updated: 03/28/2022 17:25
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
