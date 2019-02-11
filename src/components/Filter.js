import React, {Component} from 'react'

class Filter extends Component {
  render() {
    return (
      <form className="filter">
        <label htmlFor="print-type-dropdown">Print Type:</label>
        <select className="print-type-dropdown">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="book-type-dropdown">Book Type:</label>
        <select className="book-type-dropdown">
          <option value="all">All</option>
          <option value="paid">Paid</option>
          <option value="free">Free</option>
        </select>
      </form>
    )
  }
}

export default Filter