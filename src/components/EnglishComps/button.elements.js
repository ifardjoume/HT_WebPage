import styled from 'styled-components';
import { LinkS } from 'react-scroll';

export const Button = styled(LinkS)`
 border-radius:50px;
 background: #010606;
 white-space: nowrap;
 padding: 14px 48px;
 color: 010606;
 font-size: 20px;
 outline:none;
 cursor:pointer;
 display:flex;
 justify-content:center;
 align-items:center;
 transition: all 0.2s ease-in-out;

 &:hover{
    transition: all 0.2s ease-in-out;
    background:#01bf71;
 }
`
