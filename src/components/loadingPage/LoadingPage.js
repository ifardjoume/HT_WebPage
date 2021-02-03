import React from 'react'
import HTgif from '../../images/HT-gif.gif';
import styled from 'styled-components';

const LoadingDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
`
const ImgLoading = styled.img`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50%;
    height:50%;
`


const LoadingPage = () => {
    return (
        <LoadingDiv>
            <ImgLoading className="loader__image" alt="loading-gif" src={HTgif} />
        </LoadingDiv>
    )
}

export default LoadingPage
