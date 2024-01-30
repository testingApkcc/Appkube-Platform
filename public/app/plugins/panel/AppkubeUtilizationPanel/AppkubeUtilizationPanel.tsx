import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { imageJSON } from './ds';

class AppkubeUtlizationPanel extends PureComponent<PanelProps> {
<<<<<<< HEAD
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
=======
  renderCPUUtilizationData = (data: any) => {
>>>>>>> 6740a4ca80eb378c6387d2cd29a5a41b7534ab0e
    return (
      <div className="utilization-card">
        <div className="card-title">
          <div className="icon">
            <img src={imageJSON.cpu_utilization} alt="" />
          </div>
          <span className="name">CPU Utilization</span>
        </div>
        <div className="utilization-details">
          <div className="info">
            <span className="name">Current Usage</span>
            <span className="percantage" title={data.CurrentUsage}>
              {Math.round(data.CurrentUsage)}%
            </span>
          </div>
          <div className="info">
            <span className="name">Average Usage</span>
            <span className="percantage" title={data.AverageUsage}>
              {Math.round(data.AverageUsage)}%
            </span>
          </div>
          <div className="info">
            <span className="name">Max Usage</span>
            <span className="percantage" title={data.MaxUsage}>
              {Math.round(data.MaxUsage)}%
            </span>
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
        const { query, data, error } = iSer.meta.custom;
        if (query.queryString === 'cpu_utilization_panel') {
          if (error) {
            cardJSX = this.renderError('CPU Utilization', error);
          } else {
            if (data) {
              cardJSX = this.renderCPUUtilizationData(JSON.parse(data));
            } else {
              cardJSX = this.renderError('CPU Utilization', '');
            }
          }
        }
      } else {
        cardJSX = this.renderError('', '');
      }
      retData.push(cardJSX);
    }
    return retData;
  };

  renderError = (cardTitle: any, error: string) => {
    return (
      <div className="utilization-card">
        <div className="card-title">
          <div className="icon">
            <img src={imageJSON.error} alt="" />
          </div>
          <span className="name">{cardTitle || 'Error'}</span>
        </div>
        <div className="error-message">
          <span>{error ? error : 'There is some error'}</span>
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
