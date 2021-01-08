import React from 'react'
import { Task } from '../../Task';
import SignInForm from '../../components/signIn/SignInForm';
import NavBar from '../../components/navbar/NavBarDefault';


const SignIn = (props) => {
    return (
        <div>
            <NavBar />
            <SignInForm/>
            <Task />
        </div>
    )
}

export default SignIn
