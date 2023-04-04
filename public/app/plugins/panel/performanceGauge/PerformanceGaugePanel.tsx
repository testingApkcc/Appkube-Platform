import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { PerformanceOptions } from './types';

type MyState = {
  data: {
    percentage: number;
    cost: string;
    percentageChange: number;
    changeDirection: string;
  };
};

class PerformanceGaugePanel extends PureComponent<PanelProps<PerformanceOptions>> {
  state: MyState = {
    data: {
      percentage: 0,
      cost: '',
      percentageChange: 0,
      changeDirection: '',
    },
  };

  componentDidMount = () => {
    if (this.props.options.gaugeURL) {
      fetch(this.props.options.gaugeURL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
        })
        .then((responseJson) => {
          this.setState({ data: responseJson });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  async componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.options.gaugeURL !== this.props.options.gaugeURL) {
      await fetch(this.props.options.gaugeURL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
        })
        .then((responseJson) => {
          this.setState({ data: responseJson });
        })
        .catch((error) => {
          console.log(error);
        });
      // const response = await fetch(`${this.props.options.gaugeURL}`);
      // const json = await response.json();
      // this.setState({ data: json });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="performance-panel-main">
          <div className="performance-panel">
            {this.props.options.gaugeURL && this.state.data.cost ? (
              <>
                <div className="performance-circle">
                  <div className="text">
                    <span>
                      {data.percentage}
                      <span>%</span>
                    </span>
                  </div>
                  <img src={'/public/img/circle_performance.png'} alt="performance" />
                </div>
                <div className="performance-contents">
                  <div className="performance-text">{this.props.options.gaugeTitle}</div>
                  <div className="performance-price">
                    <strong>${data.cost}</strong>
                    <span>
                      <i className={`fa fa-caret-${data.changeDirection === 'up' ? 'up' : 'down'}`}></i>{' '}
                      {data.percentageChange}%
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <p style={{ textAlign: 'center' }}>Please enter API endpoint to fetch data</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default PerformanceGaugePanel;
