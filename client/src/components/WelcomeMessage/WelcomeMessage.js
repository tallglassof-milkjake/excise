import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const WelcomeMessage = () => {
    const { user } = useAuth0();
    const { name } = user;

    return (
        <div>
            <h1 className='display-1 welcome-message'>Welcome, {name}</h1>        
                
            <h2 className='display-4 welcome-text'>
                Use this as your launch-pad.
            </h2>
            <hr/>
            <p className='lead recent-entries-text'>
                Placeholder for currently available Products
            </p>
        </div>
    )
}

export default WelcomeMessage;