import { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <input className="header-input" type="search" />
        <button className="header-btn" type="button">
          Search
        </button>
      </header>
    );
  }
}

export default Header;
