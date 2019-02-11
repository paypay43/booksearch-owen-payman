import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import FilterOptions from './components/FilterOptions'
import List from './components/List'

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    key => (key) ? `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}` : ''
  );
  return queryItems.join('&');
}
class App extends Component {
  state = {
    searchTerm: null,
    printType: null,
    bookType: null
  }
  
  componentDidMount() {
    this.getBookResults();
  }
 
  getBookResults() {
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`
    const searchQuery = `${this.state.searchTerm}`
    const printType = `${this.state.printType}`
    const bookType = `${this.state.bookType}`
    const params = {searchQuery, printType, bookType}
    
    

    fetch(BASE_URL
  }
  // const BASE_URL = 

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
