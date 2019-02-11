import React, { Component } from 'react';

class Search extends Component {
  submitSearch(e) {
    e.preventDefault();
    const value = e.currentTarget.getElementsByTagName('input')[0].value;

    this.props.onSearch(value);
  }

  render() {
    return (
      <form onSubmit={e => this.submitSearch(e)} className="search">
        <label htmlFor="search-input">Search:</label>
        <input required type="text" name="search-input" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
