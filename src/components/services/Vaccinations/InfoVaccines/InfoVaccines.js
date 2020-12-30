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
  } from './InfoVaccines.elements';
import img1 from '../../../../images/searching.svg';


const InfoVaccines = () => {
    return (
            <>
                <InfoSec>
                    <Container>
                        <InfoRow>
                            <InfoColumn>
                                <TextWrapper>
                                    <Heading>Vacunas</Heading>
                                    <Subtitle> 
                                    Los últimos desarrollos mostraron la importancia del mantenimiento de la cadena de frío, asegurando la calidad y seguridad de las vacunas durante todo el transporte, con registros confiables que permitan certificar la calidad y efectividad de las mismas.
                                    THIS es la solución a la distribución segura y eficiente de las vacunas y todo tipo de medicamentos que requieran cadena de frío y seguimiento en tiempo real, asegurando durante el transporte:
                                    </Subtitle>
                                    <List>
                                        <ListItem>Temperatura (Sensor Térmico Calibrable con Inercia Simulada)</ListItem>
                                        <ListItem>Seguimiento en Tiempo Real (GPS))</ListItem>
                                        <ListItem>Maltrato (Acelerómetro)</ListItem>
                                        <ListItem>Aseguramiento de la Carga(Apertura de Tapa)</ListItem>
                                        <ListItem>Daños por Mal Transporte (Vibraciones)</ListItem>
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

export default InfoVaccines
