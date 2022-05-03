import React from 'react';
// import { Breadcrumbs } from '../../Breadcrumbs';
// import { TopMenu } from '../TopMenu';
// import previewDashboardIcon from './../img/preview-dashboard-icon.png';
// import libraryIcon from './../img/library-icon.png';
// import awsIcon from '../../img/aws.png';
// import previewDashboard from './../img/preview-dashboard.png';
// import { PreviewDashboardPopup } from '../PreviewDashboardPopup';
// import { RestService } from '../../_service/RestService';
// import { config } from '../../../config';
export class SecCatalog extends React.Component<any, any>{
    // breadCrumbs: any;
    config: any;
    previewDashboardPopupRef: any;
    constructor(props: any) {
        super(props)
        this.state = {
            // catalogueManagement: {
            //     Dev: {},
            //     Sec: {},
            //     Ops: {}
            // },
            // Dev: {},
            // navHandle: {
            //     index: 0,
            //     topKey: 0,
            //     lowerKey: 0
            // },
            // showPreview: false,
            // searchKey: '',
        }
        // this.breadCrumbs = [
        //     {
        //         label: 'Home',
        //         route: `/`,
        //     },
        //     {
        //         label: 'Assets | Discovered Assets',
        //         isCurrentPage: true,
        //     },
        // ];
        //     this.previewDashboardPopupRef = React.createRef();
    }
    // async componentDidMount() {
    //     await this.getInputConfig();
    // }

    // getInputConfig = async () => {
    //     try {
    //         let { catalogueManagement } = this.state;
    //         await RestService.getData(`${config.SEARCH_CONFIG_DASHBOARD}`, null, null).then(
    //             (response: any) => {
    //                 if (response.code !== 417) {
    //                     catalogueManagement['Dev'] = response.details.dev;
    //                     catalogueManagement['Sec'] = response.details.sec;
    //                     catalogueManagement['Ops'] = response.details.ops;
    //                     this.setState({
    //                         catalogueManagement,
    //                     });
    //                 }
    //             }, (error: any) => {
    //                 console.log("Performance. Search input config failed. Error: ", error);
    //             });
    //     } catch (err) {
    //         console.log("Performance. Excepiton in search input this.config. Error: ", err);
    //     }
    // }
    // handleUpperMenu = (inx: any) => {
    //     let { navHandle } = this.state
    //     navHandle.topKey = inx
    //     navHandle.lowerKey = 0;
    //     this.setState({ navHandle })
    // }
    // handleLowerMenu = (inx: any) => {
    //     let { navHandle } = this.state
    //     navHandle.lowerKey = inx;
    //     this.setState({ navHandle })
    // }

    // handlePreviewDashboard = (link: any) => {
    //     this.previewDashboardPopupRef.current.setLink(link);
    //     this.previewDashboardPopupRef.current.toggle();
    // }

    // handleCard = (cardData: any) => {
    //     let retData = []
    //     if (cardData && cardData.length > 0) {
    //         retData = [];
    //         for (let i = 0; i < cardData.length; i++) {
    //             const { id, name, description } = cardData[i]
    //             const { showPreview } = this.state
    //             retData.push(
    //                 <>
    //                     <div className={`blog-list-item box ${showPreview === true ? "hide" : ""}`} key={id}>
    //                         <div className="module-card-content">
    //                             <div className="row">
    //                                 <div className="col-md-1 col-sm-12 p-r-0">
    //                                     {/* <img src={previewDashboard} alt={name} /> */}
    //                                 </div>
    //                                 <div className="col-md-11 col-sm-12">
    //                                     <h3 className="title is-block">{name}</h3>
    //                                     <p className="subtitle is-block">{description}</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="module-card-footer">
    //                             <div className="module-card-footer-details">
    //                                 <a>
    //                                     {/* <img src={libraryIcon} alt="" /> */}
    //                                     {`Add Catalog To library`}
    //                                 </a>
    //                             </div>
    //                             <div className="module-card-footer-provider">
    //                                 <a onClick={() => this.handlePreviewDashboard('')}>
    //                                     {/* <img src={previewDashboardIcon} alt="" /> */}
    //                                     {`Preview Dashboard`}
    //                                 </a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </>
    //             )
    //         }
    //     }
    //     else {
    //         retData = [];
    //         retData.push(<div>No Data Found</div>)
    //     }
    //     return retData
    // }

    render() {
        // const { catalogueManagement, navHandle } = this.state;
        // const { topKey, lowerKey } = navHandle
        // let cardData = catalogueManagement[Object.keys(catalogueManagement)[topKey]];
        // if (cardData) {
        //     cardData = cardData[Object.keys(cardData)[lowerKey]];
        // }
        return (
            // <div className="perfmanager-dashboard-container">
            //     {/* <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="CATALOGUE MANAGEMENT" /> */}
            //     <div className="catalogue-management-container">
            //         <div className="common-container">
            //             <div className="catalogue-tabs">
            //                 <div className="row">
            //                     <div className="col-lg-9 col-md-9 col-sm-12">
            //                         {catalogueManagement && <ul>
            //                             {Object.keys(catalogueManagement).map((cat: any, inx: any) =>
            //                                 <li key={inx} className={`${topKey === inx ? 'active' : ''}`}
            //                                     onClick={(e) => this.handleUpperMenu(inx)}>{`${cat} Catalogue`}</li>)}
            //                         </ul>}
            //                     </div>
            //                     <div className="col-lg-3 col-md-3 col-sm-12">
            //                         <TopMenu />
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className="catalogue-tabs-container">
            //                 <div className="catalogue-inner-tabs">
            //                     {catalogueManagement && <ul>
            //                         {Object.keys(catalogueManagement[Object.keys(catalogueManagement)[topKey]]).map((cat: any, inx: any) => <li key={inx}
            //                             className={lowerKey === inx ? 'active' : ''}
            //                             onClick={(e) => this.handleLowerMenu(inx)}>{cat}</li>)}
            //                     </ul>}
            //                 </div>
            //                 <div className="catalogue-inner-tabs-container">
            //                     <div className="row">
            //                         <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
            //                             <div className="catalogue-filters">
            //                                 <div className="filter-search">
            //                                     <strong>Filters</strong>
            //                                     {/* <div className="filter-input">
            //               <input type="text" placeholder="Search" value={searchString} onChange={this.searchFilter} />
            //               <button className="" onClick={this.handleClearFilter}><i className="fa fa-close"></i> Clear filter</button>
            //             </div> */}
            //                                 </div>
            //                                 <div className="catalogue-category">
            //                                     <strong>Tier</strong>
            //                                     <ul>
            //                                         <li>
            //                                             <input type="checkbox" id="1" name="Filter1" value="filter1" />
            //                                             <label>Filter 1</label>
            //                                         </li>
            //                                         <li>
            //                                             <input type="checkbox" id="2" name="Filter2" value="filter2" />
            //                                             <label>Filter 2</label>
            //                                         </li>
            //                                         <li>
            //                                             <input type="checkbox" id="3" name="Filter3" value="filter3" />
            //                                             <label>Filter 3</label>
            //                                         </li>
            //                                         <li>
            //                                             <input type="checkbox" id="4" name="Filter4" value="filter4" />
            //                                             <label>Filter 4</label>
            //                                         </li>
            //                                     </ul>
            //                                 </div>
            //                                 {/* <div className="catalogue-category">
            //             <strong>Category</strong>
            //             <ul>
            //               {filterData && filterData.length > 0 &&
            //                 this.handleFilterList(filterData)
            //               }
            //             </ul>
            //           </div> */}
            //                             </div>
            //                         </div>
            //                         <div className="col-lg-9 col-md-9 col-sm-12 col-l-p">
            //                             <div className="catalogue-right-container">
            //                                 <div className="heading">
            //                                     <div className="row">
            //                                         <div className="col-md-9 col-sm-12">
            //                                             <h3>Catalogue</h3>
            //                                             <p>A catalogue is collection of dashboards</p>
            //                                         </div>
            //                                         <div className="col-md-3 col-sm-12">
            //                                             <button className="create-btn">Add Catalogue</button>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                                 {cardData ?
            //                                     <div className="catalogue-boxes">
            //                                         {this.handleCard(cardData)}
            //                                     </div>
            //                                     : cardData && cardData.length > 0 && <div className="loading-text">...loading</div>
            //                                 }
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <PreviewDashboardPopup ref={this.previewDashboardPopupRef} />
            // </div>
            <> Sec Catalogue</>
        )
    }
}