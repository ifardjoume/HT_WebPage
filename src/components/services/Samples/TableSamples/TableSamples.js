import React from 'react'
import {
    TableContainer,
    TableH1,
    Row,
    Title,
    RowComponent1,
    RowComponent2,
    TableWrapper
} from './TableSamples.elements';
import { FcCheckmark} from 'react-icons/fc';
import { GoDash } from 'react-icons/go';
import {Table} from 'react-bootstrap';
import { FormattedMessage } from "react-intl";

const TableSamples = () => {
    return (
        <TableContainer>
            <TableWrapper >
            <TableH1><FormattedMessage id="TableTitleSamples" defaultMessage="THIS is the solution to blind spots in sample transports" /></TableH1>
            <Table responsive borderless>
                <tbody>
                <Row>
                    <Title>
                        <FormattedMessage id="TableTitleColumn1" defaultMessage="Features" />
                    </Title>
                    <Title>THIS</Title>
                    <Title>
                        <FormattedMessage id="TableTitleColumn2" defaultMessage="Traditional" />
                    </Title>
                </Row>
                <Row>
                    <RowComponent1><br/><br/><b><FormattedMessage id="AspectTitleColumn1" defaultMessage="Traceability" /></b></RowComponent1>
                    <RowComponent2>
                        <FormattedMessage id="AspectTHISColumn1" defaultMessage="Temperature" />
                        <br />
                        <FormattedMessage id="AspectTHISColumn2" defaultMessage="Lid Opening" />
                        <br />
                        <FormattedMessage id="AspectTHISColumn3" defaultMessage="Shaking" /><br />
                        <FormattedMessage id="AspectTHISColumn4" defaultMessage="Shock Damage" /><br />
                        <FormattedMessage id="AspectTHISColumn5" defaultMessage="Acceleration" /><br />
                    </RowComponent2>
                    <RowComponent1><br/><br/><FormattedMessage id="AspectTraditionalColumn1" defaultMessage="None" /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b><FormattedMessage id="AspectTitleColumn2" defaultMessage="Cooling" /></b></RowComponent1>
                    <RowComponent2><FormattedMessage id="AspectTHISColumn6" defaultMessage="Uniform" /></RowComponent2>
                    <RowComponent1><FormattedMessage id="AspectTraditionalColumn2" defaultMessage="Uneven depending on Location" /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b><FormattedMessage id="AspectTitleColumn3" defaultMessage="Overcooling Damage Prevention" /></b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b><FormattedMessage id="AspectTitleColumn4" defaultMessage="Custom Thermal Range" /></b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b><FormattedMessage id="AspectTitleColumn5" defaultMessage="Real time Monitoring with Customizable Alerts" /></b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b><FormattedMessage id="AspectTitleColumn6" defaultMessage="Leak-Proof Packaging" /></b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b><FormattedMessage id="AspectTitleColumn7" defaultMessage="Geolocation" /></b></RowComponent1>
                    <RowComponent2><FcCheckmark /></RowComponent2>
                    <RowComponent1><GoDash /></RowComponent1>
                </Row>
                <Row>
                    <RowComponent1><b><FormattedMessage id="AspectTitleColumn8" defaultMessage="Data Analytics" /></b></RowComponent1>
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
