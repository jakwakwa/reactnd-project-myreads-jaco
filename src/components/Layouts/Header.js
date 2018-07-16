import React, { Component } from 'react';
import '../../styles/Layouts/Header.scss';

const Header = props => (
  <header className="appBar">
    <h1>{props.title}</h1>
  </header>
);

export default Header;
