import React,{useState} from 'react'
import { 
    GraphsDiv
 } from './GraphUserSection.elements';
import PieChart from './PieChart';
import GaugeChart from './GaugeChart';
import StackedBarsChart from './StackedBarsChart';
import { GET_MONTHLY_SHIPMENTS, SHIPMENTS_UPDATED_SUBSCRIPTION } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import moment from 'moment';

function GraphUserSection(){
    const [state,setState] = useState({
        subscribeToUpdatedShipments: false
      });
    const { error , loading , data, subscribeToMore} = useQuery(GET_MONTHLY_SHIPMENTS,{
        variables:{
            from_date: moment().startOf('month').format("YYYY-MM-DD"),
            to_date: moment().format('YYYY-MM-DD'),
        }
    })
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var myData = data;
    function shipmentsSubscription(){   
        if(state.subscribeToUpdatedShipments) return null
        subscribeToMore({
        document: SHIPMENTS_UPDATED_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if(!subscriptionData.data){
                return prev
            }else{
            const updatedShipment = subscriptionData.data.shipmentUpdated;
            const previousShipments = prev.shipments;
            var shipmentsUpdated = Object.assign({},prev,{
                shipments:
                    [...previousShipments, updatedShipment]
            });
            return shipmentsUpdated
            }
        }
        })
        setState({
            subscribeToUpdatedShipments:true
        })
    }
    return (
        <GraphsDiv>
                <PieChart monthlyShipments={myData} 
                subscribeToUpdatedShipments={() =>{shipmentsSubscription()}
            } />
                <GaugeChart monthlyShipments={myData} 
                subscribeToUpdatedShipments={() =>{shipmentsSubscription()}    
            }/>
           {/*  <StackedBarsChart monthlyShipments={myData} /> */}
        </GraphsDiv>
    )
}

export default GraphUserSection
