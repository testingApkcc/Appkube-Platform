import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { LambdaSummaryOptions } from './types';

type MyState = {
  data: {
    cost: string;
  };
  queryParams: {
    from: string;
    to: string;
  };
};

class LambdaSummaryPanel extends PureComponent<PanelProps<LambdaSummaryOptions>> {
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
    // const { data } = this.state;
    return (
      <div className="lambda-summary-panel-main">
        <div className="lambda-summary-panel">
          <div className="heading">Top Aws Services Using Lambda Functions</div>
          <div className="summary-info">
            <div className="title">Summary</div>
            <div className="summary-table">
              <div className="table-head">
                <span className="caller">CALLER</span>
                <span className="invokes">INVOKED</span>
                <span className="today">TODAY</span>
                <span className="status">STATUS</span>
                <span className="per-minutes">PER MINUTES</span>
                <span className="percent">PERCENT</span>
              </div>
              <div className="table-body">
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="red-status"></li>
                      <li className="red-status"></li>
                      <li className="red-status"></li>
                      <li className="red-status"></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="orange-status"></li>
                      <li className="orange-status"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="red-status"></li>
                      <li className="red-status"></li>
                      <li className="blue-status"></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="blue-status"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="orange-status"></li>
                      <li className="blue-status"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lambda-summary-panel">
          <div className="heading">Top IAM user Creating Lambda Functions</div>
          <div className="summary-info">
            <div className="title">Summary</div>
            <div className="summary-table">
              <div className="table-head">
                <span className="caller">CALLER</span>
                <span className="invokes">INVOKED</span>
                <span className="today">TODAY</span>
                <span className="status">STATUS</span>
                <span className="per-minutes">PER MINUTES</span>
                <span className="percent">PERCENT</span>
              </div>
              <div className="table-body">
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="red-status"></li>
                      <li className="red-status"></li>
                      <li className="red-status"></li>
                      <li className="red-status"></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="orange-status"></li>
                      <li className="orange-status"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="red-status"></li>
                      <li className="red-status"></li>
                      <li className="blue-status"></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="blue-status"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
                <div className="summary-list">
                  <div className="caller-details">
                    <i className="fa fa-circle cricle-icon"></i>
                    <span className="caller-name">Function Name</span>
                  </div>
                  <span className="invokes-number">597 989</span>
                  <span className="today-number">120 430</span>
                  <div className="status-details">
                    <ul>
                      <li className="orange-status"></li>
                      <li className="blue-status"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <span className="per-minutes-details">438</span>
                  <span className="percent-details">+10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LambdaSummaryPanel;
