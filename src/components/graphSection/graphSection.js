import React from 'react';
import Image1 from '../../images/GraphOK.jpg';
import Graph from './Graph';
import {
    GraphContainer,
    GraphTitle,
    GraphImage
} from './graphSection.elements'


const graphSection = () => {
    return (
        <GraphContainer>
        <GraphTitle>Performance Térmica THIS vs. Tradicional</GraphTitle>
        <GraphImage src={Image1} />
        {/* <Graph /> */}
        </GraphContainer>
    )
}

export default graphSection
