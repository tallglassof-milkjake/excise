import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = ({ handleSearchChange }) => {
    return (
        <div className='row dash-row justify-content-center'>
            <div className='col dash-col'>
                <Form className='search-form'>
                    <Form.Group>
                        <Form.Label>Search</Form.Label>
                        <Form.Control type='search' placeholder='Search' onChange={e => handleSearchChange(e)}  />
                    </Form.Group>
                    <Button type='submit'>Search</Button>
                </Form> 
            </div>   
        </div>
    )
};

export default Search;