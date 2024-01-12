import { PanelPlugin } from '@grafana/data';
import AppkubeUtilizationPanel from './AppkubeUtilizationPanel';

export const plugin = new PanelPlugin(AppkubeUtilizationPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'gaugeTitle',
    name: 'Gauge Title',
    defaultValue: 'Appkube Utilization Panel',
    settings: {
      placeholder: 'Title',
    },
  });
  // builder.addTextInput({
  //   path: 'gaugeURL',
  //   name: 'Gauge API URL',
  //   defaultValue: 'http://localhost:3002/failureFunctions',
  //   settings: {
  //     placeholder: 'URL for API',
  //   },
  // });
});
