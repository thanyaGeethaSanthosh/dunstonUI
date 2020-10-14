import React from 'react';
import styled from 'styled-components';

const StackStyle = styled.div`
  width: 12%;
  border: 1px solid gray;
  height: 100%;
`;
const StyledStackTitle = styled.div`
  font-size: 3vh;
  text-align: center;
  background-color: #f5f5f5;
  color: #444444;
  border-bottom: 1px solid gray;
`;

const StackView = (props) => {
  return (
    <StackStyle>
      <StyledStackTitle>Stack</StyledStackTitle>
      {props.stack}
    </StackStyle>
  );
};

export default StackView;
