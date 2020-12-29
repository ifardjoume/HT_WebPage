import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { 
    ContactContainer,
    StyledButton,
    StyledForm,
    StyledInput,
    StyledTextArea,
    SocialLinksWrapper,
    SocialLink,
    SocialLinkDescription,
    StyledColumnForm,
    ButtonContainer,
    LinkA,
    Label
} from './contact.elements';
import {
  FaLinkedin
} from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const sizeVariable = 64;

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  };

  toastifySuccess() {
    toast.success('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  };

  toastifyFail() {
    toast.error('Form failed to send!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, phone, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
      };
      emailjs.send('service_o720iww', 'template_vkm8bqn', templateParams, 'user_0hKMQsg4LGkPg3FEhMdGs');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `);
      
      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      this.toastifyFail();
    }
  };
  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'phone':
        formErrors.phone = value.length < 1 ? 'Please enter a phone number.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render(){
    const { formErrors } = this.state;
  return (
            <ContactContainer id="contact">
               <SocialLinksWrapper>
                <SocialLink>
                  <LinkA href="http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hello@h-trace.com" target="_blank"><FiMail size={sizeVariable}/></LinkA>
                  <SocialLinkDescription>hello@h-trace.com</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <ImLocation2 size={sizeVariable} />
                <SocialLinkDescription>Argentina</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <LinkA href="https://www.linkedin.com/company/h-trace/" target="_blank"><FaLinkedin size={sizeVariable}/></LinkA>
                <SocialLinkDescription>H+Trace</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <AiOutlinePhone size={sizeVariable}/>
                <SocialLinkDescription>011+51512</SocialLinkDescription>
                </SocialLink>
              </SocialLinksWrapper>
        <StyledForm  className="contact-form"  onSubmit={this.handleSubmit} noValidate>
          <StyledColumnForm>
        <Label htmlFor="name">Nombre *</Label>
            <StyledInput
             type='text'
             name='name'
             value={this.state.name}
             className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
             onChange={this.handleChange}
             noValidate
            />
            {formErrors.name.length > 0 && (
                <span className='errorMessage'>{formErrors.name}</span>
              )}
              <br/>
        <Label htmlFor="email">Email *</Label>
            <StyledInput
            type='email'
            name='email'
            value={this.state.email}
            className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
            onChange={this.handleChange}
            noValidate
            />
             {formErrors.email.length > 0 && (
                <span className='errorMessage'>{formErrors.email}</span>
              )}
            </StyledColumnForm>
            <StyledColumnForm>
            <Label htmlFor="tel">Telefono</Label>
            <StyledInput
            type='tel'
            name='phone'
            value={this.state.phone}
            className={`form-control formInput ${
              formErrors.phone.length > 0 ? 'error' : null
            }`}
            onChange={this.handleChange}
            noValidate
            />
            {formErrors.phone.length > 0 && (
                <span className='errorMessage'>{formErrors.phone}</span>
              )}
              <br/>
        <Label htmlFor="message">Mensaje *</Label>
        <StyledTextArea
            name='message'
            value={this.state.message}
            className={`form-control formInput ${
              formErrors.message.length > 0 ? 'error' : null
            }`}
            onChange={this.handleChange}
            noValidate
            />
           {formErrors.message.length > 0 && (
                <span className='errorMessage'>{formErrors.message}</span>
              )}
            <ButtonContainer>
              <StyledButton type="submit" value="Send">Enviar</StyledButton>
            </ButtonContainer>
        </StyledColumnForm>
        </StyledForm>
        <ToastContainer />
        </ContactContainer>
  )}
};

export default ContactUs;