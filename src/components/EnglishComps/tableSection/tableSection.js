import React from 'react'
import {
    TableContainer,
    TableH1,
    Row,
    Title,
    RowComponent1,
    RowComponent2,
    TableWrapper
} from './tableSection.elements';

import { FcCheckmark} from 'react-icons/fc';
import { GoDash } from 'react-icons/go';
import {Table} from 'react-bootstrap';

const TableSection = () => {
    return (
        <TableContainer>
            <TableWrapper>
            <TableH1>No more blind spots in logistics.</TableH1>
            <Table responsive borderless>
                <tbody>
                <Row>
                    <Title>Item</Title>
                    <Title>THIS</Title>
                    <Title>Traditional</Title>
                </Row>
                <Row>
                    <RowComponent1><br/><br/><b>Traceability</b></RowComponent1>
                    <RowComponent2>Temperature<br />
                        Lid Opening<br />
                        Shake<br />
                        Damage<br />
                        Acceleration<br />
                    </RowComponent2>
                    <RowComponent1><br/><br/>None</RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Cooling</b></RowComponent1>
                    <RowComponent2>Uniform</RowComponent2>
                    <RowComponent1>Uneven according location</RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Avoids Damage by SuperCooling.</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Custom Thermal Range.</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Real time Monitoring with configurables alerts.</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Leak proof packagin</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Geolocation</b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b>Data Analitycs</b></RowComponent1>
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
