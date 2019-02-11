import React, {Component} from 'react'

class Book extends Component {
  // title, img, author, price, description

  render () {
    return (
      <li className="book-item">
        <span className="title">{this.props.title}</span>
        <span className="title">{this.props.title}2</span>
        <span className="title">{this.props.title}3</span>
        <span className="title">{this.props.title}4</span>
        <span className="title">{this.props.title}5</span>
      </li>
    )
  }
}