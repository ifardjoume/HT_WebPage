import React from 'react'
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';


const GraphDiv = styled.div`
  //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius:20px;
  display:flex;
  align-items:center;
  justify-content:center;
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
            labels: ['We are working on it',
            'We still haven´t figured it out',
            'We don´t need to improve on it'],
            datasets: [
              {
                backgroundColor: [
                  '#1687a7',
                  '#ff8585',
                  '#f9f871'  
                ],
                hoverBackgroundColor: [
                '#276678',
                '#ff4646',
                '#ffc75f'
                ],
                data: [25, 64.3, 10.7]
              }
            ]
          }}
          width={600}
          height={500}
        options={{
          responsive:true,
          maintainAspectRatio: false,
          title:{
            text:"Mes Actual",
            display:false,
            fontSize:18
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
