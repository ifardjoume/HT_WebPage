import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import {
    TableContainer,
    TableDiv,
    StyledButton
} from './DataTable.elements';
import { GET_SHIPMENTS } from '../../../Query';
import { useQuery } from "@apollo/react-hooks";
import GetBranchName from '../../ReportsUserPage/ReportsTable/GetBranchName';
import { Modal, Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IconContext } from 'react-icons';
import getDate from './getDate';
import TempGraph from './TempGraph';
import DataTableInTransit from './DataTableInTransit';

var TemperatureGraph
function DataPackagesTable() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = (shipmentID) => {
        setShow(true);
        TemperatureGraph= <TempGraph shipment={shipmentID}/>;
    };
    const { loading, error, data } = useQuery(GET_SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var myData = data.shipments;
    var received = myData.filter(obj => {
        return obj.arrival != null
    });
    const columnsReceived = [
        {
            name: 'ID',
            selector: 'shipment_id',
            sortable: true
        },
        {
            name: 'Origen',
            selector: 'origin_id',
            sortable: true,
            cell: row => GetBranchName(row.origin_id)
        },
        {
            name: 'Hora de Llegada',
            selector: 'arrival',
            sortable: true,
            cell: row => row.arrival != null ? getDate(row.arrival) : <p>En transito</p>
        },
        {
            name: 'Arribo',
            selector: 'destination_id',
            sortable: true,
            cell: row => row.destination_id != null ? GetBranchName(row.destination_id) : <p>En tránsito</p>
        },
        {
            name: 'Alertas',
            selector: 'alerts',
            sortable: true,
            cell: row => row.alerts.length <= 0 ? <IconContext.Provider value={{ color: '#00917c' }}><StyledButton onClick={(e) => handleShow(row.shipment_id)}><FaCheck /></StyledButton></IconContext.Provider>
                :
                <IconContext.Provider value={{ color: '#a9294f' }}><StyledButton onClick={(e) => handleShow(row.shipment_id)}><ImCross /></StyledButton></IconContext.Provider>
        }
    ];



    return (
        <TableContainer>
            <TableDiv>
                <DataTableInTransit />
            </TableDiv>
            <TableDiv>
                <DataTable
                    responsive
                    columns={columnsReceived}
                    keyField="shipment_id"
                    data={received}
                    title='Recibidos'
                    pagination={true}
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 25, 50]}
                />

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Grafico de Alertas</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{TemperatureGraph}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </TableDiv>
        </TableContainer>
    )
}

export default DataPackagesTable