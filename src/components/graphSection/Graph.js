import React from 'react'
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';


const GraphDiv = styled.div`
background-color:#fafafa;
@media screen and (max-width: 768px) {
    width:350px;
    height:350px
  }

`;
var timeFormat = 'HH:mm';


const Graph = () => {
    return (
        <GraphDiv>
            <Line 
            data={{
                labels: ['00:00',"00:01","00:03","00:05","00:07","00:10","00:15","00:20","00:25","00:30","00:35","00:40","00:50","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","21:00","22:00","23:00","24:00"],
                datasets: [{
                    label: 'THIS',
                    data: [24.8,16.6,8.4,4.9,3,3.2,3.8,3.6,3.5,3.5,3.5,3.4,3.4,3.5,3.6,3.6,3.6,3.6,3.6,3.6,3.6,3.6,3.7,3.6,3.7,3.8,3.7,3.7,3.7,3.7,3.7,3.8,3.8,3.9,4.2],
                    backgroundColor: 'transparent',
                    borderColor: 'blue',
                    borderWidth: 1
                },
                {
                    label: 'Traditional',
                    data: [23.5,23.4,23.1,23.2,23,22.1,19.9,15.2,9.9,8.5,7.9,7.5,6.4,7.1,6.8,6.6,7,6.9,7.2,7.5,7.9,8.5,8.7,9.2,8.9,8.8,9.3,10.2,10.8,11.1,11.4,11.1,11.5,15,18],
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 1
                }
            
            ]

            }}
            width={750}
            height={500}
            options={{
                elements: {
                    point:{
                        radius: 0
                    }
                },
                display:true,
                backgroundColor:'white',
                mantainAspectRatio:false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            fontSize: 14,
                            labelString: "Temperature (°C)",
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        time: {
                            parser: timeFormat,
                            tooltipFormat:'HH:mm',
                            unit: 'minute',
                            unitStepSize: 300,
                            displayFormats: {
                                'minute': 'HH:mm'
                            }
                        },
                        ticks: {
                            source: 'auto',
                            beginAtZero:true
                        },
                        display: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Time (Hours)'
                        }
                      }],
                }
            
            }}
            
            
            />
        </GraphDiv>
    )
}

export default Graph
