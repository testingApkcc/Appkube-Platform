import { PanelPlugin } from '@grafana/data';
import AppkubeAllProductsPanel from './AppkubeAllProductsPanel';

export const plugin = new PanelPlugin(AppkubeAllProductsPanel);
