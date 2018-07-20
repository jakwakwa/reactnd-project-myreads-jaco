import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import '../styles/app.scss';
import Header from './Layouts/Header';
import BookShelf from './Books/BookShelf';
import SearchButton from './Search/SearchButton';
import Search from './Search/Search';
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
  changeShelf = (book, shelf) => {
    // 1. Take a copy of the existing state
    // Here I'm making a copy firstly of the array
    // and then inside the map function I'm making a copy of the book object
    // this ensures that I don't edit the state directly.
    const books = this.state.books.map(
      res => (res.id === book.id ? { ...res, shelf: shelf } : res)
    );
    // update book in api
    books.map(res => (res.id === book.id ? BooksAPI.update(res, shelf) : res));
    // 2. Set new books array to state
    this.setState({ books });
  };

  addBook = (book, shelf, id) => {
    // book from search page gets added to App state:
    // 1. Take a copy of the existing state using spread operator
    // 2. add book (which is passed in from Search Component) to array
    const books = [...this.state.books, book];
    // 3. update book in api
    books.map(book => (book.id === id ? BooksAPI.update(book, shelf) : book));
    // 4. change book array in state
    this.setState({ books });
  };
  render() {
    // Filter books and pass them into BookShelf
    const currentlyReading = this.state.books.filter(
      book => book.shelf === 'currentlyReading'
    );
    const wantToRead = this.state.books.filter(
      book => book.shelf === 'wantToRead'
    );
    const read = this.state.books.filter(book => book.shelf === 'read');

    return (
      <Fragment>
        <Header title={pageTitle} />
        <Route
          path="/"
          exact
          render={() => (
            <Fragment>
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
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search books={this.state.books} addBook={this.addBook} />
          )}
        />
      </Fragment>
    );
  }
}

export default App;
