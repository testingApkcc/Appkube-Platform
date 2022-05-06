import React from 'react';
import previewDashboardIcon from '../../../img/preview-dashboard-icon.png';
import libraryIcon from '../../../img/library-icon.png';
// import previewDashboard from '../../../img/preview-dashboard.png';
import { PreviewDashboardPopup } from './PreviewDashboardPopup';
import { Filter } from './../filter';

export class DataSources extends React.Component<any, any>{
    previewDashboardPopupRef: any;
    constructor(props: any) {
        super(props)
        this.state = {
            dashboards: this.props.data || [],
            images: [{ name: "graph", imgUrl: 'https://image.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg', id: 101 },
            { name: "flow Chart", imgUrl: "https://media.istockphoto.com/vectors/graphs-vector-id873960850?k=20&m=873960850&s=612x612&w=0&h=v2qLecko35u5eee3o-GNy5aza0kZFfxr6uLbjEm3pNQ=", id: 102 },
            { name: "linear", imgUrl: 'https://media.istockphoto.com/vectors/collection-of-infographics-isolated-illustration-vector-id1168529930?s=170667a', id: 103 },
            { name: "image", imgUrl: 'https://image.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg', id: 104 },
            { name: "flow Chart", imgUrl: "https://media.istockphoto.com/vectors/graphs-vector-id873960850?k=20&m=873960850&s=612x612&w=0&h=v2qLecko35u5eee3o-GNy5aza0kZFfxr6uLbjEm3pNQ=", id: 105 },
            { name: "image", imgUrl: 'https://image.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg', id: 106 },
            { name: "flow Chart", imgUrl: "https://media.istockphoto.com/vectors/graphs-vector-id873960850?k=20&m=873960850&s=612x612&w=0&h=v2qLecko35u5eee3o-GNy5aza0kZFfxr6uLbjEm3pNQ=", id: 107 },
            ]
        }
        this.previewDashboardPopupRef = React.createRef();
    }
    componentDidMount() {
        let { dashboards, images } = this.state;
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
            this.setState({ dashboards })
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
            this.setState({
                dashboards: this.props.data
            });
        }
    }

    onClickPreviewDashboard = () => {
        this.previewDashboardPopupRef.current.setLink('');
        this.previewDashboardPopupRef.current.toggle();
    };

    renderDashboards = (dashboards: any) => {
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
    render() {
        const { dashboards, images } = this.state;
        return (
            <div className="catalogue-inner-tabs-container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
                        <Filter />
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
                                {this.renderDashboards(dashboards)}
                            </div>
                        </div>
                        <div className="catalogue-right-container">
                            <div>
                                Select a template to start with. You can use filters or the seach box the scope.
                            </div>
                            <div className="templated-search">
                                <div className="row">
                                    <div className="col-sm-10">
                                        <div className="search-box">
                                            <button className="search-button"><i className="fa fa-search"></i></button>
                                            <input type="text" placeholder="Search Template here" className="input" />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="btnContainer">
                                            <button className="btn btn-grid btn-active"><i className="fa fa-th-large"></i></button>
                                            <button className="btn btn-list"><i className="fa fa-list"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PreviewDashboardPopup ref={this.previewDashboardPopupRef} images={images} />
            </div>
        )
    }
}