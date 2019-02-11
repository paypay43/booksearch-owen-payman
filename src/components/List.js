import React, {Component} from 'react'
import Book from './Book'

export default class List extends Component {
  // going to accept results from API call triggered by filteroptions
  //
  generateBookList = () => {
    // this.props.books.map(book => <Book />)

    // })
  }
  
  render() {
    
    return ( 
      <section className="search-results">
        {this.generateBookList()}
      </section>
    )
  }
}