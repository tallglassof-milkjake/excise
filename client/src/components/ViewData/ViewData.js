import React, { useEffect } from 'react';

const ViewData = ({ excise }) => {
    
    

    useEffect(() => {
        console.log(excise);
    }, [excise])

    console.log(excise);

    return (
        <td></td>
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