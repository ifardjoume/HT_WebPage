import React, { useState } from 'react'
import { LogInContainer,
    StyledForm,
    StyledInput,
    StyledButton,
    ButtonContainer,
    Label,
    LogInTitle
} from './SigInForm.elements';
import Logo from '../../images/main-logo.png'


function SignInForm(props){
    const [state , setState] = useState({
        email : "",
        password : ""
    });
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            console.log("Match!",state);   
        } else {
            console.log('Not match',state);
        }
    }

    return (
            <LogInContainer>
                <StyledForm>
                    <LogInTitle src={Logo}/>
                    <Label htmlFor="email">User</Label>
                    <StyledInput type='email' 
                    name='email'
                    id='email'
                    value={state.email}
                    onChange={handleChange}
                    />
                    <Label htmlFor="password">Password</Label>
                    <StyledInput type='password'
                    name='password'
                    id='password'
                    value={state.password}
                    onChange={handleChange}
                    />
                    <ButtonContainer>
                        <StyledButton type="submit"
                            value="LOGIN"
                            onClick={handleSubmitClick}>
                            Login
                        </StyledButton>
                    </ButtonContainer>
                </StyledForm>
            </LogInContainer>
    )
}

export default SignInForm;