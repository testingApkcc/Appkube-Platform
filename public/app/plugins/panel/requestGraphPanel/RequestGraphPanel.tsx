import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';
import { RequestGraphOptions } from './types';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
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
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
  },
  legend: {
    display: true,
    position: 'bottom',
  },
};

const labels = ['09:00', '09:05', '09:10', '09:15'];

export const barData = {
  labels,
  datasets: [
    {
      label: 'Development',
      data: [100, 50, 25, 40],
      backgroundColor: ['#faaa5d', '#64ce56', '#5379ff', '#fa71a3'],
    },
    {
      label: 'Testing',
      data: [30, 75, 25, 15],
      backgroundColor: ['#64ce56', '#faaa5d', '#5379ff', '#fa71a3'],
    },
    {
      label: 'Stage',
      data: [40, 55, 35, 60],
      backgroundColor: ['#5379ff', '#64ce56', '#faaa5d', '#fa71a3'],
    },
    {
      label: 'Production',
      data: [60, 20, 25, 70],
      backgroundColor: ['#fa71a3', '#5379ff', '#64ce56', '#faaa5d'],
    },
  ],
};

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

class RequestGraphPanel extends PureComponent<PanelProps<RequestGraphOptions>> {
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
          <div className="graph-container">
            <div className="graph-inner">
              <span className="title-name">Request by funcation</span>
              <div className="graph-part">
                <Bar options={options} data={barData} height={100} />
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

export default RequestGraphPanel;
