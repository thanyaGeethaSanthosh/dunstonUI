import React from 'react';
import Machine from '@craftybones/assembly_simulator';
import Editor from './components/Editor';

const App = () => {
  return <Editor machine={new Machine()} />;
};

export default App;
