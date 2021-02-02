import React from 'react'
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';
import Cookies from 'js-cookie';

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


var MainTitle = Cookies.get('locale') === 'en' ? 'Current Month' : 'Mes Actual';
var LabelTag1 = Cookies.get('locale') === 'en' ? 'No alerts' : 'Sin alertas';
var LabelTag2 = Cookies.get('locale') === 'en' ? 'Alerts' : 'Con alertas';



const PieChart = () => {
    return (
        <GraphDiv>
        <Pie 
        data={{
            labels: [LabelTag1, LabelTag2],
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
            text: MainTitle,
            display:true,
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
