const securitySrvUrl = `http://34.199.12.114:8094/`;
const alertSrvUrl = `http://34.199.12.114:5055`;
const catalogSrvUrl = `http://34.199.12.114:5050/api/`;
const awsAPIUrl = 'http://34.199.12.114:5057/api';
const dataSourceURL = '/';

export const config = {
  UPDATE_ORGANIZATION: securitySrvUrl + `security/users/updateOrganization`,
  GET_ALERT_VOLUME_BY_STATUS: `${alertSrvUrl}/api/getAlertVolumeByStatus`,
  GET_ALERT_VOLUME_DATA: `${alertSrvUrl}/api/getAlertVolumeData`,
  GET_AVG_WAIT_TIME_DATA: `${alertSrvUrl}/api/getWaitTimeGraphDataFromDb`,
  AUTHENTICATE_GOOGLE_MFA: securitySrvUrl + `security/public/authenticateGoogleMfa`,
  AUTHENTICATE_USER: securitySrvUrl + `security/public/authenticateUser`,
  ENABLE_GOOGLE_MFA: securitySrvUrl + `security/users/enableGoogleMfa`,
  DISABLE_GOOGLE_MFA: securitySrvUrl + `security/users/disableGoogleMfa`,
  INVITE_USER: securitySrvUrl + `security/users/inviteUser`,
  UPDATE_USER_ROLE: securitySrvUrl + `security/users/updateUserRoles`,
  GET_TEAM: securitySrvUrl + `security/users/getTeam`,
  ANALYTICS_LIST_VIEW: catalogSrvUrl + 'listView',
  DELETE_ANALYTICS_VIEW: catalogSrvUrl + 'deleteView',
  GET_ANALYTICS_VIEW: catalogSrvUrl + 'getView',
  ADD_ANALYTICS_VIEW: catalogSrvUrl + 'addView',
  PARENT_NAME: '',
  basePath: '',
  PREVIEW_DASHBOARDS_URL: `${awsAPIUrl}/dashboard/preview`,
  DELETE_DASHBOARD: `${awsAPIUrl}/dashboard/view-json`,
  GET_DATASOURCE_LIST: `${dataSourceURL}api/plugins/filter-datasource`,
  GET_MASTER_DATASOURCE_LIST: `/api/datasources/master-datasources`,
  CLOUD_WISE_SPEND: `${awsAPIUrl}/anlytics/cloud-wise-spend`,
  SLA_CENTRAL_DATA: `${awsAPIUrl}/anlytics/sla-central`,
};

export const appconfig = {
  config,
};
