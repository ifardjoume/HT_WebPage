import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { GET_SHIPMENTS } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import { 
    TableContainer,
    TableDiv,
    StyledP
} from './ReportsTable.elements';
import GetBranchName from './GetBranchName';
import getReport from './getReport';
import GetUsernames from './GetUsernames';
import BranchSelectDestination from '../SearchHeader/BranchSelectDestination';
import BranchSelectOrigin from '../SearchHeader/BranchSelectOrigin';
import { 
    SearchContainer,
    SearchDiv,
    StyledSelect
} from '../SearchHeader/SearchHeader.elements';
import UserSelectReceiver from '../SearchHeader/UserSelectReceiver';
import UserSelectSender from '../SearchHeader/UserSelectSender';


function ReportsTable(){
    const { loading, error, data } = useQuery(GET_SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data.shipments);
    var myData = data.shipments;
    var received = myData.filter(obj => {
        return obj.status === "failed" || obj.status === "uncertain" || obj.status === "successful"
    });
    var filteredData = received;
    function filterTable(value){
        filteredData = received.filter(obj => {
            return obj.origin_user_id === {value}
        });
    }
    const onChangeFilter = (e) => {
        filterTable(e.value)
    }



    const columnsReports = [
        {
            name: 'ID',
            selector: "shipment_id",
            sortable:true
        },
        {
            name: 'Origen',
            selector: 'origin_id',
            sortable:true,
            cell: row => GetBranchName(row.origin_id)
        },
        {
            name: 'Remitente',
            selector: 'origin_user_id',
            sortable:true,
            cell: row => GetUsernames(row.origin_user_id)
        },
        {
            name: 'Destino',
            selector: 'destination_id',
            sortable:true,
            cell: row => row.destination_id != null ? GetBranchName(row.destination_id) : <StyledP>En tránsito</StyledP>
        },
        {
            name: 'Destinatario',
            selector: 'destination_user_id',
            sortable:true,
            cell: row => row.destination_user_id != null ? GetUsernames(row.destination_user_id) : <StyledP>-</StyledP>
        },
        {
            name: 'Status',
            selector: 'alerts',
            cell: row => row.alerts != null && row.alerts.length > 0 ? <p>Con alertas</p> : <p>OK</p> 
        },
        {
            name: 'Reporte',
            selector: 'shipment_id',
            sortable:true,
            cell: row => row.destination_user_id != null && row.destination_id != null ? getReport(row.shipment_id) : <p>-</p>
        }
    ];

    return (
        <>
            <SearchContainer>
                <SearchDiv>
                    <BranchSelectOrigin onChange={(e) => onChangeFilter(e.target.value)}/>
                    <BranchSelectDestination />
                    <UserSelectSender />
                    <UserSelectReceiver />
                    <StyledSelect
                        className="select"
                        >
                            <option value="">Alertas</option>
                            <option value="alerta">Con Alertas</option>
                            <option value="dudoso">Dudoso</option>
                            <option value="no-alerta">Sin alerta</option>
                    </StyledSelect>
                </SearchDiv>
            </SearchContainer>
            <TableContainer>
                    <TableDiv>
                        <DataTable
                        responsive
                        columns={columnsReports}
                        keyField="shipment_id"
                        data={filteredData}
                        title='Reportes'
                        pagination={true}
                        paginationPerPage={10}
                        paginationRowsPerPageOptions={[10, 25, 50]}
                        />

                    </TableDiv>
            </TableContainer>
    </>
    )
}

export default ReportsTable
