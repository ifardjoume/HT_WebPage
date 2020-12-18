import React from 'react'
import Image1 from '../../images/working-on.png';
import styled from 'styled-components';


const WorkImg = styled.img`
    width:100%;
`


const SignIn = () => {
    return (
        <div>
            <WorkImg src={Image1} alt="working"/>
        </div>
    )
}

export default SignIn
