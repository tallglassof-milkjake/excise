import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { LOADING, UPDATE_EXCISE } from '../../utils/actions';
import API from '../../utils/API';

function WelcomeData() {
    const [state, dispatch] = useStoreContext();
    const [exciseState, setExciseState] = useState();

    const getExcise = () => {
        dispatch({ type: LOADING });
        API.getExcise()
            .then(results => {
                dispatch({
                    type: UPDATE_EXCISE,
                    excises: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getExcise();
    }, []);

    console.log(state);
    
    return(
        <tbody>
            {state.excises.map(excise => {
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

export default WelcomeData;