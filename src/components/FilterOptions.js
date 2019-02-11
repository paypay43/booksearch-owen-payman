import React, { Component } from 'react';
import Search from './Search'
import Filter from './Filter'

export default class FilterOptions extends Component {
  render() {
    return (
      <div className="filter-options">
        <Search />
        <Filter />
      </div>
    )
  }
}