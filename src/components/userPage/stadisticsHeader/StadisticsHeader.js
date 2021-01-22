import React,{useState} from 'react';
import { 
    StadisticsDiv,
    Card,
    Description,
    NumberHeader,
    StadisticWrapper,
    StyledSpan
 } from './StadisticsHeader.elements';
import { GET_SHIPMENTS } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";


function StadisticsHeader(){
    const { loading, error, data } = useQuery(GET_SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const myData = data.shipments;
    console.log(data.shipments);
    var alertTravels = myData.filter(obj => {
        return obj.status === "failed" || obj.status === "uncertain"
      });
    var totalTravels = myData.filter(obj => {
        return obj.status !== "in transit"
      });
      var doubtTravels = myData.filter(obj => {
        return obj.status === "uncertain"
      });
    var ratio = alertTravels.length / totalTravels.length;
    return (
        <StadisticsDiv>
            <StadisticWrapper>
            <Card
            >
                <NumberHeader>{totalTravels.length}</NumberHeader>
                <Description>Viajes<br/> Trazados
                </Description>
            </Card>
            <Card>
                <NumberHeader>{alertTravels.length}</NumberHeader>
                <Description>Viajes<br/> con Alertas</Description>
            </Card>
            <Card>
                <NumberHeader>{ratio * 100}%</NumberHeader>
                <Description>Ratio</Description>
            </Card>
            <Card>
                <NumberHeader>{doubtTravels.length}</NumberHeader>
                <Description>Oportunidad de mejoras</Description>
            </Card>
            </StadisticWrapper>
        </StadisticsDiv>
    )
}

export default StadisticsHeader
