// Libraries
import React from 'react';
import { locationService } from '@grafana/runtime';
import { UncontrolledPopover, PopoverBody, Collapse } from 'reactstrap';
import { backendSrv } from 'app/core/services/backend_srv';
import { getTagColorsFromName, Checkbox } from '@grafana/ui';
import { SortPicker } from 'app/core/components/Select/SortPicker';
import { TagFilter } from 'app/core/components/TagFilter/TagFilter';
import { FilterInput } from 'app/core/components/FilterInput/FilterInput';
import ViewNewView from './ViewNewView';
import { config } from '../../config';

export interface Props {
  $scope: any;
  $injector: any;
}

class AddNewView extends React.Component<any, any> {
  showStarredFilter: any;
  breadCrumbs: any = [
    {
      label: 'Home',
      route: `/`,
    },
    {
      label: 'Analytics',
      route: `/analytics`,
    },
    {
      label: 'Create View',
      isCurrentPage: true,
    },
  ];

  tagsPromiseResolve: any;
  viewRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      tabs: [
        {
          label: 'New Tab',
          isEdit: false,
          dashboardList: [],
        },
      ],
      folderArray: [],
      activeTab: 0,
      isPreviewEnabled: false,
      selectedDashboards: [],
      isStarred: false,
      filterData: [
        {
          isStarred: false,
          selectedTags: [],
          sortValue: 'alpha-asc',
          searchKey: '',
        },
      ],
      showView: false,
      viewName: '',
      description: '',
      id: '',
      editedData: [],
    };
    this.viewRef = React.createRef();
  }

  componentDidMount() {
    //Check if it is edit
    const { match } = this.props;
    if (match && match.params && match.params.id) {
      this.getDashData(match.params.id);
    } else {
      let viewData: any = localStorage.getItem('viewData');
      if (viewData) {
        viewData = JSON.parse(viewData);
        this.setState({
          viewName: viewData.viewName,
          description: viewData.description,
        });
      } else {
        locationService.push('/analytics');
        return;
      }
    }
    const sendData = {
      tags: [],
    };
    this.getSearchData(sendData, true);
  }

  getDashData = (id: any) => {
    let requestOptionsGet: any = {
      method: `GET`,
    };
    fetch(`${config.GET_ANALYTICS_VIEW}/${id}`, requestOptionsGet)
      .then((response) => response.json())
      .then((response: any) => {
        const { viewJson, name, description } = response;
        const tabs = this.checkEditedDashboards(JSON.parse(viewJson), this.state.folderArray);
        this.setState({
          viewName: name,
          description: description,
          editedData: JSON.parse(viewJson),
          id: id,
        });
        if (tabs) {
          this.setState({
            tabs,
          });
        }
      });

    // Delete it after api implementation
    let data: any = localStorage.getItem('dashboardList');
    if (data) {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          const { viewJson, name, description } = data[i];
          const tabs = this.checkEditedDashboards(viewJson, this.state.folderArray);
          this.setState({
            viewName: name,
            description: description,
            editedData: viewJson,
            id: id,
          });
          if (tabs) {
            this.setState({
              tabs,
            });
          }
          break;
        }
      }
    }
  };

  checkEditedDashboards = (viewJSON: any, folderArray: any) => {
    if (viewJSON && folderArray && viewJSON.length > 0 && folderArray.length > 0) {
      viewJSON = JSON.parse(JSON.stringify(viewJSON));
      const tabs: any = [];
      for (let i = 0; i < viewJSON.length; i++) {
        const tab = viewJSON[i];
        const { dashboards, label } = tab;
        const folderList = JSON.parse(JSON.stringify(folderArray));
        const dashboardsUids = dashboards.map((dashboard: any) => dashboard.uid);
        folderList.forEach((folder: any) => {
          folder.subData.forEach((dashboard: any) => {
            if (dashboardsUids.indexOf(dashboard.uid) !== -1) {
              dashboard.checkValue = true;
            }
          });
        });
        tabs.push({
          dashboardList: folderList,
          label,
        });
      }
      return tabs;
    }
  };

  getSearchData = (data: any, isFirstTime: any) => {
    backendSrv.search(data).then((result: any) => {
      const retData = this.manipulateData(result, isFirstTime);
      let { tabs, activeTab } = this.state;
      if (tabs[activeTab]) {
        tabs[activeTab].dashboardList = JSON.parse(JSON.stringify(retData));
      }
      if (isFirstTime) {
        this.setState({
          folderArray: JSON.parse(JSON.stringify(retData)),
        });
        let result = this.checkEditedDashboards(this.state.editedData, retData);
        if (result) {
          tabs = result;
        }
      }
      this.setState({
        tabs,
      });
    });
  };

  manipulateData(result: any, isFirstTime: any) {
    const retData: any = {};
    let tagList = [];
    for (let i = 0; i < result.length; i++) {
      const dash = result[i];
      if (dash.type === 'dash-db') {
        retData[dash.folderId] = retData[dash.folderId] || {
          subData: [],
          openSubFolder: false,
          checkValueStatus: false,
          id: dash.folderId,
        };
        if (dash.folderTitle) {
          retData[dash.folderId].title = dash.folderTitle;
        } else {
          retData[dash.folderId].title = 'General';
        }
        retData[dash.folderId].subData.push({
          ...dash,
          title: dash.title,
          checkValue: false,
        });
      }
      if (dash.tags.length > 0 && isFirstTime) {
        for (let i = 0; i < dash.tags.length; i++) {
          let row = dash.tags[i];
          tagList.push({
            term: row,
            count: i + 1,
          });
        }
      }
    }
    let keys: any = Object.keys(retData);
    let folders: any = [];
    for (let i = 0; i < keys.length; i++) {
      folders.push(retData[keys[i]]);
    }
    isFirstTime && this.tagsPromiseResolve && this.tagsPromiseResolve(tagList);
    return folders;
  }

  editTabTitle = (index: any) => {
    const { tabs } = this.state;
    for (let i = 0; i < tabs.length; i++) {
      if (i === index) {
        tabs[i].isEdit = true;
      }
    }
    this.setState({
      tabs,
    });
  };

  handleStateChange = (e: any, index: any) => {
    const { tabs } = this.state;
    const { value } = e.target;
    for (let i = 0; i < tabs.length; i++) {
      if (i === index) {
        tabs[i].label = value;
      }
    }
    this.setState({
      tabs,
    });
  };

  displayTabs = () => {
    const { tabs, activeTab } = this.state;
    const retData = [];
    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i];
      retData.push(
        <li key={`tab-${i}`} className={`nav-item `}>
          <a className={i === activeTab ? 'nav-link active' : 'nav-link'}>
            {!tab.isEdit && <span onClick={(e) => this.navigateTab(i)}>{tab.label}</span>}
            {!tab.isEdit && <i className="fa fa-angle-down" id={`PopoverFocus-${i}`}></i>}
            {tab.isEdit && (
              <input
                type="text"
                className="form-control tab-edit"
                value={tab.label}
                name="title"
                onChange={(e) => this.handleStateChange(e, i)}
                onBlur={() => this.onFocusOutTitle(i)}
              />
            )}
          </a>
          {!tab.isEdit && (
            <UncontrolledPopover trigger="legacy" className="popup-btn" placement="bottom" target={`PopoverFocus-${i}`}>
              <PopoverBody>
                <ul>
                  <li onClick={() => this.editTabTitle(i)}>
                    <a>
                      <i className="fa fa-edit"></i>
                      Rename Tab
                    </a>
                  </li>
                  {i !== tabs.length - 1 && (
                    <li onClick={() => this.moveArrayPosition(i, i + 1)}>
                      <a>
                        <i className="fa fa-caret-right"></i>
                        Move Right
                      </a>
                    </li>
                  )}
                  {i !== 0 && (
                    <li onClick={() => this.moveArrayPosition(i, i - 1)}>
                      <a>
                        <i className="fa fa-caret-left"></i>
                        Move Left
                      </a>
                    </li>
                  )}
                  {tabs.length !== 1 && (
                    <li onClick={() => this.deleteTabData(i)}>
                      <a>
                        <i className="fa fa-trash"></i>
                        Delete
                      </a>
                    </li>
                  )}
                </ul>
              </PopoverBody>
            </UncontrolledPopover>
          )}
        </li>
      );
    }
    return retData;
  };

  moveArrayPosition = (fromIndex: any, toIndex: any) => {
    const { tabs } = this.state;
    var element = tabs[fromIndex];
    tabs.splice(fromIndex, 1);
    tabs.splice(toIndex, 0, element);
    this.setState({
      tabs,
    });
  };

  onFocusOutTitle = (index: any) => {
    const { tabs } = this.state;
    for (let i = 0; i < tabs.length; i++) {
      if (i === index) {
        tabs[i].isEdit = false;
      }
    }
    this.setState({
      tabs,
    });
  };

  deleteTabData = (index: any) => {
    const { tabs, filterData, selectedDashboards } = this.state;
    tabs.splice(index, 1);
    filterData.splice(index, 1);
    selectedDashboards.splice(index, 1);
    this.setState({
      tabs,
      filterData,
      activeTab: tabs.length - 1,
    });
  };

  navigateTab(index: any) {
    this.setState({
      activeTab: index,
    });
  }

  addTab = () => {
    const { tabs, folderArray, filterData, selectedDashboards } = this.state;
    const length = tabs.length;
    selectedDashboards.push([]);
    tabs.push({
      label: 'New Tab' + ' ' + (length + 1),
      isEdit: false,
      dashboardList: JSON.parse(JSON.stringify(folderArray)),
    });
    filterData.push({
      isStarred: false,
      selectedTags: [],
      sortValue: 'alpha-asc',
      searchKey: '',
    });
    this.setState({
      tabs,
      activeTab: length,
      isPreviewEnabled: false,
      selectedDashboards,
    });
  };

  onClickChildCheckbox = (parentIndex: any, childIndex: any) => {
    let countCheckedCheckbox = 0;
    const { tabs, activeTab } = this.state;
    if (tabs[activeTab]) {
      const dashboardList = tabs[activeTab].dashboardList;
      const parentCheckbox = dashboardList[parentIndex];
      parentCheckbox.subData[childIndex].checkValue = !parentCheckbox.subData[childIndex].checkValue;
      for (let j = 0; j < parentCheckbox.subData.length; j++) {
        if (parentCheckbox.subData[j].checkValue === true) {
          countCheckedCheckbox++;
        } else {
          countCheckedCheckbox--;
        }
      }
      parentCheckbox.checkValueStatus = countCheckedCheckbox === parentCheckbox.subData.length;
      this.checkForEnabled(tabs);
      this.setState({
        tabs,
      });
    }
  };

  onClickOpenSubFolder = (index: any) => {
    const { tabs, activeTab } = this.state;
    if (tabs[activeTab]) {
      const dashboardList = tabs[activeTab].dashboardList;
      dashboardList[index].openSubFolder = !dashboardList[index].openSubFolder;
      this.setState({
        tabs,
      });
    }
  };

  onChangeParentCheckbox = (e: any, index: any) => {
    const { tabs, activeTab } = this.state;
    if (tabs[activeTab]) {
      const dashboardList = tabs[activeTab].dashboardList;
      const parentCheckbox = dashboardList[index];
      const checked = e.target.checked;
      for (let j = 0; j < parentCheckbox.subData.length; j++) {
        parentCheckbox.subData[j].checkValue = checked;
        parentCheckbox.checkValueStatus = checked;
      }
      this.checkForEnabled(tabs);
      this.setState({
        tabs,
      });
    }
  };

  checkForEnabled = (tabs: any) => {
    let isPreviewEnabled = true;
    let selectedDashboards = [];
    for (let i = 0; i < tabs.length; i++) {
      const dashboardList = tabs[i].dashboardList;
      let isAnyDashboardSelected = false;
      let selectedDashboardsForTab = [];
      for (let j = 0; j < dashboardList.length; j++) {
        const subData = dashboardList[j].subData;
        for (let k = 0; k < subData.length; k++) {
          if (subData[k].checkValue) {
            isAnyDashboardSelected = true;
            selectedDashboardsForTab.push(subData[k].title);
          }
        }
      }
      isPreviewEnabled = isPreviewEnabled && isAnyDashboardSelected;
      selectedDashboards.push(selectedDashboardsForTab);
    }
    this.setState({
      isPreviewEnabled,
      selectedDashboards,
    });
  };

  renderDashboardTree = () => {
    const retData = [];
    const { tabs, activeTab } = this.state;
    if (tabs[activeTab]) {
      const dashboardList = tabs[activeTab].dashboardList;
      const length = dashboardList.length;
      let subFolderJSX = [];
      for (let i = 0; i < length; i++) {
        const folder = dashboardList[i];
        const subFolders = folder.subData;
        subFolderJSX = [];
        for (let j = 0; j < subFolders.length; j++) {
          const attribute = subFolders[j].tags;
          const subAttributeFolder = [];
          if (attribute) {
            for (let k = 0; k < attribute.length; k++) {
              const subAtt = attribute[k];
              const color = getTagColorsFromName(subAtt);
              subAttributeFolder.push(
                <div className={`tag`} style={{ backgroundColor: color.color }}>
                  {subAtt}
                </div>
              );
            }
          }
          const subFolder = subFolders[j];
          subFolderJSX.push(
            <tr key={subFolder.id}>
              <td>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={subFolder.checkValue}
                  onClick={() => this.onClickChildCheckbox(i, j)}
                />
                <span>{subFolder.title}</span>
              </td>
              <td>
                <div className="d-block text-right">{subAttributeFolder}</div>
              </td>
            </tr>
          );
        }
        retData.push(
          <div>
            <div className="general-heading">
              <input
                type="checkbox"
                checked={folder.checkValueStatus}
                onChange={(e) => this.onChangeParentCheckbox(e, i)}
                className="checkbox"
              />
              <span onClick={() => this.onClickOpenSubFolder(i)}>
                <img src="/public/img/open-folder.png" alt="" />
              </span>
              <h4>{folder.title}</h4>
            </div>
            <Collapse isOpen={folder.openSubFolder}>
              <div className="general-logs">
                <div className="general-logs-inner">
                  <table className="data-table">{subFolderJSX}</table>
                </div>
              </div>
            </Collapse>
          </div>
        );
      }
    }
    return retData;
  };

  sendData = () => {
    const viewData = {
      viewName: this.state.viewName,
      description: this.state.description,
      id: this.state.id,
    };
    this.viewRef.current.setData(this.state.tabs, viewData);
    this.setState({
      showView: true,
    });
  };

  renderSelectedDashboardInLeftSide = () => {
    const { selectedDashboards, activeTab } = this.state;
    const retData = [];
    if (selectedDashboards[activeTab]) {
      const selectedDashboardsForTab = selectedDashboards[activeTab];
      for (let i = 0; i < selectedDashboardsForTab.length; i++) {
        retData.push(
          <li key={`left-side-dash-name-${i}`}>
            <a href="javascript: void(0)">
              {/* <i className="fa fa-ellipsis-h"></i> */}
              <span>{selectedDashboardsForTab[i]}</span>
            </a>
          </li>
        );
      }
    }
    return retData;
  };

  getTagOptions = () => {
    return new Promise<any>((resolve, reject) => {
      this.tagsPromiseResolve = resolve;
    });
  };

  onTagFilterChange = (tags: any) => {
    const { filterData, activeTab } = this.state;
    const { searchKey, isStarred, sortValue } = filterData[activeTab];
    filterData[activeTab].selectedTags = tags;
    this.setState({
      filterData,
    });
    const sendData = {
      tag: tags,
      sort: sortValue,
      starred: isStarred,
      query: searchKey,
    };
    this.getSearchData(sendData, false);
  };

  onSortChange = (sortvalue: any) => {
    const { filterData, activeTab } = this.state;
    const { searchKey, isStarred, selectedTags } = filterData[activeTab];
    filterData[activeTab].sortValue = sortvalue.value;
    this.setState({
      filterData,
    });
    const sendData = {
      tag: selectedTags,
      sort: sortvalue.value,
      starred: isStarred,
      query: searchKey,
    };
    this.getSearchData(sendData, false);
  };

  onStarredFilterChange = (e: any) => {
    const { activeTab, filterData } = this.state;
    filterData[activeTab].isStarred = e.target.checked;
    const { searchKey, selectedTags, sortValue } = filterData[activeTab];
    this.setState({
      filterData,
    });
    const sendData = {
      tag: selectedTags,
      sort: sortValue,
      starred: e.target.checked,
      query: searchKey,
    };
    this.getSearchData(sendData, false);
  };

  onQueryChange = (search: any) => {
    const { activeTab, filterData } = this.state;
    filterData[activeTab].searchKey = search;
    const { isStarred, selectedTags, sortValue } = filterData[activeTab];
    this.setState({
      filterData,
    });
    const sendData = {
      tag: selectedTags,
      sort: sortValue,
      starred: isStarred,
      query: search,
    };
    this.getSearchData(sendData, false);
  };

  hideDashboardView = () => {
    this.setState({
      showView: false,
    });
  };

  render() {
    const breadCrumbs = this.breadCrumbs;
    const pageTitle = 'ANALYTICS';
    const { isPreviewEnabled, filterData, activeTab, showView, viewName } = this.state;
    const { isStarred, searchKey, selectedTags, sortValue } = filterData[activeTab];
    return (
      <React.Fragment>
        <div style={{ display: `${showView ? 'none' : 'block'}` }}>
          <div className="breadcrumbs-container">
            {pageTitle && <div className="page-title">{pageTitle}</div>}
            <div className="breadcrumbs">
              {breadCrumbs.map((breadcrumb: any, index: any) => {
                if (breadcrumb.isCurrentPage) {
                  return (
                    <span key={index} className="current-page">
                      {breadcrumb.label}
                    </span>
                  );
                } else {
                  return (
                    <React.Fragment key={index}>
                      <a href={`${breadcrumb.route}`} className="breadcrumbs-link">
                        {breadcrumb.label}
                      </a>
                      <span className="separator">
                        <i className="fa fa-chevron-right"></i>
                      </span>
                    </React.Fragment>
                  );
                }
              })}
            </div>
          </div>
          <div className="analytics-container">
            <div className="analytics-heading-container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <h4 style={{ lineHeight: '36px' }}>{viewName}</h4>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-block text-right">
                    <button
                      className="analytics-white-button min-width-auto m-r-0"
                      onClick={() => locationService.push('/analytics')}
                    >
                      <i className="fa fa-arrow-circle-left"></i>
                      &nbsp;&nbsp;Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="analytics-tabs-container">
              <ul className="nav nav-tabs">
                {this.displayTabs()}
                <li className="nav-item" onClick={this.addTab}>
                  <a className="nav-link add-tab">
                    <i className="fa fa-plus"></i>
                  </a>
                </li>
              </ul>
              <div className="analytics-tabs-section-container">
                <div className="tabs-left-section">
                  <h5>New Tab</h5>
                  <ul>{this.renderSelectedDashboardInLeftSide()}</ul>
                </div>
                <div className="tabs-right-section">
                  <div className="manage-dashboard-search">
                    <div className="row" style={{ alignItems: 'center' }}>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group search-control-group">
                          <FilterInput
                            labelClassName="gf-form--has-input-icon"
                            inputClassName="gf-form-input"
                            value={searchKey}
                            onChange={this.onQueryChange}
                            placeholder={'Search dashboards by name'}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 tag-filter-container">
                        <TagFilter
                          isClearable
                          tags={selectedTags}
                          tagOptions={this.getTagOptions}
                          onChange={this.onTagFilterChange}
                        />
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <Checkbox label="Filter by starred" onChange={this.onStarredFilterChange} value={isStarred} />
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 sort-container">
                        <SortPicker onChange={this.onSortChange} value={sortValue} />
                      </div>
                    </div>
                  </div>
                  <div className="manage-dashboard-general">{this.renderDashboardTree()}</div>
                  {isPreviewEnabled && (
                    <div className="text-right">
                      <button className="analytics-blue-button" onClick={this.sendData}>
                        Preview
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: `${showView ? 'block' : 'none'}` }}>
          <ViewNewView
            ref={this.viewRef}
            $scope={this.props.$scope}
            hidedashboardView={this.hideDashboardView}
            $injector={this.props.$injector}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default AddNewView;
