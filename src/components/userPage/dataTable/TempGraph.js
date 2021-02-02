import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import { GET_SHIPMENT_TEMP } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import Cookies from 'js-cookie';


var MainTag = Cookies.get('locale') === 'en' ? 'Shipment Temperature' : 'Temperatura del Envio';
var LabelTag1 = Cookies.get('locale') === 'en' ? "Temperature (°C)" : 'Temperatura (°C)';
var LabelTag2 = Cookies.get('locale') === 'en' ? 'Time (Hours)' : 'Tiempo (Horas)';

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
                    label: MainTag,
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
                            labelString: LabelTag1,
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
                          labelString: LabelTag2
                        }
                      }],
                }
            
            }}
            
            
            /> 
        </div>
    )
}



export default TempGraph
