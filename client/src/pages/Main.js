import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomeMain/Home';
import Excise from './Excise';
import NotFound from '../components/NotFound/NotFound';
import Nav from '../components/Nav/Nav';

const Main = () => {

    return (
        <Router>
            <div className="row">
                <div className='sticky-nav col-2'>
                <Nav />
                </div>
                <div className='col-10'>
                    <Switch>
                        <Route exact path='/home' component={HomePage} />
                        <Route exact path='/home/excise' component={Excise}/>

                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
    
};

export default Main;