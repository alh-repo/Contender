// frontend/src/pages/Login.js
import React, { useState } from 'react';
import { requestMagicLink } from '../../api/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestMagicLink = async (e) => {
    e.preventDefault();
    try {
      const res = await requestMagicLink(email);
      setMessage(res.msg);
    } catch (err) {
      setMessage('Error sending magic link');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleRequestMagicLink}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Request Magic Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
