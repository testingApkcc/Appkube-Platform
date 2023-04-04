import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { StaticBadgeOptions } from './types';

type MyState = {
  data: {
    cost: string;
  };
};

class StaticBadgePanel extends PureComponent<PanelProps<StaticBadgeOptions>> {
  state: MyState = {
    data: {
      cost: '',
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
