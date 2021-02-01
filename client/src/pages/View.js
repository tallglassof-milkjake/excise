import React, { Component, useEffect, useState } from 'react';
import View from '../components/View/View';
import SideBar from '../components/SideBar/Nav';
import API from '../utils/API';

const ViewPage = ({ ...props }) => {

    const newId = props.match.params.id;

    const [exciseId] = useState(newId);
    // const [myExcise, setMyExcise] = useState()

    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await API.getExciseById(`/${newId}`);
    //         console.log(res);
    //         setMyExcise(res.data);
    //     }

    //     fetch();
    // }, [])

    console.log(exciseId);
    // console.log(myExcise);
    
        return (
            <>
                <div className='col-2 side-bar-col'>
                    <SideBar />
                </div>
                <div className='col-10 main-col'>
                    <div className='content-section'>
                        <View 
                            excise={exciseId}
                        />
                    </div>
                </div>
            </>
        )
    
}

export default ViewPage;