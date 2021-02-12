import styled from 'styled-components';

export const StadisticsDiv = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    padding:20px 0;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    margin:20px 100px 20px 100px;
    border-radius:20px;
    @media screen and (max-width: 768px){
      margin:10px;
  }
`
export const StadisticWrapper = styled.div`
     display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . .";
    align-items:center;
  grid-gap:16px;
  padding: 0 50px;
  @media screen and (max-width: 768px){
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". .";
    padding: 0 20px;
  }
`
export const Card = styled.div`
    padding:20px 50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-weight:bold;
    font-size:20px;
    color:#00abc8;
`


export const NumberHeader = styled.h2`

`


export const Description = styled.p`
    max-width: 440px;
  line-height: 20px;
  margin:auto;
`

export const Separator = styled.div`
    border: 1px solid #e4f4fd;
    border-radius: 5px;
    height:150px;
    display:flex;
    align-items:center;
`

export const StyledSpan = styled.span`
  width: 120px;
  background-color: #555;
  color: black;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
`;

export const HoverTag = styled.p`
 background:#333;
 color: #fff;
 padding:5px;
 border-radius:20px;
`