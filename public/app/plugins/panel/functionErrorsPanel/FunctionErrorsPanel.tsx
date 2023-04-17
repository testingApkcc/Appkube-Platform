import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { FunctionErrorsOptions } from './types';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

type MyState = {
  data: {
    percentage: number;
    cost: string;
    percentageChange: number | null;
    changeDirection: string;
    tableData: any[];
  };
  queryParams: {
    from: string;
    to: string;
  };
};

class FunctionErrorsPanel extends PureComponent<PanelProps<FunctionErrorsOptions>> {
  state: MyState = {
    data: {
      percentage: 0,
      cost: '',
      percentageChange: null,
      changeDirection: '',
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
    const percentage: number = data.percentage;
    return (
      <>
        <div className="function-panel-container">
          {data.tableData.length ? (
            <div className="funcation-error-inner">
              <div className="progress-container">
                <div className="circular-progressbar">
                  <CircularProgressbarWithChildren
                    value={percentage}
                    styles={buildStyles({
                      pathTransitionDuration: 0.5,
                      trailColor: '#d6d6d6',
                      backgroundColor: '#ff708b',
                    })}
                  >
                    <div style={{ fontSize: 15, marginTop: -15, color: '#000', fontWeight: 'bold' }}>{percentage}%</div>
                  </CircularProgressbarWithChildren>
                </div>
                <div className="progress-data">
                  <span className="heading">{this.props.options.gaugeTitle}</span>
                  <div className="progress-data-cost">
                    <span className="cost">{data.cost}</span>
                    <span className="percantage">
                      {data.changeDirection === 'up' ? (
                        <i className="fa fa-caret-up up-arrow"></i>
                      ) : (
                        <i className="fa fa-caret-down down-arrow"></i>
                      )}
                      {data.percentageChange}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="funcation-error-table">
                <div className="table-head">
                  {Object.keys(data.tableData[0]).map((item: any, index: number) => {
                    return <span key={index}>{item.split(/(?=[A-Z])/).join(' ')}</span>;
                  })}
                </div>
                <div className="table-body">
                  {data.tableData.map((item: any, index: number) => {
                    return (
                      <div className="colum" key={index}>
                        <span>{item.errorMessage}</span>
                        <span>{item.functionName}</span>
                        <span>{item.errorCode}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <p className="fetch-data-text">Please enter API endpoint to fetch data</p>
          )}
        </div>
      </>
    );
  }
}

export default FunctionErrorsPanel;
