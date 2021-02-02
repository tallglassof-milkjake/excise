import React from 'react';
import ExciseForm from '../components/ExciseInput/ExciseInput';
import SideBar from '../components/SideBar/Nav';

function Excise() {

    return (
        <>
        <div className='col side-bar-col'>
            <SideBar />
        </div>
        
        <div className='col-10 main-col'>
            <div className='content-section'>
                <ExciseForm />
            </div>
        </div>
        
        </>
    )
}

export default Excise;