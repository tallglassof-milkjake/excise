import React, { useRef } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_EXCISE, LOADING } from '../utils/actions';
import API from '../utils/API';
import { Form, Button } from 'react-bootstrap';

function Excise() {
    const dateRef = useRef();
    const productRef = useRef();
    const descriptionRef = useRef();
    const vessel_idRef = useRef();
    const volumeRef = useRef();
    const abvRef = useRef();
    const lalsRef = useRef();
    const employeeRef = useRef();
    const notesRef = useRef();

    const [state, dispatch] = useStoreContext();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        console.log(productRef.current.value);
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
                    <Form.Control type='date' ref={dateRef} />
                    <Form.Text className='text-muted'>
                        Please Enter The Date
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Product:</Form.Label>
                    <Form.Control type='text' ref={productRef} placeholder='Product' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type='text' ref={descriptionRef} placeholder='Description' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Vessel Id:</Form.Label>
                    <Form.Control type='number' ref={vessel_idRef} placeholder='Vessel Id' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Volume:</Form.Label>
                    <Form.Control type='number' ref={volumeRef} placeholder='Volume' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>ABV:</Form.Label>
                    <Form.Control type='number' ref={abvRef} placeholder='ABV' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>LALs:</Form.Label>
                    <Form.Control type='number' ref={lalsRef} placeholder='LALs' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Employee:</Form.Label>
                    <Form.Control type='text' ref={employeeRef} placeholder='Employee' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control type='text' ref={notesRef} placeholder='Notes' />
                </Form.Group>

                <Button disabled={state.loading} type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Excise;