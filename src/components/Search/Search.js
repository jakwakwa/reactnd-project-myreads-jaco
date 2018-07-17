import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Search.scss';
import * as BooksAPI from '../../utils/BooksAPI';

class Search extends Component {
  state = {
    query: '',
    books: []
  };
  updateQuery = query => {
    this.setState({ query: query.trim() });
  };
  // need to somehow pass in search qeury to this method
  // I think the wrong mount method is used here because when component mounts, there's an empty string
  componentDidUpdate() {
    if (this.state.query) {
      BooksAPI.search(this.state.query).then(books => {
        this.setState({ books });
      });
    }
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
            {JSON.stringify(this.state)}
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default Search;
