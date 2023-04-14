import { PanelPlugin } from '@grafana/data';
import TopFunctionByDurationPanel from './TopFunctionByDurationPanel';

export const plugin = new PanelPlugin(TopFunctionByDurationPanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'gaugeTitle',
    name: 'Gauge Title',
    defaultValue: 'Top Function By Duration',
    settings: {
      placeholder: 'Title',
    },
  });
  builder.addTextInput({
    path: 'gaugeURL',
    name: 'Gauge API URL',
    defaultValue: 'http://localhost:3002/topFuncationByDurtion',
    settings: {
      placeholder: 'URL for API',
    },
  });
});
