import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import ViewTable from '../ViewTable/ViewTable';

const View = ({ excise }) => {

    // console.log(excise);

    // const [myExcise, setMyExcise] = useState([]);

    const headings = [
        { name: 'Date', width: '10%' },
        { name: 'Product', width: '10%' },
        { name: 'Description', width: '10%' },
        { name: 'Vessel ID', width: '10%' },
        { name: 'Volume', width: '10%' },
        { name: 'Abv %', width: '10%' },
        { name: 'LALs', width: '10%' },
        { name: 'Employee', width: '10%' },
        { name: 'Notes', width: '10%' },
    ]

    // useEffect(() => {
    //         const res = API.getExciseById(excise);
    //         setMyExcise(res.data);
    //         console.log(res.data);
        
    // }, [])
    

    return (
        <div>
            <ViewTable 
                headings={headings}
                excise={excise}
            />
        </div>
    )
}

export default View;