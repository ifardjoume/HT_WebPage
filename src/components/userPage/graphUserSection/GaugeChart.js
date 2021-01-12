import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';

const GraphDiv = styled.div`
width:400px;
height:200px;
@media screen and (max-width: 768px) {
    width:350px;
    height:350px
  }
`;

const GaugeChart = () => {
    return (
        <GraphDiv>
        <Doughnut 
        data={{
            labels: ['Viajes realizados', 'Viajes con alertas'],
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: [
                  '#adeecf',
                  '#ee9595'
                ],
                hoverBackgroundColor: [
                '#00917c',
                '#a9294f',
                ],
                data: [80, 20]
              }
            ]
          }}
        options={{
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
          title:{
            display:true,
            fontSize:20
          },
          tooltip: {
            enabled: false
        },
          legend:{
            display:true,
            position:'right'
          }
        }} 
        />
        </GraphDiv>
    )
}

export default GaugeChart
