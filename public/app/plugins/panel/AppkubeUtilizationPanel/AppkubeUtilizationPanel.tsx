import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { AppkubeUtilizationPanelOptions } from './types';

type MyState = {
  data: {
    cost: string;
    percentageChange: string;
    changeDirection: string;
    items: Array<{ title: string; time: string; cost: string; changeDirection: string }>;
  };
  queryParams: {
    from: string;
    to: string;
  };
};

class AppkubeUtilizationPanel extends PureComponent<PanelProps<AppkubeUtilizationPanelOptions>> {
  state: MyState = {
    data: {
      cost: '',
      percentageChange: '',
      changeDirection: '',
      items: [],
    },
    queryParams: {
      from: 'now-6h',
      to: 'now',
    },
  };
  
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
          <div className="info">
            <span className="name">Current Usage</span>
            <span className="percantage">25%</span>
          </div>
          <div className="info">
            <span className="name">Average Usage</span>
            <span className="percantage">30%</span>
          </div>
          <div className="info">
            <span className="name">Max Usage (24hrs)</span>
            <span className="percantage">40%</span>
          </div>
        </div>
      </div>
    </div>
    );
  }};

export default AppkubeUtilizationPanel;
