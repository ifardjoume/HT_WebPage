import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #fff;
    padding: 70px 0;
    background: ${({ lightBg }) => (lightBg ? '#0e49b5' : '#c9cbff')};
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    };
`;

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
    color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  margin-top: 16px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
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
  @media screen and (max-width: 768px) {
  flex-direction:column;
  }
`;

export const ImgCofounderContainer = styled.div`
text-align:center;
padding:5px;
`