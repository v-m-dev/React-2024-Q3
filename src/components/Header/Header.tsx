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
    this.throwError = this.throwError.bind(this);
    this.state = { inputValue: localStorage.getItem('searchInput') || '' };
  }

  saveInputToLocalStorage(event: React.ChangeEvent<HTMLInputElement>) {
    localStorage.setItem('searchInput', event.target.value);
    this.setState({ inputValue: event.target.value });
  }

  throwError() {
    throw new Error('This is a simulated error.');
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
        <button className="header-btn" type="button" onClick={this.throwError}>
          Throw Error
        </button>
      </header>
    );
  }
}

export default Header;
