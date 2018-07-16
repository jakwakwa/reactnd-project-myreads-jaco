import React, { Component, Fragment } from 'react';
import '../styles/app.scss';
// import ReactDOM from 'react-dom';
import Header from './Layouts/Header';
import BookShelf from './Books/BookShelf';
import SearchButton from './Search/SearchButton';
import * as BooksAPI from '../utils/BooksAPI';

class App extends Component {
  state = {
    pageTitle: 'MyReads',
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
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
        <Header title={this.state.pageTitle} />
        <div className="list-books-content">
          <div>
            <BookShelf books={currentlyReading} title="Currently Reading" />
            <BookShelf books={wantToRead} title="Want to Read" />
            <BookShelf books={read} title="Read" />
          </div>
        </div>
        <SearchButton />
      </Fragment>
    );
  }
}

export default App;
