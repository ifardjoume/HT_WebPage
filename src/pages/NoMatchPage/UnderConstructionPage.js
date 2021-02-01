import React from 'react'
import workingOn from '../../images/working-on.png';
import styled from 'styled-components'

const ImgWorkingOn = styled.img`
width:1350px;
height:700px;
`;


const UnderConstructionPage = () => {
    return (
        <div>
            <ImgWorkingOn src={workingOn} alt="working-on"/>
        </div>
    )
}

export default UnderConstructionPage
