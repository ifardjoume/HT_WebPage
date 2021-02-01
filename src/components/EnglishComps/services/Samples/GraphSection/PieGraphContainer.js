import React from 'react';

import {
    InfoSec,
    InfoRow,
    Heading,
    Subtitle
  } from '../../../../services/Samples/GraphSection/PieGraph.elements';
import PieChart from './PieChart';
import { Container} from '../../../../../globalStyles';


const PieGraphContainer = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                                <Heading>Do you think you could improve the quality and the way of transporting samples in your laboratory?</Heading>
                                <Subtitle>56 answers</Subtitle>
                                <PieChart/>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default PieGraphContainer
