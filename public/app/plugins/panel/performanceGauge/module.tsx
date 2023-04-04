import { PanelPlugin } from '@grafana/data';
import PerformanceGaugePanel from './PerformanceGaugePanel';

export const plugin = new PanelPlugin(PerformanceGaugePanel).useFieldConfig().setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'gaugeTitle',
    name: 'Gauge Title',
    defaultValue: 'Cost',
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
});
