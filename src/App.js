import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Трансляция на паузе</h1>
        </header>
        <p className="App-intro">
          Подождите немного.
        </p>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
