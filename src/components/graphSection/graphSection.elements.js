import styled from 'styled-components';

export const GraphContainer = styled.div`
    color: #333;
    background:#fafafa;
    margin: 0 auto;
  align-items:center;
  padding-top:70px;
  padding-bottom:90px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`

export const GraphTitle = styled.h1`
  line-height: 1.1;
  font-weight: 600;
  color: #333;
  align-items: center;
  font-size:2rem;
  margin-bottom:64px;
  @media screen and (max-width: 768px) {
    width:80%;
  }
`

export const GraphImage = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  @media screen and (max-width: 768px) {
    width:90%;
  }
`
