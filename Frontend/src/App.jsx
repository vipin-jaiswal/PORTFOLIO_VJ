import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/section/Home';
import About from './components/section/About';
import Skills from './components/section/Skills';
import Project from './components/section/Project';
import Contect from './components/section/contect';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contect />
      </main>
        <Project />
      <Footer />

    </div>
  );
}

export default App;
