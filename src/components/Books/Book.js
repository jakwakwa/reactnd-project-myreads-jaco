import React, { Component } from 'react';

class Book extends Component {
  handleChange = e => {
    e.preventDefault();
    // get value from select > option value
    const shelf = e.target.value;
    const book = this.props.book;
    this.props.addBookChangeShelf(book, shelf);
  };
  render() {
    const book = this.props.book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={
                'imageLinks' in book
                  ? {
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }
                  : {
                      width: 128,
                      height: 193,
                      backgroundImage: `none`
                    }
              }
            />
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={this.handleChange}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {'authors' in book ? book.authors : 'Author Unknown'}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
