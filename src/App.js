import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route exact path="" element={<Portfolio />}></Route>
            <Route exact path="/Portfolio" element={<Portfolio />}></Route>
            <Route exact path="/Experience" element={<Experience />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route exact path="/*" element={<About />}></Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
