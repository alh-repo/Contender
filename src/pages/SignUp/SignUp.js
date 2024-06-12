// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  SignUpContainer,
  SignUpForm,
  SignUpInput,
  SignUpButton,
  SignUpErrorMessage,
} from './SignUp.styles';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { username, password });
      console.log('Registered:', res.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Registration failed');
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <SignUpErrorMessage>{error}</SignUpErrorMessage>}
        <SignUpInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <SignUpInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignUpInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
