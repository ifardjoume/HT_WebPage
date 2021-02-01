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
            <TableH1>THIS is the solution to blind spots in sample transports</TableH1>
            <Table responsive borderless>
                <tbody>
                <Row>
                    <Title>Features</Title>
                    <Title>THIS</Title>
                    <Title>Traditional</Title>
                </Row>
                <Row>
                    <RowComponent1><br/><br/><b>Traceability</b></RowComponent1>
                    <RowComponent2>Temperature<br />
                        Lid Opening<br />
                        Shaking<br />
                        Shock Damage<br />
                        Acceleration<br />
                    </RowComponent2>
                    <RowComponent1><br/><br/>None</RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Cooling</b></RowComponent1>
                    <RowComponent2>Uniform</RowComponent2>
                    <RowComponent1>Uneven depending on Location</RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Overcooling Damage Prevention</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Custom Thermal Range</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Real time Monitoring with Customizable Alerts</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Leak-Proof Packaging</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Geolocation</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Data Analytics</b></RowComponent1>
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
