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
                <Description>Viajes<br/> Trazados</Description>
            </Card>
            <Card>
                <NumberHeader>8</NumberHeader>
                <Description>Viajes<br/> con Alertas</Description>
            </Card>
            <Card>
                <NumberHeader>50%</NumberHeader>
                <Description>Ratio</Description>
            </Card>
            <Card>
                <NumberHeader>30</NumberHeader>
                <Description>Oportunidad de mejoras</Description>
            </Card>
            </StadisticWrapper>
        </StadisticsDiv>
        </>
    )
}

export default StadisticsHeader
