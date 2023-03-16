import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import Login from './Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define o tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#ff6f00',
    },
  },
});

// Configuração inicial do Keycloak
const initOptions = {
  onLoad: 'login-required',
  promiseType: 'native'
};

function App() {
  return (
    // Aplica o tema personalizado globalmente
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Inclui o provider do React Keycloak */}
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={initOptions}
        LoadingComponent={<div>Loading...</div>}
      >
        <Login />
      </ReactKeycloakProvider>
    </ThemeProvider>
  );
}

export default App;