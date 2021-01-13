import React from 'react';
import { 
    StadisticsDiv,
    Card,
    Description,
    NumberHeader,
    Separator,
    StadisticWrapper
 } from './StadisticsHeader.elements';


const StadisticsHeader = () => {
    return (
        <>
        <StadisticsDiv>
            <StadisticWrapper>
            <Card>
                <NumberHeader>80</NumberHeader>
                <Description>Viajes<br/> Mensuales</Description>
            </Card>
            <Card>
                <NumberHeader>8</NumberHeader>
                <Description>Viajes Mensuales<br/> con Alertas</Description>
            </Card>
            <Card>
                <NumberHeader>50%</NumberHeader>
                <Description>Total <br/>en Uso</Description>
            </Card>
            <Card>
                <NumberHeader>30 hs</NumberHeader>
                <Description>Tiempo viaje <br/> Mensual Acumulado</Description>
            </Card>
            </StadisticWrapper>
        </StadisticsDiv>
        </>
    )
}

export default StadisticsHeader
