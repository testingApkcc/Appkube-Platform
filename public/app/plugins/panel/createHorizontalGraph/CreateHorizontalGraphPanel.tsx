import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { HorizontalOptions } from './types';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  indexAxis: 'y' as const,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    bar: {
      borderWidth: 0,
      borderRadius: 3,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export const barData = {
  labels: ['Performance', 'Reliablity', 'Availiablity', 'End Usage', 'Security'],
  datasets: [
    {
      data: [80, 90, 45, 56, 85],
      backgroundColor: ['rgb(250 113 163)', 'rgb(250 170 93)', 'rgb(249 214 81)', 'rgb(147 227 86)', 'rgb(100 206 86)'],
    },
  ],
};

type MyState = {
  data: {
    cost: string;
  };
  queryParams: {
    from: string;
    to: string;
  };
};

class CreateHorizontalGraphPanel extends PureComponent<PanelProps<HorizontalOptions>> {
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
      <div className="horizontal-graph-panel-main">
        <div className="horizontal-graph-panel">
          {this.props.options.gaugeURL && this.state.data.cost ? (
            <>
              <div className="heading">
                <div className="heading-left">
                  <span className="heading">{this.props.options.gaugeTitle}</span>
                  <span className="text">{this.props.options.graphTitle}</span>
                  <p className="price">
                    {data.cost}
                    <span>
                      <i className="fa fa-caret-up"></i> 10%
                    </span>
                  </p>
                </div>
                <div className="heading-right">
                  <span>{this.props.options.environmentTitle}</span> <span>5</span>
                </div>
              </div>
              <div className="horizontal-graph">
                <Bar options={options} data={barData} height={70} />
              </div>
            </>
          ) : (
            <p className="fetch-data-text">Please enter API endpoint to fetch data</p>
          )}
        </div>
      </div>
    );
  }
}

export default CreateHorizontalGraphPanel;
