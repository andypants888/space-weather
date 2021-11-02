import React from "react";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/";
import SolarBody from "./components/SolarBody";
import Tutorial from "./components/Tutorial/";
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
        <Route path="/" element={<Landing />} exact/>
        <Route path="/">
          <Route path="weather" element={<SolarBody />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <NavBlock />
    </BrowserRouter>
  );
}

export default App;
