import React from 'react';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import TopNav from './components/TopNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <TopNav/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
