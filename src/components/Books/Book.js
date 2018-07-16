import React, { Component } from 'react';

class Book extends Component {
  handleClick = e => {
    e.preventDefault();
    // console.log(this.shelfRef.value);
    // console.log(key);
    const shelf = e.target.value;
    const id = this.props.index;
    // alert(bookShelf);
    console.log('New Shelf Property:', shelf);
    console.log('The book that is clicked on ID:', id);
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
              <select onChange={this.handleClick}>
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
