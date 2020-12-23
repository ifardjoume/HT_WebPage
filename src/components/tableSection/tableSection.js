import React from 'react'
import {
    TableContainer,
    TableH1,
    Row,
    Title,
    RowComponent1,
    RowComponent2,
    GraphImage,
    TableWrapper
} from './tableSection.elements';

import Image1 from '../../images/Graph.png';
import { FcCheckmark} from 'react-icons/fc';
import { GoDash } from 'react-icons/go';
import {Table} from 'react-bootstrap';

const TableSection = () => {
    return (
        // <TableH1>Eliminamos los puntos ciegos en el transporte</TableH1>
        <TableContainer>
            <TableWrapper>
            <GraphImage src={Image1} />
            <Table responsive borderless>
                <tbody>
                <Row>
                    <Title>Aspecto</Title>
                    <Title>THIS</Title>
                    <Title>Tradicional</Title>
                </Row>
                <Row>
                    <RowComponent1>Trazabilidad</RowComponent1>
                    <RowComponent2>Temperatura<br />
                        Apertura de Tapa<br />
                        Golpes<br />
                        Vibración<br />
                        Aceleración<br />
                    </RowComponent2>
                    <RowComponent1>Ninguna</RowComponent1>
                </Row>
                <Row>
                    <RowComponent1>Enfriamiento</RowComponent1>
                    <RowComponent2>Completamente
                     uniforme</RowComponent2>
                    <RowComponent1>Desigual según
                     ubicación</RowComponent1>
                </Row>
                <Row>
                    <RowComponent1>Evita daños por
                     sobreenfriamiento</RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1>Rango térmico personalizado</RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1>Monitoreo en tiempo real
                    con alertas configurables</RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1>Empaque anti-derrame</RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1>Geolocalización</RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1>Análisis de datos</RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                </tbody>
            </Table>
            </TableWrapper>
        </TableContainer>
    )
}

export default TableSection
