import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeTopFailureFunctionsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="top-used-function-panel">
        <div className="top-used-function-inner">
          <div className="top-used-function-heading">Top Failure Functions</div>
          <div className="top-used-function-price">
            {`43,833`}
            <p>10%</p>
          </div>
          <div className="top-used-function-contents">
            <div className="content">
              <span>Finance</span>
              <p>3:24</p>
              <strong>154</strong>
            </div>
            <div className="content">
              <span>Travel</span>
              <p>3:11</p>
              <strong>132</strong>
            </div>
            <div className="content">
              <span>Invoice</span>
              <p>6:12</p>
              <strong>2,140</strong>
            </div>
            <div className="content">
              <span>Po</span>
              <p>13:52</p>
              <strong>1,976</strong>
            </div>
            <div className="content">
              <span>Ticket</span>
              <p>5:13</p>
              <strong>1,903</strong>
            </div>
            <div className="content">
              <span>Solved Ticket</span>
              <p>18:36</p>
              <strong>1,320</strong>
            </div>
            <div className="content">
              <span>Pending Ticket</span>
              <p>4:59</p>
              <strong>1,103</strong>
            </div>
            <div className="content">
              <span>Mail</span>
              <p>22:59</p>
              <strong>1,043</strong>
            </div>
            <div className="content">
              <span>Budget</span>
              <p>23:42</p>
              <strong>1,001</strong>
            </div>
            <div className="content">
              <span>Requester</span>
              <p>3:50</p>
              <strong>870</strong>
            </div>
            <div className="content">
              <span>Approver</span>
              <p>3:21</p>
              <strong>820</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeTopFailureFunctionsPanel;
