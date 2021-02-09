import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

ReactDOM.render(
    
    <Router>
        <Auth0ProviderWithHistory
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={process.env.REACT_APP_AFTER_LOGIN}
            deployedRedirect={process.env.REACT_APP_DEPLOYED_REDIRECT}
        >
            <App />
        </Auth0ProviderWithHistory>
    </Router>,
    document.getElementById('root')
);