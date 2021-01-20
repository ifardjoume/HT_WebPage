import React from 'react'
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

class GuardedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = Cookies.get('token');
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/sign-in' }} />
        );
    }
}

export default GuardedRoute;