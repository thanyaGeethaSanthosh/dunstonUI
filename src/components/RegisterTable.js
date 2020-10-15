import React from 'react';
import styled from 'styled-components';
import Row from './Row';

const StyledRegisterTable = styled.div`
  border: 1px solid gray;
  width: 88%;
  height: 100%;
`;

const StyledTitleBar = styled.div`
  display: flex;
`;

const StyledRegisterTitle = styled.div`
  border: 1px solid gray;
  font-size: 3vh;
  text-align: center;
  background-color: #f5f5f5;
  color: #444444;
  ${(props) =>
    `width:${100 / props.count}%;
    `}
`;

const RegisterTable = (props) => {
  const registerList = [
    ' CL',
    ' NL',
    'A',
    ' B',
    ' C',
    ' D',
    ' EQ',
    ' NE',
    ' GT',
    ' LT',
  ];
  const titles = registerList.map((tit, ind) => (
    <StyledRegisterTitle count={registerList.length} key={ind}>
      {tit}
    </StyledRegisterTitle>
  ));
  const rows = props.table.map(
    ({ A, B, C, D, EQ, NE, GT, LT, CL, NL }, index) => (
      <Row
        row={{ CL, NL, A, B, C, D, EQ, NE, GT, LT }}
        index={index}
        key={index}
      />
    )
  );
  return (
    <StyledRegisterTable>
      <StyledTitleBar>{titles}</StyledTitleBar>
      {rows}
    </StyledRegisterTable>
  );
};

export default RegisterTable;
