import styled, { createGlobalStyle } from 'styled-components'
import { Link as LinkS } from 'react-scroll';

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic', sans-serif;
        box-sizing:border-box;
          *, *:before, *:after {
            box-sizing: inherit;
          }
    }
    /* html{
      @media screen and (max-width: 768px) {
        width:100%
      }
    } */
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled(LinkS)`
 border-radius:50px;
 background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
 white-space: nowrap;
 padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
 color: ${({dark}) => (dark ? '010606' : '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline:none;
 cursor:pointer;
 display:flex;
 justify-content:center;
 align-items:center;
 transition: all 0.2s ease-in-out;

 &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#16697a')};
    text-decoration:none;
    color:#fff;
 }
`

export default GlobalStyle;