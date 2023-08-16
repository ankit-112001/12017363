import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetail from './components/TrainDetail';
import { getAuthorizationToken } from './utils/api';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getAuthorizationToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI2MjkyNjQsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYjQ2MTE4ZjAtZmJkZS00YjE2LWE0YjEtNmFlNmFkNzE8YjI3In0.v93QcxrZHWDTnTwm0-6ttoTGI4C65Grhn3rIJDC8fy8");
      setToken(accessToken);
    };
    fetchToken();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TrainList token={token} />
        </Route>
        <Route path="/train/:trainNumber">
          <TrainDetail token={token} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;