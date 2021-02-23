import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    TableContainer,
    TableDiv
} from './DataTable.elements';
import DataTableInTransit from './DataTableInTransit';
import DataTableReceived from './DataTableReceived';
import { GET_MONTHLY_SHIPMENTS,SHIPMENTS_IN_TRANSIT_SUBSCRIPTION, SHIPMENTS_UPDATED_SUBSCRIPTION } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import moment from 'moment';



function DataPackagesTable() {
    const [state,setState] = useState({
        subscribeToNewShipments: false,
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
                subscribeToUpdatedShipments={() =>{
                    if(state.subscribeToUpdatedShipments) return null
                    subscribeToMore({
                    document: SHIPMENTS_UPDATED_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                        if(!subscriptionData.data){
                            return prev
                        }else{
                        const updatedShipmentID = subscriptionData.data.shipmentUpdated.shipment_id;
                        const previousShipments = prev.shipments;
                        const prevShipmentsFiltered = previousShipments.filter(obj => {
                            return obj.shipment_id !== updatedShipmentID
                        })
                        var shipmentsUpdated = Object.assign({},prev,{
                            shipments:
                                [...prevShipmentsFiltered]
                            }
                        )
                        return shipmentsUpdated
                        }
                    }
                    })
                    setState({
                        subscribeToUpdatedShipments:true
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