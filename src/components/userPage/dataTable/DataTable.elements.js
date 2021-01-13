import styled from 'styled-components';

export const TableContainer = styled.div`
    padding:50px;
    display:flex;
    justify-content:center;
`

export const TableDiv = styled.div`
    padding:10px 15px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius:20px;
    margin:0 10px;
`

export const StyledButton = styled.button`
  background: #fff;
  color:#fff;
  white-space:nowrap;
  padding: 10px;
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