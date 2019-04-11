import React from 'react';
import GameControl from './Components/GameControl';
import Jumbotron from './Components/Jumbotron';
import './App.css';

const App = ()=> (
  <div className="mainContainer">
    <Jumbotron />
      <GameControl />
  </div>
);

export default App;
