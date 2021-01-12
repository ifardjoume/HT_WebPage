import React from 'react'
import { Bar } from 'react-chartjs-2';
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
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                  },
                  {
                    label: 'Viajes con alertas',
                    backgroundColor: '#ee9595',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    data: [45, 79, 10, 41, 16, 85, 20]
                  }
                ]
            }}
            options= {{
                }
            }
            />
        </GraphDiv>
    )
}

export default StackedBarsChart
