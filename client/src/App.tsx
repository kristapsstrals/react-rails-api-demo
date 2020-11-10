import React from 'react';
import logo from './logo.svg';
import './App.css';

const fetchDatas = async () => {
  try {
    var res = await fetch('/api/v1/tests');
    var body = await res.json();
    console.log(body);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p><button onClick={async () => await fetchDatas()}>Fetch data</button></p>
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
