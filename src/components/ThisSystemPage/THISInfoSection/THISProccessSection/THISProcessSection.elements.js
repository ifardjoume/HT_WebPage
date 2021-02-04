import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #333;
    padding: 70px 0;
    background:#e4f4fd;
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    justify-content:flex-start;
    flex-direction:column;
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis:100%;
        display: flex;
        justify-content:center;
    }
`
export const TextWrapper = styled.div`
    padding-top:0;
    padding-bottom:15px;

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
  display:flex;
  justify-content:center;
  text-align:center;
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color:#333;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
 justify-content: flex-end;
 flex-direction:column;
`;