import React from 'react'
import {
    TableContainer,
    TableH1,
    Row,
    Title,
    RowComponent1,
    RowComponent2
} from './tableSection.elements';
import { FcCheckmark} from 'react-icons/fc';
import { GoDash } from 'react-icons/go';
import {Table} from 'react-bootstrap';

const TableSection = () => {
    return (
        <TableContainer>
            <TableH1>Eliminamos los puntos ciegos en el transporte</TableH1>
            <Table responsive borderless>
                <Row>
                    <Title>Aspecto</Title>
                    <Title>THIS</Title>
                    <Title>Tradicional</Title>
                </Row>
                <Row>
                    <RowComponent1>Trazabilidad</RowComponent1>
                    <RowComponent1>Temperatura<br />
                        Apertura de Tapa<br />
                        Golpes<br />
                        Vibración<br />
                        Aceleración<br />
                    </RowComponent1>
                    <RowComponent1>Ninguna</RowComponent1>
                </Row>
                <Row>
                    <RowComponent2>Enfriamiento</RowComponent2>
                    <RowComponent2>Completamente
                     uniforme</RowComponent2>
                    <RowComponent2>Desigual según
                     ubicación</RowComponent2>
                </Row>
                <Row>
                    <RowComponent1>Evita daños por
                     sobreenfriamiento</RowComponent1>
                    <RowComponent1><FcCheckmark /></RowComponent1>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent2>Rango térmico personalizado</RowComponent2>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent2><GoDash /></RowComponent2>
                </Row>
                <Row>
                    <RowComponent1>Monitoreo en tiempo real
                    con alertas configurables</RowComponent1>
                    <RowComponent1><FcCheckmark /></RowComponent1>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent2>Empaque anti-derrame</RowComponent2>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent2><GoDash /></RowComponent2>
                </Row>
                <Row>
                    <RowComponent1>Geo-localización</RowComponent1>
                    <RowComponent1><FcCheckmark /></RowComponent1>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent2>Análisis de datos</RowComponent2>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent2><GoDash /></RowComponent2>
                </Row>
            </Table>
        </TableContainer>
    )
}

export default TableSection
