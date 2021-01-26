import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import {
    StyledButton
} from './DataTable.elements';
import GetBranchName from '../../ReportsUserPage/ReportsTable/GetBranchName';
import { Modal, Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IconContext } from 'react-icons';
import getDate from './getDate';
import TempGraph from './TempGraph';

var TemperatureGraph;
function DataTableReceived(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = (shipmentID) => {
        setShow(true);
        TemperatureGraph = <TempGraph shipment={shipmentID}/>;
    };

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
        <>
           <DataTable
                    responsive
                    columns={columnsReceived}
                    keyField="shipment_id"
                    data={props.shipmentsReceived}
                    title='Recibidos'
                    pagination={true}
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 25, 50]}
                />

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Grafico de Temperatura</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="MyModalBody" >{TemperatureGraph}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>  
        </>
    )
}

export default DataTableReceived
