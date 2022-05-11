import React from 'react';
import { v4 } from 'uuid';

// const filterData = [
//     {
//         name: "Product Enclave",
//         key: "nodes",
//         filter: [
//             { value: "687373481-VPC1", label: "VPC 1" },
//             { value: "Global Services", label: "Global Services" },
//         ],
//     },
//     {
//         name: "Clusters",
//         key: "clusters",
//         filter: [
//             { value: "687373481-VPC1-Cluster1", label: "VPC 1 > Cluster 1" },
//             { value: "687373481-VPC1-Cluster2", label: "VPC 1 > Cluster 2" },
//         ],
//     },
//     {
//         name: "Environments",
//         key: "environments",
//         filter: [
//             { value: "PROD", label: "PROD" },
//             { value: "STAGE", label: "STAGE" },
//             { value: "TEST", label: "TEST" },
//         ],
//     },
//     {
//         name: "Service Type",
//         key: "serviceType",
//         filter: [
//             { value: "App", label: "App" },
//             { value: "Data", label: "Data" },
//         ],
//     },
//     {
//         name: "Service Nature",
//         key: "serviceNature",
//         filter: [
//             { value: "Common", label: "Common" },
//             { value: "Business", label: "Business" },
//         ],
//     },
//     {
//         name: "Products",
//         key: "products",
//         filter: [{ value: "PROCUREMENT", label: "PROCUREMENT" }],
//     },
// ];

export class Filter extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            filterData: this.props.filterJsonData,
            duplicateFilterData: this.props.filterJsonData,
            filterJsonData: {},
            duplicatefilterJsonData: {},
            searchString: '',
            showPreview: false,
            searchKey: '',
            showTagFilter: false,
        }
    }

    clearAllTagFilter = (index: any) => {
        const { filterData } = this.state;
        for (let k = 0; k < filterData[index].filter.length; k++) {
            filterData[index].filter[k].isHide = false;
        }
        this.setState({
            filterData,
            searchKey: "",
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
        } else {
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

    handleClearFilter = () => {
        let { filterData } = this.state;
        for (let i = 0; i < filterData.length; i++) {
            filterData[i].isHide = true;
            filterData[i].isChecked = false;
        }
        this.setState({ filterData, searchString: '' })
    }

    handleChangeSearch = (e: any) => {
        let { value } = e.target;
        const { duplicateFilterData } = this.state;
        value = value.toLowerCase();
        const filterData = JSON.parse(JSON.stringify(duplicateFilterData));
        filterData.forEach((data: any) => {
            data.filter.forEach((checkbox: any) => {
                const label = checkbox.label.toLowerCase();
                if (label.indexOf(value) === -1) {
                    checkbox.isHide = true;
                }
            });
        });
        this.setState({
            searchString: value,
            filterData,
        });
    };

    handleCheckboxChange = (filterIndex: any, index: any) => {
        let { filterData } = this.state;
        filterData[filterIndex].filter[index].isChecked = !filterData[filterIndex].filter[index].isChecked;
        this.setState({ filterData });
        this.onChangeFilters(filterData);
    }

    onChangeFilters = (filterData: any) => {
        const retData: any = {};
        if (filterData && filterData.length > 0) {
            for (let i = 0; i < filterData.length; i++) {
                let filter = filterData[i].filter;
                for (let j = 0; j < filter.length; j++) {
                    const label = filterData[i].filter[j];
                    if (label.isChecked) {
                        retData[filterData[i].key] = retData[filterData[i].key] || [];
                        retData[filterData[i].key].push(label.value);
                    }
                }
            }
        }
        if (this.props.onChangeFilter) {
            this.props.onChangeFilter(retData);
        }
    };

    renderFilters = () => {
        const { filterData } = this.state;
        if (filterData && filterData.length > 0) {
            const retData: any = [];
            filterData.forEach((data: any, index: any) => {
                const checkboxJSX: any = [];
                data.filter.forEach((checkbox: any, checkboxIndex: any) => {
                    if (!checkbox.isHide) {
                        checkboxJSX.push(
                            <li key={v4()}>
                                <input id={checkbox.value} type="checkbox" checked={checkbox.isChecked} onChange={() => this.handleCheckboxChange(index, checkboxIndex)} />
                                <label htmlFor={checkbox.value}>{checkbox.label}</label>
                            </li>
                        );
                    }
                });
                retData.push(
                    <div className="catalogue-category">
                        <strong>{data.name}</strong>
                        <ul>{checkboxJSX}</ul>
                    </div>
                );
            });
            return retData;
        }
        return <>No filter data available</>;
    };

    render() {
        const { searchString } = this.state;
        return (
            <div className="catalogue-filters">
                <div className="filter-search">
                    <strong>Filters</strong>
                    <div className="filter-input">
                        <button className="search-icon" onClick={this.handleClearFilter}><i className="fa fa-search"></i></button>
                        <input type="text" placeholder="Search" value={searchString} onChange={this.handleChangeSearch} />
                        <button className="close-icon" onClick={this.handleClearFilter}><i className="fa fa-close"></i></button>
                    </div>
                </div>
                {this.renderFilters()}
            </div >
        )
    }
}