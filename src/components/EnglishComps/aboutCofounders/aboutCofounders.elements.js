import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #fff;
    padding: 70px 0;
    background: #00a8c4;
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    ;
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
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
    padding-bottom:60px;

    @media screen and (max-width: 768px){
        padding-bottom:65px;
    }
`

export const TopLine = styled.div`
    color: #fff;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 5px;
  margin-top: 5px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const Img = styled.img`
  padding:5px;
  max-width: 100%;
  max-height: 500px;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  @media screen and (max-width: 768px) {
  flex-direction:column;
  }
`;

export const ImgCofounderContainer = styled.div`
text-align:center;
padding:5px;
margin: 0px 50px 0px 50px;
`
export const ImgWrapperRow = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
@media screen and (max-width: 768px) {
    flex-direction:column;
  }
`