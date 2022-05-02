//import { withWidth } from '@material-ui/core';
import * as React from 'react';
// import { threadId } from 'worker_threads';

export class SelectCloudFilter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            codeEditorValue: "",
            displayJsonData: [
            ],
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
            showTagFilter: false,
            searchKey: [],
        };
    }

    componentDidMount() {
    if (this.props.filterJsonData && this.props.filterJsonData.length>0 ){
        this.setState({ displayJsonData:this.props.filterJsonData })
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
                    if (label.isChecked) {
                        retData.push(
                            <div className="fliter-selected" key={label.id}>
                                <span
                                >{label.label}</span>
                                <i className="fa fa-times"
                                    onClick={() => this.removeSelectedTag(i,j)}
                                ></i>
                            </div>
                        );
                        
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

    removeSelectedTag = (index: any, key:any) => {
        let { displayJsonData } = this.state
        displayJsonData[index].filter[key].isChecked = false
        this.setState({ displayJsonData })
    }

    displayTagList = (filterData: any) => {
        let retData = [];
        for (let i = 0; i < filterData.length; i++) {
            if (!filterData[i].isHide) {
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
            displayJsonData[index].filter[k].isHide = false;
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
                displayJsonData[index].filter[k].isHide = false;
            }
        }
        else {
            for (let k = 0; k < displayJsonData[index].filter.length; k++) {
                if (displayJsonData[index].filter[k].label.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                    displayJsonData[index].filter[k].isHide = false
                }
                else {
                    displayJsonData[index].filter[k].isHide = true;
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
                                            { filterData.filter && filterData.filter.length> 0 &&this.displayTagList(filterData.filter)}
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