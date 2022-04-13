import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { PLUGIN_BASE_URL } from '../../constants';
import { RestService } from '../_service/RestService';
import { config } from '../../config';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

export class DepartmentWiseCharts extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            displayBarChart: true,
            graph: {},
            departmentWiseData: [],
            humanResources: {
                total: null,
                labels: [],
                datasets: [
                    {
                        data: [],

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
            barOptions: {
                indexAxis: "y" as const,
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
                        display: false,
                    },
                    responsive: true,
                }
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
    componentDidMount() {
        this.getDepartmentData()
    }

    getDepartmentData = async () => {
        try {
            await RestService.getData(
                `${config.GET_DEPARTMENTWISE_PRODUCT}`,
                null,
                null
            ).then((response: any) => {
                console.log(response)
                this.setState({
                    departmentWiseData: response,
                });
                this.handleGraphValue(response);
            });
        } catch (err) {
            console.log("Loading accounts failed. Error: ", err);
        }
    }


    handleGraphValue = (val: any) => {
        let { graph } = this.state;
        for (let i = 0; i < val.length; i++) {
            for (let l = 0; l < val[i].productList.length; l++) {
                for (let j = 0; j < val[i].productList[l].serviceList.length; j++) {
                    graph[val[i].productList[l].name] = graph[val[i].productList[l].name] + val[i].productList[l].serviceList[j].totalBillingAmount || 0;
                }
            }
        }
        for (let i = 0; i < Object.keys(graph).length; i++) {
            this.state.humanResources.datasets[0].data.push(graph[Object.keys(graph)[i]])
            this.state.humanResources.total += graph[Object.keys(graph)[i]]
            this.state.humanResources.labels.push(Object.keys(graph)[i]);
        }
        this.setState({ graph: graph, humanResources: this.state.humanResources })
    }
    render() {
        const { barOptions, humanResources } = this.state
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
                <div className="department-wise-container">
                    <div className="common-container border-bottom-0">
                        <div className="department-heading">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="asset-heading">Product Wise Cost</div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="float-right common-right-btn">
                                        <Link to={`${PLUGIN_BASE_URL}/department-wise-products`} className="asset-white-button min-width-inherit">
                                            <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                {humanResources && <div className="cost-analysis-chart">
                                    <div className="heading">Human Resources</div>
                                    {humanResources.total && <div className="total-cost-text cost"><strong>${humanResources.total}</strong> - 40% off the total cost</div>}
                                    <div className="chart">
                                        {humanResources.datasets &&
                                            humanResources.datasets[0].data.length > 0 && humanResources.labels.length > 0 ?
                                            <Bar data={humanResources} options={barOptions} height={70} /> : <div className="chart-spinner"><i className="fa fa-spinner fa-spin"></i> Loading...</div>}
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
