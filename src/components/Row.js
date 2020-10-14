import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  width: 100%;
  padding: 1vh;
  padding-left: 0;
  height: 2.3vh;
  display: flex;
`;

const StyledCell = styled.div`
  height: 2.3vh;
  padding: 1vh;
  border: 1px solid gray;
  text-align: center;
  font-size: 2vh;
  ${(props) =>
    `width:${100 / props.count}%;
    `}
`;

const Row = (props) => {
  const row = Object.values(props.row);
  const cells = row.map((value, index) => (
    <StyledCell count={row.length} key={`${props.index}_${index}`}>
      {value}
    </StyledCell>
  ));
  return <StyledRow>{cells}</StyledRow>;
};

export default Row;
