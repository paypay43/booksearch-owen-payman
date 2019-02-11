import React, { Component } from 'react';
import './Book.css'

export default class Book extends Component {
  // title, img, author, price, description
  state = {
    expanded: false
  }

  handleClick () {
    debugger;
    this.setState({expanded: !this.state.expanded})
  }

  generateBook () {
    console.log(this.props.img)
    const className = `book-item ${this.state.expanded ? 'expanded' : ''}`;
    return (
    <li className={className} onClick={() => this.handleClick()}>
      <h3>{this.props.title}</h3>
      <span>Author: {this.props.author}</span>
      {this.props.img !== 'N/A' &&  <img src={this.props.img.thumbnail} alt="book-cover"></img>}
      {this.state.expanded && (
        <div className="details">
          <span>{this.props.description}</span>
          <span>Price: {this.props.price}</span>
        </div>
      )}
    </li>
    )
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