import React from 'react';
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/skills" exact element={<Skills />} />
            <Route path="/experience" exact element={<Experience />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/projects" exact element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}


export default App