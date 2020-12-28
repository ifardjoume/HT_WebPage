import React from 'react';
import Image1 from '../../../images/GraphOK.jpg';
import {
    GraphContainer,
    GraphTitle,
    GraphImage
} from '../../graphSection/graphSection.elements'
import Graph from '../../graphSection/Graph';


const graphSection = () => {
    return (
        <GraphContainer>
        <GraphTitle>Thermal Performance THIS vs. Traditional</GraphTitle>
        {/* <GraphImage src={Image1} /> */}
        <Graph />
        </GraphContainer>
    )
}

export default graphSection
