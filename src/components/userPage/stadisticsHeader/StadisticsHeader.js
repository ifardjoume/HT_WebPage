import React,{useState} from 'react';
import { 
    StadisticsDiv,
    StadisticWrapper
 } from './StadisticsHeader.elements';
import { GET_MONTHLY_SHIPMENTS, SHIPMENTS_UPDATED_SUBSCRIPTION } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import CardOnHover from './CardOnHover';
import Cookies from 'js-cookie';
import moment from 'moment';

var CardDescription1 = Cookies.get('locale') === 'en' ? 'Trazed Trips' : 'Viajes Trazados';
var CardDescription2 = Cookies.get('locale') === 'en' ? 'Alerted Trips' : 'Viajes con Alertas';
var CardDescription3 = Cookies.get('locale') === 'en' ? 'Improvement Chances' : 'Oportunidad de mejoras';
var CardHoverDescription1 = Cookies.get('locale') === 'en' ? 'Trazed Trips Current Month' : 'Viajes trazados mes corriente';
var CardHoverDescription2 = Cookies.get('locale') === 'en' ? 'Alerted Trips Current Month' : 'Viajes con alertas mes corriente';
var CardHoverDescription3 = Cookies.get('locale') === 'en' ? 'Alerts / Total Trips' : 'Alertas / Totales';
var CardHoverDescription4 = Cookies.get('locale') === 'en' ? 'Observed Shipments Current Month' : 'Envios observados mes corriente';



function StadisticsHeader(){
    const [state,setState] = useState({
        subscribeToUpdatedShipments: false
      });
    const { loading, error, data, subscribeToMore } = useQuery(GET_MONTHLY_SHIPMENTS,{
        variables:{
            from_date: moment().subtract(1, 'M').format('YYYY-MM-DD'),
            to_date: moment().format('YYYY-MM-DD'),
        }
    })
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const myData = data.shipments;
    var alertTravels = myData.filter(obj => {
        return obj.status === "failed" || obj.status === "uncertain"
      });
    var totalTravels = myData.filter(obj => {
        return obj.status !== "in transit"
      });
      var doubtTravels = myData.filter(obj => {
        return obj.status === "uncertain"
      });
    var ratio = (alertTravels.length / totalTravels.length)*100

    function shipmentsSubcription() {
        if(state.subscribeToUpdatedShipments) return null
        subscribeToMore({
        document: SHIPMENTS_UPDATED_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if(!subscriptionData.data){
                return prev
            }else{
            const updatedShipment = subscriptionData.data.shipmentUpdated;
            const previousShipments = prev.shipments;
            var shipmentsUpdated = Object.assign({},prev,{
                shipments:
                    [...previousShipments, updatedShipment]
            });
            return shipmentsUpdated
            }
        }
        })
        setState({
            subscribeToUpdatedShipments:true
        })
    }
    return (
        <StadisticsDiv>
            <StadisticWrapper>
            <CardOnHover
                number={totalTravels.length}
                description= {CardDescription1}
                hoverDescription= {CardHoverDescription1}
                subscriptionToUpdatedShipments = {() => {shipmentsSubcription()}}
            />
            <CardOnHover
                number={alertTravels.length}
                description={CardDescription2}
                hoverDescription= {CardHoverDescription2}
            />
            <CardOnHover
                number={ratio.toFixed(2) + " %"}
                description="Ratio"
                hoverDescription= {CardHoverDescription3}
            />
            <CardOnHover
                number={doubtTravels.length}
                description={CardDescription3}
                hoverDescription= {CardHoverDescription4}
            />
            </StadisticWrapper>
        </StadisticsDiv>
    )
}

export default StadisticsHeader
