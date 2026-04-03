import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/section/Home";
import About from "./components/section/About";
import Service from "./components/section/Services";
import Project from "./components/section/Project";
import Contect from "./components/section/contect";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Service />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="contact">
          <Contect />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;