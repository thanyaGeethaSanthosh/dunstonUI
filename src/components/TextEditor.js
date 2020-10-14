import React, { useState } from 'react';

const TextEditor = (props) => {
  // const { onRun, onStepInfo, onNext } = props;
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
    </div>
  );
};

export default TextEditor;
