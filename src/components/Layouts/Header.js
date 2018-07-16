import React, { Component } from 'react';
import '../../styles/Layouts/Header.scss';

const Header = ({ title }) => (
  <header className="appBar">
    <h1>{title}</h1>
  </header>
);

export default Header;
