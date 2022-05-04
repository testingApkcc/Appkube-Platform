import React from 'react';

export class Filter extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            filterData: [
                { 'name': 'Filter 1', 'id': 1, 'isHide': 'true' },
                { 'name': 'Filter 2', 'id': 2, 'isHide': 'true' },
                { 'name': 'Filter 3', 'id': 3, 'isHide': 'true' },
                { 'name': 'Filter 4', 'id': 4, 'isHide': 'true' },
                { 'name': 'Filter 5', 'id': 5, 'isHide': 'true' },
                { 'name': 'Filter 6', 'id': 6, 'isHide': 'true' },
                { 'name': 'Filter 7', 'id': 7, 'isHide': 'true' },
            ],
            searchString: '',
            showPreview: false,
            searchKey: '',
        }
    }

    searchFilter = (e: any) => {
        const { filterData } = this.state;
        const { value } = e.target;
        if (value !== '') {
            for (let i = 0; i < filterData.length; i++) {
                if (filterData[i].name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                    filterData[i].isHide = true;
                    filterData[i].isChecked = true;
                }
                else {
                    filterData[i].isHide = false;
                    filterData[i].isChecked = false;
                }
            }
        } else {
            for (let i = 0; i < filterData.length; i++) {
                filterData[i].isHide = true;
                filterData[i].isChecked = false
            }
        }
        this.setState({
            filterData,
            searchString: value
        })
    }

    handleFilterList = (filterValues: any) => {
        let retData: any = [];
        for (let i = 0; i < filterValues.length; i++) {
            let { id, name, isHide, isChecked } = filterValues[i]
            if (isHide) {
                retData.push(
                    <li key={i}>
                        <input type="checkbox" id={id} name={name} value={id} checked={isChecked} onClick={() => this.handleChecked(i)} />
                        <label>{name}</label>
                    </li>
                )
            }
        }
        return retData;
    }

    handleChecked = (index: any) => {
        const { filterData } = this.state;
        filterData[index].isChecked = !filterData[index].isChecked;
        this.setState({ filterData });
    }

    handleClearFilter = () => {
        let { filterData } = this.state;
        for (let i = 0; i < filterData.length; i++) {
            filterData[i].isHide = true;
            filterData[i].isChecked = false;
        }
        this.setState({ filterData, searchString: '' })
    }

    render() {
        const { filterData, searchString } = this.state;
        return (
                <div className="catalogue-filters">
                    <div className="filter-search">
                        <strong>Filters</strong>
                        <div className="filter-input">
                            <button className="search-icon" onClick={this.handleClearFilter}><i className="fa fa-search"></i></button>
                            <input type="text" placeholder="Search" value={searchString} onChange={this.searchFilter} />
                            <button className="close-icon" onClick={this.handleClearFilter}><i className="fa fa-close"></i></button>
                        </div>
                    </div>
                    <div className="catalogue-category">
                        <strong>Tier</strong>
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
                        </ul>
                    </div>
                    <div className="catalogue-category">
                        <strong>Category</strong>
                        <ul>
                            {filterData && filterData.length > 0 &&
                                this.handleFilterList(filterData)
                            }
                        </ul>
                    </div>
                </div>
        )
    }
}