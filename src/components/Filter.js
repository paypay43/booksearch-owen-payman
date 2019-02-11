import React, { Component } from 'react';

class Filter extends Component {
  change() {
    const obj = {
      bookType: document.getElementById('bookType').value,
      printType: document.getElementById('printType').value
    };
    this.props.onChange(obj);
  }

  render() {
    return (
      <form onChange={e => this.change()} className="filter">
        <label htmlFor="print-type-dropdown">Print Type:</label>
        <select
          id="printType"
          //onChange={this.change}
          className="print-type-dropdown"
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="book-type-dropdown">Book Type:</label>
        <select
          id="bookType"
          disabled={this.props.printType === 'magazines'}
          //onChange={this.change}
          className="book-type-dropdown"
        >
          <option value="ebooks">All</option>
          <option value="paid-ebooks">Paid</option>
          <option value="free-ebooks">Free</option>
        </select>
      </form>
    );
  }
}

export default Filter;
