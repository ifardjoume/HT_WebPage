import React,{ useState } from 'react'
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';
import Cookies from 'js-cookie';
import {getPastShipments, getMonths } from './PastShipments';
import { GET_MONTHLY_PAST_SHIPMENTS } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import moment from 'moment';

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
var LabelTag2 = Cookies.get('locale') === 'en' ? 'To Be Reviewed' : 'Observados';
var LabelTag3 = Cookies.get('locale') === 'en' ? 'Alerts' : 'Con alertas';


var previousMonth1 = moment().subtract(1, 'M').format('YYYY-MM-DD');
var previousMonth2 = moment().subtract(2, 'M').format('YYYY-MM-DD');
var previousMonth3 = moment().subtract(3, 'M').format('YYYY-MM-DD');
var previousMonth4 = moment().subtract(4, 'M').format('YYYY-MM-DD');


const StackedBarsChart = (props) => {
  var shipmentsCurrentMonth = props.monthlyShipments.shipments
  const [newData, setNewData] = useState(shipmentsCurrentMonth);
  var shipmentsCurrentMonthFailed = newData.filter(obj => {
        return obj.status === "failed";
    })
  var shipmentsCurrentMonthUncertain = newData.filter(obj => {
        return obj.status === "uncertain";
    })
  var shipmentsCurrentMonthSuccessful = newData.filter(obj => {
        return obj.status === "successful";
    })
    var arrayQueryPastShipments =  []
    const { loading , error,data: res1}  = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
      variables:{
          from_date: previousMonth1,
          to_date: moment().startOf('month').format("YYYY-MM-DD")
      }
    })
    arrayQueryPastShipments.push(res1)
    const { loading:queryLoading2 , error:queryError2,data:res2}  = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
      variables:{
          from_date: previousMonth2,
          to_date: previousMonth1
        } 
    })
    arrayQueryPastShipments.push(res2)
    const { loading:queryLoading3 , error:queryError3,data:res3} = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
      variables:{
          from_date: previousMonth3,
          to_date: previousMonth2
        }   
    })
    arrayQueryPastShipments.push(res3)
    const { loading:queryLoading4 , error:queryError4, data:res4} = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
      variables:{
          from_date: previousMonth4,
          to_date: previousMonth3
        }  
    })
    arrayQueryPastShipments.push(res4)
  if (queryLoading4) return 'Loading...';
  if (queryError4) return `Error! ${error.message}`;
  var shipmentsUncertain = [];
  var shipmentsFailed = [];
  var shipmentsSuccessful = [];
  for(var q = 0; q < arrayQueryPastShipments.length; q++){
  var shipmentsMonthFailed = arrayQueryPastShipments[q].shipments.filter(obj => {
      return obj.status === "failed";
      })
      shipmentsFailed.push(shipmentsMonthFailed.length)
  var shipmentsMonthUncertain = arrayQueryPastShipments[q].shipments.filter(obj => {
      return obj.status === "uncertain";
      })
      shipmentsUncertain.push(shipmentsMonthUncertain.length)
  var shipmentsMonthSuccessful = arrayQueryPastShipments[q].shipments.filter(obj => {
      return obj.status === "successful";
      })
      shipmentsSuccessful.push(shipmentsMonthSuccessful.length)
  }
  var badShipments =  shipmentsFailed
  badShipments.unshift(shipmentsCurrentMonthFailed.length)
  badShipments.reverse()
  var goodShipments = shipmentsSuccessful
  goodShipments.unshift(shipmentsCurrentMonthSuccessful.length)
  goodShipments.reverse()
  var doubtfulShipments = shipmentsUncertain
  doubtfulShipments.unshift(shipmentsCurrentMonthUncertain.length)
  doubtfulShipments.reverse()
  return (
        <GraphDiv>
            <Bar 
            data= {{
                labels: getMonths(),
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
