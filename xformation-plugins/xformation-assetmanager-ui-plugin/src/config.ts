export const configFun = (configIp: any, mainProductUrl: any) => {
  const assetSrvUrl = `${configIp}/api`;
  const mainApplicationBaseUrl = `${mainProductUrl}/api`;
  return {
    basePath: '/a/xformation-assetmanager-ui-plugin',
    octantURL: 'http://localhost:7777/#/',

    GET_ALL_ACCOUNT: `${assetSrvUrl}/cloud-environment/search?status=active`,
    GET_ACCOUNT_BY_ID: `${assetSrvUrl}/getAccount`,
    GET_DEPARTMENTWISE_PRODUCT: `${assetSrvUrl}/department-wise-analytics/search?orgId=78`,
    GET_PRODUCT_DATA: `${assetSrvUrl}/department-wise-analytics/get?orgId=78`,
    GET_SERVICES_DATA: `${assetSrvUrl}/service-detail/search`,
    PREVIEW_DASHBOARDS_URL: `http://18.234.236.211:5057/api/dashboard/preview`,

    ADD_Organization: `${assetSrvUrl}/addEnvironment`,
    SERVER_ERROR_MESSAGE: 'SERVER_ERROR_MESSAGE',

    DASHBOARD_JSON: {
      Uid: '',
      Uuid: '',
      Slug: '',
      Title: '',
      OrgId: 1,
      'GnetId ': 0,
      Version: '1',
      PluginId: '',
      UpdatedBy: '1',
      CreatedBy: '1',
      FolderId: 0,
      IsFolder: false,
      HasAcl: false,
      Data: '',
      SourceJsonRef: '',
      InputSourceId: '',
      AccountId: '',
      TenantId: '',
      IsCloud: true,
      CloudName: '',
      ElementType: '',
      FileName: '',
      InputType: '',
    },
    RAW: {
      Dashboard: {},
      UserId: 1,
      Overwrite: true,
      Message: '',
      OrgId: 1,
      PluginId: '',
      FolderId: 0,
      IsFolder: false,
    },

    USERID: 'admin',
    PASSWORD: 'password',
    // GET_ALL_ORGANIZATIONS: `${assetSrvUrl}/getAllOrganizations`,
    ADD_ORGANIZATION_UNIT: `${assetSrvUrl}/addOrganizationUnit`,
    ADD_ACCOUNT: `${assetSrvUrl}/addAccount`,

    GET_USER_ORGANIZATION: `${assetSrvUrl}/getAllOrgUnits`,
    GET_DISCOVERED_ASSETS: `${assetSrvUrl}/getDiscoveredAsset`,
    SEARCH_APPLICATION_ASSETS: `${assetSrvUrl}/searchApplicationAsset`,
    GET_APPLICATION_ASSETS_BY_INPUT_TYPE: `${assetSrvUrl}/getApplicationAssetsGropuByInputType`,
    BULK_ADD_APPLICATION_ASSETS: `${assetSrvUrl}/bulkAddApplicationAssets`,
    BULK_UPDATE_APPLICATION_ASSETS: `${assetSrvUrl}/bulkUpdateApplicationAssets`,
    ADD_INPUT_CONFIG: `${assetSrvUrl}/addInputConfig`,
    SEARCH_INPUT_CONFIG: `${assetSrvUrl}/searchInputConfig`,
    SEARCH_CONFIG_DASHBOARD: `${assetSrvUrl}/catalogue/search`,

    ADD_DASHBOARDS_TO_GRAFANA: `${mainApplicationBaseUrl}/dashboards/importAssets`,
    ADD_VIEW_JSON_TO_GRAFANA: `${mainApplicationBaseUrl}/dashboards/view-json`,
    ADD_DATASOURCE_IN_GRAFANA: `${mainApplicationBaseUrl}/datasources`,
    // UPDATE_DATASOURCE_IN_GRAFANA: `${mainApplicationBaseUrl}/datasources/updateDataSource`,
    GET_VIEW_JSON: `${mainApplicationBaseUrl}/dashboards/filterdashboards`,

    ADD_INPUT: `${assetSrvUrl}/addInput`,
    UPDATE_INPUT: `${assetSrvUrl}/updateInput`,
    SEARCH_INPUT: `${assetSrvUrl}/searchInput`,

    GET_AWS_REGIONS: `${assetSrvUrl}/getAwsRegions`,
    // PREVIEW_DASHBOARDS_URL: `${mainApplicationBaseUrl}/dashboards/previewDashboard`,
  };
};
