import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export default ButtonStyled;
