import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (keycloak.authenticated) {
    return <div>Authenticated!</div>;
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          className="login-input"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          className="login-input"
        />
        <Button
          variant="contained"
          color="primary"
          className="login-button"
          onClick={() => keycloak.login()}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;