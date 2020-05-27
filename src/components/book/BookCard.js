import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    return (
       <div className="card">
         <div className="card-content">
          <h3>Search Books:<span className="search-bookTitle"></span></h3>
          <input className="searchBooks" type="text"></input>
         </div>
      </div>
    )
  }
}

export default BookCard;