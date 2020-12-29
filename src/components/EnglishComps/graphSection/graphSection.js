import React from 'react';
import {
    GraphContainer,
    GraphTitle,
} from '../../graphSection/graphSection.elements'
import Graph from '../../graphSection/Graph';


const graphSection = () => {
    return (
        <GraphContainer>
        <GraphTitle>Thermal Performance THIS vs. Traditional</GraphTitle>
        <Graph />
        </GraphContainer>
    )
}

export default graphSection
