import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirect = process.env.REACT_APP_AFTER_LOGIN;
  const deployedRedirect = process.env.REACT_APP_DEPLOYED_REDIRECT;

  const history = useHistory();

  // const onRedirectCallback = (appState) => {
  //   history.push(appState?.returnTo || window.location.pathname);
  // };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirect}
      // onRedirectCallback={onRedirectCallback}
      deployedRedirect={deployedRedirect}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;