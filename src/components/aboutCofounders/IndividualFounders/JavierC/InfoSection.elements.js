import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #333;
    padding: 50px 0px 10px 0px;
    background:#fafafa;
    height:100vh;
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction:row;
`;

export const InfoColumnText = styled.div`
    margin-bottom: 15px;
    padding-right: 5px;
    padding-left: 15px;
    flex: 1;
    max-width: 35%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis:100%;
        display: flex;
        justify-content:center;
    }
`
export const InfoColumnImage = styled.div`
    margin-bottom: 15px;
    padding-right: 5px;
    padding-left: 15px;
    flex: 1;
    max-width: 65%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis:100%;
        display: flex;
        justify-content:center;
    }
`



export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:0px;

    @media screen and (max-width: 768px){
        padding-bottom:65px;
    }
`

export const TopLine = styled.div`
    color: #333;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #333;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color:#333;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 80%;
  vertical-align: middle;
  display: inline-block;
`;

export const ImgWrapper = styled.div`
  float: right;
  max-width: 80%;
  display: flex;
 justify-content: flex-end;
 flex-direction:column;
`;