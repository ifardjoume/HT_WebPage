import styled from 'styled-components';

export const TableContainer = styled.div`
color: black;
    background:#6155a6;
    margin: 0 auto;
  align-items:center;
  padding: 20px 20px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:row;
  height:900px;

  @media screen and (max-width:998px) {
    height:1300px;
  }
`
export const TableWrapper = styled.div`
 display:flex;
  align-items: center;
  justify-content: center;
  `


export const TableH1 = styled.h1`
line-height: 1.1;
  font-weight: 600;
  color: #fff;
  align-items: left;
  font-size:2rem;
  margin-bottom:64px;
  padding:50px;

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
    background:#d0e8f2;
    padding: 15px;
    border-collapse: collapse;
    text-align:center;
`

export const RowComponent2 = styled.td`
    background:#fff;
    padding: 15px;
    border-collapse: collapse;
    text-align:center;
`