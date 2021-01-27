import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './UserInfo.css';

const UserInfo = () => {
    const { user } = useAuth0();
    const { name, picture } = user;

    return (
        <>
            <h1 className='user-heading'>Welcome</h1>
            <h2 className='user-name'>{name}</h2>
            
            <img 
                src={picture}
                alt='Profile'
                className='img-fluid sidebar-img'
            />
        </>
    )
};

export default UserInfo;