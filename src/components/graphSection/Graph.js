import React from 'react'
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';


const GraphDiv = styled.div`
background-color:#fafafa;
@media screen and (max-width: 768px) {
    width:350px;
    height:350px
  }

`;



const Graph = () => {
    return (
        <GraphDiv>
            <Line 
            data={{
                labels: ['0', '5', '10', '15', '20'],
                datasets: [{
                    label: 'THIS',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: 'blue',
                    borderColor: 'white',
                    borderWidth: 1
                },
                {
                    label: 'Tradicional',
                    data: [13, 25, 8, 9, 5],
                    backgroundColor: 'orange',
                    borderColor: 'red',
                    borderWidth: 1
                }
            
            ]

            }}
            width={600}
            height={500}
            options={{
                backgroundColor:'white',
                mantainAspectRatio:false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            
            }}
            
            
            />
        </GraphDiv>
    )
}

export default Graph
