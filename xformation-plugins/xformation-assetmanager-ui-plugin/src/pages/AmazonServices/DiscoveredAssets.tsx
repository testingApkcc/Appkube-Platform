import * as React from 'react';
import { images } from '../../img';
import { Collapse } from 'reactstrap';
import _dummyData from './_discovered_assets';
// import { RestService } from '../_service/RestService';
// import { config } from '../../config';
// import { PLUGIN_BASE_URL } from '../../constants';
// import { Link } from 'react-router-dom';
export class DiscoveredAssets extends React.Component<any, any>{
  CreateNewOURef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      sideTable: [],
      tableData: _dummyData,
      servicesTable: {
        data: [],
        isDirectServices: false
      },
    };
  }

  getParameterByName = (name: any, url: any) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  getSideTable = (values: any) => {
    // this.setState({sideTable: values})
  }
  componentDidMount() {
    // const asset_id = this.getParameterByName("asset_id", window.location.href);
    // if (asset_id) {
    //     try {
    //         RestService.getData(`${config.GET_DISCOVERED_ASSETS}/${asset_id}`, null, null).then(
    //             (response: any) => {
    //                 console.log("Discovered assets: ", response);
    //                 this.setState({
    //                     tableData: response,
    //                 });
    //             }, (error: any) => {
    //                 console.log("Error: ", error);
    //             });
    //     } catch (err) {
    //         console.log("Error: ", err);
    //     }
    // } else {
    //     // alert("Asset id is not present");
    //     console.log('Asset id is not present');
    // }
  }

  displayTable = () => {
    // const { displaygetEnvironmentData } = this.state;
    const retData = [];
    const { tableData } = this.state;
    const length = tableData.length;
    for (let i = 0; i < length; i++) {
      const folder = tableData[i];
      retData.push(this.renderTree(folder, [i]));
    }
    return retData;
  }

  renderTree = (folder: any, indexArr: any): any => {
    // console.log(indexArr);
    const retData = [];
    const subFolders = folder.subData;
    const subFolderJSX = [];
    // const subRightFolderJSX = [];
    if (subFolders && folder.isOpened) {
      for (let j = 0; j < subFolders.length; j++) {
        const subFolder = subFolders[j];
        let subIndexArr: any = [];
        subIndexArr = [...indexArr, j];
        subFolderJSX.push(
          <>
            {(subFolder.subData == undefined) &&
              <div className="tbody">
                <div className="organisational-data-left">
                  <div className="tbody-inner">
                    <div className="tbody-td first">
                      <div className="caret-right" onClick={() => this.onClickRightTreeArr(j, indexArr)}></div>
                      {subFolder.title}
                    </div>
                  </div>
                </div>
              </div>
            }
            {subFolder.subData &&
              this.renderTree(subFolder, subIndexArr)
            }
          </>
        )
      }
    }
    retData.push(
      <div className="tbody">
        <div className="organisational-data-left">
          <div className="tbody-inner">
            <div className="tbody-td first">
              {!folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"} onClick={() => this.onClickOpenSubTreeArr([...indexArr])}></div>}
              {folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"} onClick={() => this.onClickOpenSubTreeArr([...indexArr])}></div>}
              {folder.title}
            </div>
          </div>
          <Collapse className="collapse-content" isOpen={folder.isOpened}>
            {subFolderJSX}
          </Collapse>
        </div>
      </div>
    );
    return retData;
  }

  onClickRightTreeArr = (index: any, indexArr: any) => {
    const { tableData } = this.state;
    const folder = this.findChild(tableData, [...indexArr]);
    if (folder.subData) {
      const services = folder.subData[index];
      this.setState({
        servicesTable: {
          data: services.list && services.list.length > 0 ? services.list : services.serviceSubData,
          isDirectServices: !!services.list
        }
      });
      folder.subData[index].isOpened = true
    }
  }

  onClickOpenSubTreeArr = (indexArr: any) => {
    const { tableData } = this.state;
    const folder = this.findChild(tableData, [...indexArr]);
    folder.isOpened = !folder.isOpened;
    this.setState({
      tableData
    });
  }

  findChild = (folderList: any, indexArr: any): any => {
    const index = indexArr.splice(0, 1)[0];
    if (indexArr.length === 0) {
      return folderList[index];
    } else {
      return this.findChild(folderList[index].subData, indexArr);
    }

  };

  renderRightPart = () => {
    const { servicesTable } = this.state;
    let retData: any = [];
    if (servicesTable.data && servicesTable.data.length > 0) {
      const tableHead = <div className="thead">
        <div className="name">
          Name
        </div>
        <div className="performance">
          Performance
        </div>
        <div className="availability">
          Availability
        </div>
        <div className="security">
          Security
        </div>
        <div className="data-protection">
          Data Protection
        </div>
        <div className="user-exp">
          User exp
        </div>
      </div>;
      if (servicesTable.isDirectServices) {
        const servicesListJSX =
          <div className="inner-table">{this.renderDirectServices(servicesTable.data)}</div>
        retData = <div className="data-table">
          {tableHead}
          {servicesListJSX}
        </div>
      } else {
        let serviceSubDataJSX = [];
        if (servicesTable.data) {
          serviceSubDataJSX = servicesTable.data.map((subService: any) => this.renderSubServices(subService));
        }
        retData = <div className="data-table">
          {tableHead}
          {serviceSubDataJSX}
        </div>
      }
      return retData;
    }
  };

  renderDirectServices = (list: any) => {
    let retData = [];
    if (list) {
      retData = list.map((service: any) => {
        return (<div className="tbody">
          <div className="name">{service.title}</div>
          <div className="performance"><div className="status yellow"><i className="fa fa-check"></i></div></div>
          <div className="availability"><div className="status red"><i className="fa fa-check"></i></div></div>
          <div className="security"><div className="status orange"><i className="fa fa-check"></i></div></div>
          <div className="data-protection"><div className="status red"><i className="fa fa-check"></i></div></div>
          <div className="user-exp"><div className="status green"><i className="fa fa-check"></i></div></div>
        </div>);
      });
    }
    return retData;
  };

  renderSubServices = (service: any): any => {
    const retData = [];
    if (service) {
      retData.push(
        <div className="tbody">
          <div className="name">
            {service.title} <span> <i className="fa fa-angle-down"></i></span>
          </div>
        </div>
      );
      if (service.serviceSubData) {
        for (let i = 0; i < service.serviceSubData.length; i++) {
          retData.push(this.renderSubServices(service.serviceSubData[i]));
        }
      } else if (service.list) {
        retData.push(this.renderDirectServices(service.list));
      }
    }
    return retData;
  };

  render() {
    return (
      <>
        <div className="Filters-box">
          <p>Select and add Filters</p>
          <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
        </div>
        <div className="showing-export">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="showing-heading">
                {/* Showing results 81 of 81 */}
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="export-files">
                <span><i className="fa fa-sign-out"></i></span>
                <p>Export</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="search-box form-group">
                <input type="text" className="control-form" placeholder="Search" value="" /><button><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="organisational-details">
          <div className="container-inner">
            <div className="organisational-data-table">
              <div className="thead">
                <div className="thead-th organisational-heading"><span><img src={images.awsLogo} alt="" /></span></div>
                {/* <div className="thead-th">Organisational Unit</div>
                <div className="thead-th">Online Instance</div>
                <div className="thead-th">Status</div>
                <div className="thead-th">Action</div> */}
              </div>
              {this.displayTable()}
              {this.renderRightPart()}
            </div>
          </div>

        </div>
      </>
    );
  }
}