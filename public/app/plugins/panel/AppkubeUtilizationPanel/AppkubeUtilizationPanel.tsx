import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { AppkubeUtilizationPanelOptions } from './types';

let colors: any[] = [];

class TopFailurePanel extends PureComponent<PanelProps<TopFailureOptoins>> {
  state:{},
  };

  render() {
    const { data } = this.state;
    return (
      <div>
       <h1>Appkube Utilization Panel</h1>
      </div>
    );
  }

export default TopFailurePanel;
