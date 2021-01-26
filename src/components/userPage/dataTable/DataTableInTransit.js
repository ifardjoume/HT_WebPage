import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import GetBranchName from '../../ReportsUserPage/ReportsTable/GetBranchName';
import getDate from './getDate';



function DataTableInTransit(props){
    useEffect(() => {
        props.subscribeToNewShipments()
    })
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
                    data={props.shipmentsInTransit}
                    title='En transito'
                    pagination={true}
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 25, 50]}
        />
    )
}


export default DataTableInTransit
