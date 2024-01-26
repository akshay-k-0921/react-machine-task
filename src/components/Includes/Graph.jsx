import React, { useEffect, useState } from 'react'

// package for graph
import { Line } from 'react-chartjs-2'; 
import Chart from 'chart.js/auto'; 

// importing base url of api with axios
import api from '../AxiosConfig'

function Graph() {

    const [graphData, setGraphData] = useState([])
    const months = Array.from({ length: 12 }, (_, i) => new Date(2024, i).toLocaleString('en', { month: 'short' }));

    useEffect(() => {
        api.get('graph/').then(response =>{
                setGraphData(response.data)
            }).catch(error => {
                console.error('Error fetching data:', error);
            });
    },[])

    return (
        <div>
            {graphData.length > 0 ? (
            <Line data={{
            labels: graphData.map(item => item.x),
            datasets: [{
                data: [
                    ...graphData,
                    ...Array.from({ length: 7 }, (_, i) => ({ x: months[i + 5], y: 0 })),
                  ],
                borderColor: '#8cbed6',
                pointBackgroundColor: '#8cbed6',
                pointRadius: 5,
                tension: 0.4, 
                type: 'line',
                fill: false,
            }]
            }}
            width={600}
            height={300}
            options={{
                borderRadius: 5,
                scales: {
                    y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5, 
                    }
                    }
                },
                plugins: {
                    legend: {
                    display: false,
                    }
                },
                gridLines: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)', // Thin grey gridlines
                }
            }}
            />
            ) : (
                <p>Loading chart data...</p>
            )}
        </div>
      );
}

export default Graph