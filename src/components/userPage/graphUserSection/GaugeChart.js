import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';

const GraphDiv = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius:20px;
  padding:20px;
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
            labels: ['Ratio Actual', 'Ratio Mes Anterior'],
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
          width={300}
          height={300}
        options={{
            responsive:true,
            maintainAspectRatio: false,
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
            position:'bottom'
          }
        }} 
        />
        </GraphDiv>
    )
}

export default GaugeChart
