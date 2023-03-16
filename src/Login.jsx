import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

function CustomLogin(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    props.keycloak.login({ username: username, password: password });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <Grid sx={{background:"blue"}} alignItems="center">
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        </Grid>
      </form>
    </div>
  );
}

export default CustomLogin;