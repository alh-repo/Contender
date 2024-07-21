import React, { useState } from 'react';
import axios from 'axios';
import {
  LoginContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  Message,
} from './Login.styles';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', formData);
      const { token } = res.data;
      localStorage.setItem('token', token);
      setIsSuccess(true);
      setMessage('Login successful!');
    } catch (err) {
      setIsSuccess(false);
      setMessage('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <form onSubmit={onSubmit}>
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
        <Button type="submit">Login</Button>
      </form>
      {message && <Message success={isSuccess}>{message}</Message>}
    </LoginContainer>
  );
};

export default Login;
