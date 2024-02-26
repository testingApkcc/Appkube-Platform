import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeClusterCapacityPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="cluster-capacity-panel">
        <div className="cluster-capacity-inner-panel">
          <div className="heading">Cluster Capacity</div>
        </div>
      </div>
    );
  }
}

export default AppkubeClusterCapacityPanel;
