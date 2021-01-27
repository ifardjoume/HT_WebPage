import React from 'react';
import { 
    StadisticsDiv,
    StadisticWrapper
 } from './StadisticsHeader.elements';
import { GET_SHIPMENTS } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import CardOnHover from './CardOnHover';

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
                description="Viajes Trazados"
                hoverDescription="Viajes trazados mes corriente"
            />
            <CardOnHover
                number={alertTravels.length}
                description="Viajes con Alertas"
                hoverDescription="Viajes con alertas mes corriente"
            />
            <CardOnHover
                number={ratio.toFixed(2) + " %"}
                description="Ratio"
                hoverDescription="Alertas / Totales"
            />
            <CardOnHover
                number={doubtTravels.length}
                description="Oportunidad de mejoras"
                hoverDescription="Envios observados mes corriente"
            />
            </StadisticWrapper>
        </StadisticsDiv>
    )
}

export default StadisticsHeader
