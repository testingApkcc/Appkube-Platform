//import { withWidth } from '@material-ui/core';
import * as React from 'react';

export class SelectCloudFilter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            codeEditorValue: "",
            optionJsonData: [
                {
                    name: 'OU',
                    value: 'ou',
                    isChecked: false,
                    id :1,
                    subdata: [
                        { name: 'IT Department', value: 'itdepartment', isChecked: false ,id :1},
                        { name: 'Network Department', value: 'networkdepartment', isChecked: false, id :2},
                        { name: 'Development', value: 'development', isChecked: false, id :3},
                        { name: 'Testing', value: 'testing', isChecked: false, id :4},
                    ],
                },
                {
                    name: 'Status',
                    value: 'status',
                    isChecked: false,
                    id :2,
                    subdata: [
                        { name: 'Enable', value: 'enable', isChecked: false , id :1},
                        { name: 'Disable', value: 'disable', isChecked: false, id :2 },
                    ],
                },
                {
                    name: 'No of Assets',
                    value: 'noOFssets',
                    isChecked: false,
                    id :3,
                    subdata: [],
                },
                {
                    name: 'Platform',
                    value: 'platform',
                    isChecked: false,
                    id :4,
                    subdata: [],
                }, {
                    name: 'Logs',
                    value: 'logs',
                    isChecked: false,
                    subdata: [],
                }, {
                    name: 'Performance & Availability',
                    value: 'availabiity',
                    isChecked: false,
                    id :5,
                    subdata: []
                }
            ],
            displayJsonData: [
                {
                    name: 'OU',
                    value: 'ou',
                    isChecked: false,
                    id :1,
                    subdata: [
                        { name: 'IT Department', value: 'itdepartment', isChecked: false, id :1},
                        { name: 'Network Department', value: 'networkdepartment', isChecked: false, id :2},
                        { name: 'Development', value: 'development', isChecked: false, id :3},
                        { name: 'Testing', value: 'testing', isChecked: false, id :4},
                    ],
                },
                {
                    name: 'Status',
                    value: 'status',
                    isChecked: false,
                    id :2,
                    subdata: [
                        { name: 'Enable', value: 'enable', isChecked: false, id :1},
                        { name: 'Disable', value: 'disable', isChecked: false, id :2},
                    ],
                },
                {
                    name: 'No of Assets',
                    value: 'noOFssets',
                    isChecked: false,
                    id :3,
                    subdata: [],
                },
                {
                    name: 'Platform',
                    value: 'platform',
                    isChecked: false,
                    id :4,
                    subdata: [],
                }, {
                    name: 'Logs',
                    value: 'logs',
                    isChecked: false,
                    id :5,
                    subdata: [],
                }, {
                    name: 'Performance & Availability',
                    value: 'availabiity',
                    isChecked: false,
                    id :6,
                    subdata: []
                }
            ],
            showTagFilter: false,
            searchKey: '',
        };
    }

    displaySelectedTags = () => {
        const { optionJsonData } = this.state;
        let retData = [];
        if (optionJsonData.length > 0) {
            for (let i = 0; i < optionJsonData.length; i++) {
                if (optionJsonData[i].isChecked) {
                    retData.push(
                        <div className="fliter-selected" key={optionJsonData[i].id}>
                            <span onClick={() => this.setChildData(optionJsonData[i])}>{optionJsonData[i].name}</span>
                            <i className="fa fa-times" onClick={() => this.removeSelectedTag(optionJsonData[i].value)}></i>
                        </div>
                    );
                    if (optionJsonData[i].subdata) {
                        for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                            if (optionJsonData[i].subdata[j].isChecked) {
                                retData.push(
                                    <div className="fliter-selected" key={ optionJsonData[i].subdata[j].id}>
                                        <span onClick={() => this.setState({ showTagFilter: false })}>{optionJsonData[i].subdata[j].name}</span>
                                        <i className="fa fa-times" onClick={() => this.removeSelectedTag(optionJsonData[i].subdata[j].value)}></i>
                                    </div>
                                );
                            }
                        }
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
        const { optionJsonData } = this.state;
        for (let i = 0; i < optionJsonData.length; i++) {
            let row = optionJsonData[i];
            if (row.value == value) {
                optionJsonData[i].isChecked = !optionJsonData[i].isChecked;
                if (optionJsonData[i].subdata) {
                    for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                        optionJsonData[i].subdata[j].isChecked = false;
                    }
                }
            } else {
                if (optionJsonData[i].subdata) {
                    for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                        if (optionJsonData[i].subdata[j].value == value) {
                            optionJsonData[i].subdata[j].isChecked = !optionJsonData[i].subdata[j].isChecked;
                        }
                    }
                }
            }
        }
        this.setState({
            optionJsonData,
            displayJsonData: optionJsonData,
        })
    }

    displayTagList = () => {
        const { displayJsonData } = this.state;
        let retData = [];
        for (let i = 0; i < displayJsonData.length; i++) {
            retData.push(
                <div className="form-check" onClick={() => this.changeHandleState(i, displayJsonData[i].value)} >
                    <input type="checkbox" checked={displayJsonData[i].isChecked} className="checkbox" />
                    <label htmlFor={displayJsonData[i].value}>{displayJsonData[i].name}</label>
                </div>
            );
        }
        return retData;
    }

    changeHandleState = (index: any, value: any) => {
        let { displayJsonData, optionJsonData } = this.state;
        for (let i = 0; i < optionJsonData.length; i++) {
            if (optionJsonData[i].value === value) {
                optionJsonData[i].isChecked = !optionJsonData[i].isChecked;
                if (optionJsonData[i].subdata.length > 0) {
                    displayJsonData = [];
                    for (let k = 0; k < optionJsonData[i].subdata.length; k++) {
                        if (optionJsonData[i].isChecked) {
                            displayJsonData.push(optionJsonData[i].subdata[k]);
                        } else {
                            optionJsonData[i].subdata[k].isChecked = false;
                            displayJsonData = optionJsonData
                        }
                    }
                    this.setState({
                        displayJsonData,
                    })
                } else {
                    this.setState({
                        displayJsonData: optionJsonData,
                    });
                }
            } else {
                if (optionJsonData[i].subdata.length > 0) {
                    displayJsonData = [];
                    for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                        if (optionJsonData[i].subdata[j].value === value) {
                            optionJsonData[i].subdata[j].isChecked = !optionJsonData[i].subdata[j].isChecked;
                            this.setState({
                                displayJsonData: optionJsonData,
                            });
                        }
                    }
                }
            }
        }
    }

    displaymainTagData = () => {
        const { optionJsonData } = this.state;
        this.setState({
            showTagFilter: true,
            displayJsonData: optionJsonData,
        })
    }

    clearAllTagFilter = () => {
        let { optionJsonData } = this.state;
        for (let i = 0; i < optionJsonData.length; i++) {
            optionJsonData[i].isChecked = false;
            if (optionJsonData[i].subdata.length > 0) {
                for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                    optionJsonData[i].subdata[j].isChecked = false;
                }
            }
        }
        this.setState({
            optionJsonData,
            displayJsonData: optionJsonData,
            searchKey: ''
        })
    }

    searchTag = (e: any) => {
        const { displayJsonData } = this.state;
        const { value } = e.target;
        let resultData = [];
        this.setState({
            searchKey: value,
        })
        for (let j = 0; j < displayJsonData.length; j++) {
            if (displayJsonData[j].name.toLowerCase().indexOf(value) !== -1 || displayJsonData[j].name.indexOf(value) !== -1) {
                resultData.push(displayJsonData[j]);
            }
        }
        this.setState({
            displayJsonData: resultData
        })
    }

    render() {
        const { showTagFilter, searchKey } = this.state;
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
                <div className={showTagFilter === true ? "fliters-collapse active" : "fliters-collapse"}>
                    <div className="form-group search-control">
                        <button className="btn btn-search">
                            <i className="fa fa-search"></i>
                        </button>
                        <input type="text" className="input-group-text" value={searchKey} onChange={this.searchTag} placeholder="Search" />
                        <button className="btn btn-clear" onClick={this.clearAllTagFilter}>
                            <i className="fa fa-times"></i>
                            Clear
                        </button>
                    </div>
                    <div className="fliters-links">
                        {this.displayTagList()}
                    </div>
                </div>
                <div className={showTagFilter === true ? "fliters-collapse-bg active" : "fliters-collapse-bg"} onClick={() => this.setState({ showTagFilter: !showTagFilter })}></div>
            </div>
        );
    }
}