import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SearchButton.scss';

class SearchButton extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    );
  }
}

export default SearchButton;
