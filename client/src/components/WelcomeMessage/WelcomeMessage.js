import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const WelcomeMessage = () => {
    const { user } = useAuth0();
    const { name } = user;

    return (
        <div>
            <h1 className='display-4 welcome-message'>Welcome,</h1>
            <h2 className='user'>{name}</h2>
        </div>
    )
}

export default WelcomeMessage;