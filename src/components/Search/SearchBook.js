import React, { Component } from 'react';

class SearchBook extends Component {
  handleChange = e => {
    e.preventDefault();
    // got value from select > option value
    const shelf = e.target.value;
    // Store book object in variable
    const book = this.props.book;
    // pass book into function wich lives in App component
    // console.log(book);
    this.props.addBook({ ...book, shelf });
  };
  render() {
    const book = this.props.book;
    // console.log('books inside book component:', books);
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select
                defaultValue="none"
                value={book.shelf}
                onChange={this.handleChange}>
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
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}

export default SearchBook;
