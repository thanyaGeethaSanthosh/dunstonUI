import React from 'react';
import styled from 'styled-components';

const button_style = `margin-top: 0.7vh;
width: 22%;
height: 4vh;
background-color: lightgray;
text-align:center;
text-decoration: none;
box-shadow: none;
color: #696969;`;

const StyledButton = styled.button`
  ${button_style};
`;

const StyledSaveButton = styled.a`
  ${button_style}
`;

const Button = (props) => {
  const { value, onClick, disabled } = props;
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {value}
    </StyledButton>
  );
};

const SaveButton = (props) => {
  return (
    <StyledSaveButton
      href={`data:text/plain,${props.code}`}
      download="program.dtn"
    >
      Save
    </StyledSaveButton>
  );
};

export { Button, SaveButton };
