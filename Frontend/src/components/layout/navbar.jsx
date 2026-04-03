import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "../../data/siteData";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const Navbar = ({ setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = siteData.nav.links;

  const activeSection = useScrollSpy(navLinks.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (typeof setPage === "function") {
      setPage(id);
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
        <div
          className={`relative container mx-auto px-6 py-3 flex items-center justify-between
          rounded-full transition-all duration-300
          ${
            isScrolled
              ? "bg-slate-900/90 shadow-xl backdrop-blur-md"
              : "bg-slate-900/60 backdrop-blur-sm"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={siteData.assets.logo}
              alt={siteData.personal.logoAlt}
              className="w-10 h-10"
            />
            <span className="text-white font-bold text-lg uppercase">
              {siteData.personal.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 text-sm
                    ${
                      isActive
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-gray-300 hover:text-blue-400 hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop Hire */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
            >
              {siteData.nav.hireButtonText}
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden ml-auto">
            <Menu
              className="text-white w-7 h-7 cursor-pointer hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Floating Drawer */}
      <div
        className={`fixed top-24 right-4 w-72 h-105
        bg-white/5 backdrop-blur-xl border border-white/10
        rounded-3xl shadow-2xl z-50
        transform transition-all duration-500 ease-in-out md:hidden
        ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-20 opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <X
            className="text-white w-6 h-6 cursor-pointer hover:text-red-400 transition"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col items-start px-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="text-white text-lg hover:text-blue-400 transition cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Button */}
        <div className="px-6 mt-8">
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            {siteData.nav.hireButtonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
