import React from 'react';
import './css/style.css';

type Props = {};

const PerformanceGaugePanel = (props: Props) => {
  return (
    <div className="performance-panel-main">
      <div className="performance-panel">
        <div className="performance-circle">
          <div className="text">
            <span>
              32<span>%</span>
            </span>
          </div>
          <img src={'/public/img/circle_performance.png'} alt="performance" />
        </div>
        <div className="performance-contents">
          <div className="performance-text">Cost</div>
          <div className="performance-price">
            <strong>$43,833</strong>
            <span>
              <i className="fa fa-caret-up"></i> 10%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceGaugePanel;
