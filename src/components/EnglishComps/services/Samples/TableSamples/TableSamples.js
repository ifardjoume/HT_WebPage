import React from 'react'
import {
    TableContainer,
    TableH1,
    Row,
    Title,
    RowComponent1,
    RowComponent2,
    TableWrapper
} from '../../../../services/Samples/TableSamples/TableSamples.elements';
import { FcCheckmark} from 'react-icons/fc';
import { GoDash } from 'react-icons/go';
import {Table} from 'react-bootstrap';


const TableSamples = () => {
    return (
        <TableContainer>
            <TableWrapper >
            <TableH1>THIS es la solución a los puntos ciegos del transporte de muestras</TableH1>
            <Table responsive borderless>
                <tbody>
                <Row>
                    <Title>Aspecto</Title>
                    <Title>THIS</Title>
                    <Title>Conservadora con refrigerantes</Title>
                </Row>
                <Row>
                    <RowComponent1><br/><br/><b>Trazabilidad</b></RowComponent1>
                    <RowComponent2>Temperatura<br />
                        Apertura de Tapa<br />
                        Golpes<br />
                        Vibración<br />
                        Aceleración<br />
                    </RowComponent2>
                    <RowComponent1><br/><br/>Ninguna</RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Enfriamiento</b></RowComponent1>
                    <RowComponent2>Completamente
                     uniforme</RowComponent2>
                    <RowComponent1>Desigual según
                     ubicación</RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Prevención de daños por
                     sobreenfriamiento</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Rango térmico personalizado</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Monitoreo en tiempo real
                    con alertas configurables</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Empaque anti-derrame</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Geolocalización</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Análisis de datos</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                </tbody>
            </Table>
            </TableWrapper>
        </TableContainer>
    )
}

export default TableSamples
