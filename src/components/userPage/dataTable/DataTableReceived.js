import React, { useState,useEffect } from 'react'
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
import Cookies from 'js-cookie';

var MainTitle = Cookies.get('locale') === 'en' ? 'Received' : 'Recibidos';
var TempGraphTitle = Cookies.get('locale') === 'en' ? 'Temperature Chart' : 'Gráfico de Temperatura';
var closeButton = Cookies.get('locale') === 'en' ? 'Close' : 'Cerrar';
var TemperatureGraph;
function DataTableReceived(props){
    var dataShipmentsReceived = props.shipmentsReceived.shipments
    var received = dataShipmentsReceived.filter(obj => {
        return obj.status === "failed" || obj.status === "uncertain" || obj.status === "successful"
    });
    const [newData, setNewData] = useState(received);
    const { subscribeToUpdatedShipments } = props
    const { shipmentsReceived } = props
   useEffect(() => {
        setNewData(received);
    },[ shipmentsReceived ])
    useEffect(() => {
        subscribeToUpdatedShipments();
    },[])
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
            sortable: true,
            width: '60px'
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Departure' : 'Origen',
            selector: 'origin_id',
            sortable: true,
            cell: row => GetBranchName(row.origin_id)
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Departure' : 'Hora de Llegada',
            selector: 'arrival',
            sortable: true,
            cell: row => row.arrival != null ? getDate(row.arrival) : <p>En transito</p>
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Arrival' : 'Arribo',
            selector: 'destination_id',
            sortable: true,
            cell: row => row.destination_id != null ? GetBranchName(row.destination_id) : <p>En tránsito</p>
        },
        {
            name: Cookies.get('locale') === 'en' ? 'Alerts' : 'Alertas',
            selector: 'alerts',
            sortable: true,
            cell: row => row.alerts.length <= 0 ? <IconContext.Provider value={{ color: '#00917c' }}><StyledButton onClick={(e) => handleShow(row.shipment_id)}><FaCheck /></StyledButton></IconContext.Provider>
                :
                <IconContext.Provider value={{ color: '#a9294f' }}><StyledButton onClick={(e) => handleShow(row.shipment_id)}><ImCross /></StyledButton></IconContext.Provider>
        }
    ];
    return (
        <div>
           <DataTable 
                    responsive
                    columns={columnsReceived}
                    keyField="shipment_id"
                    data={newData}
                    title={MainTitle}
                    pagination={true}
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 25, 50]}
                />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{TempGraphTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="MyModalBody" >{TemperatureGraph}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            {closeButton}
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>        
    )
}

export default DataTableReceived
