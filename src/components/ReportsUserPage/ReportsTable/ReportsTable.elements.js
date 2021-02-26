import styled from 'styled-components';


export const TableContainer = styled.div`

`

export const TableDiv = styled.div`
    margin:20px 50px;
    padding:10px 20px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius:20px;
`
export const StyledP = styled.p`
text-align:center;
display:flex;
justify-content:center;
align-items:center;

`
export const StyledButton = styled.button`
    border-radius:50px;
  background: transparent;
  color:#00abc8;
  white-space:nowrap;
  border: none;
  outline: none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
      color: #00abc8;
      transition: all 0.2s ease-in-out;
      border: none;
      background:transparent;
      text-decoration:none;
    }
`;

export const StyledButtonSearch = styled.button`
  display: block;
  background-color: black;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 28px;
  padding: 0 10px;
  margin-top:12px;
  cursor: pointer;
  box-sizing: border-box;
`;

