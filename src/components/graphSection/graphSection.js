import React from 'react';
import Graph from './Graph';
import {
    GraphContainer,
    GraphTitle,
} from './graphSection.elements'


const graphSection = () => {
    return (
        <GraphContainer>
        <GraphTitle>Performance Térmica THIS vs. Tradicional</GraphTitle>
        <Graph />
        </GraphContainer>
    )
}

export default graphSection
