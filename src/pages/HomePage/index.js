import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trollo Project</h1>
        </header>
        
      </div>
    );
  }
}

export default HomePage;
