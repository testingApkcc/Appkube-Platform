import { PanelPlugin } from '@grafana/data';
import ContributionPanel from './ContributionPanel';

export const plugin = new PanelPlugin(ContributionPanel);
