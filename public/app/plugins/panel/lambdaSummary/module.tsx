import { PanelPlugin } from '@grafana/data';
import LambdaSummaryPanel from './LambdaSummaryPanel';

export const plugin = new PanelPlugin(LambdaSummaryPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'gaugeTitle',
    name: 'Gauge Title',
    defaultValue: 'Summary',
    settings: {
      placeholder: 'Title',
    },
  });
  builder.addTextInput({
    path: 'gaugeURL',
    name: 'Gauge API URL',
    defaultValue: 'http://localhost:3002/lambdaSummaryPanel',
    settings: {
      placeholder: 'URL for API',
    },
  });
});
