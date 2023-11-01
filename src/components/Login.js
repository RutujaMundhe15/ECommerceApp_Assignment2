// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Implement login logic
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout logic
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
