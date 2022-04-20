import * as React from 'react';
import { images } from '../../img';
import { Collapse } from 'reactstrap';
import _dummyData from './_discovered_assets';
// import { RestService } from '../_service/RestService';
// import { config } from '../../config';
// import { PLUGIN_BASE_URL } from '../../constants';
// import { Link } from 'react-router-dom';

const TREE_PADDING = 15;
export class DiscoveredAssets extends React.Component<any, any>{
  CreateNewOURef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      sideTable: [],
      tableData: _dummyData,
      labelText: '',
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
    const retData = [];
    const subFolders = folder.subData;
    const subFolderJSX = [];
    if (subFolders && folder.isOpened) {
      for (let j = 0; j < subFolders.length; j++) {
        const subFolder = subFolders[j];
        let subIndexArr: any = [];
        subIndexArr = [...indexArr, j];
        subFolderJSX.push(
          <>
            {(subFolder.subData == undefined) &&
              <div className="tbody">
                <div className="tbody-inner">
                  <div className="tbody-td first" onClick={() => this.onClickRightTreeArr(j, indexArr)}>
                    <div className="caret-right"></div>
                    {subFolder.title}
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
        <div className="tbody-inner">
          <div className="tbody-td first" onClick={() => this.onClickOpenSubTreeArr([...indexArr])}>
            {!folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"}></div>}
            {folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"}></div>}
            {folder.title}
          </div>
          {
            folder.isMain &&
            <>
              <div className="tbody-td">2</div>
              <div className="tbody-td">3</div>
              <div className="tbody-td">5</div>
              <div className="tbody-td">
                <div className="d-block text-center action-edit">
                  <button className="asset-white-button min-width-inherit m-r-0">
                    <a className="fa fa-ellipsis-h"></a>
                  </button>
                </div>
              </div>
            </>
          }
        </div>
        <Collapse className="collapse-content" isOpen={folder.isOpened}>
          {subFolderJSX}
        </Collapse>
      </div>
    );
    return retData;
  }

  onClickRightTreeArr = (index: any, indexArr: any) => {
    let text = '';
    const { tableData } = this.state;
    for (let i = 0; i < tableData.length; i++) {
      if (i == indexArr[0]) {
        text = tableData[i].title;
        if (tableData[i].subData) {
          for (let j = 0; j < tableData[i].subData.length; j++) {
            if (j === indexArr[1]) {
              text = text + '>' + tableData[i].subData[j].title;
            }
          }
        }
      }
    }
    const folder = this.findChild(tableData, [...indexArr]);
    if (folder.subData) {
      const services = folder.subData[index];
      this.setState({
        servicesTable: {
          data: services.list && services.list.length > 0 ? services.list : services.serviceSubData,
          isDirectServices: !!services.list
        }
      });
      if (folder.subData) {
        text = text + '>' + folder.subData[index].title;
      }
      folder.subData[index].isOpened = true;
      this.setState({ labelText: text });
    }
  }

  onClickOpenSubTreeArr = (indexArr: any) => {
    const { tableData } = this.state;
    const folder = this.findChild(tableData, [...indexArr]);
    folder.isOpened = !folder.isOpened;
    if (folder.isOpened === false) {
      this.setState({
        servicesTable: {},
      })
    }
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
          <>{this.renderDirectServices(servicesTable.data, 1)}</>
        retData = <div className="data-table">
          {tableHead}
          {servicesListJSX}
        </div>
      } else {
        let serviceSubDataJSX = [];
        if (servicesTable.data) {
          serviceSubDataJSX = servicesTable.data.map((subService: any, index: any) => this.renderSubServices(subService, [index]));
        }
        retData = <div className="data-table">
          {tableHead}
          {serviceSubDataJSX}
        </div>
      }
      return retData;
    }
  };

  renderDirectServices = (list: any, level: any) => {
    let retData = [];
    if (list) {
      retData = list.map((service: any) => {
        return (<div className="tbody">
          <div className="service-name" style={{ paddingLeft: `${(20 * level) + TREE_PADDING}px` }}>{service.title}</div>
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

  renderSubServices = (service: any, indexArr: any): any => {
    const retData = [];
    if (service) {
      retData.push(
        <div className="tbody" onClick={() => this.toggleChildren(indexArr)}>
          <div className="name" style={{ paddingLeft: `${((indexArr.length - 1) * 15 + TREE_PADDING)}px` }}>
            {service.title} <span><i className="fa fa-angle-down"></i></span>
          </div>
        </div>
      );
      if (service.serviceSubData && service.isOpened == true) {
        for (let i = 0; i < service.serviceSubData.length; i++) {
          retData.push(this.renderSubServices(service.serviceSubData[i], [...indexArr, i]))
        }
      } else if (service.list && service.isOpened == true) {
        retData.push(this.renderDirectServices(service.list, indexArr.length));
      }
    }
    return retData;
  };

  toggleChildren = (indexArr: any) => {
    const { servicesTable } = this.state;
    const length = indexArr.length;
    let treeData = servicesTable.data;
    for (let i = 0; i < length; i++) {
      const index = indexArr.splice(0, 1)[0];
      for (let j = 0; j < treeData.length; j++) {
        if (j === index) {
          if (indexArr.length === 0) {
            treeData[index].isOpened = !treeData[index].isOpened;
          } else {
            treeData = treeData[index].serviceSubData;
          }
        } else {
          treeData[j].isOpened = false;
        }
      }
    }
    this.setState({ servicesTable: servicesTable })
  }

  render() {
    const { labelText } = this.state;
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
              <div className={this.state.servicesTable.data && this.state.servicesTable.data.length > 0 ? "organisational-data-table-left" : ""}>
                <div className="thead">
                  <div className="thead-th organisational-heading"><span><img src={images.awsLogo} alt="" /></span> AWS</div>
                  <div className="thead-th">Products</div>
                  <div className="thead-th">App Services</div>
                  <div className="thead-th">Data Services</div>
                  <div className="thead-th">Action</div>
                </div>
                {this.displayTable()}
              </div>
              <div className={this.state.servicesTable.data && this.state.servicesTable.data.length > 0 ? "organisational-data-table-right" : ""}>
                <div className="right-part-filters">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="filters-breadcrumbs">
                        <ul>
                          <li>{labelText}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="filters-buttons">
                        <button className="asset-white-button min-width-inherit">
                          <i className="fa fa-plus"></i> Add
                        </button>
                        <button className="asset-white-button min-width-inherit">
                          <i className="fa fa-refresh"></i> Refresh
                        </button>
                        <button className="asset-white-button min-width-inherit m-r-0">
                          <i className="fa fa-trash"></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="filters-search">
                        <label>Filter by deployment name</label>
                        <div className="form-group">
                          <input type="text" className="control-form" placeholder="Enter the full deployment name" value="" />
                          <button><i className="fa fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="filters-search">
                        <label>Filter by App</label>
                        <div className="form-group">
                          <input type="text" className="control-form" placeholder="foo-bar,key!=value" value="" />
                          <button><i className="fa fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="filters-search">
                        <label>Filter by SLA</label>
                        <div className="form-group">
                          <input type="text" className="control-form" placeholder="All SLA" value="" />
                          <button><i className="fa fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {this.renderRightPart()}
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}