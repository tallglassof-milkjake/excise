import React from 'react';
import LoginButton from '../LoginButton/LoginButton';

import './Hello.css';

const Hello = () => {
    return (
        <div className='row hello-row'>
            <div className='col-4'>

            </div>
            <div className='col-4'>
                <div className='card mx-auto'>
                    <div className='card-content'>
                        <h1 className='login-heading'>Excise-able</h1>
                        <p>
                            Log in to get started
                        </p>
                        <LoginButton />
                    </div>
                </div>
            </div>
            <div className='col-4'>

            </div>
        </div>
        
    )
};

export default Hello;