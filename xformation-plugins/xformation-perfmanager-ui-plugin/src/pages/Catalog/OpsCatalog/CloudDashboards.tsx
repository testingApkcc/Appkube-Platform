import React from 'react';
import previewDashboardIcon from '../../../img/preview-dashboard-icon.png';
import libraryIcon from '../../../img/library-icon.png';
// import previewDashboard from '../../../img/preview-dashboard.png';
import { PreviewDashboardPopup } from './PreviewDashboardPopup';
import { Filter } from './../filter';

export class CloudDashboards extends React.Component<any, any>{
    previewDashboardPopupRef: any;
    constructor(props: any) {
        super(props)
        this.state = {
            dashboards: this.props.data || [],
            view: 'grid',
            images: [{ name: "graph", imgUrl: 'https://image.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg', id: 101 },
            { name: "flow Chart", imgUrl: "https://media.istockphoto.com/vectors/graphs-vector-id873960850?k=20&m=873960850&s=612x612&w=0&h=v2qLecko35u5eee3o-GNy5aza0kZFfxr6uLbjEm3pNQ=", id: 102 },
            { name: "linear", imgUrl: 'https://media.istockphoto.com/vectors/collection-of-infographics-isolated-illustration-vector-id1168529930?s=170667a', id: 103 },
            { name: "image", imgUrl: 'https://image.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg', id: 104 },
            { name: "flow Chart", imgUrl: "https://media.istockphoto.com/vectors/graphs-vector-id873960850?k=20&m=873960850&s=612x612&w=0&h=v2qLecko35u5eee3o-GNy5aza0kZFfxr6uLbjEm3pNQ=", id: 105 },
            { name: "image", imgUrl: 'https://image.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg', id: 106 },
            { name: "flow Chart", imgUrl: "https://media.istockphoto.com/vectors/graphs-vector-id873960850?k=20&m=873960850&s=612x612&w=0&h=v2qLecko35u5eee3o-GNy5aza0kZFfxr6uLbjEm3pNQ=", id: 107 },
            ],
            filterData: [
                {
                    name: "Associated DataSource Type",
                    key: "associatedDataSourceType",
                    filter: [],
                },
                {
                    name: "Associated DataType",
                    key: "associatedDataType",
                    filter: [],
                },
                // {
                //     name: "Associated Cloud ElementType",
                //     key: "associatedCloudElementType",
                //     filter: [],
                // },
                {
                    name: "Associated SLAType",
                    key: "associatedSLAType",
                    filter: [],
                },
            ]
        }
        this.previewDashboardPopupRef = React.createRef();
    }

    componentDidMount() {
        let { dashboards, images } = this.state;
        this.createFilterJson();
        let image = ''
        if (dashboards.length > 0) {
            for (let i = 0; i < dashboards.length; i++) {
                if (images[i]) {
                    image = images[i].imgUrl;
                    dashboards[i]["imgUrl"] = image;
                }
                else {
                    dashboards[i]["imgUrl"] = " https://image.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg"
                }
            }
            this.setState({ dashboards });
            // console.log(dashboards);
        }
        this.createFilterJson();
    }

    createFilterJson = () => {
        let { dashboards, filterData } = this.state;
        const filterKeys = ['associatedDataSourceType', 'associatedDataType', 'associatedSLAType'];
        const filteredData: any = {};
        for (let i = 0; i < dashboards.length; i++) {
            let dashboard = dashboards[i];
            for (let j = 0; j < filterKeys.length; j++) {
                const filter = filterKeys[j];
                filteredData[filter] = filteredData[filter] || [];
                if (filteredData[filter].indexOf(dashboard[filter]) === -1) {
                    filteredData[filter].push(dashboard[filter]);
                }
            }
        }
        if (filterKeys && filterData && filterData.length > 0 && filterKeys.length > 0) {
            for (let i = 0; i < filterData.length; i++) {
                for (let k = 0; k < filterKeys.length; k++) {
                    const filter = filterKeys[k];
                    for (let j = 0; j < filteredData[filter].length; j++) {
                        let filters = filteredData[filter][j]
                        if (filterData[i].key == filter) {
                            filterData[i].filter.push({ value: filters, label: filters });
                        }
                    }
                }
            }
        }
        this.setState({
            filterData
        })
    }


    onClickPreviewDashboard = () => {
        this.previewDashboardPopupRef.current.setLink('');
        this.previewDashboardPopupRef.current.toggle();
    };

    renderDashboardsList = (dashboards: any) => {
        let retData = []
        if (dashboards && dashboards.length > 0) {
            retData = [];
            for (let i = 0; i < dashboards.length; i++) {
                const { id, name, description, imgUrl } = dashboards[i]
                retData.push(
                    <>
                        <div className={`blog-list-item box`} key={id}>
                            <div className="module-card-content">
                                <div className="row">
                                    <div className="col-md-1 col-sm-12 p-r-0">
                                        <img height='100px' width='100px' src={imgUrl} alt={name} />
                                    </div>
                                    <div className="col-md-11 col-sm-12">
                                        <h3 className="title is-block">{name}</h3>
                                        <p className="subtitle is-block">{description}</p>
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
                                    <a onClick={this.onClickPreviewDashboard}>
                                        <img src={previewDashboardIcon} alt="" />
                                        {`Preview Dashboard`}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        }
        else {
            retData = [];
            retData.push(<div>No Data Found</div>)
        }
        return retData
    }

    renderDashboardsGrid = (dashboards: any) => {
        let retData = []
        if (dashboards && dashboards.length > 0) {
            retData = [];
            for (let i = 0; i < dashboards.length; i++) {
                const { name, description, imgUrl } = dashboards[i];
                retData.push(
                    <div className={`box blog-grid-item`} key={i}>
                        <div className="module-card-content">
                            <div className="image">
                                <img src={imgUrl} alt={name} />
                            </div>
                            <h3 className="title is-block">{name}</h3>
                            <p className="subtitle is-block">{description}</p>
                            <div className="library-icon">
                                <a>
                                    {`Add Catalog To library`}
                                </a>
                            </div>
                            <div className="preview-dashboard-icon">
                                <a onClick={this.onClickPreviewDashboard}>
                                    {`Preview Dashboard`}
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        else {
            retData = [];
            retData.push(<div>No Data Found</div>)
        }
        return retData
    }

    dashboardsView = (type: any) => {
        this.setState({ view: type })
    }

    render() {
        const { dashboards, images, view, filterData } = this.state;
        return (
            <div className="catalogue-inner-tabs-container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
                        <Filter filterJsonData={filterData} />
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
                                        <div className="btnContainer">
                                            <button className={view == 'grid' ? "btn btn-grid btn-active" : "btn btn-grid"} onClick={() => this.dashboardsView('grid')}><i className="fa fa-th-large"></i></button>
                                            <button className={view == 'list' ? "btn btn-list btn-active" : "btn btn-list"} onClick={() => this.dashboardsView('list')}><i className="fa fa-list"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {view === 'grid' ?
                                <div className="catalogue-boxes grid">
                                    {this.renderDashboardsGrid(dashboards)}
                                </div>
                                :
                                <div className="catalogue-boxes list">
                                    {this.renderDashboardsList(dashboards)}
                                </div>
                            }
                        </div>

                    </div>
                </div>
                <PreviewDashboardPopup ref={this.previewDashboardPopupRef} images={images} />
            </div>
        )
    }
}