import React from 'react';
import './Loading.css';
import SideBar from '../SideBar/Nav';

const Loading = () => {
    return (
        <>
        <div className='col-2 side-bar-col'>
                    <SideBar />
            </div>
        <div className='container-fluid load-container'>
            <div className='row load-row align-items-center'>
                <div className='col text-center'>
                    <i className="fas fa-spinner fa-5x"></i>
                </div>
            </div>
        </div>
        </>
    )
};

export default Loading;