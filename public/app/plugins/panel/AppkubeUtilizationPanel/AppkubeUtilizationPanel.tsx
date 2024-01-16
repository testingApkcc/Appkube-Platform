import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import data from './response.json'

type MyState = {
  data: {
    tableData: any[];
  };
  queryParams: {
    from: string;
    to: string;
  };
};

class AppkubeUtlizationPanel extends PureComponent<PanelProps> {
  state: MyState = {
    data: {
      tableData: [],
    },
    queryParams: {
      from: 'now-6h',
      to: 'now',
    },
  };

  renderData = () => {
    console.log(data);
    const JSX: any[] = [];
    Object.entries(data).map((value) => {
      JSX.push( 
      <div className="info">
      <span className="name">{value[0].split(/(?=[A-Z])/).join(" ")}</span>
      <span className="percantage">{value[1].MetricDataResults[0].Values[0]}%</span>
    </div>)
   });
   return JSX;
  }

  render() {
    return (
      <div className="appkube-utilization-panel">
      <div className="utilization-card">
        <div className="card-title">
          <div className="icon">
            <img src="" alt=""/>
          </div>
          <span className="name">CPU Utilization</span>
        </div>
        <div className="utilization-details">
          {this.renderData()}
        </div>
      </div>
    </div>
    );
  }
}

export default AppkubeUtlizationPanel;
