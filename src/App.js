import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes as CustomRoutes, Route } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Login from './Login';
import Home from './Home';
import keycloak from './keycloak';


function App() {


    const [keycloakInitialized, setKeycloakInitialized] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'check-sso' }).then(() => {
      setKeycloakInitialized(true);
    });
  }, []);

  if (!keycloakInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <CustomRoutes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </CustomRoutes>
    </Router>
  );
}

export default App;