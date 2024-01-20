import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'


const DonutChart = () => {
    const [state, setState] = useState({
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
    })
  return (
    <div className='mx-auto justify-center'>
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="donut" height={350} />
    </div>
    <div id="html-dist"></div>
  </div>
  )
}



export default DonutChart