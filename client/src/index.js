import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    
    <Router>
        {console.log(process.env.REACT_APP_AFTER_LOGIN)}
        <Auth0ProviderWithHistory
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={process.env.REACT_APP_AFTER_LOGIN}
            
        >
            <App />
        </Auth0ProviderWithHistory>
    </Router>,
    document.getElementById('root')
);