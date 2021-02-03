import React from 'react';
import ViewData from '../ViewData/ViewData';

const ViewTable = ({ headings, props }) => {    

    return (
        <>
            <ViewData 
                headings={headings}
                id={props}
            />
        </>
    )
}

export default ViewTable;