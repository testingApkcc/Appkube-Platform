import React from 'react';

export class Filter extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            filterData: this.props.filterJsonData,
            // { 'name': 'Filter 1', 'id': 1, 'isHide': 'true' },
            // { 'name': 'Filter 2', 'id': 2, 'isHide': 'true' },
            // { 'name': 'Filter 3', 'id': 3, 'isHide': 'true' },
            // { 'name': 'Filter 4', 'id': 4, 'isHide': 'true' },
            // { 'name': 'Filter 5', 'id': 5, 'isHide': 'true' },
            // { 'name': 'Filter 6', 'id': 6, 'isHide': 'true' },
            // { 'name': 'Filter 7', 'id': 7, 'isHide': 'true' },
            filterJsonData: {},
            duplicatefilterJsonData: {},
            searchString: '',
            showPreview: false,
            searchKey: '',
            showTagFilter: false,
        }
    }

    componentDidMount() {
        if (this.props.filterJsonData && this.props.filterJsonData.length > 0) {
            let filterobj: any = {
                associatedCloudElementType: [],
                associatedDataSourceType: [],
                associatedDataType: [],
                associatedSLAType: [],
            };
            for (let i = 0; i < this.props.filterJsonData.length; i++) {
                let row = this.props.filterJsonData[i];
                Object.keys(row).map((data) => {
                    if (filterobj[data] && filterobj[data].length > 0) {
                        if (filterobj[data].indexOf(row[data]) === -1) {
                            filterobj[data].push(row[data]);
                        }
                    } else if (filterobj[data] && filterobj[data].length === 0) {
                        filterobj[data].push(row[data]);
                    }
                }
                );
            }
            this.setState({ filterData: filterobj, duplicatefilterJsonData: filterobj })
        }
    }

    displaySelectedTags = () => {
        const { filterData } = this.state;
        let retData = [];
        if (filterData && filterData.length > 0) {
            for (let i = 0; i < filterData.length; i++) {
                let filter = filterData[i].filter;
                for (let j = 0; j < filter.length; j++) {
                    let label = filterData[i].filter[j];
                    if (label.isChecked) {
                        retData.push(
                            <div className="fliter-selected" key={label.id}>
                                <span
                                >{label.label}</span>
                                <i className="fa fa-times"
                                    onClick={() => this.removeSelectedTag(i, j)}
                                ></i>
                            </div>
                        );

                    }
                }
            }
        }
        return retData;
    }

    onChangeFilters = (filterData: any) => {
        const retData: any = {};
        if (filterData && filterData.length > 0) {
            for (let i = 0; i < filterData.length; i++) {
                let filter = filterData[i].filter;
                for (let j = 0; j < filter.length; j++) {
                    const label = filterData[i].filter[j];
                    if (label.isChecked) {
                        retData[filterData[i].name] = retData[filterData[i].name] || [];
                        retData[filterData[i].name].push(label.value);
                    }
                }
            }
        }
        if (this.props.onChangeFilter) {
            this.props.onChangeFilter(retData);
        }
    };

    setChildData = (data: any) => {
        if (data.subdata.length > 0) {
            this.setState({
                showTagFilter: true,
                filterData: data.subdata,
            })
        } else {
            this.setState({
                showTagFilter: false,
            })
        }
    }

    removeSelectedTag = (filterIndex: any, index: any) => {
        let { filterData } = this.state
        filterData[filterIndex].filter[index].isChecked = false
        this.setState({ filterData })
        this.onChangeFilters(filterData);
    }

    displayTagList = (filterData: any, filterIndex: any) => {
        let retData = [];
        for (let i = 0; i < filterData.length; i++) {
            if (!filterData[i].isHide) {
                retData.push(
                    <div className="form-check"
                        onClick={() => this.changeHandleState(filterIndex, i)}
                        title={filterData[i]}
                    >
                        <input type="checkbox" checked={filterData[i].isChecked} className="checkbox" />
                        <label htmlFor={filterData[i]}>{filterData[i]}</label>
                    </div>
                );
            }
        }
        return retData;
    }

    changeHandleState = (filterIndex: any, index: any) => {
        let { filterData } = this.state;
        filterData[filterIndex].filter[index].isChecked = !filterData[filterIndex].filter[index].isChecked;
        this.setState({ filterData });
        this.onChangeFilters(filterData);
    }

    displaymainTagData = () => {
        this.setState({
            showTagFilter: !this.state.showTagFilter
        })
    }

    clearAllTagFilter = (index: any) => {
        const { searchKey, filterData } = this.state;
        // searchKey[index] = "";
        for (let k = 0; k < filterData[index].filter.length; k++) {
            filterData[index].filter[k].isHide = false;
        }
        this.setState({
            filterData,
            // searchKey
        })
    }

    searchTag = (e: any) => {
        let { duplicatefilterJsonData } = this.state;
        const { value } = e.target;
        this.setState({ searchKey: value });
        let searchResult: any = {};
        if (value) {
            Object.keys(duplicatefilterJsonData).map((data, index) => {
                if (duplicatefilterJsonData[data] && duplicatefilterJsonData[data].length > 0) {
                    for (let i = 0; i < duplicatefilterJsonData[data].length; i++) {
                        if (duplicatefilterJsonData[data][i].toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                            searchResult[data] = duplicatefilterJsonData[data];
                            // filterData[data][i].isHide = false;
                        } else {
                            searchResult = duplicatefilterJsonData;
                            // filterData[data][i].isHide = true;
                        }
                    }
                }
            });
        }
        else {
            // for (let k = 0; k < filterData[index].filter.length; k++) {
            //     if (filterData[index].filter[k].label.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
            //         filterData[index].filter[k].isHide = false
            //     }
            //     else {
            //         filterData[index].filter[k].isHide = true;
            //     }
            // }
        }
        console.log(searchResult);
        this.setState({
            filterData: searchResult,
        })
    }

    render() {
        const { filterData, showTagFilter, searchKey } = this.state;
        return (
            <div className="catalogue-filters">
                <div className="filter-search">
                    <strong>Filters</strong>
                    <div className="form-group search-control">
                        <button className="btn btn-search">
                            <i className="fa fa-search"></i>
                        </button>
                        <input type="text" placeholder="Search" value={searchKey} onChange={(e) => this.searchTag(e)} />
                        <button className="btn btn-clear" onClick={() => this.clearAllTagFilter(1)}>
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                {/* <div className="catalogue-category"> */}
                {/* <strong>Tier</strong>
                    <ul>
                        <li>
                            <input type="checkbox" id="1" name="Filter1" value="filter1" />
                            <label>Filter 1</label>
                        </li>
                        <li>
                            <input type="checkbox" id="2" name="Filter2" value="filter2" />
                            <label>Filter 2</label>
                        </li>
                        <li>
                            <input type="checkbox" id="3" name="Filter3" value="filter3" />
                            <label>Filter 3</label>
                        </li>
                        <li>
                            <input type="checkbox" id="4" name="Filter4" value="filter4" />
                            <label>Filter 4</label>
                        </li>
                    </ul> */}
                {/* </div> */}
                <div className="catalogue-category">
                    {filterData &&
                        Object.keys(filterData).map((data, index) => {
                            if (filterData[data] && filterData[data].length > 0) {
                                return (
                                    <div className={showTagFilter === true ? "fliters-collapse active" : "fliters-collapse"}>
                                        <div className="fliters" key={index}>
                                            <div className="fliter-box">
                                                <div className='heading'>{data}</div>
                                                {/* <div className="form-group search-control">
                                                    <button className="btn btn-search">
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                    <input type="text" className="input-group-text" value={searchKey[index]} onChange={(e) => this.searchTag(e, index)} placeholder="Search" />
                                                    <button className="btn btn-clear" onClick={() => this.clearAllTagFilter(index)}>
                                                        <i className="fa fa-times"></i>
                                                    </button>
                                                </div> */}
                                                <div className="fliters-links">
                                                    {this.displayTagList(filterData[data], index)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="catalogue-category">
                                        <strong>No record found</strong>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div >
        )
    }
}