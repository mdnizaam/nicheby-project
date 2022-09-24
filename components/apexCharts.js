import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ApexChart() {
    var data = {
        series: [{
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
                type: 'line',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }],
        options: {
            chart: {
                height: '180%',
                type: 'line',
                sparkline: {
                    enabled: false,
                },
                zoom: {
                    enabled:false
                },
                toolbar: {
                    show: false
                  },
            },
            stroke: {
                width: [0, 4],
                colors:['#707070']
            },
            legend: {
                show: false
            },
            markers: {
                size: 3,
                colors:"#FFFFFF",
                strokeColors:'#707070'
            } ,
            tooltip: {
                enabled: false
            },
         
            grid: {
                show: false,
            } ,
            fill: {
                colors: ['#084D82'], 
            } ,
            xaxis:{
                show:true,
                rotate:0,
                categories: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

            }
        },
    };
    return(
        <div id="chart">
            <div className="mixed-chart">
                <ReactApexChart options={data.options} series={data.series} type="line" height="180%"/>
            </div>
            
        </div>
    )
}