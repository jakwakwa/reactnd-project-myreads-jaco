import React, { Component } from 'react';
import BooksList from './BooksList';

class BookShelf extends Component {
  render() {
    const books = this.props.books;
    const title = this.props.title;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksList books={books} />
        </div>
      </div>
    );
  }
}

export default BookShelf;
