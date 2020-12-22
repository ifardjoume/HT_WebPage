import styled from 'styled-components';

export const ContactContainer = styled.div`
    color: black;
    background:#949cdf;
  padding: 70px 70px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`

export const ContactWrapper = styled.div`
  display:flex;
  align-items: stretch;
  justify-content: center;
  flex-direction:row;
  width:75%;
`

export const ContactH1 = styled.h1`
line-height: 1.1;
  font-weight: 600;
  color: #1c2237;
  font-size:2.5rem;
  color:black;
  margin-bottom:64px;
`

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0px;
  width:100%;
  @media screen and (max-width:998px) {
    width:100%;
  }
`;

export const StyledForm = styled.form`
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  width:100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". .";
`;

export const StyledColumnForm = styled.div`
 margin:15px;
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
export const ButtonContainer = styled.div`
 display:flex;
 justify-content:flex-end;
`



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


export const SocialLinksWrapper = styled.div`
  width:75%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  margin-bottom:20px;
  display:flex;
  justify-content: center;
  align-items: center;

`

export const SocialLink = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  margin:10px 50px 10px 50px;
`

export const SocialLinkTitle = styled.h2`
  margin: 5px;
  font-size:1.5rem;
`;

export const SocialLinkDescription = styled.p`
  margin: 5px;
  font-size:1rem;
  margin-top:20px;
  text-align:center;
  align-items:auto;
  align-self:auto;
`;