//import { withWidth } from '@material-ui/core';
import * as React from 'react';
// import { threadId } from 'worker_threads';

export class SelectCloudFilter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            codeEditorValue: "",
            // displayJsonData: [
            //     {
            //         name: 'Products',
            //         key: 'products',
            //         id: 1,
            //         filter: [
            //             {
            //                 label: 'Ems',
            //                 value: 'ems',
            //                 id: 1
            //             },
            //             {
            //                 label: 'Procurement',
            //                 value: 'procurement',
            //                 id: 2
            //             },
            //             {
            //                 label: 'HRMS',
            //                 value: 'hrms',
            //                 id: 3
            //             },
            //             {
            //                 label: 'Supply Chain',
            //                 value: 'supply-chain',
            //                 id: 4
            //             }
            //         ]
            //     },
            //     {
            //         name: 'Environments',
            //         key: 'environments',
            //         id: 2,
            //         filter: [
            //             {
            //                 label: 'AWS',
            //                 value: 'aws',
            //                 id: 1
            //             },
            //             {
            //                 label: 'GCP',
            //                 value: 'gcp',
            //                 id: 2
            //             },
            //             {
            //                 label: 'Kubernets',
            //                 value: 'kubernets',
            //                 id: 3
            //             },
            //             {
            //                 label: 'Acronic',
            //                 value: 'acronic',
            //                 id: 4
            //             }
            //         ]
            //     },
            //     {
            //         name: 'APP Services',
            //         key: 'app-services',
            //         id: 3,
            //         filter: [
            //             {
            //                 label: 'Search',
            //                 value: 'search',
            //                 id: 1
            //             },
            //             {
            //                 label: 'Security/RBMS',
            //                 value: 'security-rbms',
            //                 id: 2
            //             },
            //             {
            //                 label: 'Preferance',
            //                 value: 'preferance',
            //                 id: 3
            //             },
            //             {
            //                 label: 'Dataflow',
            //                 value: 'dataflow',
            //                 id: 4
            //             },
            //             {
            //                 label: 'CMS/catlogue',
            //                 value: 'cms-catalogue',
            //                 id: 5
            //             }
            //         ]
            //     },
            //     {
            //         name: 'Data Services',
            //         key: 'data-services',
            //         id: 4,
            //         filter: [
            //             {
            //                 label: 'PostGreSQL',
            //                 value: 'post-ger-sql',
            //                 id: 1
            //             },
            //             {
            //                 label: 'ElasticSearch',
            //                 value: 'eastic-search',
            //                 id: 2
            //             },
            //             {
            //                 label: 'MongoDB',
            //                 value: 'mongo-db',
            //                 id: 3
            //             },
            //             {
            //                 label: 'S3',
            //                 value: 's3',
            //                 id: 4
            //             }
            //         ]
            //     },
            //     {
            //         name: 'Common Services',
            //         key: 'common-services',
            //         id: 5,
            //         filter: [
            //             {
            //                 label: 'State Machine',
            //                 value: 'state-machine',
            //                 id: 1
            //             },
            //             {
            //                 label: 'Pref manager',
            //                 value: 'pref-manager',
            //                 id: 2
            //             },
            //             {
            //                 label: 'Log manager',
            //                 value: 'log-manager',
            //                 id: 3
            //             },
            //             {
            //                 label: 'Trace Manager',
            //                 value: 'trace-manager',
            //                 id: 4
            //             }
            //         ]
            //     },
            //     {
            //         name: 'Business Services',
            //         key: 'business-services',
            //         id: 5,
            //         filter: [
            //             {
            //                 label: 'EMS',
            //                 value: 'ems',
            //                 id: 1
            //             },
            //             {
            //                 label: 'Procurement',
            //                 value: 'procurement',
            //                 id: 2
            //             },
            //             {
            //                 label: 'HRMS',
            //                 value: 'hrms',
            //                 id: 3
            //             },
            //             {
            //                 label: 'Supply Chain',
            //                 value: 'supply-chain',
            //                 id: 4
            //             }
            //         ]
            //     },
            //     {
            //         name: 'SAL Violation',
            //         key: 'sal-violation',
            //         id: 5,
            //         filter: [
            //             {
            //                 label: 'SLA V1',
            //                 value: 'sla-v1',
            //                 id: 1
            //             },
            //             {
            //                 label: 'SLA V2',
            //                 value: 'sla-v2',
            //                 id: 2
            //             },
            //             {
            //                 label: 'SLA V3',
            //                 value: 'sla-v3',
            //                 id: 3
            //             },
            //             {
            //                 label: 'SLA V4',
            //                 value: 'sla-v4',
            //                 id: 4
            //             }
            //         ]
            //     },
            // ],
            optionJsonData: [
                {
                    name: 'OU',
                    value: 'ou',
                    isChecked: false,
                    id: 1,
                    subdata: [
                        { name: 'IT Department', value: 'itdepartment', isChecked: false, id: 1 },
                        { name: 'Network Department', value: 'networkdepartment', isChecked: false, id: 2 },
                        { name: 'Development', value: 'development', isChecked: false, id: 3 },
                        { name: 'Testing', value: 'testing', isChecked: false, id: 4 },
                    ],
                },
                {
                    name: 'Status',
                    value: 'status',
                    isChecked: false,
                    id: 2,
                    subdata: [
                        { name: 'Enable', value: 'enable', isChecked: false, id: 1 },
                        { name: 'Disable', value: 'disable', isChecked: false, id: 2 },
                    ],
                },
                {
                    name: 'No of Assets',
                    value: 'noOFssets',
                    isChecked: false,
                    id: 3,
                    subdata: [],
                },
                {
                    name: 'Platform',
                    value: 'platform',
                    isChecked: false,
                    id: 4,
                    subdata: [],
                }, {
                    name: 'Logs',
                    value: 'logs',
                    isChecked: false,
                    id: 5,
                    subdata: [],
                }, {
                    name: 'Performance & Availability',
                    value: 'availabiity',
                    isChecked: false,
                    id: 6,
                    subdata: []
                }
            ],
            duplicateOptions: [
                {
                    name: 'Products',
                    key: 'products',
                    id: 1,
                    filter: [
                        {
                            label: 'Ems',
                            value: 'ems',
                            id: 1
                        },
                        {
                            label: 'Procurement',
                            value: 'procurement',
                            id: 2
                        },
                        {
                            label: 'HRMS',
                            value: 'hrms',
                            id: 3
                        },
                        {
                            label: 'Supply Chain',
                            value: 'supply-chain',
                            id: 4
                        }
                    ]
                },
                {
                    name: 'Environments',
                    key: 'environments',
                    id: 2,
                    filter: [
                        {
                            label: 'AWS',
                            value: 'aws',
                            id: 1
                        },
                        {
                            label: 'GCP',
                            value: 'gcp',
                            id: 2
                        },
                        {
                            label: 'Kubernets',
                            value: 'kubernets',
                            id: 3
                        },
                        {
                            label: 'Acronic',
                            value: 'acronic',
                            id: 4
                        }
                    ]
                },
                {
                    name: 'APP Services',
                    key: 'app-services',
                    id: 3,
                    filter: [
                        {
                            label: 'Search',
                            value: 'search',
                            id: 1
                        },
                        {
                            label: 'Security/RBMS',
                            value: 'security-rbms',
                            id: 2
                        },
                        {
                            label: 'Preferance',
                            value: 'preferance',
                            id: 3
                        },
                        {
                            label: 'Dataflow',
                            value: 'dataflow',
                            id: 4
                        },
                        {
                            label: 'CMS/catlogue',
                            value: 'cms-catalogue',
                            id: 5
                        }
                    ]
                },
                {
                    name: 'Data Services',
                    key: 'data-services',
                    id: 4,
                    filter: [
                        {
                            label: 'PostGreSQL',
                            value: 'post-ger-sql',
                            id: 1
                        },
                        {
                            label: 'ElasticSearch',
                            value: 'eastic-search',
                            id: 2
                        },
                        {
                            label: 'MongoDB',
                            value: 'mongo-db',
                            id: 3
                        },
                        {
                            label: 'S3',
                            value: 's3',
                            id: 4
                        }
                    ]
                },
                {
                    name: 'Common Services',
                    key: 'common-services',
                    id: 5,
                    filter: [
                        {
                            label: 'State Machine',
                            value: 'state-machine',
                            id: 1
                        },
                        {
                            label: 'Pref manager',
                            value: 'pref-manager',
                            id: 2
                        },
                        {
                            label: 'Log manager',
                            value: 'log-manager',
                            id: 3
                        },
                        {
                            label: 'Trace Manager',
                            value: 'trace-manager',
                            id: 4
                        }
                    ]
                },
                {
                    name: 'Business Services',
                    key: 'business-services',
                    id: 5,
                    filter: [
                        {
                            label: 'EMS',
                            value: 'ems',
                            id: 1
                        },
                        {
                            label: 'Procurement',
                            value: 'procurement',
                            id: 2
                        },
                        {
                            label: 'HRMS',
                            value: 'hrms',
                            id: 3
                        },
                        {
                            label: 'Supply Chain',
                            value: 'supply-chain',
                            id: 4
                        }
                    ]
                },
                {
                    name: 'SAL Violation',
                    key: 'sal-violation',
                    id: 5,
                    filter: [
                        {
                            label: 'SLA V1',
                            value: 'sla-v1',
                            id: 1
                        },
                        {
                            label: 'SLA V2',
                            value: 'sla-v2',
                            id: 2
                        },
                        {
                            label: 'SLA V3',
                            value: 'sla-v3',
                            id: 3
                        },
                        {
                            label: 'SLA V4',
                            value: 'sla-v4',
                            id: 4
                        }
                    ]
                },
            ],
            displayJsonData: this.props.displayJsonData,
            showTagFilter: false,
            searchKey: [],
        };
    }

    componentDidMount() {
        const { displayJsonData, searchKey } = this.state;
        if (displayJsonData && displayJsonData.length > 0) {
            for (let i = 0; i < displayJsonData.length; i++) {
                searchKey.push("")
                let list = displayJsonData[i].filter;
                for (let j = 0; j < list.length; j++) {
                    list[j].isHide = true;
                }
            }
        }
        this.setState({ displayJsonData })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log(prevProps.displayJsonData);
        console.log(this.props.displayJsonData);
        if (JSON.stringify(prevProps.displayJsonData) !== JSON.stringify(this.props.displayJsonData)) {
            this.setState({
                displayJsonData: this.props.displayJsonData,
            })
        }
    }

    displaySelectedTags = () => {
        const { displayJsonData } = this.state;
        let retData = [];
        if (displayJsonData && displayJsonData.length > 0) {
            for (let i = 0; i < displayJsonData.length; i++) {
                let filter = displayJsonData[i].filter;
                for (let j = 0; j < filter.length; j++) {
                    let label = displayJsonData[i].filter[j];
                    if (label.isChecked == true) {
                        retData.push(
                            <div className="fliter-selected" key={label.id}>
                                <span
                                // onClick={() => this.setChildData(optionJsonData[i])}
                                >{label.label}</span>
                                <i className="fa fa-times"
                                    onClick={() => this.removeSelectedTag(label)}
                                ></i>
                            </div>
                        );
                        // if (optionJsonData[i].subdata) {
                        //     for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                        //         if (optionJsonData[i].subdata[j].isChecked) {
                        //             retData.push(
                        //                 <div className="fliter-selected" key={optionJsonData[i].subdata[j].id}>
                        //                     <span onClick={() => this.setState({ showTagFilter: false })}>{optionJsonData[i].subdata[j].name}</span>
                        //                     <i className="fa fa-times" onClick={() => this.removeSelectedTag(optionJsonData[i].subdata[j].value)}></i>
                        //                 </div>
                        //             );
                        //         }
                        //     }
                        // }
                    }
                }
            }
        }
        return retData;
    }

    setChildData = (data: any) => {
        if (data.subdata.length > 0) {
            this.setState({
                showTagFilter: true,
                displayJsonData: data.subdata,
            })
        } else {
            this.setState({
                showTagFilter: false,
            })
        }
    }

    removeSelectedTag = (value: any) => {
        const { displayJsonData } = this.state
        value.isChecked = false
        this.setState({ displayJsonData })
    }

    displayTagList = (filterData: any) => {
        let retData = [];
        for (let i = 0; i < filterData.length; i++) {
            if (filterData[i].isHide) {
                retData.push(
                    <div className="form-check"
                        onClick={() => this.changeHandleState(i, filterData[i])}
                    >
                        <input type="checkbox" checked={filterData[i].isChecked} className="checkbox" />
                        <label htmlFor={filterData[i].value}>{filterData[i].label}</label>
                    </div>
                );
            }
        }
        return retData;
    }

    changeHandleState = (index: any, value: any) => {
        value.isChecked = !value.isChecked;
        let { displayJsonData, optionJsonData } = this.state;
        this.setState({ displayJsonData, optionJsonData })
    }

    displaymainTagData = () => {
        this.setState({
            showTagFilter: !this.state.showTagFilter
        })
    }

    clearAllTagFilter = (index: any) => {
        const { searchKey, displayJsonData } = this.state;
        searchKey[index] = "";
        for (let k = 0; k < displayJsonData[index].filter.length; k++) {
            displayJsonData[index].filter[k].isHide = true;
        }
        this.setState({
            displayJsonData,
            searchKey
        })
    }

    searchTag = (e: any, index: any) => {
        let { displayJsonData, searchKey } = this.state;
        const { value } = e.target;
        searchKey[index] = value
        this.setState({ searchKey })
        if (value === "") {
            for (let k = 0; k < displayJsonData[index].filter.length; k++) {
                displayJsonData[index].filter[k].isHide = true;
            }
        }
        else {
            for (let k = 0; k < displayJsonData[index].filter.length; k++) {
                if (displayJsonData[index].filter[k].label.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                    displayJsonData[index].filter[k].isHide = true
                }
                else {
                    displayJsonData[index].filter[k].isHide = false;
                }
            }
        }
        this.setState({
            displayJsonData,
            searchKey
        })
    }

    render() {
        const { showTagFilter, displayJsonData, searchKey } = this.state;
        return (
            <div className="fliters-container">
                <div className="select-fliters">
                    {this.displaySelectedTags()}
                    <div className="add-fliters" onClick={() => this.displaymainTagData()}>
                        <i className="fa fa-plus"></i>
                    </div>
                    <div className="fliter-toggel" onClick={() => this.setState({ showTagFilter: !showTagFilter })}></div>
                    <i className="fa fa-angle-down" onClick={() => this.setState({ showTagFilter: !showTagFilter })}></i>
                </div>
                {displayJsonData && displayJsonData.length > 0 ? (
                    <div className={showTagFilter === true ? "fliters-collapse active" : "fliters-collapse"}>
                        {displayJsonData.map((filterData: any, index: any) => {
                            return (
                                <div className="fliters" key={filterData.id}>
                                    <div className="fliter-box">
                                        <div className='heading'>{filterData.name}</div>
                                        <div className="form-group search-control">
                                            <button className="btn btn-search">
                                                <i className="fa fa-search"></i>
                                            </button>
                                            <input type="text" className="input-group-text" value={searchKey[index]} onChange={(e) => this.searchTag(e, index)} placeholder="Search" />
                                            <button className="btn btn-clear" onClick={() => this.clearAllTagFilter(index)}>
                                                <i className="fa fa-times"></i>
                                            </button>
                                        </div>
                                        <div className="fliters-links">
                                            {this.displayTagList(filterData.filter)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : <>.... LOADING</>}
                <div className={showTagFilter === true ? "fliters-collapse-bg active" : "fliters-collapse-bg"} onClick={() => this.setState({ showTagFilter: !showTagFilter })}></div>
            </div>
        );
    }
}