import React from 'react';
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
    const { error , loading , data, subscribeToMore } = useQuery(GET_SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var myData = data.shipments;
    var inTransit = myData.filter(obj => {
        return obj.status === "in transit"
    });
    var received = myData.filter(obj => {
        return obj.status === "failed" || obj.status === "uncertain" || obj.status === "successful"
    });
    
    
    return (
        <TableContainer>
            <TableDiv>
                <DataTableInTransit
                    subscribeToNewShipments={() =>
                        subscribeToMore({
                        document: SHIPMENTS_IN_TRANSIT_SUBSCRIPTION,
                        updateQuery: (prev, { subscriptionData }) => {
                            if (!subscriptionData.data) return prev;
                            const newShipment = subscriptionData.data.shipmentAdded;
                            console.log(newShipment);
                            console.log(prev);
                            return Object.assign({}, prev, {
                                shipments: {
                                    newShipment, ...prev.shipments
                                }
                              });
                        }
                        })
                    }
                  shipmentsInTransit={inTransit}
                />
            </TableDiv>
            <TableDiv>
                <DataTableReceived shipmentsReceived={received} />
            </TableDiv>
        </TableContainer>
    )
}

export default DataPackagesTable