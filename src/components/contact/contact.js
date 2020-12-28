import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { 
    ContactContainer,
    StyledButton,
    StyledForm,
    StyledInput,
    StyledError,
    StyledTextArea,
    SocialLinksWrapper,
    SocialLink,
    SocialLinkDescription,
    StyledColumnForm,
    ButtonContainer,
    LinkA
} from './contact.elements';
import {
  FaLinkedin
} from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const sizeVariable = 64;

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_a21n0xw', 'template_plt2hke', e.target, 'user_0hKMQsg4LGkPg3FEhMdGs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  var initialState = {
    user_name:'',
    user_email:'',
    message:'',
    phone:''
  }
  const [state, setState] = useState(initialState);
    const [error, setError] = useState('');
    const handleSubmit = e => {
      e.preventDefault();
  
      for (let key in state) {
        if (state[key] === '') {
          setError(`Todos los campos son obligatorios`)
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


    const onSubmit = e => {
      e.preventDefault();
      handleSubmit(e);
        if (state.user_email !== '' && state.message !== '' ) {
          sendEmail(e)
        } else {
            alert("Debes completar por lo menos el mail y mensaje")
      }
    };
    return (
            <ContactContainer id="contact">
               <SocialLinksWrapper>
                <SocialLink>
                  <LinkA href="mailto:hello@h-trace.com"><FiMail size={sizeVariable}/></LinkA>
                  <SocialLinkDescription>hello@h-trace.com</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <ImLocation2 size={sizeVariable} />
                <SocialLinkDescription>Argentina</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <FaLinkedin size={sizeVariable}/>
                <SocialLinkDescription>H+Trace</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <AiOutlinePhone size={sizeVariable}/>
                <SocialLinkDescription>011+51512</SocialLinkDescription>
                </SocialLink>
              </SocialLinksWrapper>
        <StyledForm  className="contact-form"  onSubmit={onSubmit}>
          <StyledColumnForm>
        <label htmlFor="name">Nombre</label>
            <StyledInput
            type="text"
            name="user_name"
            value={state.user_name}
            onChange={handleInput}
            />
        <label htmlFor="email">Email</label>
            <StyledInput
            type="email"
            name="user_email"
            value={state.user_email}
            onChange={handleInput}
            />
            </StyledColumnForm>
            <StyledColumnForm>
            <label htmlFor="tel">Telefono</label>
            <StyledInput
            type="tel"
            name="phone"
            value={state.phone}
            onChange={handleInput}
            />
        <label htmlFor="message">Mensaje</label>
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
            <ButtonContainer>
              <StyledButton type="submit" value="Send">Enviar</StyledButton>
            </ButtonContainer>
        </StyledColumnForm>
        </StyledForm>
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