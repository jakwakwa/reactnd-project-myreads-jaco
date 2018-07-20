import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBook from './SearchBook';
import '../../styles/Search.scss';
import * as BooksAPI from '../../utils/BooksAPI';

class Search extends Component {
  state = {
    query: '',
    books: []
  };
  updateQuery = query => {
    this.setState({ query: query });
  };
  changeShelf = book => {
    // const books = [...this.state.books, book];
    console.log(book);
    const books = this.state.books.map(
      res => (res.id === book.id ? book : res)
    );
    console.log(books);
    this.setState({ books }, () => {
      this.props.addBook(book);
    });
  };
  syncBookShelf = res => {
    // Check that data is an Array
    // prevents error when searching for something that is not part of the set of search terms
    if (Array.isArray(res)) {
      let books = res.map(book => {
        let index = this.props.books.findIndex(i => i.id === book.id);
        if (index !== -1) {
          book.shelf = this.props.books[index].shelf;
        }
        return book;
      });
      return { books };
    } else return { books: [] };
  };
  defaultBookShelf = res => {
    if (Array.isArray(res)) {
      res.map(book => (book.shelf = 'none'));
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      BooksAPI.search(this.state.query).then(res => {
        // Set default shelf values
        this.defaultBookShelf(res);
        // set state which will be the search results on the screen
        this.setState(() => this.syncBookShelf(res));
      });
    }
  }
  render() {
    const { books = [] } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              The BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid books-grid--fullHeight">
            {books.map(book => (
              <SearchBook
                key={book.id}
                index={book.id}
                book={book}
                addBook={this.changeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
