import React from 'react';
// Components
import Header from './components/Header/'

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>h1 GlobalStyle</h1>
      App returned here
      <GlobalStyle />
    </div>
  );
}

export default App;
