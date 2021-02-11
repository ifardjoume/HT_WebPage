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

function getDate(dateTag){

  var dataStamp = new Date(dateTag)
  let dataFormat = new Intl.DateTimeFormat('es-AR', {
      month: '2-digit',
      day: '2-digit'
  }).format(dataStamp)
  return (
     dataFormat
  )
}


const StackedBarsChart = (props) => {
      var shipments = props.monthlyShipments.shipments.filter(obj => {
        return obj.status !== "in transit"
      });
      var dateLabels = [];
      for(let i = 0; i < shipments.length; i++){
        dateLabels.push(getDate(shipments[i].arrival))
    }
    dateLabels.sort((a, b) => b.joinDate > a.joinDate ? 1: -1);
    const uniqueSet = new Set(dateLabels)
    const backToArray = [...uniqueSet]
    var badShipments =  []
    var goodShipments = []
    var doubtfulShipments = []
    for(let i = 0; i < shipments.length; i++){
      var DateArray = []
      if(getDate(shipments[i].arrival) === getDate(shipments[i++].arrival) ){
        switch(shipments[i].status){
          case "successful":
            DateArray.push(shipments[i])
            DateArray.push(shipments[i++])
            goodShipments.push(DateArray.length)
            break
          case "failed":
            DateArray.push(shipments[i])
            DateArray.push(shipments[i++])
            badShipments.push(DateArray.length)
            break
          case "uncertain":
            DateArray.push(shipments[i])
            DateArray.push(shipments[i++])
            doubtfulShipments.push(DateArray.length)
            break
        }
      }else{
        switch(shipments[i].status){
          case "successful":
            DateArray.push(shipments[i])
            goodShipments.push(DateArray.length)
            break
          case "failed":
            DateArray.push(shipments[i])
            badShipments.push(DateArray.length)
            break
          case "uncertain":
            DateArray.push(shipments[i])
            doubtfulShipments.push(DateArray.length)
            break
        }
      }
      
  }
  return (
        <GraphDiv>
            <Bar 
            data= {{
                labels: backToArray,
                datasets: [
                  {
                    label: LabelTag1,
                    backgroundColor: '#adeecf',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: '#00917c',
                    data: goodShipments
                  },
                  {
                    label: LabelTag2,
                    backgroundColor: '#ffc764',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: '#ffe227',
                    data: doubtfulShipments
                  },
                  {
                    label: LabelTag3,
                    backgroundColor: '#ee9595',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: '#a9294f',
                    data: badShipments
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
