import { PanelPlugin } from '@grafana/data';
import CreateHorizontalGraphPanel from './CreateHorizontalGraphPanel';

export const plugin = new PanelPlugin(CreateHorizontalGraphPanel).useFieldConfig().setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'gaugeTitle',
    name: 'Gauge Title',
    defaultValue: 'Horizontal Graph',
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
    path: 'gaugeURL',
    name: 'Total Environment',
    defaultValue: '',
    settings: {
      placeholder: 'Environment',
    },
  });
});
