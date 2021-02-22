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


export const getPastShipments = async ()  => {
    var shipmentsUncertain = [];
    var shipmentsFailed = [];
    var shipmentsSuccessful = [];
        const arrayMonth = PastShipments()
        console.log("month",arrayMonth)
    for(let q = 0; q < arrayMonth.length; q++){
        console.log("month[i]",arrayMonth[q])
        console.log("q",q)
        console.log("1er mes", arrayMonth[0].shipments)
    var shipmentsCurrentMonthFailed = await arrayMonth[q].shipments.filter(obj => {
        return obj.status === "failed";
        
        })
        shipmentsFailed.push(shipmentsCurrentMonthFailed.length)
    var shipmentsCurrentMonthUncertain = await arrayMonth[q].shipments.filter(obj => {
        return obj.status === "uncertain";
        })
        shipmentsUncertain.push(shipmentsCurrentMonthUncertain.length)
    var shipmentsCurrentMonthSuccessful = await arrayMonth[q].shipments.filter(obj => {
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
    const { data:res1, error: prevMonthError, loading: prevMonthLoading }  = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
        variables:{
            from_date: previousMonth1,
            to_date: moment().startOf('month').format("YYYY-MM-DD"),
          }
      })
      const { data:res2, error: prevMonthError2, loading: prevMonthLoading2 }  = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
        variables:{
            from_date: previousMonth2,
            to_date: previousMonth1,
          }   
      })
      const { data:res3, error: prevMonthError3, loading: prevMonthLoading3 } = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
        variables:{
            from_date: previousMonth3,
            to_date: previousMonth2,
          }   
      })
      const { data:res4, error: prevMonthError4, loading: prevMonthLoading4 } = useQuery(GET_MONTHLY_PAST_SHIPMENTS,{
        variables:{
            from_date: previousMonth4,
            to_date: previousMonth3,
          }   
      })
      var arrayQuery = [res1,res2,res3,res4]
      console.log(arrayQuery)
    return (
       arrayQuery
    )
}

export default PastShipments