import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import NavTop from './components/NavTop/NavTop';
import './styles/App.css';

import { StoreProvider } from './utils/GlobalState';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Hello from './components/Hello/Hello';
import Dashboard from './pages/Dashboard';
import Excise from './pages/Excise';
import SideBar from './components/SideBar/Nav';


function App() {
  return (
    <Router>
      <StoreProvider>
        <div className='nav-color'>
          <NavTop />
        </div>
        <div className='container-fluid d-flex'>
          <div className='row side-bar-row'>
            <div className='col'>
              <SideBar />
            </div>
          </div>
          <div className='main-screen row'>
            <div className='col'>
              <Switch>
                <Route path='/' exact component={Hello} />
                <ProtectedRoute path='/welcome' exact component={Welcome} />
                <ProtectedRoute path='/dashboard' exact component={Dashboard} />
                <ProtectedRoute path='/excise' exact component={Excise} />
              </Switch>
            </div>
          </div>
        </div>
      </StoreProvider>
    </Router>

    
  );
}

export default App;
