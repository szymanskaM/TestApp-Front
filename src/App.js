import start from './images/start.png';
import './App.css';
import React from 'react';
import TopMenu from './TopMenu';

function App() {
  return (
      <div className="App">
      <TopMenu />
      <img src={start} width="100%" alt="strona startowa"/>
      <h1>Info</h1>
      <p>blablablablablablablablablablablablablablabl</p>
    </div>
  );
}

export default App;
