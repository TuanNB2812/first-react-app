import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';

/*
2 component: class component/function component (function, arrow function)
*/
function App() {
//Arrow function: const app = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
