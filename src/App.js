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
import Lesson02 from "./components/Tutorial/Lesson02";
import Lesson03 from "./components/Tutorial/Lesson03";
import Bonus01 from "./components/Tutorial/Bonus01";
import Bonus02 from "./components/Tutorial/Bonus02";
import Bonus03 from "./components/Tutorial/Bonus03";
import BigBang01 from "./components/Tutorial/BigBang01";
import BigBang02 from "./components/Tutorial/BigBang02";
import BigBang03 from "./components/Tutorial/BigBang03";

// Styles
import { GlobalStyle } from "./GlobalStyle";
import { NavBlock } from "./App.style";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/">
          <Route path="weather" element={<SolarBody />} />
          <Route path="tutorial/" element={<Tutorial />} />
          <Route path="tutorial/">
            <Route path="lesson01" element={<Lesson01 />} />
            <Route path="lesson02" element={<Lesson02 />} />
            <Route path="lesson03" element={<Lesson03 />} />
            <Route path="bonus01" element={<Bonus01 />} />
            <Route path="bonus02" element={<Bonus02 />} />
            <Route path="bonus03" element={<Bonus03 />} />
            <Route path="bigbang01" element={<BigBang01 />} />
            <Route path="bigbang02" element={<BigBang02 />} />
            <Route path="bigbang03" element={<BigBang03 />} />
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
