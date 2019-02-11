import React, { Component } from 'react';
import Search from './Search';
import Filter from './Filter';
import './Filter.css';

export default class FilterOptions extends Component {
  render() {
    return (
      <div className="filter-options">
        <Search onSearch={this.props.onSearch} />
        <Filter
          printType={this.props.printType}
          onChange={this.props.filterChange}
        />
      </div>
    );
  }
}
