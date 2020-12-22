import React from 'react';
import emailjs from 'emailjs-com';
import { 
    ContactContainer,
    ContactWrapper,
    ContactH1,
    StyledButton,
    StyledForm,
    StyledFormWrapper,
    StyledInput,
    StyledError,
    StyledTextArea,
    SocialLinksWrapper,
    SocialLink,
    SocialLinkTitle,
    SocialLinkDescription,
    StyledColumnForm,
    ButtonContainer
} from './contact.elements';
import {
  FaLinkedin
} from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const sizeVariable = 40;

export default function ContactUs() {
    var mailSentCorrectly
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_a835aks', 'template_7v5twqo', e.target, 'user_XUInM4n3ub5FOrzhllh8I')
      .then((result) => {
          console.log(result.text);
          mailSentCorrectly = result.text == "OK";
      }, (error) => {
          console.log(error.text);
      });
  }
    return (
            <ContactContainer id="contact">
               <SocialLinksWrapper>
                <SocialLink>
                  <FiMail size={sizeVariable}/>
                  {/* <SocialLinkTitle>Mail</SocialLinkTitle> */}
                  <SocialLinkDescription>hello@h-trace.com</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <ImLocation2 size={sizeVariable} />
                {/* <SocialLinkTitle>Ubicación</SocialLinkTitle> */}
                <SocialLinkDescription>Argentina</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <FaLinkedin size={sizeVariable}/>
                {/* <SocialLinkTitle>Linkedin</SocialLinkTitle> */}
                <SocialLinkDescription>H+Trace</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <AiOutlinePhone size={sizeVariable}/>
                {/* <SocialLinkTitle>Telefono</SocialLinkTitle> */}
                <SocialLinkDescription>011+51512+5511</SocialLinkDescription>
                </SocialLink>
              </SocialLinksWrapper>
            <ContactWrapper>
                <StyledFormWrapper>
        <StyledForm  className="contact-form"  onSubmit={sendEmail}>
          <StyledColumnForm>
        <label htmlFor="name">Nombre</label>
            <StyledInput
            type="text"
            name="user_name"
            />
        <label htmlFor="email">Email</label>
            <StyledInput
            type="email"
            name="user_email"
            />
            </StyledColumnForm>
            <StyledColumnForm>
            <label htmlFor="tel">Telefono</label>
            <StyledInput
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
        <label htmlFor="message">Mensaje</label>
        <StyledTextArea
            name="message"
            />

            {/* <StyledInput
            type="checkbox"
            name="newsLetter"
            /><p>Deseo mantenerme actualizado con novedades sobre el producto</p> */}
           {mailSentCorrectly && (
            <StyledError>
            <p>Mail correctly Sent</p>
            </StyledError>
            )}
            <ButtonContainer>
              <StyledButton type="submit" value="Send">Enviar</StyledButton>
            </ButtonContainer>
        </StyledColumnForm>
        </StyledForm>
        </StyledFormWrapper>
            </ContactWrapper>
        </ContactContainer>
  );
};



/* import React, {useState} from 'react';
import { 
    ContactContainer,
    ContactWrapper,
    ContactH1,
    StyledButton,
    StyledError,
    StyledForm,
    StyledFormWrapper,
    StyledInput,
    StyledTextArea

} from './contact.elements';
const initialState = {
    name: '',
    email: '',
    message: ''
  };

const Contact = () => {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log('submitted!');
      console.log(state);
  
      for (let key in state) {
        if (state[key] === '') {
          setError(`You must provide the ${key}`)
          return
        }
      }
      setError('');
      // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      // const test = regex.test(state.email);
      // console.log(test);
  
      console.log("Succeeded!!!")
    };
  
    const handleInput = e => {
      const inputName = e.currentTarget.name;
      const value = e.currentTarget.value;
  
      setState(prev => ({ ...prev, [inputName]: value }));
    };
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <ContactH1>Contact Us</ContactH1>
                <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact */