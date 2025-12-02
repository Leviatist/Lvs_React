// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import "./App.css";
import Index from './pages/index.jsx';
import Navi from './pages/navi.jsx';
import VideoBG from "./components/BG/VideoBG";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false);
  return (
    <Router>
      <VideoBG>
        <div className="app-main">
          <button className="nav-toggle-btn"  onClick={() => setIsNavOpen(true)} aria-label="打开导航菜单">☰</button>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/navi" element={<Navi />} />
          </Routes>
        </div>
        <div className={`nav-overlay ${isNavOpen ? 'active' : ''}`} onClick={closeNav}>
          <nav className="nav-menu">
            <Link to="/" onClick={closeNav}>首页</Link>
            <Link to="/navi" onClick={closeNav}>导航</Link>
          </nav>
        </div>
      </VideoBG>
    </Router>
  );
}
export default App; 