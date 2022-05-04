import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { TopMenu } from './TopMenu';
import { RestService } from './../_service/RestService';
import { config } from './../../config';
import { DevCatalogue } from './DevCatalog';
import { SecCatalogue } from './SecCatalog';
import { OpsCatalogue } from './OpsCatalog';

export class Catalog extends React.Component<any, any>{
  breadCrumbs: any;
  config: any;
  tabMapping: any = [{
    name: "Dev Catalogue",
    dataKey: 'dev',
    component: DevCatalogue
  }, {
    name: "Sec Catalogue",
    dataKey: 'sec',
    component: SecCatalogue
  }, {
    name: "Ops Catalogue",
    dataKey: 'ops',
    component: OpsCatalogue
  }];

  constructor(props: any) {
    super(props)
    this.state = {
      catalogueData: {},
      activeTab: 0,
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
    this.breadCrumbs = [
      {
        label: 'Home',
        route: `/`,
      },
      {
        label: 'Assets | Discovered Assets',
        isCurrentPage: true,
      },
    ];
  }

  componentDidMount() {
    this.getInputConfig();
  }

  getInputConfig = () => {
    try {
      RestService.getData(`${config.SEARCH_CONFIG_DASHBOARD}`, null, null).then(
        (response: any) => {
          if (response.code !== 417) {
            this.setState({
              catalogueData: response.details,
            });
          }
        }, (error: any) => {
          console.log("Performance. Search input config failed. Error: ", error);
        });
    } catch (err) {
      console.log("Performance. Excepiton in search input this.config. Error: ", err);
    }
  }

  setActiveTab = (activeTab: any) => {
    this.setState({ activeTab })
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
    const { catalogueData, activeTab } = this.state;
    return (
      <div className="perfmanager-dashboard-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="CATALOGUE MANAGEMENT" />
        <div className="catalogue-management-container">
          <div className="common-container">
            <div className="catalogue-tabs">
              <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <ul>
                    {
                      this.tabMapping.map((tabData: any, index: any) => {
                        return (
                          <li key={`ops-tab-${index}`}
                            className={index === activeTab ? 'active' : ''}
                            onClick={(e) => this.setActiveTab(index)}>
                            {tabData.name}
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <TopMenu />
                </div>
              </div>
            </div>
            <div className="catalogue-tabs-container">
              {
                this.tabMapping.map((tabData: any, index: any) => {
                  if (activeTab === index) {
                    return <tabData.component data={catalogueData[tabData.dataKey]} />;
                  } else {
                    return <></>;
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}