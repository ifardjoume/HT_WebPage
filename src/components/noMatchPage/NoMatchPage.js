import React from 'react';
import { 
    NoMatchDiv,
    NoMatchTitle,
    NoMatchDescription,
    NoMatchButton,
    NoMatchImage
 } from './NoMatchPage.elements';

import Warning from '../../images/warning.svg';
import { FormattedMessage } from "react-intl";


const NoMatchPage = () => {
    return (
        <NoMatchDiv>
            <NoMatchTitle>404 - Not Found</NoMatchTitle>
            <NoMatchImage src={Warning}/>
            <NoMatchDescription>
                <FormattedMessage id="NoMatchPageTitle"
                 defaultMessage="The page you requested could not be found" />
            </NoMatchDescription>
            <NoMatchButton to='/'><FormattedMessage id="NoMatchPageButton"
                 defaultMessage="Return" /></NoMatchButton>
        </NoMatchDiv>
    )
}

export default NoMatchPage
