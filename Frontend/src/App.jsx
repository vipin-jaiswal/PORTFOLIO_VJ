import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/section/Home";
import About from "./components/section/About";
import Service from "./components/section/Services";
import Project from "./components/section/Project";
import Contect from "./components/section/contect";
import Footer from "./components/layout/Footer";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "services":
        return <Service />;
      case "projects":
        return <Project />;
      case "contact":
        return <Contect />;
      default:
        return <Hero setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App; 