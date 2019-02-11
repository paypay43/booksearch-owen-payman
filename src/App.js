import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FilterOptions from './components/FilterOptions';
import List from './components/List';

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(key =>
    key ? `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}` : ''
  );
  return queryItems.join('&');
}

class App extends Component {
  state = {
    searchTerm: '',
    printType: 'all',
    bookType: 'ebooks',
    books: []
  };

  pickBookInformation(book) {
    const author = !book.volumeInfo.hasOwnProperty('authors')
      ? 'N/A'
      : book.volumeInfo.authors.join(', ');

    const price =
      book.saleInfo.saleability === 'FREE'
        ? 'Free'
        : book.saleInfo.saleability === 'FOR_SALE'
        ? book.saleInfo.listPrice.amount
        : 'N/A';

    const img = book.volumeInfo.hasOwnProperty('imageLinks')
      ? book.volumeInfo.imageLinks
      : 'N/A';

    return {
      id: book.etag,
      title: book.volumeInfo.title,
      author,
      description: book.volumeInfo.description,
      img,
      price
    };
  }

  getBookResults() {
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?`;
    const key = `AIzaSyCvJfsnuGBUP8-8YVuwIPmJHUOEVYXlb-g`;
    const q = this.state.searchTerm;
    const printType = this.state.printType;
    const filter = this.state.bookType;
    const params = { q, printType, filter, key };

    if (printType === 'magazines') {
      delete params['filter'];
    }

    fetch(BASE_URL + formatQueryParams(params))
      .then(response => {
        return response.json();
      })
      .then(books => {
        if (books.totalItems === 0) {
          books = [];
        } else {
          books = books.items.map(this.pickBookInformation);
        }
        this.setState({ books });
      });
  }

  setSearchTerm = query => {
    this.setState(
      {
        searchTerm: query
      },
      this.getBookResults
    );
  };

  setFilter(obj) {
    if (this.state.searchTerm !== '') {
      this.setState({ ...this.state, ...obj }, this.getBookResults);
    } else {
      this.setState({ ...this.state, ...obj });
    }
  }

  render() {
    return (
      <div className="application-container">
        <Header />
        <FilterOptions
          printType={this.state.printType}
          filterChange={obj => this.setFilter(obj)}
          onSearch={query => this.setSearchTerm(query)}
        />
        <List books={this.state.books} />
      </div>
    );
  }
}

export default App;
