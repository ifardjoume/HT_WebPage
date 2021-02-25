import React,{useState,useEffect} from 'react'
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import {
    TableDiv,
    StyledP,
    StyledButton
} from './ReportsTable.elements';
import getReport from './getReport';
import GetUsernames from './GetUsernames';
import GetBranchName from './GetBranchName';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { HiDownload } from 'react-icons/hi';

var MainTitle = Cookies.get('locale') === 'en' ? 'Reports' : 'Reportes';

function ReportDataTable(props){
    var reportShipments = props.reportDataShipments.shipments
    const { reportDataShipments } = props
    const [newData, setNewData] = useState(reportShipments)
    var received = newData.filter(obj => {
        return obj.status === "failed" || obj.status === "uncertain" || obj.status === "successful"
    });
    useEffect(() => {
        setNewData(reportShipments);
    },[ reportDataShipments ])
    const columnsReports = [
        {
            name: 'ID',
            selector: "shipment_id",
            sortable:true
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Departure' : 'Origen',
            selector: 'origin_id',
            sortable:true,
            cell: row => GetBranchName(row.origin_id)
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Sender' : 'Remitente',
            selector: 'origin_user_id',
            sortable:true,
            cell: row => GetUsernames(row.origin_user_id)
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Arrival' : 'Destino',
            selector: 'destination_id',
            sortable:true,
            cell: row => row.destination_id != null ? GetBranchName(row.destination_id) : <StyledP>En tránsito</StyledP>
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Receiver' : 'Destinatario',
            selector: 'destination_user_id',
            sortable:true,
            cell: row => row.destination_user_id != null ? GetUsernames(row.destination_user_id) : <StyledP>-</StyledP>
        },
        {
            name: 'Status',
            selector: 'alerts',
            cell: row => row.alerts != null && row.alerts.length > 0 ? <IconContext.Provider value={{ color: '#00917c' }}><FaCheck /></IconContext.Provider>
            :
            <IconContext.Provider value={{ color: '#a9294f' }}><ImCross /></IconContext.Provider>
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Report' : 'Reporte',
            selector: 'shipment_id',
            sortable:true,
            cell: row => row.destination_user_id != null && row.destination_id != null ? <StyledButton type="submit" onClick={(e) => getReport(row.shipment_id)}><HiDownload size={20} /></StyledButton> : <p>-</p>
        }
    ];
    
    
    return (
                    <TableDiv>
                        <DataTable
                        responsive
                        columns={columnsReports}
                        keyField="shipment_id"
                        data={received}
                        title={MainTitle}
                        pagination={true}
                        paginationPerPage={10}
                        paginationRowsPerPageOptions={[10, 25, 50]}
                        />

                    </TableDiv>
    )
}

export default ReportDataTable
