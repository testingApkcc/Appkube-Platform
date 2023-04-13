import { PanelPlugin } from '@grafana/data';
import FunctionErrorsPanel from './FunctionErrorsPanel';

export const plugin = new PanelPlugin(FunctionErrorsPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'gaugeTitle',
    name: 'Gauge Title',
    defaultValue: 'Function Errors',
    settings: {
      placeholder: 'Title',
    },
  });
  builder.addTextInput({
    path: 'gaugeURL',
    name: 'Gauge API URL',
    defaultValue: 'http://localhost:3002/functionErrorsPanel',
    settings: {
      placeholder: 'URL for API',
    },
  });
});
