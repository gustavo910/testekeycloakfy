import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import React from 'react';
import App from './App';
import keycloak from './keycloak';
import CustomLogin from './Login';
import Login from './Login';

const initOptions = {
  onLoad: 'login-required',

};

function AuthProvider(props) {
  
  return (
    <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={initOptions}
    LoadingComponent={<div>Loading...</div>}
    onEvent={(event, error) => console.log('onKeycloakEvent', event, error)}
    onTokens={(tokens) => console.log('onKeycloakTokens', tokens)}
    onError={(error) => console.log('onKeycloakError', error)}
    loginFormComponent={<CustomLogin />}
  >
    <App />
  </ReactKeycloakProvider>
  );
}


export default AuthProvider;