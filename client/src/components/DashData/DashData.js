import React, { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { BrowserRouter as  Route, Switch, Link, useParams, useRouteMatch } from "react-router-dom";
import ViewPage from '../../pages/View';
import API from '../../utils/API';

function DashData() {

    const [exciseData, setExciseData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const res = await API.getExcise();
            setExciseData(res.data);
        }

        fetch();
    }, []);

    let { path, url } = useRouteMatch();
    let { id } = useParams();

    return (
        <>
        <tbody>
            {exciseData.map(excise => {
                return(
                <tr 
                    key={excise._id}
                >
                    <td data-th="Date">
                        <Link 
                            to={`${url}/${id}`}
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
        <Switch>
            <ProtectedRoute path={`${path}/${id}`}>
                <ViewPage/>
            </ProtectedRoute>
        </Switch>
        
        </>
    )
}

export default DashData;