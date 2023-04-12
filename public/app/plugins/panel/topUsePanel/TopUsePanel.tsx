import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { TopUseOptions } from './types';

type MyState = {
  data: {
    cost: string;
    percentageChange: string;
    changeDirection: string;
    lastYearCost: string;
    items: Array<{ title: string; time: string; cost: string; changeDirection: string }>;
  };
  queryParams: {
    from: string;
    to: string;
  };
};

class TopUsePanel extends PureComponent<PanelProps<TopUseOptions>> {
  state: MyState = {
    data: {
      cost: '',
      percentageChange: '',
      changeDirection: '',
      lastYearCost: '',
      items: [],
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
      // fetch(`${this.props.options.gaugeURL}?from=${this.state.queryParams.from}&to=${this.state.queryParams.to}`)
      fetch(`${this.props.options.gaugeURL}`)
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
      // await fetch(`${this.props.options.gaugeURL}?from=${this.state.queryParams.from}&to=${this.state.queryParams.to}`)
      await fetch(`${this.props.options.gaugeURL}`)
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
          this.setState({ data: '' });
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
        {data ? (
          <div className="topuse-main">
            <div className="topuse-part">
              <div className="title-part">
                <span>{this.props.options.gaugeTitle}</span>
              </div>
              <div className="numberic-part">
                <span className="numberic-total">${data.cost}</span>
                {data.changeDirection === 'up' ? (
                  <i className={`fa fa-caret-up up-arrow`}></i>
                ) : (
                  <i className={`fa fa-caret-down down-arrow`}></i>
                )}
                <span className="percantage-part">{data.percentageChange}%</span>
              </div>
              <p className="last-year-total">Compared to ${data.lastYearCost} last year</p>
              {data.items.map((item: any, index) => {
                return (
                  <div className="topuse-info" key={index}>
                    <span className="topuse-name">{item.title}</span>
                    <span className="time-details">{item.time}</span>
                    <span className="amount-number">{item.cost}</span>
                    {item.changeDirection === 'up' ? (
                      <i className={`fa fa-caret-up up-arrow`}></i>
                    ) : (
                      <i className={`fa fa-caret-down down-arrow`}></i>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>Please enter API endpoint to fetch data</p>
        )}
      </>
    );
  }
}

export default TopUsePanel;
