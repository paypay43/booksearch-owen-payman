import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {
  // title, img, author, price, description
  state = {
    expanded: false
  };

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  generateBook() {
    const className = `book-item ${this.state.expanded ? 'expanded' : ''}`;
    return (
      <li className={className} onClick={() => this.handleClick()}>
        <h3>{this.props.title}</h3>
        <span>
          <b>Author:</b> {this.props.author}
        </span>
        {this.props.img !== 'N/A' && (
          <img src={this.props.img.thumbnail} alt="book-cover" />
        )}
        {this.state.expanded && (
          <div className="details">
            <span>
              <b>Price:</b>{' '}
              {this.props.price === 'Free'
                ? this.props.price
                : `$${this.props.price}`}
            </span>
            <span className="book-desc">{this.props.description}</span>
          </div>
        )}
      </li>
    );
  }
  render() {
    return this.generateBook();
  }
}
// //key={book.id}
// title={book.title}
// author={book.author}
// description={book.description}
// img={book.img}
// price={book.price}
