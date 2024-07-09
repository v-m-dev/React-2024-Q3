import React, { Component } from 'react';
import './Header.css';

interface HeaderProps {}

interface HeaderState {
  inputValue: string;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.saveInputToLocalStorage = this.saveInputToLocalStorage.bind(this);
    this.state = { inputValue: localStorage.getItem('searchInput') || '' };
  }

  saveInputToLocalStorage(event: React.ChangeEvent<HTMLInputElement>) {
    localStorage.setItem('searchInput', event.target.value);
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <header className="header">
        <input
          className="header-input"
          type="search"
          value={this.state.inputValue}
          onChange={this.saveInputToLocalStorage}
        />
        <button className="header-btn" type="button">
          Search
        </button>
      </header>
    );
  }
}

export default Header;
