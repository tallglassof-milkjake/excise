import React, { useEffect, Component } from 'react';
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { LOADING, UPDATE_EXCISE } from '../../utils/actions';
import API from '../../utils/API';
import { List, ListItem } from '../List/List';
import { Form, Button } from 'react-bootstrap';

import DashTable from '../DashTable/DashTable';

import './Home.css';

class Home extends Component {
    // const [state, dispatch] = useStoreContext();

    headings = [
        { name: 'Date', width: '10%' },
        { name: 'Product', width: '10%' },
        { name: 'Volume', width: '10%' },
        { name: 'Abv %', width: '10%' },
    ]

    // const getExcise = () => {
    //     dispatch({ type: LOADING });
    //     API.getExcise()
    //         .then(results => {
    //             dispatch({
    //                 type: UPDATE_EXCISE,
    //                 excises: results.data
    //             });
    //         })
    //         .catch(err => console.log(err));
    // };

    // useEffect(() => {
    //     getExcise();
    // }, []);

    render() {
    return (
        <div className='dash-main'>
            <div className='dash-message'>
                <h1 className='display-3'>Dashboard</h1>
            </div>

            <div className='row dash-row'>
                <div className='col dash-col'>
                    <Form>
                        <Form.Group>
                            <Form.Label>Search</Form.Label>
                            <Form.Control type='text'  />
                        </Form.Group>
                        <Button type='submit'>Search</Button>
                    </Form> 
                </div>   
            </div>
            

            <DashTable 
                headings={this.headings}
            />

            {/* {state.excises.length ? (
            <List>
                {state.excises.map(excise => (
                    <ListItem key={excise._id}>
                        <Link to={"/api/excise" + excise._id}>
                            <strong>
                                {excise.product}
                            </strong>
                            <p>
                                {excise.vessel_id}
                            </p>
                            <p>
                                {excise.volume}
                            </p>
                        </Link>
                    </ListItem>
                ))}
            </List>
            ) : (
                <h1 className='display-4'>There is no data available</h1>
            )} */}
        </div>
    )
    }
}

export default Home;