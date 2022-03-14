import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import Welcome from './Welcome';
import Sum from './Sum';
import Hooks from './Hooks';

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
      <p>Voici la somme de deux nombre : {Sum(3,5)} !</p>
      <FirstComponent displaytext="First Component Data"/>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <header className="App-header">
        <Hooks />
      </header>
    </div>
  );
}

export default App;