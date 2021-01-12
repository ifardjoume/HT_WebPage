import React from 'react'
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';


const GraphDiv = styled.div`
width:400px;
height:200px;
margin:50px;
@media screen and (max-width: 768px) {
    width:350px;
    height:350px;
  }

`;

const PieChart = () => {
    return (
        <GraphDiv>
        <Pie 
        data={{
            labels: ['Viajes correctos', 'Viajes con alertas'],
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
          title:{
            display:true,
            fontSize:20
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

export default PieChart
