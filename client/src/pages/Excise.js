import React, { useRef } from 'react';
import ExciseForm from '../components/ExciseInput/ExciseInput';
import SideBar from '../components/SideBar/Nav';

function Excise() {

    return (
        <>
        <div className='row side-bar-row'>
            <div className='sidebar-expanded sidebar'>
              <SideBar />
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <ExciseForm />
            </div>
        </div>
        </>
    )
}

export default Excise;