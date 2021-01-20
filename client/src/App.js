import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
        </div>
    </Router>
  );
}

export default App;
