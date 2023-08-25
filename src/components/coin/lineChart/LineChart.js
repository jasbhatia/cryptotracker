import React from 'react'
import './LineChart.css';

import {
  Chart as ChartJS,
 LineElement,CategoryScale,LinearScale,PointElement
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
 LineElement,CategoryScale,LinearScale,PointElement
);


const LineChart = ({ data}) => {
   
    const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

    return (
        
             <Line options={options} data={data} ></Line>
      
    );
}

export default LineChart;
