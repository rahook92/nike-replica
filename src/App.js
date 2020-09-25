import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Landing from './containers/Landing.js';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Landing />
    </div>
    </BrowserRouter>
  );
}

export default App;
