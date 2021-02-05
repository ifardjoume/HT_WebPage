import React from 'react'
import styled from 'styled-components';
import { css } from "@emotion/core";
import CircleLoader
from "react-spinners/CircleLoader";

const LoadingDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
    width:100%;
    height:100%;
`

const override = css`
  display:block;
    justify-content:center;
    align-items:center;
  margin:100px;
  border-color: #1b1464;
  border:0.5px;
`;
const color = '#1b1464';

const LoadingPage = () => {
    return (
        <LoadingDiv>
             <CircleLoader color={color} loading={true} css={override} size={50} />
        </LoadingDiv>
    )
}

export default LoadingPage
