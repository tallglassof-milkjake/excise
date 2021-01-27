import React from 'react';
import Dashboard from '../components/Dashboard/Home';
import SideBar from '../components/SideBar/Nav';

function HomeBoard() {
    return (
        <>
        <div className='row side-bar-row'>
            <div className='sidebar-expanded sidebar'>
              <SideBar />
            </div>
        </div>
        <Dashboard />
        </>
    )
}

export default HomeBoard;