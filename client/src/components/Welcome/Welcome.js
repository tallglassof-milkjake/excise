import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import './Welcome.css';

const Welcome = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    return (
        <>
            <h1 className='display-1'>Welcome, {name}</h1>        
            <div className='row'>
            <img
                src={picture}
                alt='Profile'
                className='img-fluid'
            />
            <p>Contact me at: {email}</p>
            </div>
        </>
    )
};

export default Welcome;