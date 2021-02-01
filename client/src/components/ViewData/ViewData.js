import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

const ViewData = ({ excise }) => {

    const id = excise;

    const [myExcise, setMyExcise] = useState()

    useEffect(() => {
        const fetch = async () => {
            const res = await API.getExciseById(id);
            console.log(res);
            setMyExcise(res);
        }

        fetch();
    }, [])

    console.log(id);

    return (
        <tbody>
            <tr>
                <td>

                </td>
            </tr>
        </tbody>
        // <tbody>
        //     {excise.map(excise =>{
        //         return(
        //             <tr
        //                 key={excise._id}
        //             >
        //                 <td data-th='Date'>
        //                     {excise.date}
        //                 </td>
        //                 <td data-th='Product'>
        //                     {excise.product}
        //                 </td>
        //                 <td data-th='Description'>
        //                     {excise.description}
        //                 </td>
        //                 <td data-th='Vessel ID'>
        //                     {excise.vessel_id}
        //                 </td>
        //                 <td data-th='Volume'>
        //                     {excise.volume}
        //                 </td>
        //                 <td data-th='Abv %'>
        //                     {excise.abv }
        //                 </td>
        //                 <td data-th='LALs'>
        //                     {excise.lals}
        //                 </td>
        //                 <td data-th='Employee'>
        //                     {excise.employee}
        //                 </td>
        //                 <td data-th='Notes'>
        //                     {excise.notes}
        //                 </td>

        //             </tr>
        //         )
        //     })}
        // </tbody>
    )
}

export default ViewData;