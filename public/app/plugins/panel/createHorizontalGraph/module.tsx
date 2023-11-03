import { PanelPlugin } from '@grafana/data';
import CreateHorizontalGraphPanel from './CreateHorizontalGraphPanel';

export const plugin = new PanelPlugin(CreateHorizontalGraphPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'gaugeTitle',
    name: 'Gauge Title',
    defaultValue: 'Overall Products',
    settings: {
      placeholder: 'Title',
    },
  });
  builder.addTextInput({
    path: 'graphTitle',
    name: 'Graph Title',
    defaultValue: 'Total Functions Cost',
    settings: {
      placeholder: 'Title',
    },
  });
  builder.addTextInput({
    path: 'gaugeURL',
    name: 'Gauge API URL',
    defaultValue: '',
    settings: {
      placeholder: 'URL for API',
    },
  });
  builder.addTextInput({
    path: 'environmentTitle',
    name: 'Total Environments Title',
    defaultValue: 'No of Environments:',
    settings: {
      placeholder: 'Environment',
    },
  });
});
