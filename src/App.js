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
      <GlobalStyle />
    </div>
  );
}

export default App;
