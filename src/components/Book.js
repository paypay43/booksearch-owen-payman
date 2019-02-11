import React, { Component } from 'react';

export default class Book extends Component {
  // title, img, author, price, description

  render() {
    return (
      <li className="book-item">
        <span className="title">{this.props.title}</span>
      </li>
    );
  }
}
