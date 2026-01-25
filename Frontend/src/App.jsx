import React from 'react';
import Navbar from './components/layout/navbar';
import Hero from './components/section/Hero';

function App() {
  return (
    <div className="min-h-screen bg-black">
    
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
