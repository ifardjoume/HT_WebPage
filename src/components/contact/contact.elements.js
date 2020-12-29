import styled from 'styled-components';

export const ContactContainer = styled.div`
    color: black;
    background:#fafafa;
  padding: 30px 30px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`

export const ContactWrapper = styled.div`
  display:flex;
  align-items: stretch;
  justify-content: center;
  flex-direction:row;
  width:50%;
  @media screen and (max-width: 768px) {
    width:100%;
    padding: 10px;
  }
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
`;

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
  border-bottom: solid 2px #10223e;
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
  border-bottom: solid 2px #10223e;
`;
export const ButtonContainer = styled.div`
 display:flex;
 justify-content:flex-start;
`



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


export const SocialLinksWrapper = styled.div`
  padding: 35px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  height:620px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display:flex;
  flex-direction:column;
  @media screen and (max-width: 768px) {
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". .";
    width:100%;
    padding: 10px;
  }

`

export const SocialLink = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  margin:21.5px;
  @media screen and (max-width: 768px) {
    margin:10px;
  }

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

export const LinkA = styled.a`
  text-decoration:none;
  background:none;
  color:black;
  &:hover{
    text-decoration:none;
    background:none;
    color:black;
  }
  &:link {
    text-decoration:none;
    background:none;
    color:black;
  }
  &:visited {
    text-decoration:none;
    background:none;
    color:black;
  }
  &:active {
    text-decoration:none;
    background:none;
    color:black;
  }
`
export const Label = styled.label`
font-size:12px;
font-weight:600;
text-transform:uppercase;
color:#0f0f0f;
opacity:1;
margin-top:5px;
`
export const Icon = styled.img`
width:48px;
height:51.2px;
`;