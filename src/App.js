import React from "react";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/";
import SolarBody from "./components/SolarBody";
import Learn from "./components/Education";
import NotFound from "./components/NotFound";

// Styles
import { GlobalStyle } from "./GlobalStyle";
import { NavBlock } from "./App.style";

function App() {
  return (
    <BrowserRouter>
      {/* <Route /> */}
      <Header />
      <Routes>
        <Route exact path="/weather" element={<SolarBody />} />
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/notfound" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      <NavBlock />
    </BrowserRouter>
  );
}

export default App;
