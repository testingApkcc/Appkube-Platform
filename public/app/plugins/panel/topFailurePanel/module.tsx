import { PanelPlugin } from '@grafana/data';
import TopFailurePanel from './TopFailurePanel';

export const plugin = new PanelPlugin(TopFailurePanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'gaugeTitle',
    name: 'Gauge Title',
    defaultValue: 'Top Failure Panel',
    settings: {
      placeholder: 'Title',
    },
  });
  builder.addTextInput({
    path: 'gaugeURL',
    name: 'Gauge API URL',
    defaultValue: 'http://localhost:3002/failureFunctions',
    settings: {
      placeholder: 'URL for API',
    },
  });
});
