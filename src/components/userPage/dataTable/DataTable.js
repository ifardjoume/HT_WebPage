import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    TableContainer,
    TableDiv
} from './DataTable.elements';
import DataTableInTransit from './DataTableInTransit';
import DataTableReceived from './DataTableReceived';
import { GET_SHIPMENTS,SHIPMENTS_IN_TRANSIT_SUBSCRIPTION, SHIPMENTS_UPDATED_SUBSCRIPTION } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";



function DataPackagesTable() {
    const [state,setState] = useState({
        subscribeToNewShipments: false,
        subscribeToUpdatedShipments: false
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
                            if(!subscriptionData.data){
                                return prev
                            }else{
                            const newShipment = subscriptionData.data.shipmentAdded;
                            const previousShipments = prev.shipments;
                            var shipmentsUpdated = Object.assign({},prev,{
                                shipments:
                                    [...previousShipments, newShipment]
                            });
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
                <DataTableReceived
                subscribeToUpdatedShipments={() =>{
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
            }
                shipmentsReceived={myData} />
            </TableDiv>
        </TableContainer>
    )
}

export default DataPackagesTable