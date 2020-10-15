import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledTextEditor = styled.div`
  height: 60%;
`;
const StyledTextArea = styled.textarea`
  width: 99%;
  height: 89%;
  font-family: sans-serif;
  font-size: 2.3vh;
  font-weight: 100;
`;
const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextEditor = (props) => {
  const { onRun, onStepInto, onNext } = props;
  const [lineNo, setLineNo] = useState(10);
  const [code, setCode] = useState(`${lineNo} `);
  const [stepInToDisable, setStepInToDisable] = useState(false);
  const [nextDisable, setnextDisable] = useState(true);

  const updateCode = (event) => {
    setCode(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const newLine = lineNo + 10;
      setLineNo(newLine);
      setCode((previous) => `${previous}${newLine} `);
    }
  };

  return (
    <StyledTextEditor>
      <StyledTextArea
        onChange={updateCode}
        onKeyUp={handleKeyDown}
        value={code}
      />
      <StyledButtons>
        <Button
          disabled={stepInToDisable}
          onClick={() => {
            setStepInToDisable(true);
            setnextDisable(false);
            onStepInto(code);
          }}
          value="Step into"
        />
        <Button onClick={() => onRun(code)} value="Run" />
        <Button disabled={nextDisable} onClick={onNext} value="Next" />
      </StyledButtons>
    </StyledTextEditor>
  );
};

export default TextEditor;
