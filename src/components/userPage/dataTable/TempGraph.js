import React from 'react'
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';
import { GET_SHIPMENT_TEMP } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";

var timeFormat = 'HH:mm';


function TempGraph(props){
    const { loading, error, data } = useQuery(GET_SHIPMENT_TEMP,{
        variables:{ shipment_id: props.shipment}
    });
    console.log(props.shipment);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
           <Line 
            data={{
                labels: ['00:00',"00:01","00:03","00:05","00:07","00:10","00:15","00:20","00:25","00:30","00:35","00:40","00:50","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","21:00","22:00","23:00","24:00"],
                datasets: [{
                    label: 'Shipment Temperature',
                    data: [data],
                    backgroundColor: 'transparent',
                    borderColor: 'blue',
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
                parsing:{
                    xAxisKey:"temperature_reading.value"
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
        </div>
    )
}



export default TempGraph
