import React, { useEffect, useState } from 'react';
import './CurrentProducts.css';
import WelcomeData from '../WelcomeData/WelcomeData';
import API from '../../utils/API';

const CurrentProducts = ({ headings }) => {

    const [excise, setExcise] = useState({});
    
    const [itemsPerPage] = useState(3);

    useEffect(() => {
        const fetch = async () => {
            const res = await API.getExcise();
            setExcise(res.data);
            console.log(res.data)
        }

        fetch();
    }, [])

    console.log(excise);

    return (
        <table className='product-table table table-striped'>
            <thead>
                <tr>{headings.map(({name, width}) => {
                    return (
                        <th
                            className='col'
                            key={name}
                            style={{width}}
                        >
                            {name}
                        </th>
                    )
                })}</tr>
            </thead>
            <WelcomeData itemsPerPage={itemsPerPage} excise={excise}/>
        </table>
    )
}

export default CurrentProducts;