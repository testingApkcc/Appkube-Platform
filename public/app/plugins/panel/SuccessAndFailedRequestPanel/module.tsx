import { PanelPlugin } from '@grafana/data';
import SuccessAndFailedRequestPanel from './SuccessAndFailedRequestPanel';

export const plugin = new PanelPlugin(SuccessAndFailedRequestPanel);
