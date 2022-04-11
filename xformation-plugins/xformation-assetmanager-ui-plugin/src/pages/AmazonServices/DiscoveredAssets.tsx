import * as React from 'react';
import { images } from '../../img';
import { Collapse } from 'reactstrap';
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
      tableData: [
        {
          title: 'VPC 1', unit: '', instance: 'N/A',
          status: true,
          isOpened: false,
          subData: [
            {
              title: 'Cluster 1', unit: '', instance: 'N/A', status: true, isOpened: false,
              subData: [
                {
                  title: 'App Services', unit: '', instance: 'N/A', status: true, isOpened: false,
                  serviceSubData: [
                    {
                      title: 'Common Services', unit: '', instance: 'N/A', status: true, isOpened: false,
                      list: [
                        { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                      ]
                    },
                    {
                      title: 'Business Services', unit: '', instance: 'N/A', status: true,
                      serviceSubData: [
                        {
                          title: 'EMS', unit: '', instance: 'N/A', status: true,
                          list: [
                            { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                          ]
                        },
                        {
                          title: 'Supply chain', unit: '', instance: 'N/A', status: true, list: [
                            { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                          ]
                        },
                        {
                          title: 'Procurment', unit: '', instance: 'N/A', status: true, list: [
                            { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  title: 'Data Services', unit: '', instance: 'N/A', status: true, isOpened: false,
                  list: [
                    { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                  ]
                },
              ]
            },
            {
              title: 'Cluster 2', unit: '', instance: 'N/A', status: true, isOpened: false,
              subData: [
                {
                  title: 'App Services', unit: '', instance: 'N/A', status: true, isOpened: false,
                  serviceSubData: [
                    {
                      title: 'Common Services', unit: '', instance: 'N/A', status: true,
                      list: [
                        { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                      ]
                    },
                    {
                      title: 'Business Services', unit: '', instance: 'N/A', status: true,
                      subData: [
                        {
                          title: 'EMS', unit: '', instance: 'N/A', status: true,
                          list: [
                            { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                          ]
                        },
                        {
                          title: 'Supply chain', unit: '', instance: 'N/A', status: true,
                          list: [
                            { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                          ]
                        },
                        {
                          title: 'Procurment', unit: '', instance: 'N/A', status: true,
                          list: [
                            { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  title: 'Data Services', unit: '', instance: 'N/A', status: true, isOpened: false,
                  list: [
                    { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                  ]
                },
              ]
            },
            {
              title: 'Cloud Manager Services', unit: '', instance: 'N/A', status: true, isOpened: false,
              subData: [
                {
                  title: 'App Services', unit: '', instance: 'N/A', status: true, isOpened: false,
                  list: [
                    { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                    { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                  ]
                },
                {
                  title: 'Data Services', unit: '', instance: 'N/A', status: true, isOpened: false,
                  serviceSubData: [
                    {
                      title: 'Common Services', unit: '', instance: 'N/A', status: true, isOpened: false,
                      list: [
                        { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                        { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                      ]
                    },
                    {
                      title: 'Business Services', unit: '', instance: 'N/A', status: true, isOpened: false,
                      serviceSubData: [
                        {
                          title: 'EMS', unit: '', instance: 'N/A', status: true,
                          list: [
                            { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                          ]
                        },
                        {
                          title: 'Supply chain', unit: '', instance: 'N/A', status: true,
                          list: [
                            { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                          ]
                        },
                        {
                          title: 'Procurment', unit: '', instance: 'N/A', status: true,
                          list: [
                            { title: 'Search', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Security/RBAC', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Preference/Config', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'DataFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Catalogue', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'WorkFlow', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Alert', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 },
                            { title: 'Atate Machine', performance: 80, availibility: 80, security: 80, data_protection: 90, user_exp: 85 }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
          ]
        }
      ],
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
    const subRightFolderJSX = [];
    if (subFolders != undefined && folder.isOpened !== false) {
      for (let j = 0; j < subFolders.length; j++) {
        const subFolder = subFolders[j];
        if (subFolder.subData && subFolder.subData.length > 0) {
          for (let k = 0; k < subFolder.subData.length; k++) {
            if (subFolder.subData[k].isOpened == true) {
              subRightFolderJSX.push(
                <div className="thead-th">Organisational Unit</div>
              )
            }
          }
        }
        let subIndexArr: any = [];
        subIndexArr = [...indexArr, j];
        subFolderJSX.push(
          <>
            {(subFolder.subData == undefined) &&
              <div className="tbody">
                <div className="" style={{ float: 'left', width: '25%' }}>
                  <div className="tbody-inner">
                    <div className="tbody-td first">
                      <div className="caret-right" onClick={() => this.onClickRightTreeArr(j, indexArr)}></div>
                      {subFolder.title}
                    </div>
                  </div>
                </div>
                <div className="" style={{ float: 'left', width: '75%' }}>
                  {subRightFolderJSX}
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
        <div className="" style={{ float: 'left', width: '25%' }}>
          <div className="tbody-inner">
            <div className="tbody-td first">
              {!folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"} onClick={() => this.onClickOpenSubTreeArr([...indexArr])}></div>}
              {folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"} onClick={() => this.onClickOpenSubTreeArr([...indexArr])}></div>}
              {folder.title}

              {/* <div className="tbody-td first">{folder.title}</div> */}
              {/* <Link to={`${PLUGIN_BASE_URL}/storage-details?cloud=${folder.type}&type=${folder.title}&accountId=${folder.accountId}&tenantId=${folder.tenantId}`}>{folder.title}</Link> */}
            </div>
            {/* <div className="tbody-td">{folder.organizationalUnit}</div>
          <div className="tbody-td">{folder.instance}</div>
          <div className="tbody-td">
            <div className={folder.status ? "status-icon enable" : "status-icon disable"}></div>
          </div>
          <div className="tbody-td">
            <div className="d-flex">
              <button className="btn btn-link" id="PopoverFocus">
                <i className="fa fa-ellipsis-h"></i>
              </button>
            </div>
          </div> */}
          </div>
          <Collapse className="collapse-content" isOpen={folder.isOpened}>
            {subFolderJSX}
          </Collapse>
        </div>
        <div className="" style={{ float: 'left', width: '75%' }}>
          {subRightFolderJSX}
        </div>
      </div>
    );
    return retData;
  }

  onClickRightTreeArr = (index: any, indexArr: any) => {
    const { tableData } = this.state;
    const folder = this.findChild(tableData, [...indexArr]);
    if (folder.subData) {
      folder.subData[index].isOpened = true
    }
    this.setState({
      tableData
    });
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
            </div>
          </div>

        </div>
      </>
    );
  }
}