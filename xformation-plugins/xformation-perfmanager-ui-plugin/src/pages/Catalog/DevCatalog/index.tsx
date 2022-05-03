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
export class DevCatalog extends React.Component<any, any>{
    // breadCrumbs: any;
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
        }
    }

    async componentDidMount() {
    }

    handleLowerMenu = (inx: any) => {
        // let { navHandle } = this.state
        // navHandle.lowerKey = inx;
        // this.setState({ navHandle });
    }

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
        const { catalogData, navHandle } = this.props;
        return (
            <>
                {catalogData && navHandle &&
                    <ul>
                        {Object.keys(catalogData[navHandle.topKey]).map((cat: any, inx: any) => <li key={inx}
                            className={navHandle.lowerKey === inx ? 'active' : ''}
                            onClick={(e) => this.handleLowerMenu(inx)}>{cat}</li>)}
                    </ul>
                }
            </>
        )
    }
}