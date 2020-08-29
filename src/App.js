import React from 'react';
import './Assets/css/default.min.css'
import Header from './components/header/Header'
import Game from './components/Game';
function App() {
  return (
    <div className="App">
        <Header />
        <Game />
    </div>
  );
}

export default App;
