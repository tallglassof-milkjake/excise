import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { LOADING, UPDATE_EXCISE } from '../../utils/actions';
import API from '../../utils/API';
import { List, ListItem } from '../List/List';
import { Form, Button } from 'react-bootstrap';

function DashData({ excise }) {
    
    // const [state, dispatch] = useStoreContext();

    // const getExcise = () => {
    //     dispatch({ type: LOADING });
    //     API.getExcise()
    //         .then(results => {
    //             dispatch({
    //                 type: UPDATE_EXCISE,
    //                 excises: results.data
    //             });
    //         })
    //         .catch(err => console.log(err));
    // };

    // useEffect(() => {
    //     getExcise();
    // }, []);
    
    return (
        <tbody>
            {excise.map(excise => {
                return(
                <tr key={excise._id}>
                    <td data-th="Date">
                        {excise.date}
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