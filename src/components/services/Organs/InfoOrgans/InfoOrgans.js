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
  } from './InfoOrgans.elements';
import img1 from '../../../../images/searching.svg';


const InfoOrgans = () => {
    return (
            <>
                <InfoSec>
                    <Container>
                        <InfoRow>
                            <InfoColumn>
                                <TextWrapper>
                                    <Heading>Órganos</Heading>
                                    <Subtitle> 
                                    Nuestra misión es crear un nuevo estándar para la conservación y el transporte de órganos con registros confiables que permitan certificar la calidad y efectividad de los mismos, mejorando así,  los resultados de los pacientes en todo el mundo.
                                    Este sistema, el primero en su clase, proporciona un entorno con temperatura controlada, seguimiento en tiempo real y trazabilidad total. Diseñado para ser fácil de usar en entornos estresantes y de ritmo rápido donde no hay lugar para errores.
                                    </Subtitle>
                                    <List>
                                        <ListItem>Temperatura (Sensor Térmico Calibrable con Inercia Simulada)</ListItem>
                                        <ListItem>Seguimiento en Tiempo Real (GPS)</ListItem>
                                        <ListItem>Maltrato (Acelerómetro)</ListItem>
                                        <ListItem>Aseguramiento de la Carga (Apertura de Tapa)</ListItem>
                                        <ListItem>Daños por mal transporte(Vibraciones)</ListItem>
                                        <ListItem>Configuración de Alerta </ListItem>
                                    </List>
                                    <Subtitle>
                                    THIS es la solución a la conservación y el transporte de órganos de manera segura y eficiente con seguimiento en tiempo real que permite optimizar la logística, sobre todo al momento del arribo del órgano al quirófano. 
                                    </Subtitle>
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

export default InfoOrgans
