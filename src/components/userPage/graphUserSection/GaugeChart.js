import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';
import Cookies from 'js-cookie';
import { GET_MONTHLY_SHIPMENTS} from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import moment from 'moment';


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


function GaugeChart(props){
  var shipmentsCurrentMonth = props.monthlyShipments.shipments;
  var totalTravels = shipmentsCurrentMonth.filter(obj => {
    return obj.status !== "in transit"
  });
  var alertTravels = shipmentsCurrentMonth.filter(obj => {
    return obj.status === "failed" || obj.status === "uncertain"
  });
  var ratioCurrentMonth = (alertTravels.length / totalTravels.length)*100
  const { error , loading , data} = useQuery(GET_MONTHLY_SHIPMENTS,{
    variables:{
        from_date: moment().subtract(2, 'M').format('DD-MM-YYYY'),
        to_date: moment().subtract(1, 'M').format('DD-MM-YYYY')
    }
  })
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  var shipmentsPreviousMonth = data.shipments;
  var totalTravelsPrev = shipmentsPreviousMonth.filter(obj => {
    return obj.status !== "in transit";
  });
  var alertTravelsPrev = shipmentsPreviousMonth.filter(obj => {
    return obj.status === "failed" || obj.status === "uncertain";
  });
  var ratioPrevMonth = (alertTravelsPrev.length / totalTravelsPrev.length)*100
  return (
        <GraphDiv>
        <Doughnut 
        data={{
            labels: [LabelTag1, LabelTag2],
            datasets: [
              {
                backgroundColor: [
                  '#adeecf',
                  '#9dad7f'
                ],
                hoverBackgroundColor: [
                '#00917c',
                '#184d47',
                ],
                data: [ratioCurrentMonth.toFixed(2), ratioPrevMonth.toFixed(2)]
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
