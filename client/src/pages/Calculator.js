import React from 'react';
import Sidebar from '../components/SideBar/Nav';

const Calculator = () => {
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

export default Calculator;