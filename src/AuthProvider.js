import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';
import keycloak from './keycloak';

const initOptions = {
  onLoad: 'login-required',

};

function AuthProvider(props) {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={initOptions}
      LoadingComponent={<div>Loading...</div>}
    >
      {props.children}
    </ReactKeycloakProvider>
  );
}

export default AuthProvider;