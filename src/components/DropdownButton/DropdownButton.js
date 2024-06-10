import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from './DropdownButton.styles'; // Import styled components
import { useNavigate } from 'react-router-dom';

const DropdownButton = ({ options, onSelect }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
    navigate('/Sports');

  };

  return (
    <DropdownContainer>
      <DropdownToggle onClick={toggleDropdown}>
        Select a Sport
      </DropdownToggle>
      {isOpen && (
        <DropdownMenu>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default DropdownButton;
