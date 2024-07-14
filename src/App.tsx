import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <Header />
          <Main />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
