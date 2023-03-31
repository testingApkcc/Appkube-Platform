import React from 'react';
import './css/style.css';

type Props = {};

const StaticBadgePanel = (props: Props) => {
  return (
    <div className="static-badge-panel-main">
      <div className="static-badge-panel">
        <div className="static-badge-circle">
          <img src={'/public/img/static_badge_icon.png'} alt="Static badge" />
        </div>
        <div className="static-badge-contents">
          <div className="text">Total Functions</div>
          <div className="price">540,549</div>
        </div>
      </div>
    </div>
  );
};

export default StaticBadgePanel;
