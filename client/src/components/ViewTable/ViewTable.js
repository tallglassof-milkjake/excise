import React, { useState, useEffect } from 'react';
import ViewData from '../ViewData/ViewData';
import API from '../../utils/API';

const ViewTable = ({ headings, excise }) => {    
    
    const [myExcise, setMyExcise] = useState()
    
    useEffect(() => {
        const fetch = async () => {
            const res = await API.getExciseById(`/${excise}`);
            console.log(res.data);
            setMyExcise(res.data);
        }

        fetch();    
    }, [])

    // console.log(myExcise);

    return (
        <>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        {headings.map(({name, width}) => {
                            return (
                                <th
                                    className='col'
                                    key={name}
                                    style={{width}}
                                >
                                    {name}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <ViewData 
                    id={excise}
                    data={myExcise}
                />
            </table>
        </>
    )
}

export default ViewTable;