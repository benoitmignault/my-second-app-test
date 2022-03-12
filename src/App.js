import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';

class App extends Component {
  render() {
  // la parathèse après le return est EXTREMENT IMPORTANT
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FirstComponent displaytext="First Component Data"/>
      </div>
);
  }
}
export default App;

// Les deux manières fonctionnes

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <FirstComponent displaytext="First Component Data"/>
    </div>
  );
}

export default App;
*/