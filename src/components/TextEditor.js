import React, { useState } from 'react';
import Button from './Button';

const TextEditor = (props) => {
  const { onRun, onStepInto, onNext } = props;
  const [lineNo, setLineNo] = useState(10);
  const [code, setCode] = useState(`${lineNo} `);

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
    <div>
      <textarea onChange={updateCode} onKeyUp={handleKeyDown} value={code} />
      <Button onClick={() => onStepInto(code)} value="Step into" />
      <Button onClick={() => onRun(code)} value="Run" />
      <Button onClick={onNext} value="Next" />
    </div>
  );
};

export default TextEditor;
