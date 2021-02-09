import React from 'react'
import { Bar } from 'react-chartjs-2';
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
    height:350px
  }
`;

var LabelTag1 = Cookies.get('locale') === 'en' ? 'Correct' : 'Correcto';
var LabelTag2 = Cookies.get('locale') === 'en' ? 'Observed' : 'Observados';
var LabelTag3 = Cookies.get('locale') === 'en' ? 'Alerts' : 'Con alertas';


const StackedBarsChart = (props) => {
  var shipments = props.monthlyShipments.shipments;
  
  return (
        <GraphDiv>
            <Bar 
            data= {{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: LabelTag1,
                    backgroundColor: '#adeecf',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: '#00917c',
                    data: [65, 59, 80, 81, 56, 55, 40]
                  },
                  {
                    label: LabelTag2,
                    backgroundColor: '#ffc764',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: '#ffe227',
                    data: [4, 7, 15, 14, 8, 5, 20]
                  },
                  {
                    label: LabelTag3,
                    backgroundColor: '#ee9595',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: '#a9294f',
                    data: [45, 79, 10, 41, 16, 85, 20]
                  }
                ]
            }}
            width={300}
            height={300}
            options= {{
              responsive:true,
              maintainAspectRatio: false,
              legend:{
                display:true,
                position:'bottom'
              }
                }
            }
            />
        </GraphDiv>
    )
}

export default StackedBarsChart
