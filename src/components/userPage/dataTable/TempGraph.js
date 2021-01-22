import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import { GET_SHIPMENT_TEMP } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";

//var timeFormat = 'HH:mm';


function TempGraph(props){
    const { loading, error, data } = useQuery(GET_SHIPMENT_TEMP,{
        variables:{ shipment_id: props.shipment}
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var myData = data.shipment.temperature_readings
    var tempReadings = [];
    var dataLabels = [];
    for(let i = 0; i < myData.length; i++){
        tempReadings.push(myData[i].value)
    }
    for(let i = 0; i < myData.length; i++){
        dataLabels.push(myData[i].timestamp)
    }
    return (
        <div>
           <Line 
            data={{
                labels: dataLabels,
                datasets: [{
                    label: 'Shipment Temperature',
                    data: tempReadings,
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
                    id:"value"
                },
                display:true,
                backgroundColor:'white',
                mantainAspectRatio:false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
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
                            /* parser: timeFormat,
                            tooltipFormat:'HH:mm',
                            unit: 'minute',
                            unitStepSize: 300,
                            displayFormats: {
                                'minute': 'HH:mm'
                            } */
                        },
                        ticks: {
                            source: 'auto',
                            beginAtZero:false
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
