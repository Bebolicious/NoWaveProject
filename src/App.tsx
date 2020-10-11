import React from 'react';
import './App.css';
import { NavBar, About, History, Characteristics, VisualArt, Logo } from './components';

function App() {
  return (
    <div className="app">
      <Logo />  
      <div className="navbarcontainer">
      <NavBar />
      </div>
      <About />
      <History />
      <Characteristics />
      <VisualArt />
    </div>
  );
}

export default App;
