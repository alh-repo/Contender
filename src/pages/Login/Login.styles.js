import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f2f5;
`;

export const Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

export const Message = styled.p`
    margin-top: 10px;
    color: green;
`;
