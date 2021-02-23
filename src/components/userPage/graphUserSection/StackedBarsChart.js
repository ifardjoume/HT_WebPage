import React,{ useState } from 'react'
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import 'chartjs-adapter-moment';
import Cookies from 'js-cookie';
import PastShipments, {getPastShipments, getMonths } from './PastShipments';

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
  var badShipments
  var goodShipments
  var doubtfulShipments
  const pastShipments = PastShipments
  /* var badShipments =  pastShipments.failed.unshift(shipmentsCurrentMonthFailed.length);
  var goodShipments = pastShipments.success.unshift(shipmentsCurrentMonthSuccessful.length);
  var doubtfulShipments = pastShipments.uncertain.unshift(shipmentsCurrentMonthUncertain.length); */
  badShipments =  pastShipments.failed;
  goodShipments = pastShipments.success;
  doubtfulShipments = pastShipments.uncertain;
  console.log(badShipments)
  console.log(goodShipments)
  console.log(doubtfulShipments)
  console.log(pastShipments)
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
