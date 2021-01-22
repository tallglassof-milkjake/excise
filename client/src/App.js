import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Nav/Nav';
import HomePage from './pages/Home';
import './styles/App.css';
import TopNav from './components/NavTop/NavTop';
import { StoreProvider } from './utils/GlobalState';
import Excise from './pages/Excise';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <StoreProvider>
        <div className='container-fluid'>
          <div className='nav-color'>
            <TopNav />
          </div>
          <div className="row">
            <div className='sticky-nav col-2'>
              <NavBar />
            </div>
            
              <div className='col-10'>
                <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/excise/' component={Excise}/>


                  <Route component={NotFound}/>
                </Switch>
              </div>
          </div>
          <div>
            
          </div>
        </div>
      </StoreProvider>
    </Router>

    
  );
}

export default App;
