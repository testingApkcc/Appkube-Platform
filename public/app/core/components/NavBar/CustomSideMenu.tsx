import React, { PureComponent } from 'react';
import { CustomMenuModal } from './CustomMenuModal';
import { getLocationSrv } from '@grafana/runtime';
import Rbac from './Rbac';
// import { Scrollbars } from 'react-custom-scrollbars';
import { CustomScrollbar } from '@grafana/ui';

const menuStates: any = {
  SUBMENU_OPEN: 4,
  SUBMENU_CLOSE: 8,
};

export class CustomSideMenu extends PureComponent<any, any> {
  modalRef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      clickedMenuItem: {},
      activeMenuItem: null,
      activeSubMenuItem: null,
      showSubMenu: false,
      subMenuState: 0,
      isSubMenuPinned: false,
      collapsedMenus: [false, false],
    };
    this.modalRef = React.createRef();
  }

  updateState = (newState: any, lastState: any) => {
    if (newState !== lastState) {
      const grafanaApp: any = document.getElementsByClassName('grafana-app');
      if (grafanaApp.length > 0) {
        grafanaApp[0].classList.remove('menu_state_' + lastState);
        grafanaApp[0].classList.add('menu_state_' + newState);
      }
    }
  };

  handleLocationChange = () => {
    const pathName = location.pathname;
    let retData = this.findActiveItem(pathName, this.mainMenu);
    if (retData.isFound) {
      return retData;
    }
    // retData = this.findActiveItem(pathName, this.opsCentral);
    // if (retData.isFound) {
    //   return retData;
    // }
    // retData = this.findActiveItem(pathName, this.devCentral);
    // if (retData.isFound) {
    //   return retData;
    // }
    // retData = this.findActiveItem(pathName, this.diagnostics);
    // if (retData.isFound) {
    //   return retData;
    // }
    retData = this.findActiveItem(pathName, this.extra);
    return retData;
  };

  findActiveItem = (pathName: any, menuList: any) => {
    let totalItem = menuList.length;
    let isFound = false;
    let subMenuState = 0;
    let showSubMenu = false;
    let activeMenuItem = null;
    let isSubMenuPinned = false;
    let activeSubMenuItem = null;
    for (let i = 0; i < totalItem; i++) {
      const item = menuList[i];
      if (item.subMenu && item.subMenu.length > 0) {
        for (let j = 0; j < item.subMenu.length; j++) {
          const sMenu = item.subMenu[j];
          if (pathName === sMenu.link) {
            subMenuState = menuStates.SUBMENU_OPEN;
            showSubMenu = true;
            isSubMenuPinned = true;
            activeSubMenuItem = sMenu;
            activeMenuItem = item;
            isFound = true;
            break;
          } else if (sMenu.subMenu && sMenu.subMenu.length > 0) {
            for (let k = 0; k < sMenu.subMenu.length; k++) {
              const childmenu = sMenu.subMenu[k];
              if (pathName === childmenu.link) {
                subMenuState = menuStates.SUBMENU_OPEN;
                showSubMenu = true;
                isSubMenuPinned = true;
                activeSubMenuItem = childmenu;
                activeMenuItem = item;
                isFound = true;
                break;
              } else if (childmenu.subMenu && childmenu.subMenu.length > 0) {
                for (let m = 0; m < childmenu.subMenu.length; m++) {
                  const childs = childmenu.subMenu[m];
                  if (pathName === childs.link) {
                    subMenuState = menuStates.SUBMENU_OPEN;
                    showSubMenu = true;
                    isSubMenuPinned = true;
                    activeSubMenuItem = childs;
                    activeMenuItem = item;
                    isFound = true;
                    break;
                  }
                }
              }
            }
          }
        }
      } else {
        if (pathName === item.link) {
          activeMenuItem = item;
          isFound = true;
          break;
        }
      }
    }
    return {
      subMenuState,
      showSubMenu,
      activeMenuItem,
      isSubMenuPinned,
      isFound,
      activeSubMenuItem,
    };
  };

  componentDidMount() {
    window.addEventListener('locationchange', () => {
      const menuData: any = this.handleLocationChange();
      this.updateState(menuData.subMenuState, this.state.subMenuState);
      this.setState({
        subMenuState: menuData.subMenuState,
        showSubMenu: menuData.showSubMenu,
        activeMenuItem: menuData.activeMenuItem,
        isSubMenuPinned: menuData.isSubMenuPinned,
        activeSubMenuItem: menuData.activeSubMenuItem,
      });
    });

    history.pushState = ((f) =>
      function pushState(this: any) {
        const args: any = arguments;
        var ret = f.apply(this, args);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
      })(history.pushState);

    history.replaceState = ((f) =>
      function replaceState(this: any) {
        const args: any = arguments;
        var ret = f.apply(this, args);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
      })(history.replaceState);

    window.addEventListener('popstate', () => {
      window.dispatchEvent(new Event('locationchange'));
    });
    const menuData: any = this.handleLocationChange();
    this.updateState(menuData.subMenuState, -1);
    this.setState({
      subMenuState: menuData.subMenuState,
      showSubMenu: menuData.showSubMenu,
      activeMenuItem: menuData.activeMenuItem,
      isSubMenuPinned: menuData.isSubMenuPinned,
      activeSubMenuItem: menuData.activeSubMenuItem,
    });
  }

  mainMenu: any = [
    {
      link: '/',
      text: 'Overview',
      cssClass: 'overview',
      isImplemented: true,
      childName: 'overview',
    },
    {
      link: '/a/xformation-assetmanager-ui-plugin/environments',
      text: 'Assets',
      cssClass: 'assets',
      childName: 'assets',
      isImplemented: true,
      subMenu: [
        {
          link: '/a/xformation-assetmanager-ui-plugin/environments',
          text: 'Environments',
          childName: 'assets',
          isImplemented: true,
          subMenu: [
            {
              link: '/a/xformation-assetmanager-ui-plugin/amazon-services',
              text: 'Amazon Services',
              childName: 'assets',
              isImplemented: true,
              subMenu: [
                {
                  link: '/a/xformation-assetmanager-ui-plugin/storage-details',
                  text: 'Storage Details',
                  childName: 'assets',
                  isImplemented: true,
                },
              ],
            },
          ],
        },
        {
          link: '/a/xformation-assetmanager-ui-plugin/department-wise-products',
          text: 'Department Wise Products',
          childName: 'assets',
          isImplemented: true,
          subMenu: [
            {
              link: '/a/xformation-assetmanager-ui-plugin/department-wise-charts',
              text: 'Department Wise Charts',
              childName: 'assets',
              isImplemented: true,
            },
          ],
        },
        {
          link: '/a/xformation-assetmanager-ui-plugin/all-services',
          text: 'All Services',
          childName: 'assets',
        },
        // {
        //   link: '/a/xformation-assetmanager-ui-plugin/storage-details',
        //   text: 'Storage Details',
        //   childName: 'assets',
        //   isImplemented: true,
        // },
        {
          link: '/assets/discovered-assets',
          text: 'Discovered Assets',
          childName: 'assets',
        },
        {
          link: '/assets/monitored-assets',
          text: 'Monitored Assets',
          childName: 'assets',
        },
        {
          link: '/assets/org-unit',
          text: 'Org Unit',
          childName: 'assets',
        },
        {
          link: '/assets/custom-resources',
          text: 'Custom-Resources',
          childName: 'custom-resources',
        },
      ],
    },
    {
      link: '/a/xformation-perfmanager-ui-plugin/catalog',
      text: 'App Catalogue',
      cssClass: 'app-catalogue',
      childName: 'app-catalogue',
      isImplemented: true,
      subMenu: [
        {
          link: '/a/xformation-perfmanager-ui-plugin/catalog',
          text: 'View And Search Catalogue',
          childName: 'app-catalogue',
          isImplemented: true,
        },
        // {
        //   link: '/a/xformation-perfmanager-ui-plugin/catalog',
        //   text: 'Catalogue Management',
        //   childName: 'app-catalogue',
        //   isImplemented: true,
        // },
        {
          link: '/a/xformation-perfmanager-ui-plugin/library',
          text: 'Library',
          isImplemented: true,
          childName: 'metrics-library',
        },
        {
          link: '/import-module-pack',
          text: 'Import Assets From Module Pack ',
          childName: 'app-catalogue',
        },
        {
          link: '/create-module',
          text: 'Create Or Import Module Packs',
          childName: 'create-module',
        },
      ],
    },
    {
      link: '/a/xformation-alertmanager-ui-plugin/monitor-alerts',
      text: 'Alerts',
      cssClass: 'alerts',
      isImplemented: true,
      childName: 'alerts',
      subMenu: [
        {
          link: '/a/xformation-alertmanager-ui-plugin/monitor-alerts',
          text: 'Dashboard',
          isImplemented: true,
          childName: 'alert-manager-dashboard',
        },
        {
          link: '/a/xformation-alertmanager-ui-plugin/alert-rule-builder',
          text: 'New Alert Rule',
          isImplemented: true,
          childName: 'new-alert-rule',
        },
        {
          link: '/alerting/list',
          text: 'All Alert Rules',
          isImplemented: true,
          childName: 'all-alert-rule',
        },
        {
          link: '/a/xformation-alertmanager-ui-plugin/manage-alert-rule',
          text: 'Manage Alert Rule',
          isImplemented: true,
          childName: 'new-alert-rule',
        },
        {
          link: '/a/xformation-alertmanager-ui-plugin/manageworkflow',
          text: 'Manage Workflows',
          childName: 'new-alert-rule',
        },
      ],
    },
    {
      link: '/managedashboards',
      text: 'Analytics',
      cssClass: 'analytics',
      childName: 'analytics',
      isImplemented: true,
      subMenu: [
        {
          link: '/managedashboards',
          text: 'Manage Dashboards',
          childName: 'manage-dashboards',
          isImplemented: true,
        },
        {
          link: '/analytics',
          text: 'Manage Views',
          childName: 'analytics',
          isImplemented: true,
          subMenu: [
            {
              link: '/analytics/new/dashboard',
              text: 'New Dashboards',
              childName: 'analytics',
              isImplemented: true,
            },
            {
              link: '/analytics/edit/dashboard',
              text: 'Edit Dashboards',
              childName: 'analytics',
              isImplemented: true,
            },
            {
              link: '/analytics/view',
              text: 'View Dashboards',
              childName: 'analytics',
              isImplemented: true,
            },
          ],
        },
        {
          link: '/taskmanager',
          text: 'Task Manager',
          childName: 'taskmanager',
          isImplemented: true,
        },
        {
          link: '/drilldownanalytics',
          text: 'Drilldown Analytics',
          childName: 'analytics',
          // isImplemented: true,
        },
      ],
    },
    {
      link: '/ops-central',
      text: 'Ops central',
      cssClass: 'ops-central',
      isImplemented: true,
      childName: 'ops-central',
    },
    {
      link: '/dev-central',
      text: 'Dev Central',
      cssClass: 'dev-central',
      isImplemented: true,
      childName: 'dev-central',
    },
    {
      link: '/sec-central',
      text: 'Sec Central',
      cssClass: 'sec-central',
      isImplemented: true,
      childName: 'sec-central',
    },
    {
      link: '/tools-and-diagnostics',
      text: 'Tools & Diagnostics',
      cssClass: 'tools-and-diagnostics',
      isImplemented: true,
      childName: 'tools-and-diagnostics',
    },
    {
      link: '/team',
      text: 'Preference',
      cssClass: 'preferences',
      childName: 'preferences',
      isImplemented: true,
      subMenu: [
        {
          link: '/team',
          text: 'Team',
          cssClass: 'metrics',
          childName: 'team',
        },
      ],
    },
  ];

  // opsCentral: any = [
  //   {
  //     link: '/ops-central',
  //     text: 'OPS central',
  //     cssClass: 'availability',
  //     isImplemented: true,
  //     childName: 'availability',
  //       subMenu: [
  //         {
  //           link: '/a/xformation-perfmanager-ui-plugin/managedashboard',
  //           text: 'Dashboard',
  //           isImplemented: true,
  //           childName: 'metrics-catalog',
  //         },
  //         {
  //           link: '/a/xformation-perfmanager-ui-plugin/collectionview',
  //           text: 'Collection',
  //           isImplemented: true,
  //           childName: 'metrics-collection',
  //         },
  //         {
  //           link: '/a/xformation-alertmanager-ui-plugin/manage-alert-rule',
  //           text: 'Rule',
  //           isImplemented: true,
  //           childName: 'metrics-rule',
  //         },
  //         {
  //           link: '/a/xformation-perfmanager-ui-plugin/preferences',
  //           text: 'Preferences',
  //           isImplemented: true,
  //           childName: 'metrics-preferences',
  //         },
  //         {
  //           link: '/a/xformation-perfmanager-ui-plugin/discovery',
  //           text: 'Discovery',
  //           isImplemented: true,
  //           childName: 'metrics-preferences',
  //         },
  //         {
  //           link: '/a/xformation-perfmanager-ui-plugin/view',
  //           text: 'View',
  //           isImplemented: true,
  //           childName: 'metrics-preferences',
  //         },
  //       ],
  //     },
  //     {
  //       link: '/a/xformation-logmanager-ui-plugin/dashboard',
  //       text: 'Logs',
  //       cssClass: 'logs',
  //       isImplemented: true,
  //       childName: 'grafana-logs',
  //       subMenu: [
  //         {
  //           link: '/a/xformation-logmanager-ui-plugin/overview',
  //           text: 'Overview',
  //           childName: 'grafana-logs',
  //         },
  //         {
  //           link: '/a/xformation-logmanager-ui-plugin/dashboard',
  //           text: 'Dashboard',
  //           isImplemented: true,
  //           childName: 'grafana-logs',
  //         },
  //         {
  //           link: '/a/xformation-logmanager-ui-plugin/alerts',
  //           text: 'Alerts',
  //           childName: 'grafana-logs',
  //         },
  //         {
  //           link: '/a/xformation-logmanager-ui-plugin/preference',
  //           text: 'Preference',
  //           isImplemented: true,
  //           childName: 'grafana-logs',
  //         },
  //       ],
  //     },
  //     {
  //       link: '/a/xformation-compliancemanager-ui-plugin/dashboard',
  //       text: 'Compliance',
  //       cssClass: 'compliance',
  //       isImplemented: true,
  //       childName: 'compliance',
  //       subMenu: [
  //         {
  //           link: '/a/xformation-compliancemanager-ui-plugin/dashboard',
  //           text: 'Overview',
  //           isImplemented: true,
  //           childName: 'compliance-dashboard',
  //         },
  //         {
  //           link: '/a/xformation-compliancemanager-ui-plugin/compliancerulesets',
  //           text: 'Rulesets',
  //           isImplemented: true,
  //           childName: 'compliance-rulesets',
  //         },
  //         {
  //           link: '/a/xformation-compliancemanager-ui-plugin/gslbuilder',
  //           text: 'Rule Builder',
  //           isImplemented: true,
  //           childName: 'compliance-builder',
  //         },
  //         {
  //           link: '/a/xformation-compliancemanager-ui-plugin/audits',
  //           text: 'Audits',
  //           childName: 'compliance-builder',
  //         },
  //         {
  //           link: '/a/xformation-compliancemanager-ui-plugin/compliancepolicy',
  //           text: 'Policies',
  //           isImplemented: true,
  //           childName: 'compliance-policies',
  //         },
  //         {
  //           link: '/a/xformation-compliancemanager-ui-plugin/complianceremediation',
  //           text: 'Remediation',
  //           isImplemented: true,
  //           childName: 'compliance-remediation',
  //         },
  //         {
  //           link: '/a/xformation-compliancemanager-ui-plugin/complianceassessmenthistory',
  //           text: 'Assessment History',
  //           isImplemented: true,
  //           childName: 'compliance-assessment-history',
  //         },
  //         {
  //           link: '/a/xformation-compliancemanager-ui-plugin/complianceexclusions',
  //           text: 'Exclusions',
  //           isImplemented: true,
  //           childName: 'compliance-exclusions',
  //         },
  //         {
  //           link: '/a/xformation-compliancemanager-ui-plugin/preference',
  //           text: 'Preference',
  //           childName: 'compliance-preference',
  //         },
  //       ],
  //     },
  //     {
  //       link: '/a/xformation-servicedesk-ui-plugin/dashboard',
  //       text: 'Service desk',
  //       cssClass: 'tickets',
  //       isImplemented: true,
  //       childName: 'tickets',
  //       subMenu: [
  //         {
  //           link: '/a/xformation-servicedesk-ui-plugin/dashboard',
  //           text: 'Dashboard',
  //           isImplemented: true,
  //           childName: 'tickets-dashboard',
  //         },
  //         {
  //           link: '/a/xformation-servicedesk-ui-plugin/allcontacts',
  //           text: 'Contacts',
  //           isImplemented: true,
  //           childName: 'tickets-contacts',
  //         },
  //         {
  //           link: '/a/xformation-servicedesk-ui-plugin/allcompanies',
  //           text: 'Companies',
  //           isImplemented: true,
  //           childName: 'tickets-companies',
  //         },
  //         {
  //           link: '/a/xformation-servicedesk-ui-plugin/tickets',
  //           text: 'Reports',
  //           isImplemented: true,
  //           childName: 'tickets-reports',
  //         },
  //         {
  //           link: '/a/xformation-servicedesk-ui-plugin/opentickets',
  //           text: 'Preferences',
  //           isImplemented: true,
  //           childName: 'tickets-preferences',
  //         },
  //       ],
  //     },
  //     {
  //       link: '/automation',
  //       text: 'Automation',
  //       cssClass: 'automation',
  //       childName: 'automation',
  //   },
  // ];

  // devCentral: any = [
  //   {
  //     link: '/a/xformation-perfmanager-ui-plugin/dev-central',
  //     text: 'DEV CENTERAL',
  //     cssClass: 'generator',
  //     childName: 'generators',
  //   },
  //   {
  //     link: '/delivery',
  //     text: 'Delivery',
  //     cssClass: 'delivery',
  //     childName: 'delivery',
  //   },
  //   {
  //     link: '/quality',
  //     text: 'Quality',
  //     cssClass: 'quality',
  //     childName: 'quality',
  //   },
  //   {
  //     link: '/test',
  //     text: 'Test',
  //     cssClass: 'test',
  //     childName: 'test',
  //   },
  // ];

  // secCentral: any = [
  //   {
  //     link: '/a/xformation-perfmanager-ui-plugin/sec-central',
  //     text: '',
  //     cssClass: 'generator',
  //     childName: 'generators',
  //   },
  // ];
  // diagnostics: any = [
  //   {
  //     link: '/tools-and-diagnostics',
  //     text: 'tools-and-diagnostics',
  //     cssClass: 'generator',
  //     childName: 'change-manager',
  //   },
  //   {
  //     link: '/change-manager',
  //     text: 'Change Manager',
  //     cssClass: 'generator',
  //     childName: 'change-manager',
  //   },
  //   {
  //     link: '/explorer',
  //     text: 'Explorer',
  //     cssClass: 'quality',
  //     childName: 'explorer',
  //   },
  //   {
  //     link: '/rca',
  //     text: 'RCA',
  //     cssClass: 'delivery',
  //     childName: 'rca',
  //   },
  //   {
  //     link: '/search-act',
  //     text: 'Search & Act',
  //     cssClass: 'generator',
  //     childName: 'search-act',
  //   },
  //   {
  //     link: '/script-manager',
  //     text: 'Script Manager',
  //     cssClass: 'test',
  //     childName: 'script-manager',
  //   },
  //   {
  //     link: '/optimizer',
  //     text: 'Optimizer',
  //     cssClass: 'delivery',
  //     childName: 'optimizer',
  //   },
  //   {
  //     link: '/migration-manager',
  //     text: 'Migration Manager',
  //     cssClass: 'generator',
  //     childName: 'migration-manager',
  //   },
  // ];

  extra: any = [
    {
      link: '/plugins/xformation-rbac-ui-plugin/page/home',
      text: 'RBAC Settings',
      cssClass: 'rbac-settings',
      childName: 'rbac-settings',
      isImplemented: true,
    },
    {
      link: '/resource',
      text: 'Resource',
      cssClass: 'resources',
      childName: 'resources',
    },
  ];

  onClickToggleSubMenu = (e: any) => {
    let { subMenuState, isSubMenuPinned } = this.state;
    const lastState = subMenuState;
    if (subMenuState === menuStates.SUBMENU_OPEN) {
      if (isSubMenuPinned) {
        subMenuState = menuStates.SUBMENU_CLOSE;
        isSubMenuPinned = false;
      } else {
        isSubMenuPinned = true;
      }
    } else {
      subMenuState = menuStates.SUBMENU_OPEN;
    }
    this.updateState(subMenuState, lastState);
    this.setState({
      subMenuState,
      isSubMenuPinned,
    });
  };

  setMenuStates = (subMenuNewState: any) => {
    let { subMenuState } = this.state;
    const lastState = subMenuState;
    this.updateState(subMenuNewState, lastState);
    this.setState({
      subMenuState: subMenuNewState,
    });
  };

  onClickLink = (e: any, menuItem: any) => {
    if (menuItem.isImplemented) {
      let isSubMenuPinned = false;
      const showSubMenu = menuItem && menuItem.subMenu && menuItem.subMenu.length > 0;
      this.setState({
        activeMenuItem: menuItem,
        showSubMenu: showSubMenu,
      });
      if (showSubMenu) {
        this.setMenuStates(menuStates.SUBMENU_OPEN);
        isSubMenuPinned = true;
      } else {
        this.setMenuStates(0);
      }
      getLocationSrv().update({ path: menuItem.link });
      this.setState({
        isSubMenuPinned,
      });
    } else {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      this.setState({
        clickedMenuItem: menuItem,
      });
      this.modalRef.current.toggleModal();
    }
  };

  onClickSubLink = (e: any, sMenuItem: any) => {
    if (sMenuItem.isImplemented) {
      this.setState({
        activeSubMenuItem: sMenuItem,
      });
      getLocationSrv().update({ path: sMenuItem.link });
    } else {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      this.setState({
        clickedMenuItem: sMenuItem,
      });
      this.modalRef.current.toggleModal();
    }
  };

  onClickContinue = () => {
    const { clickedMenuItem } = this.state;
    getLocationSrv().update({ path: clickedMenuItem.link });
    this.setState({
      clickedMenuItem: {},
      showSubMenu: false,
    });
    this.setMenuStates(0);
  };

  createOpenMenu = (menuItems: any) => {
    const retItem: any = [];
    const { activeMenuItem } = this.state;
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      const isActive = activeMenuItem.link === menuItem.link;
      retItem.push(
        <Rbac parentName={menuItem.text || ''} childName={menuItem.text || ''} key={i}>
          <li className="item">
            <a
              href={'#'}
              className={`menu-item ${isActive ? 'active' : ''}`}
              onClick={(e: any) => this.onClickLink(e, menuItem)}
            >
              <div className={`menu-item-image ${menuItem.cssClass}`} />
              <div className="menu-item-text">{menuItem.text}</div>
            </a>
          </li>
        </Rbac>
      );
    }
    return retItem;
  };

  createCloseMenu = (menuItems: any) => {
    const retItem: any = [];
    const { activeMenuItem } = this.state;
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      let isActive = false;
      if (activeMenuItem) {
        isActive = activeMenuItem.link === menuItem.link;
      }
      retItem.push(
        <Rbac parentName={menuItem.text || ''} childName={menuItem.text || ''} key={i}>
          <li className="item" title={menuItem.text}>
            <a className={`menu-item ${isActive ? 'active' : ''}`} onClick={(e: any) => this.onClickLink(e, menuItem)}>
              <div className={`menu-item-image ${menuItem.cssClass}`} />
              <div className="menu-item-text">{menuItem.text}</div>
            </a>
          </li>
        </Rbac>
      );
    }
    return retItem;
  };

  createOpenSubMenu = () => {
    const { activeMenuItem, activeSubMenuItem } = this.state;
    const retData = [];
    if (activeMenuItem && activeMenuItem.subMenu && activeMenuItem.subMenu.length > 0) {
      for (let j = 0; j < activeMenuItem.subMenu.length; j++) {
        let isActive = false;
        if (activeMenuItem) {
          isActive = activeSubMenuItem.link === activeMenuItem.subMenu[j].link;
          if (activeMenuItem.subMenu[j].subMenu && activeMenuItem.subMenu[j].subMenu.length > 0) {
            for (let k = 0; k < activeMenuItem.subMenu[j].subMenu.length; k++) {
              if (activeMenuItem.subMenu[j].subMenu[k].link.indexOf(activeSubMenuItem.link) !== -1) {
                isActive = true;
              } else {
                if (
                  activeMenuItem.subMenu[j].subMenu[k].subMenu &&
                  activeMenuItem.subMenu[j].subMenu[k].subMenu.length > 0
                ) {
                  for (let m = 0; m < activeMenuItem.subMenu[j].subMenu.length; m++) {
                    if (activeMenuItem.subMenu[j].subMenu[k].subMenu[m].link.indexOf(activeSubMenuItem.link) !== -1) {
                      isActive = true;
                    }
                  }
                }
              }
            }
          }
        }
        retData.push(
          <Rbac
            parentName={activeMenuItem.subMenu[j].text || ''}
            childName={activeMenuItem.subMenu[j].text || ''}
            key={j}
          >
            <li>
              <a
                className={`menu-item ${isActive ? 'active' : ''}`}
                href={activeMenuItem.subMenu[j].link}
                onClick={(e: any) => this.onClickSubLink(e, activeMenuItem.subMenu[j])}
              >
                <div className="menu-item-text">{activeMenuItem.subMenu[j].text}</div>
              </a>
            </li>
          </Rbac>
        );
      }
    }
    return retData;
  };

  createCloseSubMenu = () => {
    const { activeMenuItem, activeSubMenuItem } = this.state;
    const retData = [];
    if (activeMenuItem && activeMenuItem.subMenu && activeMenuItem.subMenu.length > 0) {
      for (let j = 0; j < activeMenuItem.subMenu.length; j++) {
        if (activeSubMenuItem && activeSubMenuItem.link === activeMenuItem.subMenu[j].link) {
          retData.push(
            <Rbac
              parentName={activeMenuItem.subMenu[j].text || ''}
              childName={activeMenuItem.subMenu[j].text || ''}
              key={j}
            >
              <li>
                <div className="menu-item-text">{activeMenuItem.subMenu[j].text}</div>
              </li>
            </Rbac>
          );
          break;
        } else {
          if (activeMenuItem.subMenu[j].subMenu && activeMenuItem.subMenu[j].subMenu.length > 0) {
            for (let k = 0; k < activeMenuItem.subMenu[j].subMenu.length; k++) {
              if (activeMenuItem.subMenu[j].subMenu[k].link.indexOf(activeSubMenuItem.link) !== -1) {
                retData.push(
                  <Rbac
                    parentName={activeMenuItem.subMenu[j].text || ''}
                    childName={activeMenuItem.subMenu[j].text || ''}
                    key={k}
                  >
                    <li>
                      <div className="menu-item-text">{activeMenuItem.subMenu[j].text}</div>
                    </li>
                  </Rbac>
                );
                break;
              } else {
                if (
                  activeMenuItem.subMenu[j].subMenu[k].subMenu &&
                  activeMenuItem.subMenu[j].subMenu[k].subMenu.length > 0
                ) {
                  for (let m = 0; m < activeMenuItem.subMenu[j].subMenu[k].subMenu.length; m++) {
                    if (activeMenuItem.subMenu[j].subMenu[k].subMenu[m].link.indexOf(activeSubMenuItem.link) !== -1) {
                      retData.push(
                        <Rbac
                          parentName={activeMenuItem.subMenu[j].text || ''}
                          childName={activeMenuItem.subMenu[j].text || ''}
                          key={m}
                        >
                          <li>
                            <div className="menu-item-text">{activeMenuItem.subMenu[j].text}</div>
                          </li>
                        </Rbac>
                      );
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return retData;
  };

  onMouseEnterClosedSubMenu = () => {
    this.setMenuStates(menuStates.SUBMENU_OPEN);
  };

  onMouseLeaveOpenedSubMenu = () => {
    const { isSubMenuPinned } = this.state;
    if (!isSubMenuPinned) {
      this.setMenuStates(menuStates.SUBMENU_CLOSE);
    }
  };

  collapseMainMenu = (index: any) => {
    const { collapsedMenus } = this.state;
    collapsedMenus[index] = !collapsedMenus[index];
    // collapsedMenus = [...collapsedMenus],
    this.setState({
      collapsedMenus,
      index,
    });
  };

  render() {
    const { showSubMenu, isSubMenuPinned } = this.state;
    return (
      <div className="menu-item-container">
        <CustomScrollbar>
          <div className="main-menu">
            <div className="sidemenu-search-container" />
            <ul className="m-0">{this.createCloseMenu(this.mainMenu)}</ul>

            {/* <Rbac parentName={'OPS CENTRAL'} childName={'OPS CENTRAL'}>
              <div className="menu-item-header" onClick={(e) => this.onClickLink(e, this.opsCentral[0])}>
                OPS
                <br />
                CENTRAL
                <br /> */}
            {/* <i className={`fa ${!collapsedMenus[0] ? 'fa-arrow-circle-right' : 'fa-arrow-circle-down'}`}></i> */}
            {/* </div>
            </Rbac> */}
            {/* <ul className={`m-0 main-menu-items ${!collapsedMenus[0] ? 'main-menu-collapsed' : ''}`}>
              {this.createCloseMenu(this.opsCentral)}
            </ul> */}

            {/* <Rbac parentName={'DEV CENTRAL'} childName={'DEV CENTRAL'}> */}
            {/* <div className="menu-item-header" onClick={() => this.collapseMainMenu(1)}> */}
            {/* <div className="menu-item-header" onClick={(e) => this.onClickLink(e, this.devCentral[0])}>
                DEV
                <br />
                CENTRAL
                <br /> */}
            {/* <i className={`fa ${!collapsedMenus[1] ? 'fa-arrow-circle-right' : 'fa-arrow-circle-down'}`}></i> */}
            {/* </div>
            </Rbac> */}
            {/* <ul className={`m-0 main-menu-items ${!collapsedMenus[1] ? 'main-menu-collapsed' : ''}`}>
              {this.createCloseMenu(this.devCentral)}
            </ul> */}
            {/* <Rbac parentName={'TOOLS DIAGNOSTICS'} childName={'TOOLS DIAGNOSTICS'}> */}
            {/* <div className="menu-item-header" onClick={() => this.collapseMainMenu(2)}> */}
            {/* <div className="menu-item-header" onClick={(e) => this.onClickLink(e, this.diagnostics[0])}>
                TOOLS &amp;
                <br />
                DIAGNOSTICS
                <br /> */}
            {/* <i className={`fa ${!collapsedMenus[2] ? 'fa-arrow-circle-right' : 'fa-arrow-circle-down'}`}></i> */}
            {/* </div>
            </Rbac>
            <Rbac parentName={'TOOLS DIAGNOSTICS'} childName={'TOOLS DIAGNOSTICS'}> */}
            {/* <div className="menu-item-header" onClick={() => this.collapseMainMenu(2)}> */}
            {/* <div className="menu-item-header" onClick={(e) => this.onClickLink(e, this.secCentral[0])}>
                SEC &amp;
                <br />
                CENTERAL
                <br /> */}
            {/* <i className={`fa ${!collapsedMenus[2] ? 'fa-arrow-circle-right' : 'fa-arrow-circle-down'}`}></i> */}
            {/* </div> */}
            {/* </Rbac> */}
            {/* <ul className={`m-0 main-menu-items ${!collapsedMenus[2] ? 'main-menu-collapsed' : ''}`}>
              {this.createCloseMenu(this.diagnostics)}*/}
            {/* </ul> */}
            <ul className="m-0">{this.createCloseMenu(this.extra)}</ul>
          </div>
        </CustomScrollbar>
        <div className={`sub-menu ${showSubMenu ? 'active-sub-menu' : ''}`}>
          <div className="open-menu" onMouseLeave={this.onMouseLeaveOpenedSubMenu}>
            <div className="side-menu-toggle text-right" onClick={this.onClickToggleSubMenu}>
              <i
                className="fa fa-thumb-tack"
                style={{
                  transform: isSubMenuPinned ? 'rotate(0deg)' : 'rotate(-90deg)',
                }}
              />
              {/* <div className="side-menu-toggle text-right" onClick={this.onClickToggleSubMenu}> */}
              {/* <div className="side-menu-toggle text-right"> */}
              {/* <i className="fa fa-thumb-tack"></i> */}
            </div>
            <ul>{this.createOpenSubMenu()}</ul>
          </div>
          <div className="close-menu" onMouseEnter={this.onMouseEnterClosedSubMenu}>
            <div className="side-menu-toggle" onClick={this.onClickToggleSubMenu}>
              <i className="fa fa-thumb-tack" style={{ transform: 'rotate(-90deg)' }} />
            </div>
            <ul>{this.createCloseSubMenu()}</ul>
          </div>
        </div>
        <CustomMenuModal ref={this.modalRef} onClickContinue={this.onClickContinue} />
      </div>
    );
  }
}
