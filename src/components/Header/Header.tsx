import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [inputValue, setInputValue] = useState<string>(
    () => localStorage.getItem('searchInput') || ''
  );

  const saveInputToLocalStorage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    localStorage.setItem('searchInput', event.target.value);
    setInputValue(event.target.value);
  };

  const throwError = () => {
    throw new Error('This is a simulated error.');
  };

  return (
    <header className="header">
      <input
        className="header-input"
        type="search"
        value={inputValue}
        onChange={saveInputToLocalStorage}
      />
      <button className="header-btn" type="button">
        Search
      </button>
      <button className="header-btn" type="button" onClick={throwError}>
        Throw Error
      </button>
    </header>
  );
}

export default Header;
