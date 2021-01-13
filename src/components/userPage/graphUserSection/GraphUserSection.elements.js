import styled from 'styled-components';

export const GraphsDiv = styled.div`
    color: #333;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:row;
`

export const GraphDiv = styled.div`
    color: #333;
  align-items:center;
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction:row;
`

export const GraphWrapper = styled.div`
    display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  @media screen and (max-width: 768px) {
    width:90%;
  }
` 