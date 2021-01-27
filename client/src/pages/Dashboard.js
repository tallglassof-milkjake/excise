import React from 'react';
import Dashboard from '../components/Dashboard/Home';
import SideBar from '../components/SideBar/Nav';

function HomeBoard() {
    return (
        <>
            <div className='col-2 side-bar-col'>
                <SideBar />
            </div>
            <div className='col-10 main-col'>
                <div className='content-section'>
                    <Dashboard />
                </div>
            </div>
        </>
    )
}

export default HomeBoard;