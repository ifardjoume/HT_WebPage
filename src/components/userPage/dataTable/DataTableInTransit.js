import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { GET_SHIPMENTS, SHIPMENTS_IN_TRANSIT_SUBSCRIPTION } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import GetBranchName from '../../ReportsUserPage/ReportsTable/GetBranchName';
import getDate from './getDate';



function DataTableInTransit(){
    const { subscribeToMore, data } = useQuery(GET_SHIPMENTS);
    var myData = data.shipments;
    var inTransit = myData.filter(obj => {
        return obj.status === "in transit"
    });
    const columnsInTransit = [
        {
            name: 'ID',
            selector: 'shipment_id',
            sortable: true,
        },
        {
            name: 'Hora de Salida',
            selector: 'departure',
            sortable: true,
            cell: row => getDate(row.departure)
        },
        {
            name: 'Origen',
            selector: 'origin_id',
            sortable: true,
            cell: row => GetBranchName(row.origin_id)
        }
    ];

    

    return (
        <DataTable
                    responsive
                    columns={columnsInTransit}
                    keyField="shipment_id"
                    data={inTransit}
                    title='En transito'
                    pagination={true}
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 25, 50]}
                    subscribeToNewShipments={() =>
                        subscribeToMore({
                          document: SHIPMENTS_IN_TRANSIT_SUBSCRIPTION,
                          updateQuery: (prev, { subscriptionData }) => {
                            if (!subscriptionData.data) return prev;
                            const newShipments = subscriptionData.data.shipments;
                            inTransit = Object.assign(newShipments, prev);
                          }
                        })
                      }
        />
    )
}



export default DataTableInTransit
