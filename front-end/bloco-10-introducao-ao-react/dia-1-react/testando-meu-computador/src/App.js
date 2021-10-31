import logo from './logo.svg';
import './App.css';

const arr = [<p>1 </p>, <p>1 </p>, <p>1 </p>, <p>1 </p>];
const textJSX = 'Hello, JSX';
const element = <h1>{textJSX}</h1>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {arr.map((i) => i)}
        {element}
      </header>
    </div>
  );
}

export default App;
