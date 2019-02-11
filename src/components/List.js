import React, { Component } from 'react';
import Book from './Book';

export default class List extends Component {
  // going to accept results from API call triggered by filteroptions
  //
  generateBookList = () => {
    return this.props.books.map(book => {
      return (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          img={book.img}
          price={book.price}
        />
      );
    });
  };

  render() {
    return (
      <section className="search-results">{this.generateBookList()}</section>
    );
  }
}
