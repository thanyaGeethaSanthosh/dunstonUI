import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 0.7vh;
  width: 28%;
  height: 4vh;
  background-color: lightgray;
  color: #696969;
`;

const Button = (props) => {
  const { value, onClick, disabled } = props;
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {value}
    </StyledButton>
  );
};

export default Button;
