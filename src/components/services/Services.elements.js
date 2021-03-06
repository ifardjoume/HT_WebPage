import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ServicesWrapper = styled.div`
  max-width:1000px;
  margin: 0 auto;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items:center;
  grid-gap:16px;
  padding: 0 50px;

  @media screen and (max-width:1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width:768px) {
    grid-template-columns: 1fr;
    padding:0 20px;
  }

`;

export const ServicesH1 = styled.h1`
  margin-bottom: 35px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #333;

  @media screen and (max-width:480px) {
    font-size:2rem;
    text-align:center;
  }

`;

export const ServicesH2 = styled.h2`
  font-size:1.5rem;
  margin-bottom:10px;
  text-align:center;
`;



export const ServicesContainer = styled.div`
  height:500px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  background: #fafafa;
  width:100%;
  @media screen and (max-width:990px) {
    height:1100px;
  }

  @media screen and (max-width:480px) {
    height:1300px;
  }
`;

export const ServicesCard = styled.div`
  background:#fafafa;
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  border-radius:10px;
  max-height:340px;
  height:296px;
  padding:30px;
  min-width:250px;
  box-shadow:3px 3px 3px 3px rgba(0,0,0,0.2);
  transition:all 0.2s ease-in-out;
  /* &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  } */

`;

export const ServicesIcon = styled.img`
  height:160px;
  width:160px;
  margin-bottom:10px;
`;

export const ServicesP = styled.p`
   font-size:1rem;
   text-align:center;
`;

export const LinkTo = styled(Link)`
text-decoration:none;
color:#333;
&:hover{
  text-decoration:none;
color:#333;
}
`