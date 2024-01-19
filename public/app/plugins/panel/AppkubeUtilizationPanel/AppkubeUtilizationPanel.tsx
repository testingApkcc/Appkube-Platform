import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeUtlizationPanel extends PureComponent<PanelProps> {
  renderCPUUtilizationData = (data: any) => {
    return (
      <div className="utilization-card">
        <div className="card-title">
          <div className="icon">
            <img src="" alt="" />
          </div>
          <span className="name">CPU Utilization</span>
        </div>
        <div className="utilization-details">
          <div className="info">
            <span className="name">Current Usage</span>
            <span className="percantage">{data.CurrentUsage}%</span>
          </div>
          <div className="info">
            <span className="name">Average Usage</span>
            <span className="percantage">{data.AverageUsage}%</span>
          </div>
          <div className="info">
            <span className="name">Max Usage</span>
            <span className="percantage">{data.MaxUsage}%</span>
          </div>
        </div>
      </div>
    );
  };

  renderFrames = (series: any) => {
    const retData: any = [];
    for (let i = 0; i < series.length; i++) {
      const iSer = series[i];
      let cardJSX: any = [];
      if (iSer && iSer.meta && iSer.meta.custom && iSer.meta.custom) {
        const { query, data } = iSer.meta.custom;
        if (query.queryString === 'cpu_utilization_panel') {
          if (data) {
            cardJSX = this.renderCPUUtilizationData(JSON.parse(data));
          } else {
            cardJSX = this.renderError('CPU Utilization');
          }
        }
      } else {
        cardJSX = this.renderError('');
      }
      retData.push(cardJSX);
    }
    return retData;
  };

  renderError = (cardTitle: any) => {
    return (
      <div className="utilization-card">
        <div className="card-title">
          <div className="icon">
            <img src="" alt="" />
          </div>
          <span className="name">{cardTitle}</span>
        </div>
        <div className="utilization-details">
          <div className="info">
            <span className="name">There is some error.</span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { data } = this.props;
    if (data && data.series && data.series.length > 0) {
      const { series } = data;
      return <div className="appkube-utilization-panel">{this.renderFrames(series)}</div>;
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubeUtlizationPanel;
