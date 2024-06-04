import React from 'react';
import ButtonStyled from './Button.styles'; // Import the styled component

const Button = ({ onClick, children }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
