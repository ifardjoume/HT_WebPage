import React, { useState } from 'react'
import { LogInContainer,
    StyledForm,
    StyledInput,
    StyledButton,
    ButtonContainer,
    Label,
    LogInTitle,
    ErrorMessage
} from './SigInForm.elements';
import Logo from '../../images/main-logo.png';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from '../../hooks';
import { LOGIN_USER } from '../../Query';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';

function SignInForm(){
    const [errors, setErrors] = useState({});
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: ''
    });
    const history = useHistory();
    const [loginUser] = useMutation(LOGIN_USER, {
        update(_, result) {
          Cookies.set('token', result.data.login.token);
          history.push('/user-area');
        },
        onError() {
          setErrors({message: "Wrong username or password"});
        },
        variables: values
      });
    
      function loginUserCallback() {
        loginUser();
      }

    return (
            <LogInContainer>
                <StyledForm onSubmit={onSubmit} noValidate>
                    <LogInTitle src={Logo}/>
                    <Label htmlFor="email">User</Label>
                    <StyledInput type='text' 
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    />
                    <Label htmlFor="password">Password</Label>
                    <StyledInput type='password'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    />
                    {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    {Object.values(errors).map((value) => (
                    <ErrorMessage key={value}>{value}</ErrorMessage>
                    ))}
                </div>
                 )}
                    <ButtonContainer>
                        <StyledButton type="submit"
                            value="LOGIN">
                            Login
                        </StyledButton>
                    </ButtonContainer>
                </StyledForm>
            </LogInContainer>
    )
}

export default SignInForm;