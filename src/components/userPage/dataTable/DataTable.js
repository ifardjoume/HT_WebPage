import React,{ useState } from 'react'
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
import { Modal,Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IconContext } from 'react-icons';
import getDate from './getDate';


function DataPackagesTable(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { loading, error, data } = useQuery(GET_SHIPMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var myData = data.shipments;
    var inTransit = myData.filter(obj => {
        return obj.arrival == null
      });
    var received = myData.filter(obj => {
        return obj.arrival != null
      });

    const columnsInTransit = [
        {
            name: 'Numero de Envio',
            selector: 'shipment_id',
            sortable:true,
        },
        {
            name: 'Hora de Salida',
            selector: 'departure',
            sortable:true,
            cell: row => getDate(row.departure)
        },
        {
            name: 'Origen',
            selector: 'origin_id',
            sortable:true,
            cell: row => GetBranchName(row.origin_id)
        },
        {
            name: 'Destino',
            selector: 'destination_id',
            sortable:true,
            cell: row => row.destination_id != null ? GetBranchName(row.destination_id) : <p>En tránsito</p>
        }
    ];
    
    
    const columnsReceived = [
        {
            name: 'Numero de Envio',
            selector: 'shipment_id',
            sortable:true
        },
        {
            name: 'Hora de Llegada',
            selector: 'arrival',
            sortable:true,
            cell: row => row.arrival != null ? getDate(row.arrival) : <p>En transito</p>
        },
        {
            name: 'Arribo',
            selector: 'destination_id',
            sortable:true,
            cell: row => row.destination_id != null ? GetBranchName(row.destination_id) : <p>En tránsito</p>
        },
        {
            name: 'Alertas',
            selector: 'alerts',
            sortable:true,
            cell: row => row.alerts.length <= 0 ?  <IconContext.Provider value={{ color: '#00917c' }}><StyledButton onClick={handleShow}><FaCheck/></StyledButton></IconContext.Provider>
             : 
             <IconContext.Provider value={{ color: '#a9294f' }}><StyledButton onClick={handleShow}><ImCross/></StyledButton></IconContext.Provider>
        }
    ];



    return (
        <TableContainer>
            <TableDiv>
                <DataTable
                responsive
                columns={columnsInTransit}
                keyField="shipment_id"
                data={inTransit}
                title='En transito'
                pagination={true}
                paginationPerPage={5}
                />
            </TableDiv>
            <TableDiv>
                <DataTable
                responsive
                columns={columnsReceived}
                keyField="shipment_id"
                data={received}
                title='Recibidos'
                pagination={true}
                paginationPerPage={5}
                onRowClicked={handleShow}
                />

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Grafico de Alertas</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Hola</Modal.Body>
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