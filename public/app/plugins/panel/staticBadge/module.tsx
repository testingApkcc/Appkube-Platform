import { PanelPlugin } from '@grafana/data';
import StaticBadgePanel from './StaticBadgePanel';

export const plugin = new PanelPlugin(StaticBadgePanel);
