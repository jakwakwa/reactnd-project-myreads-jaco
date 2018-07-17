import React, { Component } from 'react';

class Book extends Component {
  handleClick = e => {
    e.preventDefault();
    // got value from select > option value
    const shelf = e.target.value;
    // passed in id through index from parent component
    // Need the id of the book in order to target relevant object
    const id = this.props.index;
    // passing values to changeShelf function which lives in the App Component
    this.props.changeShelf(shelf, id);
  };
  render() {
    const books = this.props.books;
    console.log('books inside book component:', books);
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${books.imageLinks.thumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={this.handleClick}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option
                  selected={books.shelf === 'currentlyReading'}
                  value="currentlyReading">
                  Currently Reading
                </option>
                <option
                  selected={books.shelf === 'wantToRead'}
                  value="wantToRead">
                  Want to Read
                </option>
                <option selected={books.shelf === 'read'} value="read">
                  Read
                </option>
                <option selected={books.shelf === 'none'} value="none">
                  None
                </option>
              </select>
            </div>
          </div>
          <div className="book-title">{books.title}</div>
          <div className="book-authors">{books.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
