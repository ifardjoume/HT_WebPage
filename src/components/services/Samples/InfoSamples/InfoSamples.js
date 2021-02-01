import React from 'react'
import { Container} from '../../../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    Img,
    ImgWrapper,
    List,
    ListItem
  } from './InfoSamples.elements';
import PieChart from '../GraphSection/PieChart';

const InfoSamples = () => {
    return (
            <>
                <InfoSec>
                    <Container>
                        <InfoRow>
                            <InfoColumn>
                                <TextWrapper>
                                    <Heading>Muestras Biológicas</Heading>
                                    <Subtitle> 
                                    Sabemos que el 70% de los errores ocurren en la etapa preanalítica.
                                    Nuestro estudio muestra que casi el 90% de los encuestados saben que podrían mejorar aún más la calidad y
                                    la forma de transporte de muestras en su laboratorio. Con una especial preocupación en:  
                                    </Subtitle>
                                    <List>
                                        <ListItem>Temperatura</ListItem>
                                        <ListItem>Tiempo</ListItem>
                                        <ListItem>Golpes / Maltrato</ListItem>
                                        <ListItem>Muestras Dañadas</ListItem>
                                        <ListItem>Configuración de Alerta </ListItem>
                                    </List>
                                </TextWrapper>
                            </InfoColumn>
                            <InfoColumn>
                                <ImgWrapper>
                                    <PieChart />
                                </ImgWrapper>
                            </InfoColumn>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </>            
        
    )
}

export default InfoSamples
