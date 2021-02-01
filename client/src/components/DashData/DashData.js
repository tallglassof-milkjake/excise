import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { LOADING, UPDATE_EXCISE } from '../../utils/actions';
import API from '../../utils/API';
import { List, ListItem } from '../List/List';
import { Form, Button } from 'react-bootstrap';

import ViewPage from '../../pages/View';

function DashData({ excise, selectedExcise }) {
    
    // console.log(excise);
    const [exciseId, setExciseId] = useState();

    useEffect(() => {
        const results = excise._id;
        setExciseId(results);
    }, [])

    console.log(selectedExcise)

    return (
        <tbody>
            {excise.map(excise => {
                return(
                <tr 
                    key={excise._id}
                >
                    <td data-th="Date">
                        <Link 
                            to={'/dashboard/' + excise._id}
                            props={excise._id}
                        >
                            {excise.date}
                        </Link>
                    </td>
                    <td data-th='Product'>
                        {excise.product}
                    </td>
                    <td data-th='Volume'>
                        {excise.volume} L
                    </td>
                    <td data-th='Abv %'>
                        {excise.abv} %
                    </td>
                </tr>
                )
            })}
        </tbody>
    )
}

export default DashData;