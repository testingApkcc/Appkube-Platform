import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { StaticBadgeOptions } from './types';

type MyState = {
  data: {
    cost: string;
  };
  queryParams: {
    from: string;
    to: string;
  };
};

class StaticBadgePanel extends PureComponent<PanelProps<StaticBadgeOptions>> {
  state: MyState = {
    data: {
      cost: '',
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
      <div className="static-badge-panel-main">
        <div className="static-badge-panel">
          {this.props.options.gaugeURL && this.state.data.cost ? (
            <>
              <div className="static-badge-circle">
                <img src={`data:image/png;base64,${this.props.options.gaugeIMG}`} alt="Static badge" />
              </div>
              <div className="static-badge-contents">
                <div className="text">{this.props.options.gaugeTitle}</div>
                <div className="price">{data.cost}</div>
              </div>
            </>
          ) : (
            <p style={{ textAlign: 'center' }}>Please enter API endpoint to fetch data</p>
          )}
        </div>
      </div>
    );
  }
}

export default StaticBadgePanel;
