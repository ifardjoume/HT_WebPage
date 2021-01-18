import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { GET_SHIPMENTS } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
/* import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'; */
import { 
    TableContainer,
    TableDiv
} from './ReportsTable.elements';
import { Row } from 'react-bootstrap';


/* 
traigo la lista de branches
{
company {
name
branches {
branch_id
  name
}
}
}

*/









function ReportsTable(){
    const { loading, error, data } = useQuery(GET_SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data.shipments);
    var myData = data.shipments;
    
    const columnsReports = [
        {
            name: 'ID',
            selector: "shipment_id",
            sortable:true
        } ,
        {
            name: 'Envió',
            selector: 'salida',
            sortable:true
        },
        {
            name: 'Recibió',
            selector: 'entrada',
            sortable:true
        },
        {
            name: 'Status',
            selector: 'alerts',
            cell: row => row.alerts != null && row.alerts.length > 0 ? <p>Con alertas</p> : <p>OK</p> 
        },
        {
            name: 'Reporte',
            selector: 'report',
            sortable:true
        }
    ];

    return (
        <TableContainer>
            <TableDiv>
                <DataTable
                responsive
                columns={columnsReports}
                keyField="shipment_id"
                data={myData}
                title='Reportes'
                />
            </TableDiv>
        </TableContainer>
    )
}

export default ReportsTable
