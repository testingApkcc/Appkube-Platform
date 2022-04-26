import React from "react";
import { Breadcrumbs } from '../Breadcrumbs';
import { TopMenu } from './TopMenu';
import previewDashboardIcon from '../../img/preview-dashboard-icon.png';
import libraryIcon from '../../img/library-icon.png';
import previewDashboard from '../../img/preview-dashboard.png';

export class CatalogueManagement extends React.Component<any, any>{
    breadCrumbs: any;
    constructor(props: any) {
        super(props)
        this.state = {
            catalogueManagement: [
                {
                    catalogue: "Dev Catalouge",
                    id: 1,
                    isSelect: true,
                    category: [
                        { name: "App Blocks", id: 1, isSelect: true },
                        { name: "Library/SDKs", id: 2, isSelect: false },
                        { name: "Build/ Deployment Templets", id: 3, isSelect: false },
                        { name: "ISV Solutions", id: 4, isSelect: false },
                        { name: "Data Flow", id: 5, isSelect: false },
                    ],
                },
                {
                    catalogue: "Sec Catalouge", id: 2, isSelect: false,
                    category: [
                        { name: "Compliance Rules", id: 1, isSelect: true },
                        { name: "Compliance Policies", id: 2, isSelect: false },
                        { name: "Compliance Auditors", id: 3, isSelect: false },
                        { name: "Code Security Templates", id: 4, isSelect: false },
                        { name: "Container Security Templates", id: 5, isSelect: false },
                        { name: "Data Security Templates", id: 6, isSelect: false },
                    ],
                },
                {
                    catalogue: "Ops Catalogue", id: 3, isSelect: false,
                    category: [
                        { name: "Cloud Dashboards", id: 1, isSelect: true },
                        { name: "Provisioning Templates", id: 2, isSelect: false },
                        { name: "Alert rules", id: 3, isSelect: false },
                        { name: "Work Flows", id: 4, isSelect: false },
                        { name: "Collectos Bots", id: 5, isSelect: false },
                        { name: "Diagnostics", id: 6, isSelect: false },
                    ],
                }
            ],
            cardData: [
                {
                    name: "Dashboard 1 AWS RDS", 
                    category: "green and roasted", 
                    id: 1,
                    extraData: {},
                    image: previewDashboard
                },
                {
                    name: "Dashboard 2 AWS RDS", 
                    category: "AWS VPN", 
                    id: 1,
                    extraData: {},
                    image: previewDashboard
                },
                {
                    name: "AWS VPC D1",
                    category: "AWS VPN", 
                    id: 1,
                    extraData: {},
                    image: previewDashboard
                },
                {
                    name: "NGINX Log D1", 
                    category: "NGINX Log", 
                    id: 1,
                    extraData: {},
                    image: previewDashboard
                },
                {
                    name: "Test C D1", 
                    category: "Test C", 
                    id: 1,
                    extraData: {},
                    image: previewDashboard
                },
                {
                    name: "Test two D2", 
                    category: "Test two", 
                    id: 1,
                    extraData: {},
                    image: previewDashboard
                },
                {
                    name: "Test two D1", 
                    category: "Test two", 
                    id: 1,
                    extraData: {},
                    image: previewDashboard
                },
                {
                    name: "Dashboard 3 AWS RDS", 
                    category: "AWS VPN", 
                    id: 1,
                    extraData: {},
                    image: previewDashboard
                }
            ],
            index: 0
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
    handleUpperMenu = (index: any) => {
        let { catalogueManagement } = this.state
        for (let i = 0; i < catalogueManagement.length; i++) {
            if (i === index) {
                catalogueManagement[i].isSelect = !catalogueManagement[i].isSelect;
            } else {
                catalogueManagement[i].isSelect = false
            }
        }
        this.setState({ index: index, catalogueManagement: catalogueManagement })
    }
    handleLowerMenu = (e: any, inx: any) => {

        let { catalogueManagement, index } = this.state
        for (let i = 0; i < catalogueManagement[index].category.length; i++) {
            if (i === inx) {
                catalogueManagement[index].category[i].isSelect = !catalogueManagement[index].category[i].isSelect;
            } else {
                catalogueManagement[index].category[i].isSelect = false
            }
        }
        this.setState({ catalogueManagement: catalogueManagement })
    }
    render() {
        const { catalogueManagement, index, cardData } = this.state;

        return (
            <div className="perfmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="CATALOGUE MANAGEMENT" />
                <div className="catalogue-management-container">
                    <div className="common-container">
                        <div className="catalogue-tabs">
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    {catalogueManagement && <ul>
                                        {catalogueManagement.map((cat: any, inx: any) => <li key={cat.id} onClick={() => this.handleUpperMenu(inx)} className={`${cat.isSelect === true ? 'active' : ''}`}>{cat.catalogue}</li>)}
                                    </ul>}
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <TopMenu />
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-tabs-container">
                            <div className="catalogue-inner-tabs">
                                {catalogueManagement && <ul>
                                    {catalogueManagement[index].category.map((cat: any, inx: any) => <li key={cat.id} className={`${cat.isSelect === true ? 'active' : ''}`} onClick={(e) => this.handleLowerMenu(e, inx)}>{cat.name}</li>)}
                                </ul>}
                            </div>
                            <div className="catalogue-inner-tabs-container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
                                        <div className="catalogue-filters">
                                            <div className="filter-search">
                                                <strong>Filters</strong>
                                                <div className="filter-input">
                                                    <input type="text" placeholder="Search" />
                                                    <button className=""><i className="fa fa-close"></i> Clear filter</button>
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
                                                    <li>
                                                        <input type="checkbox" id="5" name="Filter5" value="filter5" />
                                                        <label>Filter 5</label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="6" name="Filter6" value="filter6" />
                                                        <label>Filter 6</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-l-p">
                                        <div className="catalogue-right-container">
                                            <div className="heading">
                                                <div className="row">
                                                    <div className="col-md-9 col-sm-12">
                                                        <h3>Catalogue</h3>
                                                        <p>A catalogue is collection of dashboards</p>
                                                    </div>
                                                    <div className="col-md-3 col-sm-12">
                                                        <button className="create-btn">Add Catalogue</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="catalogue-boxes">
                                                {cardData && cardData.length > 0 ? cardData.map((card: any, index: any) => {
                                                    return (
                                                        <div key={card.id} className="blog-list-item box">
                                                            <div className="module-card-content">
                                                                <div className="row">
                                                                    <div className="col-md-1 col-sm-12 p-r-0">
                                                                        <img src={card.image} alt={card.name} />
                                                                    </div>
                                                                    <div className="col-md-11 col-sm-12">
                                                                        <h3 className="title is-block">{card.name}</h3>
                                                                        <p className="subtitle is-block">{card.category}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="module-card-footer">
                                                                <div className="module-card-footer-details">
                                                                    <a>
                                                                        <img src={libraryIcon} alt="" />
                                                                        {`Add Catalog To library`}
                                                                    </a>
                                                                </div>
                                                                <div className="module-card-footer-provider">
                                                                    <a>
                                                                        <img src={previewDashboardIcon} alt="" />
                                                                        {`Preview Dashboard`}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                    : <div className="loading-text">Loading....</div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}