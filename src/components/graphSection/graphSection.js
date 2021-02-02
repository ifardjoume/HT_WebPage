import React from 'react';
import Graph from './Graph';
import {
    GraphContainer,
    GraphTitle,
} from './graphSection.elements'
import { FormattedMessage } from "react-intl";

const graphSection = () => {
    return (
        <GraphContainer>
        <GraphTitle><FormattedMessage id="GraphSectionTitle" defaultMessage="Thermal Performance THIS vs. Traditional" /></GraphTitle>
        <Graph />
        </GraphContainer>
    )
}

export default graphSection
