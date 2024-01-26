import React, { useState, useEffect } from 'react';
// package for graph
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// importing base url of api with axios
import api from '../AxiosConfig'

function PieChart() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    api.get('pie-chart/').then(response =>{
            setChartData(response.data)
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
  },[])

  const data = {
    labels: chartData.map(item => item.label),
    datasets: [{
      data: chartData.map(item => item.value),
        backgroundColor: ['#67C587', '#88D1A1', '#A9DEBA', '#C9EAD4', '#EAF6ED'], // Choose desired colors
        hoverOffset: 5
      }]
  };
  // console.log(categoryNames, 'asjfj');
  
return (
  <div>
      {chartData.length > 0 ? (
      <Pie 
      data={data} 
      options={{ 
        plugins: 
        { 
          circularArc: {
            rotation: -180 
          },
          legend: {
            position: 'bottom', 
            ordering: 'index',
            labels: {
              usePointStyle: true 
            }
          }
      }}} />
      ) : (
        <p>Loading chart data...</p>
    )}
  </div>
);
}

export default PieChart