import React, { useState } from 'react';
import axios from 'axios';
import {
  SignUpContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  Message,
} from './SignUp.styles';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    username: '',
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { name, email, password, username } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/auth/register', formData);
      setIsSuccess(true);
      setMessage('Registration successful! You can now log in.');
      setFormData({ name: '', email: '', password: '', username: '' });
    } catch (err) {
      setIsSuccess(false);
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <SignUpContainer>
      <Title>Sign Up</Title>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </form>
      {message && <Message success={isSuccess}>{message}</Message>}
    </SignUpContainer>
  );
};

export default SignUp;
