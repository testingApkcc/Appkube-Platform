import React from 'react';
import { v4 } from 'uuid';

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

    handleClearFilter = () => {
<<<<<<< HEAD
        let { filterData } = this.state;
            for (let i = 0; i < filterData.length; i++) {
                for (let j = 0; j<filterData[i].filter.length; j++){
                filterData[i].filter[j].isHide = false;
                filterData[i].filter[j].isChecked = false;
                }
            }
        this.setState({ filterData, searchString: '' });
=======
        const { duplicateFilterData } = this.state;
        const filterData = JSON.parse(JSON.stringify(duplicateFilterData));
        filterData.forEach((data: any) => {
            data.filter.forEach((checkbox: any) => {
                checkbox.isHide = false;
            });
        });
        this.setState({ filterData, searchString: '' })
>>>>>>> a9bf060a6eae1745550e9fe99b3090cd7fb6a504
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
                        <button className="search-icon" ><i className="fa fa-search"></i></button>
                        <input type="text" placeholder="Search" value={searchString} onChange={this.handleChangeSearch} />
                        <button className="close-icon" onClick={this.handleClearFilter}><i className="fa fa-close"></i></button>
                    </div>
                </div>
                {this.renderFilters()}
            </div >
        )
    }
}