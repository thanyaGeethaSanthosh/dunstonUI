import React, { useState } from 'react';
import TextEditor from './TextEditor';
import OutputConsole from './OutputConsole';
import RegisterTable from './RegisterTable';

const Editor = ({ machine }) => {
  const [output, setOutput] = useState();
  const [table, setTable] = useState([]);

  const onRun = (code) => {
    machine.load(code);
    machine.execute();
    const currOutput = machine.getPrn().join('\n');
    setOutput(currOutput);
  };

  const onStepInto = (code) => {
    machine.load(code);
    machine.executeStepWise((e) => {
      setTable(JSON.stringify(machine.getTable()));
    });
  };

  const onNext = () => {
    machine.nextStep();
    const currOutput = machine.getPrn().join('\n');
    setOutput(currOutput);
  };

  return (
    <div>
      <TextEditor onRun={onRun} onStepInto={onStepInto} onNext={onNext} />
      <OutputConsole output={output} />
      <RegisterTable table={table} />
    </div>
  );
};

export default Editor;
