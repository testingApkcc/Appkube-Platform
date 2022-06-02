import pluginJson from './plugin.json';
import { NavItem } from 'types';

export const PLUGIN_BASE_URL = `/a/${pluginJson.id}`;

export enum ROUTES {
  Dashboard = 'dashboard',
  ProjectWise = 'project-wise',
  ResourceWiseViewAllTasks = 'ResourceWiseViewAllTasks',
  ProcurementDetail = 'procurement-detail',
}

export const NAVIGATION_TITLE = 'Basic App Plugin';
export const NAVIGATION_SUBTITLE = 'Some extra description...';

// Add a navigation item for each route you would like to display in the navigation bar
export const NAVIGATION: Record<string, NavItem> = {};
