import styled from 'styled-components';

export const StadisticsDiv = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    padding:20px 0;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    margin:20px 100px 20px 100px;
    border-radius:20px;
`


export const Card = styled.div`
    padding:20px 50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
`


export const NumberHeader = styled.h2`

`


export const Description = styled.p`
    max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color:#333;
`

export const Separator = styled.div`
    border: 1px solid #e4f4fd;
    border-radius: 5px;
    height:150px;
    display:flex;
    align-items:center;
`

export const StadisticWrapper = styled.div`
     display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:row;
  @media screen and (max-width: 768px) {
    width:90%;
  }
`

