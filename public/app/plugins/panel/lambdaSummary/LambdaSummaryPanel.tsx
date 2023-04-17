import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { LambdaSummaryOptions } from './types';

type MyState = {
  data: {
    tableData: any[];
  };
  queryParams: {
    from: string;
    to: string;
  };
};

class LambdaSummaryPanel extends PureComponent<PanelProps<LambdaSummaryOptions>> {
  state: MyState = {
    data: {
      tableData: [],
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
          let data = { ...this.state.data };
          data.tableData = [];
          this.setState({ data });
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
        {data.tableData.length ? (
          <div className="lambda-summary-panel-main">
            <div className="lambda-summary-panel">
              <div className="heading">Top Aws Services Using Lambda Functions</div>
              <div className="summary-info">
                <div className="title">{this.props.options.gaugeTitle}</div>
                <div className="summary-table">
                  <div className="table-head">
                    {data.tableData.length &&
                      Object.keys(data.tableData[0]).map((item: any, index: number) => {
                        return <span key={index}>{item.toUpperCase()}</span>;
                      })}
                  </div>
                  <div className="table-body">
                    {data.tableData.map((item: any, index: any) => {
                      return (
                        <div key={index} className="summary-list">
                          <div className="caller-details">
                            <i className="fa fa-circle cricle-icon"></i>
                            <span className="caller-name">{item.caller}</span>
                          </div>
                          <div className="invokes-number">{item.invoked}</div>
                          <div className="today-number">{item.today}</div>
                          <div className="status-details">
                            <ul>
                              {item.status.map((status: any) => {
                                return status ? <li className={`${status}-status`}></li> : <li></li>;
                              })}
                            </ul>
                          </div>
                          <div className="per-minutes-details">{item.perMinutes}</div>
                          <div className="percent-details">+{item.percent}%</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>Please enter API endpoint to fetch data</p>
        )}
      </>
    );
  }
}

export default LambdaSummaryPanel;
