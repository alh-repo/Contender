import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from './DropdownButton.styles'; // Import styled components

const DropdownButton = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
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
