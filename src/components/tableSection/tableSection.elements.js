import styled from 'styled-components';

export const TableContainer = styled.div`
color: black;
    background:#10223e;
    margin: 0 auto;
  align-items:center;
  padding: 20px 20px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  height:900px;
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
  `


export const TableH1 = styled.h1`
line-height: 1.1;
  font-weight: 600;
  line-height: 2;
  color: #fff;
  align-items: left;
  font-size:2rem;
  margin-bottom:64px;
  padding:10px;
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