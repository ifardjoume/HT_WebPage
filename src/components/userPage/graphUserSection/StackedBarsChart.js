import React from 'react'
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';

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



const StackedBarsChart = () => {
    return (
        <GraphDiv>
            <Bar 
            data= {{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Viajes correctos',
                    backgroundColor: '#adeecf',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: '#00917c',
                    data: [65, 59, 80, 81, 56, 55, 40]
                  },
                  {
                    label: 'Viajes dudosos',
                    backgroundColor: '#ffc764',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: '#a9294f',
                    data: [4, 7, 15, 14, 8, 5, 20]
                  },
                  {
                    label: 'Viajes con alertas',
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
