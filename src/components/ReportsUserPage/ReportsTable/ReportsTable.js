import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { 
    TableContainer,
    TableDiv
 } from './ReportsTable.elements';


const ReportsTable = () => {
    const reports = [
        {id:1, salida:"Laboratorios M", entrada:"Sky Net Labs", status:true,report:'pdf'},
        {id:2, salida:"H+Trace Labs", entrada:"Sky Net Labs", status:false,report:'pdf'},
        {id:3, salida:"Laboratorios M", entrada:"H+Trace Labs", status:true,report:'pdf'},
        {id:4, salida:"H+Trace Labs", entrada:"Sky Net Labs", status:false,report:'pdf'}
    ];
    
    
    const columnsReports = [
        {
            name: 'ID',
            selector: 'id',
            sortable:true
        },
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
            selector: 'status',
            sortable:true
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
                data={reports}
                title='Reportes'
                />
            </TableDiv>
        </TableContainer>
    )
}

export default ReportsTable
