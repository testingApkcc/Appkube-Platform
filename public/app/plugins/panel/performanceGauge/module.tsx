import { PanelPlugin } from '@grafana/data';
import PerformanceGaugePanel from './PerformanceGaugePanel';

export const plugin = new PanelPlugin(PerformanceGaugePanel);
