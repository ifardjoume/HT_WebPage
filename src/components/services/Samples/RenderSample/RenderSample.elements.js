import styled from 'styled-components';


export const RenderContainer = styled.div`
color: black;
    background:#e4f4fd;
    margin: 0 auto;
  align-items:center;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  height:700px;
  padding-top: 70px;
  padding-bottom:70px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const RenderH1 = styled.div`
    padding-top: 50px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #333;
`

export const RenderImg = styled.img`
padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`
