import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Main />
      </div>
    </ErrorBoundary>
  );
}

export default App;
