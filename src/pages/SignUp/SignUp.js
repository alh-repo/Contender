// src/pages/SignUp.js
import React, { useState } from 'react';
import { registerUser } from '../../api';
import { SignUpContainer, SignUpForm, FormInput, FormButton } from './SignUp.styles';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ name, email, password });
            alert('User registered successfully!');
        } catch (err) {
            alert('Error registering user. Please try again.');
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
                <FormButton type="submit">Sign Up</FormButton>
            </SignUpForm>
        </SignUpContainer>
    );
};

export default SignUp;
