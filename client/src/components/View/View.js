import React from 'react';
import ViewTable from '../ViewTable/ViewTable';

const View = ({ props }) => {

    // console.log(excise);

    // const [myExcise, setMyExcise] = useState([]);

    const headings = [
        { name: 'Date', width: '10%' },
        { name: 'Product', width: '10%' },
        { name: 'Description', width: '10%' },
        { name: 'Vessel ID', width: '10%' },
        { name: 'Volume', width: '10%' },
        { name: 'Abv %', width: '10%' },
        { name: 'LALs', width: '10%' },
        { name: 'Employee', width: '10%' },
        { name: 'Notes', width: '10%' },
    ]
    

    return (
        <div>
            <ViewTable 
                headings={headings}
                props={props}
            />
        </div>
    )
}

export default View;