import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import SideBar from '../components/SideBar/Nav';
import Welcome from '../components/Welcome/Welcome';
import '../styles/Welcome.css';

const WelcomeMessage = () => {
    const { user } = useAuth0();
    const { name, picture } = user;

    return (
        <>
            <div className='col-2 side-bar-col'>
                <SideBar />
            </div>
            <div className='col-10 main-col'>
                <div className='content-section'>
                    <Welcome /> 
                </div>
            </div>
        </>
    )
}

export default WelcomeMessage;
