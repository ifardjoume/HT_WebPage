import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';
import Cookies from 'js-cookie';

const GraphDiv = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius:20px;
  padding:20px;
  @media screen and (max-width: 768px) {
    width:350px;
    height:350px
  }
`;

var MainTitle = Cookies.get('locale') === 'en' ? 'Ratio Comparison' : 'Comparación de Ratios';
var LabelTag1 = Cookies.get('locale') === 'en' ? 'Actual Ratio' : 'Ratio Actual';
var LabelTag2 = Cookies.get('locale') === 'en' ? 'Previous Month Ratio' : 'Ratio Mes Anterior';


const GaugeChart = () => {
    return (
        <GraphDiv>
        <Doughnut 
        data={{
            labels: [LabelTag1, LabelTag2],
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
            text: MainTitle,
            display:true,
            fontSize:18
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
