import React from 'react';
import { 
    NoMatchDiv,
    NoMatchTitle,
    NoMatchDescription,
    NoMatchButton,
    NoMatchImage
 } from './NoMatchPage.elements';

import UnderConstruction from '../../images/under_construction.svg';
import { FormattedMessage } from "react-intl";

const UnderConstructionPage = () => {
    return (
        <NoMatchDiv>
            <NoMatchTitle><FormattedMessage id="UnderConstructionTitle"
                 defaultMessage="Under Construction" /></NoMatchTitle>
            <NoMatchImage src={UnderConstruction}/>
            <NoMatchDescription>
                <FormattedMessage id="UnderConstructionDescription"
                 defaultMessage="We are working hard to bring you a new experience" />
            </NoMatchDescription>
            <NoMatchButton to='/'><FormattedMessage id="NoMatchPageButton"
                 defaultMessage="Return" /></NoMatchButton>
        </NoMatchDiv>
    )
}

export default UnderConstructionPage