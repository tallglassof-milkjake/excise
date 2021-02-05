import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_EXCISE, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import { Form, Button } from 'react-bootstrap';
import './ExciseInput.css';

function ExciseForm() {
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
            product: productRef.current.value,
            description: descriptionRef.current.value,
            veesel_id: vessel_idRef.current.value,
            volume: volumeRef.current.value,
            abv: abvRef.current.value,
            lals: lalsRef.current.value,
            employee: employeeRef.current.value,
            notes: notesRef.current.value
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
        descriptionRef.current.value = "";
        vessel_idRef.current.value = "";
        volumeRef.current.value = "";
        abvRef.current.value = "";
        lalsRef.current.value = "";
        employeeRef.current.value = "";
        notesRef.current.value = "";
    }

    return (
        
            <div className='excise-main container'>
                <div className='row align-items-center'>
                    <div className='col-md-8'>
                        <h1 className='display-4 excise-head'>Add to Database</h1>
                        <i className="fas fa-database fa-4x data-icon"></i>
                        <p className='lead'>
                            Fill out finished product details here to save to database
                        </p>

                        <hr/>
                    </div>
                    <div className='col-md-4 text-center'>
                        
                    </div>
                </div>
                    <Form className='excise-form' onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-3'>
                                <Form.Group>
                                    <Form.Label>Date:</Form.Label>
                                    <Form.Control type='date' ref={dateRef} className='date-input' />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <Form.Group>
                                    <Form.Label>Product:</Form.Label>
                                    <Form.Control type='text' ref={productRef} placeholder='Product' className='product-input' />
                                </Form.Group>
                            </div>

                            <div className='col-4'>
                                <Form.Group>
                                    <Form.Label>Description:</Form.Label>
                                    <Form.Control type='text' ref={descriptionRef} placeholder='Description' className='description-input' />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <Form.Group>
                                    <Form.Label>Vessel Id:</Form.Label>
                                    <Form.Control type='text' ref={vessel_idRef} placeholder='Vessel Id' className='vessel-input' />
                                </Form.Group>
                            </div>
                            
                            <div className='col-2'>
                                <Form.Group>
                                    <Form.Label>Volume:</Form.Label>
                                    <Form.Control type='number' ref={volumeRef} placeholder='Volume' className='volume-input' step='.01' />
                                </Form.Group>
                            </div>

                            <div className='col-2'>
                                <Form.Group>
                                    <Form.Label>ABV:</Form.Label>
                                    <Form.Control type='number' ref={abvRef} placeholder='ABV' className='abv-input' step='.01' />
                                </Form.Group>
                            </div>
                            
                            <div className='col-2'>
                                <Form.Group>
                                    <Form.Label>LALs:</Form.Label>
                                    <Form.Control type='number' ref={lalsRef} placeholder='LALs' className='lals-input' step='.01' />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <Form.Group>
                                    <Form.Label>Employee:</Form.Label>
                                    <Form.Control type='text' ref={employeeRef} placeholder='Employee' className='employee-input' />
                                </Form.Group>
                            </div>

                            <div className='col-4'>
                                <Form.Group>
                                    <Form.Label>Notes:</Form.Label>
                                    <Form.Control as='textarea' rows={3} type='text' ref={notesRef} placeholder='Notes' className='notes-input' />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <Button disabled={state.loading} type='submit'>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </Form>
                
                
            </div>
        
    )
}

export default ExciseForm;