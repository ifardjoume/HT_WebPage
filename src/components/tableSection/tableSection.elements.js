import styled from 'styled-components';

export const TableContainer = styled.div`
color: black;
    background:#fafafa;
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

  @media screen and (max-width:998px) {
    height:1300px;
  }
`
export const TableWrapper = styled.div`
 display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  @media screen and (max-width: 768px) {
    width:90%;
  }
  `


export const TableH1 = styled.h1`
  font-weight: 600;
  line-height: 2;
  color: #333;
  text-align:left;
  font-size:2rem;
  padding:10px;
  margin-bottom:10px;
  @media screen and (max-width: 768px) {
    line-height: 1.1;
    padding:50px;
    padding-bottom:10px;
    text-align:center;
  }

`

export const Row = styled.tr`
`

export const Title = styled.th`
    padding: 10px;
    border-collapse: collapse;
    background:#0e49b5;
    font-weight: 400;
    color:#fff;;
    text-align:center;

`

export const RowComponent1 = styled.td`
    background:#fff;
    padding: 15px;
    border-collapse: collapse;
    text-align:center;
`

export const RowComponent2 = styled.td`
    background:#d0e8f2;
    padding: 15px;
    border-collapse: collapse;
    text-align:center;
`

export const GraphImage = styled.img`
  width: 600px;
  display: inline-block;
  height: 400px;
  padding:10px;
  margin-right:35px;
`
export const TableDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
