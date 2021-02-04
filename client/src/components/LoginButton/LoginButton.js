import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import './LoginButton.css';

const LoginButton = () => {
    const  { loginWithRedirect } = useAuth0();
    return (
        <Button
            className='btn btn-block btn-success btn-lg'
            onClick={() => loginWithRedirect()}
        >
            Login
        </Button>
    );
};

export default LoginButton;