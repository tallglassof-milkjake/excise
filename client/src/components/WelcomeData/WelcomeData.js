import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

function WelcomeData() {
    const [exciseState, setExciseState] = useState();

    const getExcise = () => {
        const getExcise = async () => {
            let results = API.getExcise();
            setExciseState(results);
        }

        getExcise();
    };

    useEffect(() => {
        getExcise();
    }, []);

    
    return(
        <tbody>
            {exciseState.map(excise => {
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