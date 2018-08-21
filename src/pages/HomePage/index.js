import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

import NewListButton from '../../components/NewListButton';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      lists: []
    }
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trollo Project</h1>
        </header>
        
        <section className="App-panel">
          
          {/* {this.state.lists.map(list => <List />)} */}

          <NewListButton />  
        </section>
      </div>
    );
  }
}

export default HomePage;
