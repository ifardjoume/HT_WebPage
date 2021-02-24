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
    var monthArray = [previousMonth4,previousMonth3,previousMonth2,previousMonth1,previousMonth0];
    const formatter = new Intl.DateTimeFormat(localeLanguage, { month: 'long' });
    monthArray.map((month) => {
        const monthName = formatter.format(new Date(month));
        monthNameArray.push(monthName)
    })
    return monthNameArray
}



/* export const getPastShipments = async (arrayMonth)  => {
    var shipmentsUncertain = [];
    var shipmentsFailed = [];
    var shipmentsSuccessful = [];
    for(let q = 0; q < arrayMonth.length; q++){
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
    var result = {
        success : shipmentsSuccessful,
        uncertain : shipmentsUncertain,
        failed : shipmentsFailed
    }
    return result
} */