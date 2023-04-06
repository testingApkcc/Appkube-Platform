import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { MultipleOptions } from './types';

type MyState = {
  data: {
    cost: string;
  };
  queryParams: {
    from: string;
    to: string;
  };
};

class MultipleBadgePanels extends PureComponent<PanelProps<MultipleOptions>> {
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
      <div className="resources-main">
        <div className="resources-panel">
          <div className="heading">Resources</div>
          <div className="resources-info">
            <div className="resources-row">
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
            </div>
            <div className="resources-row">
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
            </div>
            <div className="resources-row">
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
              <div className="resources-column">
                <span className="resources-tital">Function</span>
                <div className="numberic-part">
                  <span className="numberic-total">18,6875</span>
                  <i className="fa fa-caret-up up-arrow"></i>
                  <span className="percantage-part">10%</span>
                </div>
                <p className="last-year-total">Compared to $21,490 last year</p>
              </div>
            </div>
          </div>
          {this.props.options.gaugeURL && this.state.data.cost ? (
            <>
              <div className="heading">Resources</div>
              <div className="resources-info">
                <div className="resources-row">
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                </div>
                <div className="resources-row">
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                </div>
                <div className="resources-row">
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                  <div className="resources-column">
                    <span className="resources-tital">Function</span>
                    <div className="numberic-part">
                      <span className="numberic-total">18,6875</span>
                      <i className="fa fa-caret-up up-arrow"></i>
                      <span className="percantage-part">10%</span>
                    </div>
                    <p className="last-year-total">Compared to $21,490 last year</p>
                  </div>
                </div>
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

export default MultipleBadgePanels;
