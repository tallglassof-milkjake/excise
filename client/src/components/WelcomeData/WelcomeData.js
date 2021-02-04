import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { LOADING, UPDATE_EXCISE } from '../../utils/actions';
import API from '../../utils/API';

const WelcomeData = ({ currentExcise }) => {
    
    return(
        <tbody>
            {currentExcise.map(excise => {
                return(
                <tr key={excise._id}>
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