import React from "react";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/";
import SolarBody from "./components/SolarBody";
import Tutorial from "./components/Tutorial/";
import NotFound from "./components/NotFound";
import Landing from "./components/Landing";
import Educators from "./components/Educators";
import Contact from "./components/Contact";

// Tutorial Pages
import Lesson01 from "./components/Tutorial/Lesson01";

// Styles
import { GlobalStyle } from "./GlobalStyle";
import { NavBlock } from "./App.style";

function App() {
  return (
    <BrowserRouter>
      {/* <Route /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/">
          <Route path="weather" element={<SolarBody />} />
          <Route path="tutorial/" element={<Tutorial />} />
          <Route path="tutorial/">
            <Route path="lesson01" element={<Lesson01 />} />
          </Route>
          <Route path="educators" element={<Educators />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <NavBlock />
    </BrowserRouter>
  );
}

export default App;
