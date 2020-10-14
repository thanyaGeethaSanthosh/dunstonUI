import React from 'react';
import Machine from '@craftybones/assembly_simulator';
import Editor from './components/Editor';

const App = () => {
  return (
    <div>
      <Editor machine={new Machine()} />
    </div>
  );
};

export default App;
