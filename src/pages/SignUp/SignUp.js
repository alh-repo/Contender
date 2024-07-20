import React, { useState } from 'react';
import { registerUser } from '../../api/api';
import { SignUpContainer, SignUpForm, FormInput, FormButton } from './SignUp.styles';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    username: '' // Add this line
  });

  const { name, email, password, username } = formData; // Add username here

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password, username }); // Add username here
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={onSubmit}>
        <FormInput
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <FormInput
          type="text"
          placeholder="Username" // Add this input
          name="username"
          value={username}
          onChange={onChange}
          required
        />
        <FormButton type="submit">Register</FormButton>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
