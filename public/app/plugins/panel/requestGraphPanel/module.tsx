import { PanelPlugin } from '@grafana/data';
import RequestGraphPanel from './RequestGraphPanel';

export const plugin = new PanelPlugin(RequestGraphPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'gaugeTitle',
    name: 'Gauge Title',
    defaultValue: 'Top Use Panel',
    settings: {
      placeholder: 'Title',
    },
  });
  builder.addTextInput({
    path: 'gaugeURL',
    name: 'Gauge API URL',
    defaultValue: 'http://localhost:3002/topUsedPanel',
    settings: {
      placeholder: 'URL for API',
    },
  });
});
