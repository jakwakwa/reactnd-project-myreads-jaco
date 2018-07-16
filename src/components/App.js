import React, { Component, Fragment } from 'react';
import '../styles/app.scss';
import Header from './Layouts/Header';
import BookShelf from './Books/BookShelf';
import SearchButton from './Search/SearchButton';
import * as BooksAPI from '../utils/BooksAPI';

const pageTitle = 'MyReads';

class App extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
  changeShelf = (shelf, id) => {
    // 1. Take a copy of the existing state
    // Here I'm making a copy firstly of the array
    // and then inside the map function I'm making a copy of the book object
    // this ensures that I don't edit the state directly.
    const books = this.state.books.map(
      book => (book.id === id ? { ...book, shelf: shelf } : book)
    );
    // 2. Get the correct object that matches book id
    console.log('Copy of books', books);
    console.log('copy of books with book shelf changed', books);
    // console.log(targetBook);
    // 2. Set new books array to state
    this.setState({ books });
  };
  render() {
    // filter 'currently reading' books
    const currentlyReading = this.state.books.filter(
      book => book.shelf === 'currentlyReading'
    );
    // filter 'want to read'
    const wantToRead = this.state.books.filter(
      book => book.shelf === 'wantToRead'
    );
    // filter 'read'
    const read = this.state.books.filter(book => book.shelf === 'read');

    console.log(this.state.books);
    return (
      <Fragment>
        <Header title={pageTitle} />
        <div className="list-books-content">
          <div>
            <BookShelf
              changeShelf={this.changeShelf}
              books={currentlyReading}
              title="Currently Reading"
            />
            <BookShelf
              changeShelf={this.changeShelf}
              books={wantToRead}
              title="Want to Read"
            />
            <BookShelf
              changeShelf={this.changeShelf}
              books={read}
              title="Read"
            />
          </div>
        </div>
        <SearchButton />
      </Fragment>
    );
  }
}

export default App;
