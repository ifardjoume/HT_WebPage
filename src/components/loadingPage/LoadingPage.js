import React from 'react'
import HTgif from '../../images/HT-gif.gif';
import styled from 'styled-components';

const LoadingDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const LoadingPage = () => {
    return (
        <LoadingDiv>
            <img className="loader__image" src={HTgif} />
        </LoadingDiv>
    )
}

export default LoadingPage
