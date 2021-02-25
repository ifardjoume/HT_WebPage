import styled from 'styled-components';

export const TableContainer = styled.div`
    padding:20px;
    display:flex;
    justify-content:center;
    flex-direction:row;
    @media screen and (max-width: 768px){
    flex-direction:column;
    padding:1px;
    margin-bottom:10px;
    }
`

export const TableDiv = styled.div`
    padding:10px 15px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius:20px;
    margin:0 10px;
    @media screen and (max-width: 768px){
    margin-bottom:20px;
    }
`

export const StyledButton = styled.button`
    border-radius:50px;
  background: #fff;
  color:#fff;
  padding:5px 15px;
  white-space:nowrap;
  color: #333;
  border: 1px solid black;
  outline: none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
      color: blue;
      transition: all 0.2s ease-in-out;
      border: 1px solid #333;
      background:transparent;
      text-decoration:none;
    }
`;

export const TableWrapper = styled.div`
 display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:row;
  @media screen and (max-width: 768px) {
    width:90%;
    flex-direction:column;
  }
  `