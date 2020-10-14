import React from 'react';
import styled from 'styled-components';

const StyledOutput = styled.div`
  height: 40%;
  width: 100%;
  border: 1px solid gray;
`;
const OutputConsole = (props) => {
  return <StyledOutput>{props.output}</StyledOutput>;
};

export default OutputConsole;
