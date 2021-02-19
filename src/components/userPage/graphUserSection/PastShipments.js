import React from 'react'
import { GET_MONTHLY_PAST_SHIPMENTS } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import moment from 'moment';
import Cookies from 'js-cookie';

var previousMonth0 = moment().format('YYYY-MM-DD');
var previousMonth1 = moment().subtract(1, 'M').format('YYYY-MM-DD');
var previousMonth2 = moment().subtract(2, 'M').format('YYYY-MM-DD');
var previousMonth3 = moment().subtract(3, 'M').format('YYYY-MM-DD');
var previousMonth4 = moment().subtract(4, 'M').format('YYYY-MM-DD');

var localeLanguage = Cookies.get('locale') === 'en' ? 'en' : 'es';

export function getMonths() {
    var monthNameArray = []
    var monthArray = [previousMonth0,previousMonth1,previousMonth2,previousMonth3,previousMonth4];
    const formatter = new Intl.DateTimeFormat(localeLanguage, { month: 'long' });
    monthArray.map((month) => {
        const monthName = formatter.format(new Date(month));
        monthNameArray.push(monthName)
    })
    return monthNameArray
}


function getPastShipments(arrayMonth){
    var shipmentsUncertain = [];
    var shipmentsFailed = [];
    var shipmentsSuccessful = [];
    for(let i= 0; i < arrayMonth.length; i++){
    var shipmentsCurrentMonthFailed = arrayMonth[i].shipments.filter(obj => {
        return obj.status === "failed";
        })
        shipmentsFailed.push(shipmentsCurrentMonthFailed.length)
    var shipmentsCurrentMonthUncertain = arrayMonth[i].shipments.filter(obj => {
        return obj.status === "uncertain";
        })
        shipmentsUncertain.push(shipmentsCurrentMonthUncertain.length)
    var shipmentsCurrentMonthSuccessful = arrayMonth[i].shipments.filter(obj => {
        return obj.status === "successful"
        })
        shipmentsSuccessful.push(shipmentsCurrentMonthSuccessful.length)
    }
    return {
        success : shipmentsSuccessful,
        uncertain : shipmentsUncertain,
        failed : shipmentsFailed
    }
}

const PastShipments = () => {
    const res1  = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
        variables:{
            from_date: previousMonth1,
            to_date: moment().startOf('month').format("YYYY-MM-DD"),
          }
      })
      const res2 = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
        variables:{
            from_date: previousMonth2,
            to_date: previousMonth1,
          }   
      })
      const res3 = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
        variables:{
            from_date: previousMonth3,
            to_date: previousMonth2,
          }   
      })
      const res4 = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
        variables:{
            from_date: previousMonth4,
            to_date: previousMonth3,
          }   
      })
      var arrayQuery = [res1.data,res2.data,res3.data,res4.data]
    return (
        getPastShipments(arrayQuery)
    )
}

export default PastShipments