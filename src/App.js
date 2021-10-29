import React from "react";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/";
import SolarBody from "./components/SolarBody";
import Learn from "./components/Learn";
import NotFound from "./components/NotFound";
import Landing from "./components/Landing";

// Styles
import { GlobalStyle } from "./GlobalStyle";
import { NavBlock } from "./App.style";

function App() {
  return (
    <BrowserRouter>
      {/* <Route /> */}
      <Header />
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/weather" element={<SolarBody />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      <NavBlock />
    </BrowserRouter>
  );
}

export default App;
