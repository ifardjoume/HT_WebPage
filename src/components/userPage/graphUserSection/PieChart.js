import React from 'react'
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';


const GraphDiv = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius:20px;
  padding:20px;
  margin:20px;
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
            labels: ['Sin alerta', 'Con alerta'],
            datasets: [
              {
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
          title:{
            display:true,
            fontSize:20
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

export default PieChart
