import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { TopMenu } from './TopMenu';

import { PreviewDashboardPopup } from './PreviewDashboardPopup';
import { RestService } from './../_service/RestService';
import { config } from './../../config';
import { DevCatalog } from './DevCatalog';
import { SecCatalog } from './SecCatalog';
import { OpsCatalog } from './OpsCatalog';
import {ProvisioningTemplates} from './OpsCatalog/provisionTemplate';
import {AppBlocks} from './DevCatalog/AppBlocks'
export class Catalog extends React.Component<any, any>{
  breadCrumbs: any;
  config: any;
  previewDashboardPopupRef: any;
  constructor(props: any) {
    super(props)
    this.state = {
      catalogueManagement: {
        Dev: {},
        Sec: {},
        Ops: {}
      },
      navHandle: {
        topKey: 'Dev',
        lowerKey: 0,
      },
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
    this.previewDashboardPopupRef = React.createRef();
  }

  async componentDidMount() {
    await this.getInputConfig();
  }

  getInputConfig = async () => {
    try {
      let { catalogueManagement } = this.state;
      await RestService.getData(`${config.SEARCH_CONFIG_DASHBOARD}`, null, null).then(
        (response: any) => {
          if (response.code !== 417) {
            catalogueManagement['Dev'] = response.details.dev;
            catalogueManagement['Sec'] = response.details.sec;
            catalogueManagement['Ops'] = response.details.ops;
            this.setState({
              catalogueManagement,
            });
          }
        }, (error: any) => {
          console.log("Performance. Search input config failed. Error: ", error);
        });
    } catch (err) {
      console.log("Performance. Excepiton in search input this.config. Error: ", err);
    }
  }

  handleUpperMenu = (key: any) => {
    let { navHandle } = this.state;
    navHandle.topKey = key;
    navHandle.lowerKey=0 
    this.setState({ navHandle })
  }

  handleLowerMenu = (inx: any) => {
    let { navHandle } = this.state
    navHandle.lowerKey = inx;
    this.setState({ navHandle })
  }

  handlePreviewDashboard = (link: any) => {
    this.previewDashboardPopupRef.current.setLink(link);
    this.previewDashboardPopupRef.current.toggle();
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
    const { catalogueManagement, navHandle, showPreview } = this.state;
    const { topKey, lowerKey } = navHandle;
    let cardData = catalogueManagement[topKey];
    console.log(cardData);
    // if (cardData) {
      cardData =cardData[Object.keys(cardData)[lowerKey]];
    // }
    console.log(cardData, "card Data")
    console.log(lowerKey)
    console.log(topKey)
    return (
      <div className="perfmanager-dashboard-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="CATALOGUE MANAGEMENT" />
        <div className="catalogue-management-container">
          <div className="common-container">
            <div className="catalogue-tabs">
              <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-12">
                  {catalogueManagement && <ul>
                    {Object.keys(catalogueManagement).map((cat: any, inx: any) =>
                      <li key={inx} className={`${topKey === cat ? 'active' : ''}`}
                        onClick={(e) => this.handleUpperMenu(cat)}>{`${cat} Catalogue`}</li>)}
                  </ul>}
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <TopMenu />
                </div>
              </div>
            </div>
            <div className="catalogue-tabs-container">
              {catalogueManagement && <div className="catalogue-inner-tabs">
                {navHandle.topKey === 'Dev' && Object.keys(catalogueManagement['Dev']).length > 0 &&
                  <DevCatalog catalogData={catalogueManagement} navHandle={navHandle}  handleLowerMenu={this.handleLowerMenu}/>
                }
                {navHandle.topKey === 'Sec' && Object.keys(catalogueManagement['Dev']).length > 0 &&
                  <SecCatalog catalogData={catalogueManagement} navHandle={navHandle}  handleLowerMenu={this.handleLowerMenu}/>
                }
                {navHandle.topKey === 'Ops' && Object.keys(catalogueManagement['Dev']).length > 0 &&
                  <OpsCatalog catalogData={catalogueManagement} navHandle={navHandle}  handleLowerMenu={this.handleLowerMenu}/>
                }
              </div>}
            </div>
            {/* <ProvisioningTemplates /> */}
            <AppBlocks cardData={cardData} handlePreviewDashboard={this.handlePreviewDashboard} showPreview={showPreview}/>
          </div>
        </div>
        <PreviewDashboardPopup ref={this.previewDashboardPopupRef} />
      </div>
    )
  }
}