import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

function LogoutButton() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <button onClick={() => keycloak.logout()}>Logout</button>
  );
}

export default LogoutButton;