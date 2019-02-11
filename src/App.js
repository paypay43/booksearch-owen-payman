import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import FilterOptions from './components/FilterOptions'
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div className="application-container">
        <Header />
        <FilterOptions />
        <List />
      </div>

    );
  }
}

export default App;
