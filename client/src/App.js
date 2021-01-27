import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import NavTop from './components/NavTop/NavTop';
import './styles/App.css';

import { StoreProvider } from './utils/GlobalState';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Hello from './components/Hello/Hello';
import Dashboard from './pages/Dashboard';
import Excise from './pages/Excise';



function App() {
  return (
    <Router>
      <StoreProvider>
        <div className='nav-color'>
          <NavTop />
        </div>
        <div className='container-fluid d-flex'>
            <div className='main-screen d-flex'>  
                <Switch>
                  <Route path='/' exact component={Hello} />
                  <ProtectedRoute path='/welcome' exact component={Welcome} />
                  <ProtectedRoute path='/dashboard' exact component={Dashboard} />
                  <ProtectedRoute path='/excise' exact component={Excise} />
                </Switch>
            </div>
        </div>
      </StoreProvider>
    </Router>

    
  );
}

export default App;
