import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const WelcomeMessage = () => {
    const { user } = useAuth0();
    const { name } = user;

    return (
        <div>
            <div className='card welcome-card'>
                <h1 className='display-4 welcome-message'>Welcome,</h1>
                <h2 className='user'>{name}</h2>
                    
                <h2 className='welcome-text'>
                    Use this as your launch-pad.
                </h2>
            </div>
            <div className='card welcome-card'>
                <h1 className='lead recent-entries-text'>
                    Placeholder for currently available Products
                </h1>
            </div>
            
            <p className='lead recent-entries-text'>
                Placeholder for currently available Products
            </p>
        </div>
    )
}

export default WelcomeMessage;