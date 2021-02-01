import React from 'react';

import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    Img,
    ImgWrapper
  } from './PieGraph.elements';
import PieChart from './PieChart';
import { Container} from '../../../../globalStyles';


const PieGraphContainer = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                                <Heading>¿Piensa que podría mejorar aún más la calidad y la forma de transporte de muestras de su laboratorio?</Heading>
                                <Subtitle>56 respuestas</Subtitle>
                                <PieChart/>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default PieGraphContainer
