import '../App.css';
import { useState, useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar, Line, Pie, Doughnut, PolarArea, Radar } from "react-chartjs-2";
import { Data } from '../Data';
import BarChart from '../components/BarChart';

Chart.register(CategoryScale);

export default function Root() {
    const [chartData, setChartData] = useState({
        labels: [2, 3, 4, 5],
        datasets: [
          {
            label: "Numbers Gained ",
            data: [2, 3, 4, 5],
            backgroundColor: [
              "red",
              "blue",
              "green",
              "yellow"
            ],
            borderColor: "",
            borderWidth: 1
          }
        ]
      });
    
    return (
      <>
      <div className='page-container'>
        <h1>Welcome to your data dashboard!</h1>
        <div className='grid-container'>
            <div><Pie data={chartData}/></div>
            <div><Line data={chartData}/></div>
            <div><Bar data={chartData}/></div>
            <div><Doughnut data={chartData}/></div>
            <div><PolarArea data={chartData}/></div>
            <div><Radar data={chartData}/></div>
        </div>        
      </div>

      </>
    );
  }