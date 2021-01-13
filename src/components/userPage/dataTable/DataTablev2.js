import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { 
    TableContainer,
    TableDiv,
    StyledButton
 } from './DataTable.elements';
import PieChart from '../graphUserSection/PieChart';
import { Modal,Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';


const DataPackagesTable = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const PackageTableInTransit = [
        {id:1, salida:"14:00", sucursal:"Laboratorios M", remitente:"Sky Net Labs"},
        {id:2, salida:"18:00", sucursal:"Laboratorios M", remitente:"Sky Net Labs"},
        {id:3, salida:"19:00", sucursal:"Laboratorios M", remitente:"Sky Net Labs"},
        {id:4, salida:"20:00", sucursal:"Laboratorios M", remitente:"Sky Net Labs"}
    ];
    
    const PackageTableReceived = [
        {id:1, llegada:"11:00", sucursal:"Sky Net Labs", alerta:true},
        {id:2, llegada:"15:00", sucursal:"Sky Net Labs", alerta:false},
        {id:3, llegada:"19:00", sucursal:"Sky Net Labs", alerta:true},
        {id:4, llegada:"22:00", sucursal:"Sky Net Labs", alerta:false}
    ];

    const columnsInTransit = [
        {
            name: 'ID',
            selector: 'id',
            sortable:true,
            grow:1
        },
        {
            name: 'Salida',
            selector: 'salida',
            sortable:true,
            grow:1
        },
        {
            name: 'Sucursal',
            selector: 'sucursal',
            sortable:true,
            width:'150px'
        },
        {
            name: 'Remitente',
            selector: 'remitente',
            sortable:true,
            grow:4
        }
    ];
    
    
    const columnsReceived = [
        {
            name: 'ID',
            selector: 'id',
            sortable:true
        },
        {
            name: 'Llegada',
            selector: 'llegada',
            sortable:true
        },
        {
            name: 'Sucursal de Salida',
            selector: 'sucursal',
            sortable:true,
            grow:2
        },
        {
            name: 'Alertas',
            selector: 'alerta',
            sortable:true,
            cell: row => row.alerta ?  <StyledButton onClick={handleShow}><ImCross/></StyledButton> : <StyledButton onClick={handleShow}><FaCheck/></StyledButton>
        }
    ];



    return (
        <TableContainer>
            <TableDiv>
                <DataTable
                responsive
                columns={columnsInTransit}
                data={PackageTableInTransit}
                title='En transito'
                />
            </TableDiv>
            <TableDiv>
                <DataTable
                responsive
                columns={columnsReceived}
                data={PackageTableReceived}
                title='Recibidos'
                onRowClicked={handleShow}
                /* expandableRows
                expandableRowsComponent={<PieChart />} */
                />

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Grafico de Alertas</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><PieChart /></Modal.Body>
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