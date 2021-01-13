import React from 'react'
import { 
    GraphsDiv,
    GraphDiv
 } from './GraphUserSection.elements';
import PieChart from './PieChart';
import GaugeChart from './GaugeChart';
import StackedBarsChart from './StackedBarsChart';


const GraphUserSection = () => {
    return (
        <GraphsDiv>
                <PieChart />
                <GaugeChart />
                <StackedBarsChart />
        </GraphsDiv>
    )
}

export default GraphUserSection
