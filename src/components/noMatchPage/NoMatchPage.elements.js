import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NoMatchDiv = styled.div`
display:flex;
align-items:center;
flex-direction:column;
padding: 40px 0px;
background-color:#e4f4fd;
`

export const NoMatchTitle = styled.h2`
 margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #333;
  text-align:center;
`

export const NoMatchDescription = styled.p`
max-width: 440px;
  padding:40px;
  padding-bottom:0px;
  font-size: 18px;
  line-height: 24px;
  color:#333;
  text-align:center;
`


export const NoMatchButton = styled(Link)`
    border-radius:50px;
    background:#949cdf;
    white-space: nowrap;
    padding: 16px 64px;
    color:#fff;
    font-size:16px;
    outline: none;
    border:none;
    cursor:pointer;
    transition:  all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        background:#a7c5eb;
        color: #fff;
        transition: all 0.2 ease-in-out;
        text-decoration:none;
    }
`

export const NoMatchImage = styled.img`
    height:300px;
    width:100%;
    @media screen and (max-width: 768px) {
    height:200px;
  }
`
