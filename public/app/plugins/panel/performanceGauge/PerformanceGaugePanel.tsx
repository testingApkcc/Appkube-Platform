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
  queryParams: {
    from: string;
    to: string;
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
    queryParams: {
      from: 'now-6h',
      to: 'now',
    },
  };

  componentDidMount = () => {
    window.addEventListener('locationchange', function () {
      console.log('Event added');
    });

    if (this.props.options.gaugeURL) {
      fetch(`${this.props.options.gaugeURL}?from=${this.state.queryParams.from}&to=${this.state.queryParams.to}`)
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

  componentWillUnmount = () => {
    window.removeEventListener('locationchange', function () {
      console.log('Removed Event Listener');
    });
  };

  async componentDidUpdate(prevProps: any, prevState: any) {
    let from: any;
    let to: any;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    from = urlParams.get('from');
    to = urlParams.get('to');

    if (prevProps.options.gaugeURL !== this.props.options.gaugeURL || prevState.queryParams.from !== from) {
      await fetch(`${this.props.options.gaugeURL}?from=${this.state.queryParams.from}&to=${this.state.queryParams.to}`)
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

      let queryParams = { ...this.state.queryParams };
      queryParams.from = from;
      queryParams.to = to;
      this.setState({ queryParams });
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
              <p className="fetch-data-text">Please enter API endpoint to fetch data</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default PerformanceGaugePanel;
