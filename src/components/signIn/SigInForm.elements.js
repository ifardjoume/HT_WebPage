import styled from 'styled-components';

export const LogInContainer = styled.div`
    color: black;
    background:#fafafa;
  padding: 30px 30px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`

export const StyledForm = styled.form`
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  margin:10px;
  width:600px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    @media screen and (max-width:998px) {
    width:100%;
    display:flex;
  align-items: stretch;
  justify-content: left;
  flex-direction:column;
  padding: 20px;
  }
`;


export const Label = styled.label`
font-size:12px;
font-weight:600;
text-transform:uppercase;
color:#0f0f0f;
opacity:1;
margin-top:5px;
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: solid 2px #10223e;
`;

export const StyledButton = styled.button`
  display: block;
  background-color: black;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
 display:flex;
 justify-content:flex-start;
`

export const LogInTitle = styled.img`
  display:flex;
  height:150px;
  justify-content:center;
  margin:auto;
  padding-bottom:20px;
  @media screen and (max-width: 768px) {
    width:80%;
  }
`
export const ErrorMessage = styled.p`
color:red;
padding:10px;
`
