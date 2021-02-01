import React, { useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    TableContainer,
    TableDiv
} from './DataTable.elements';
import DataTableInTransit from './DataTableInTransit';
import DataTableReceived from './DataTableReceived';
import { GET_SHIPMENTS,SHIPMENTS_IN_TRANSIT_SUBSCRIPTION } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";



function DataPackagesTable() {
    const [state,setState] = useState({
        subscribeToNewShipments: false
    });
    const { error , loading , data, subscribeToMore } = useQuery(GET_SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var myData = data;
    return (
        <TableContainer>
            <TableDiv>
                <DataTableInTransit
                    subscribeToNewShipments={() =>{
                        if(state.subscribeToNewShipments) return null
                        subscribeToMore({
                        document: SHIPMENTS_IN_TRANSIT_SUBSCRIPTION,
                        updateQuery: (prev, { subscriptionData }) => {
                            console.log(subscriptionData.data);
                            if(!subscriptionData.data){
                                return prev
                            }else{
                            const newShipment = subscriptionData.data.shipmentAdded;
                            console.log(newShipment);
                            const previousShipments = prev.shipments;
                            var shipmentsUpdated = Object.assign({},prev,{
                                shipments:
                                    [...previousShipments, newShipment]
                            });
                            console.log(shipmentsUpdated);
                            return shipmentsUpdated
                            }
                        }
                        })
                        setState({
                            subscribeToNewShipments:true
                        })
                    }
                }
                  shipmentsInTransit={myData}
                />
            </TableDiv>
            <TableDiv>
                <DataTableReceived shipmentsReceived={myData} />
            </TableDiv>
        </TableContainer>
    )
}

export default DataPackagesTable