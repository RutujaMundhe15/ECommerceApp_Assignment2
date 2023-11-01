// src/components/Account.js
import React, { useState } from 'react';

const Account = () => {
  const [user, setUser] = useState({ name: '', address: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const saveAccountDetails = () => {
    // Implement the logic to save/update user details (e.g., make an API call)
  };

  return (
    <div>
      <h1>Account</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="address"
        value={user.address}
        onChange={handleInputChange}
        placeholder="Address"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button onClick={saveAccountDetails}>Save</button>
    </div>
  );
};

export default Account;
