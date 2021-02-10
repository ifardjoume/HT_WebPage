import React from 'react'
import { 
    GraphsDiv
 } from './GraphUserSection.elements';
import PieChart from './PieChart';
import GaugeChart from './GaugeChart';
import StackedBarsChart from './StackedBarsChart';
import { GET_MONTHLY_SHIPMENTS} from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import moment from 'moment';

function GraphUserSection(){
    const { error , loading , data} = useQuery(GET_MONTHLY_SHIPMENTS,{
        variables:{
            from_date: moment().subtract(1, 'M').format('YYYY-MM-DD'),
            to_date: moment().format('YYYY-MM-DD'),
        }
    })
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var myData = data;
    return (
        <GraphsDiv>
                <PieChart monthlyShipments={myData} />
                <GaugeChart monthlyShipments={myData}/>
                <StackedBarsChart monthlyShipments={myData}/>
        </GraphsDiv>
    )
}

export default GraphUserSection
