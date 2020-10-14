import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import TextEditor from './TextEditor';
import OutputConsole from './OutputConsole';
import RegisterTable from './RegisterTable';
import StackView from './StackView';

const StyledWindow = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
`;

const StyledEditor = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
`;

const LeftPanel = styled.div`
  width: 38%;
  height: 100%;
`;

const RightPanel = styled.div`
  width: 62%;
  height: 100%;
  display: flex;
`;

const Editor = ({ machine }) => {
  const [output, setOutput] = useState();
  const [table, setTable] = useState([]);
  const [stack, setStack] = useState([]);

  const updateAll = () => {
    setStack(machine.getStack());
    const currOutput = machine.getPrn().join('\n');
    setOutput(currOutput);
    setTable(machine.getTable());
  };

  const onRun = (code) => {
    machine.load(code);
    machine.execute();
    updateAll();
  };

  const onStepInto = (code) => {
    machine.load(code);
    machine.executeStepWise((e) => {
      updateAll();
    });
  };

  const onNext = () => {
    machine.nextStep();
    updateAll();
  };

  return (
    <StyledWindow>
      <Header />
      <StyledEditor>
        <LeftPanel>
          <TextEditor onRun={onRun} onStepInto={onStepInto} onNext={onNext} />
          <OutputConsole output={output} />
        </LeftPanel>
        <RightPanel>
          <RegisterTable table={table} />
          <StackView stack={stack} />
        </RightPanel>
      </StyledEditor>
    </StyledWindow>
  );
};

export default Editor;
