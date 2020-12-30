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
import img1 from '../../../../images/searching.svg';


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
                                        Nuestro estudio muestra que al 90% de los encuestados les preocupa: 
                                    </Subtitle>
                                    <List>
                                        <ListItem>Temperatura (Sensor Térmico Calibrable con Inercia Simulada)</ListItem>
                                        <ListItem>Tiempo (Registro Cierre de Tapa y Apertura)</ListItem>
                                        <ListItem>Maltrato (Acelerómetro)</ListItem>
                                        <ListItem>Pérdida de mtra (Apertura de Tapa)</ListItem>
                                        <ListItem>Muestras Dañadas (Vibraciones)</ListItem>
                                        <ListItem>Configuración de Alerta </ListItem>
                                    </List>
                                </TextWrapper>
                            </InfoColumn>
                            <InfoColumn>
                                <ImgWrapper>
                                    <Img src={img1} alt="product" />
                                </ImgWrapper>
                            </InfoColumn>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </>            
        
    )
}

export default InfoSamples
