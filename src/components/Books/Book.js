import React, { Component } from 'react';

class Book extends Component {
  handleChange = e => {
    e.preventDefault();
    // get value from select > option value
    const shelf = e.target.value;
    // passed in id via index from parent component
    // Need the id of the book in order to target relevant object
    const id = this.props.index;
    // passing data to changeShelf function which lives in the App Component
    this.props.changeShelf(shelf, id);
  };
  render() {
    const books = this.props.books;
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
              <select value="books.shelf" onChange={this.handleChange}>
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
          <div className="book-title">{books.title}</div>
          <div className="book-authors">{books.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
