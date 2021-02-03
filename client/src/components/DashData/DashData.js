import React, { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { BrowserRouter as  Route, Switch, Link, useParams, useRouteMatch } from "react-router-dom";

import API from '../../utils/API';

function DashData({ excise, currentExcise }) {

    let { path, url } = useRouteMatch();
    let { id } = useParams();

    console.log(path);
    console.log(id);

    // const handleClick = (e) => {
    //     e.preventDefault();
        
    //     console.log({id});
    // }

    return (
        <>
        <tbody>
            {currentExcise.map(excise => {
                return(
                <tr 
                    key={excise._id}
                >
                    <td data-th="Date">
                        <Link 
                            to={`/dashboard/${excise._id}`}
                            // onClick={handleClick}
                            id={excise._id}
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
        </>
    )
}

export default DashData;