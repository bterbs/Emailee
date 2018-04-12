import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Brittany is a babe.</h1>
        </header>
        <p className="App-intro">
          And this React application she is making is under construction.
        </p>
        <a href="/auth/google">Sign In With Google</a>
      </div>
    );
  }
}

export default App;
