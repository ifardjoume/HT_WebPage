import React from 'react';
import { 
    StadisticsDiv,
    StadisticWrapper
 } from './StadisticsHeader.elements';
import { GET_SHIPMENTS } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import CardOnHover from './CardOnHover';
import Cookies from 'js-cookie';

var CardDescription1 = Cookies.get('locale') === 'en' ? 'Trazed Trips' : 'Viajes Trazados';
var CardDescription2 = Cookies.get('locale') === 'en' ? 'Alerted Trips' : 'Viajes con Alertas';
var CardDescription3 = Cookies.get('locale') === 'en' ? 'Improvement Chances' : 'Oportunidad de mejoras';
var CardHoverDescription1 = Cookies.get('locale') === 'en' ? 'Trazed Trips Current Month' : 'Viajes trazados mes corriente';
var CardHoverDescription2 = Cookies.get('locale') === 'en' ? 'Alerted Trips Current Month' : 'Viajes con alertas mes corriente';
var CardHoverDescription3 = Cookies.get('locale') === 'en' ? 'Alerts / Total Trips' : 'Alertas / Totales';
var CardHoverDescription4 = Cookies.get('locale') === 'en' ? 'Observed Shipments Current Month' : 'Envios observados mes corriente';


function StadisticsHeader(){
    const { loading, error, data } = useQuery(GET_SHIPMENTS);
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

    return (
        <StadisticsDiv>
            <StadisticWrapper>
            <CardOnHover
                number={totalTravels.length}
                description= {CardDescription1}
                hoverDescription= {CardHoverDescription1}
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
