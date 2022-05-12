import * as React from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { RestService } from '../_service/RestService';
import { config } from '../../config';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

// const barOptions: any = {
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           fontColor: 'white',
//           stepSize: 10,
//           beginAtZero: true,
//         },
//       },
//     ],
//     xAxes: [
//       {
//         ticks: {
//           fontColor: 'white',
//           stepSize: 10,
//           callback: function (value: any) {
//             let str = value.split('-', 3);
//             let newData = str[1] + '-' + str[2];
//             return newData;
//           },
//         },
//       },
//     ],
//   },
//   legend: {
//     display: false,
//   },
//   responsive: true,
//   maintainAspectRatio: false,
// };
const barchart: any = {
  labels: ['01', '02', '03', '04', '05', '06'],
  datasets: [
    {
      label: 'Line Dataset',
      lineTension: 0.5,
      fill: false,
      borderColor: 'rgba(255,255,255,0.5)',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 2,
      type: 'line',
    },
  ],
};

const barOptions: any = {
  plugins: {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  scales: {
    y: {
      ticks: {
        color: 'white',
        stepSize: 10,
        beginAtZero: true,
      },
      grid: {
        display: false
      }
    },
    x: {
      ticks: {
        color: 'white',
        stepSize: 10,
        // callback: function (value: any) {
        //   let str = value.split('-', 3);
        //   let newData = str[1] + '-' + str[2];
        //   return newData;
        // },
      },
      grid: {
        display: false
      }
    },
  },
}

export class CurrentAvrageWaitTimeChart extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    try {
      this.fetchData();
    } catch (err) {
      console.log('Avarage response time data load failed. Error: ', err);
    }
  }
  fetchData = () => {
    RestService.getData(config.GET_AVG_WAIT_TIME_DATA, null, null).then((response: any) => {
      this.setState({
        datasets: [
          {
            /*  bar data set
                        label: 'Bar Dataset',
                        data: [50, 50, 50, 10, 50, 50,30],
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        // borderColor: 'rgba(0,0,0,0.1)',
                        // borderWidth: 2,
                        */
          },
          {
            label: 'Line Dataset',
            lineTension: 0.2,
            fill: false,
            borderColor: 'rgba(255,255,255,0.5)',
            data: response.lineDataSetList,
            borderWidth: 2,
            // Changes this dataset to become a line
            type: 'line',
          },
        ],
        labels: response.daysList,
      });
      console.log('Avg Resp Time Data :::::: ', response);
    });
  }

  render() {
    //const { barchart, barOptions } = this.state;
    return (
      <div className="" style={{ width: '100%', height: '100%' }}>
        <Bar data={barchart} options={barOptions} />
      </div>
    );
  }
}
