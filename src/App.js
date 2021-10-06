import React from 'react';
// Components
import Header from './components/Header/';
import SolarBody from './components/SolarBody';

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <SolarBody />
      <h1>h1 GlobalStyle</h1>
      Space Weather App Here
      <GlobalStyle />
    </div>
  );
}

export default App;
