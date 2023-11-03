import { PanelPlugin } from '@grafana/data';
import MultipleBadgePanels from './MultipleBadgePanels';

export const plugin = new PanelPlugin(MultipleBadgePanels).setPanelOptions((builder) => {
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
