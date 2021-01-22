import React, { useRef } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_EXCISE, LOADING } from '../utils/actions';
import API from '../utils/API';
import { Form, Button } from 'react-bootstrap';

function Excise() {
    const dateRef = useRef();
    const productRef = useRef();

    const [state, dispatch] = useStoreContext();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.addExcise({
            date: dateRef.current.value,
            product: productRef.current.value
        })
            .then(result => {
                dispatch({
                    type: ADD_EXCISE,
                    excise: result.data
                });
            })
            .catch(err => console.log(err));

        dateRef.current.value = "";
        productRef.current.value = "";
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type='date' required ref={dateRef} placeholder='Date' />
                    <Form.Text className='text-muted'>
                        Please Enter The Date
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Product:</Form.Label>
                    <Form.Control type='text' required ref={productRef} placeholder='Product' />
                </Form.Group>

                <Button disabled={state.loading} type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Excise;