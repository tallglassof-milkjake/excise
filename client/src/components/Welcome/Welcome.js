import React from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Welcome = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    return (
        <>
            <div className='row'>
                <h1 className='display-1'>Welcome, {name}</h1>
            </div>
            <div className='row'>
                <img
                    src={picture}
                    alt='Profile'
                    className='img-fluid'
                />
            </div>    
        </>
    )
};

export default Welcome;