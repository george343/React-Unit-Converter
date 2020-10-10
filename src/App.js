import React from 'react';
import './App.css';
import Window from './Window'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Unit Converter</h1>
          <hr/>
          <Window />
        </div>
      </header>
    </div>
  );
}

export default App;
