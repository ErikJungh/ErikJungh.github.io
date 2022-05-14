import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Portfolio" element={<Portfolio />}></Route>
          <Route exact path="/Experience" element={<Experience />}></Route>
          <Route exact path="/About" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
