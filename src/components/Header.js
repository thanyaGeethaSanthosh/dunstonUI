import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 5vh;
  font-weight: 100;
  font-size: 4vh;
  font-family: sans-serif;
  text-align: center;
  background-color: lightgray;
`;

const Header = (props) => {
  return <StyledHeader>Assembly Simulator</StyledHeader>;
};

export default Header;
