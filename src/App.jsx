import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { FaMusic } from "react-icons/fa";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Home from "./components/Home/Home.jsx";
import Player from "./components/Home/Player.jsx";
import Navbar from "./components/Navbar.jsx";
import Preloader from "./components/Pre.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Resume from "./components/Resume/ResumeNew.jsx";
import ScrollToTop from "./components/ScrollToTop.js";
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [playerHide, updatePlayerHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />

      <div className='App' id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Player
          className={`position-fixed fixed-bottom ${
            playerHide ? "z-0 d-none" : "opacity-1 z-1000"
          }`}
          updatePlayerHide={updatePlayerHide}
          playerHide={playerHide}
        />
        {playerHide && (
          <FaMusic
            className='text-danger close-icon position-fixed bottom-0 end-0 m-3'
            style={{
              boxSizing: "content-box",
              height: "30px",
              width: "30px",
              zIndex: "99999",
              padding: "20px",
            }}
            onClick={() => updatePlayerHide(false)}
          />
        )}
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects />} />
          <Route
            path='/gallery'
            element={<Gallery updatePlayerHide={updatePlayerHide} />}
          />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
