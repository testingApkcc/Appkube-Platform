import React from 'react';
import previewDashboardIcon from '../../../img/preview-dashboard-icon.png';
import libraryIcon from '../../../img/library-icon.png';
// import previewDashboard from '../../../img/preview-dashboard.png';
import { PreviewDashboardPopup } from './PreviewDashboardPopup';
import { Filter } from './../filter';

export class CloudDashboards extends React.Component<any, any>{
    previewDashboardPopupRef: any;
    backupUrl = 'https://image.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg';
    constructor(props: any) {
        super(props)
        this.state = {
            dashboards: this.props.data || [],
            view: 'grid',
            filterData: [
                {
                    name: "DataSource Type",
                    key: "associatedDataSourceType",
                    filter: [],
                },
                {
                    name: "Cloud",
                    key: "associatedCloud",
                    filter: [],
                },
                {
                    name: "DataType",
                    key: "associatedDataType",
                    filter: [],
                },
                {
                    name: "SLAType",
                    key: "associatedSLAType",
                    filter: [],
                },
            ],
            selectedFilter: {},
        }
        this.previewDashboardPopupRef = React.createRef();
    }

    componentDidMount() {
        this.createFilterJson();
    }

    createFilterJson = () => {
        let { dashboards, filterData } = this.state;
        const filterKeys = ['associatedDataSourceType', 'associatedCloud', 'associatedDataType', 'associatedSLAType'];
        const filteredData: any = {};
        for (let i = 0; i < dashboards.length; i++) {
            let dashboard = dashboards[i];
            for (let j = 0; j < filterKeys.length; j++) {
                const filter = filterKeys[j];
                filteredData[filter] = filteredData[filter] || [];
                if (filteredData[filter].indexOf(dashboard[filter].trim()) === -1) {
                    filteredData[filter].push(dashboard[filter].trim());
                }
            }
        }
        if (filterKeys && filterData && filterData.length > 0 && filterKeys.length > 0) {
            for (let i = 0; i < filterData.length; i++) {
                for (let k = 0; k < filterKeys.length; k++) {
                    const filter = filterKeys[k];
                    for (let j = 0; j < filteredData[filter].length; j++) {
                        let filters = filteredData[filter][j]
                        if (filterData[i].key == filter.trim() && filters) {
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

    onClickPreviewDashboard = (images: any) => {
        if (images && images.length > 0) {
            this.previewDashboardPopupRef.current.setSliderIndex(0)
            this.previewDashboardPopupRef.current.setImages(images);
            this.previewDashboardPopupRef.current.setLink('');
            this.previewDashboardPopupRef.current.toggle();
        } else {
            alert("No preview available");
        }
    };

    renderDashboardsView = (dashboards: any) => {
        const { view } = this.state;
        let retData = []
        if (dashboards && dashboards.length > 0) {
            retData = [];
            for (let i = 0; i < dashboards.length; i++) {
                const { id, name, description, images, associatedDataSourceType, associatedDataType, associatedSLAType, associatedCloud } = dashboards[i];
                if (this.hideDashboard(associatedDataSourceType, associatedDataType, associatedSLAType, associatedCloud)) {
                    retData.push(
                        <>
                            <div className={view === 'list' ? `blog-list-item box` : `box blog-grid-item`} key={id}>
                                {view === 'list' ?
                                    <>
                                        <div className="module-card-content">
                                            <div className="row">
                                                <div className="col-md-1 col-sm-12 p-r-0">
                                                    <img height='100px' width='100px' src={images && images.length > 0 ? images[0] : this.backupUrl} alt={name} />
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
                                                <a onClick={() => this.onClickPreviewDashboard(images)}>
                                                    <img src={previewDashboardIcon} alt="" />
                                                    {`Preview Dashboard`}
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="module-card-content">
                                            <div className="image">
                                                <img src={images && images.length > 0 ? images[0] : this.backupUrl} alt={name} />
                                            </div>
                                            <h3 className="title is-block">{name}</h3>
                                            <p className="subtitle is-block">{description}</p>
                                            <div className="library-icon">
                                                <a>
                                                    {`Add Catalog To library`}
                                                </a>
                                            </div>
                                            <div className="preview-dashboard-icon">
                                                <a onClick={() => this.onClickPreviewDashboard(images)}>
                                                    {`Preview Dashboard`}
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </>
                    );
                }
            }
            if (retData.length === 0) {
                retData.push(<div>No dashboard found for applied filter</div>)
            }
        }
        else {
            retData = [];
            retData.push(<div>No Data Found</div>)
        }
        return retData
    }

    hideDashboard = (associatedDataSourceType: any, associatedDataType: any, associatedSLAType: any, associatedCloud: any) => {
        const { selectedFilter } = this.state;
        const isAssociatedDatasourceType = !selectedFilter['associatedDataSourceType'] || (selectedFilter['associatedDataSourceType'] && selectedFilter['associatedDataSourceType'].indexOf(associatedDataSourceType) !== -1);
        const isAssociatedDataType = !selectedFilter['associatedDataType'] || (selectedFilter['associatedDataType'] && selectedFilter['associatedDataType'].indexOf(associatedDataType) !== -1);
        const isAssociatedSLAType = !selectedFilter['associatedSLAType'] || (selectedFilter['associatedSLAType'] && selectedFilter['associatedSLAType'].indexOf(associatedSLAType) !== -1);
        const isCloud = !selectedFilter['associatedCloud'] || (selectedFilter['associatedCloud'] && selectedFilter['associatedCloud'].indexOf(associatedCloud) !== -1);
        return isAssociatedDatasourceType && isAssociatedDataType && isAssociatedSLAType && isCloud;
    };

    dashboardsView = (type: any) => {
        this.setState({ view: type })
    }

    onChangeFilter = (filters: any) => {
        this.setState({
            selectedFilter: filters,
        });
    }

    render() {
        const { dashboards, view, filterData } = this.state;
        return (
            <div className="catalogue-inner-tabs-container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
                        <Filter filterJsonData={filterData} onChangeFilter={this.onChangeFilter} />
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
                            <div className={view === 'grid' ? "catalogue-boxes grid" : "catalogue-boxes list"}>
                                {this.renderDashboardsView(dashboards)}
                            </div>
                        </div>

                    </div>
                </div>
                <PreviewDashboardPopup ref={this.previewDashboardPopupRef} images={[]} />
            </div>
        )
    }
}