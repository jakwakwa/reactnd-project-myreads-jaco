import React, { Component } from 'react';
import '../../styles/BooksList.scss';
import Book from './Book';

class BooksList extends Component {
  render() {
    const books = this.props.books;
    return (
      <ol className="books-grid">
        {books.map(books => (
          <Book
            key={books.id}
            index={books.id}
            books={books}
            addBookChangeShelf={this.props.addBookChangeShelf}
          />
        ))}
      </ol>
    );
  }
}

export default BooksList;
