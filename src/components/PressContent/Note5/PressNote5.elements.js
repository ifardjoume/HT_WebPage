import styled from 'styled-components';

/*efeffb*/

export const InfoSec = styled.div`
    color: #333;
    padding: 50px 0px 0px 0px;
    background:#fafafa;
    height:83vh;
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction:row;
`;

export const InfoColumnImage = styled.div`
    margin-bottom: 15px;
    padding-right: 5px;
    padding-left: 25px;
    flex: 1;
    max-width: 100%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis:100%;
        display: flex;
        justify-content:center;
    }
`;

export const TopLine = styled.div`
    color: #333;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
  horizontal-aling: right;
  display: inline-block;
`;

export const ImgWrapper = styled.div`
  float: middle;
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction:column;
`;