import React, {Component} from 'react'

class Search extends Component {
  render() {
    return (
      <form className="search">
        <label htmlFor="search-input">Search:</label>
        <input type="text" name="search-input"></input>
        <button type="submit" className="search-button">Search</button>
      </form>
    )
  }
}

export default Search