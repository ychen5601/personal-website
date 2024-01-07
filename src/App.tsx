import React from 'react';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';
import TopNav from './components/TopNav';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {

  return (
    <Router>
      <TopNav/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/career" element={<CareerPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
