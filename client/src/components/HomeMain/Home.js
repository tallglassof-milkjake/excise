import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { LOADING, UPDATE_EXCISE } from '../../utils/actions';
import API from '../../utils/API';
import { List, ListItem } from '../List/List';
import { Form, Button } from 'react-bootstrap';

function Home() {
    const [state, dispatch] = useStoreContext();

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

    return (
        <div>
            <h1 className='display-3'>Dashboard</h1>

            <Form>
                <Form.Group>
                    <Form.Label>Search</Form.Label>
                    <Form.Control type='text'  />
                </Form.Group>
                <Button type='submit'>Search</Button>
            </Form>

            {state.excises.length ? (
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
            )}
        </div>
    )
}

export default Home;