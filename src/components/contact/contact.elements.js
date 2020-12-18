import styled from 'styled-components';

export const ContactContainer = styled.div`
    color: black;
    background:#949cdf;
  align-items:center;
  padding: 70px 70px;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const ContactWrapper = styled.div`
display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`

export const ContactH1 = styled.h1`
line-height: 1.1;
  font-weight: 600;
  color: #1c2237;
  align-items: left;
  font-size:2.5rem;
  color:#fff;
  margin-bottom:64px;
`

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:1000px;
  padding: 0 0px;
  @media screen and (max-width:998px) {
    width:100%;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

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
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
export const StyledButton = styled.button`
  display: block;
  background-color: blue;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledError = styled.div`
  color: blue;
  font-weight: 800;
  margin: 0 0 40px 0;
`;