import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './containers/Home.js';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
