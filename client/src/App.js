import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import NavTop from './components/NavTop/NavTop';
import './styles/App.css';

import { StoreProvider } from './utils/GlobalState';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Hello from './components/Hello/Hello';


function App() {
  return (
    <Router>
      <StoreProvider>
        <div className='container-fluid'>
          <div className='nav-color'>
            <NavTop />
          </div>
          <div>
            <Switch>
              <Route path='/' exact component={Hello} />
              <ProtectedRoute path='/welcome' exact component={Welcome} />
              
            </Switch>
          </div>
        </div>
      </StoreProvider>
    </Router>

    
  );
}

export default App;
