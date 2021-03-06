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
    ButtonContainer,
    LinkA,
    Label,
    Icon,
    IconLoc
} from './contact.elements';
import Email from '../../images/icons/email.png';
import Location from '../../images/icons/pin.png';
import Linkedin from '../../images/icons/linkedin.png';
import Phone from '../../images/icons/phone.png';
import { FormattedMessage } from "react-intl";
import Cookies from 'js-cookie';

const errorMessageName = Cookies.get('locale') === "en" ? 'Please enter your name.' : 'Por favor, escriba un nombre valido.'
const errorMessageEmail = Cookies.get('locale') === "en" ? 'Please enter a valid email address.' : 'Por favor, escriba un email valido.'
const errorMessagePhone = Cookies.get('locale') === "en" ? 'Please enter a phone number.' : 'Por favor, escriba un telefono valido.'
const errorMessage = Cookies.get('locale') === "en" ? 'Please enter a message' : 'Por favor, escriba un mensaje'
const MessageSent = Cookies.get('locale') === "en" ? 'Sent!' : 'Enviado!'


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
    toast.success( MessageSent , {
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
    toast.error('Error!', {
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

     /*  console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `); */
      
      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      // console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
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
        formErrors.name = value.length < 1 ? errorMessageName : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : errorMessageEmail;
        break;
      case 'phone':
        formErrors.phone = value.length < 1 ? errorMessagePhone : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? errorMessage : '';
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
               <LinkA href="tel:+54-9-11-6092-3071"><Icon src={Phone} /></LinkA>
                <SocialLinkDescription>+54 9 11 60923071</SocialLinkDescription>
                </SocialLink>
               <SocialLink>
                  <LinkA href="http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hello@h-trace.com" target="_blank"><Icon src={Email} /></LinkA>
                  <SocialLinkDescription>hello@h-trace.com</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <LinkA href="https://www.linkedin.com/company/h-trace/" target="_blank"><Icon src={Linkedin} /></LinkA>
                <SocialLinkDescription>H+Trace</SocialLinkDescription>
                </SocialLink>
                <SocialLink>
                <IconLoc src={Location} />
                <SocialLinkDescription>Argentina</SocialLinkDescription>
                </SocialLink>
              </SocialLinksWrapper>
        <StyledForm  className="contact-form"  onSubmit={this.handleSubmit} noValidate>
        <Label htmlFor="name"><FormattedMessage id="ContactFormName" defaultMessage="Name *" /></Label>
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
              <br/><br/>
        <Label htmlFor="email"><FormattedMessage id="ContactFormMail" defaultMessage="Email *" /></Label>
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
              <br/><br/>
            <Label htmlFor="tel"><FormattedMessage id="ContactFormPhone" defaultMessage="Phone Number" /></Label>
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
              <br/><br/>
        <Label htmlFor="message"><FormattedMessage id="ContactFormMessage" defaultMessage="Message *" /></Label>
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
              <br/><br/>
            <ButtonContainer>
              <StyledButton type="submit" value="Send"><FormattedMessage id="ContactFormButton" defaultMessage="Submit" /></StyledButton>
            </ButtonContainer>
        </StyledForm>
        <ToastContainer />
        </ContactContainer>
  )}
};

export default ContactUs;