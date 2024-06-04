import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownToggle = styled.button`
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

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: black;
  &:hover {
    background-color: #f1f1f1;
  }
`;
