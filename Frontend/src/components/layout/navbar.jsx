import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Nav_LINKS } from "../../utils/constants";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import logoImage from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(
    Nav_LINKS.map((link) => link.id)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
      <div
        className={`
          container mx-auto px-6 py-3 flex items-center justify-between
          rounded-full transition-all duration-300
          ${
            isScrolled
              ? "bg-slate-900/90 shadow-xl backdrop-blur-md"
              : "bg-slate-900/60 backdrop-blur-sm"
          }
        `}
      >
        {/* LEFT - Logo */}
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="w-10 h-10" />
          <span className="text-white font-bold text-lg uppercase">
            Vipin
          </span>
        </div>

        {/* CENTER - Main Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {Nav_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="cursor-pointer"
              >
                <div
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm
                  ${
                    isActive
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-300 hover:text-blue-400 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </div>
              </li>
            );
          })}
        </ul>

        {/* RIGHT - Hire Me Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("contact")}
            className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
          >
            Hire Me
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden ml-auto">
          {!isMenuOpen ? (
            <Menu
              className="text-white w-7 h-7 cursor-pointer hover:text-blue-400"
              onClick={() => setIsMenuOpen(true)}
            />
          ) : (
            <X
              className="text-white w-7 h-7 cursor-pointer hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <ul className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center gap-8 md:hidden">
            {Nav_LINKS.map((link) => (
              <li
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-white text-xl hover:text-blue-400 transition"
              >
                {link.label}
              </li>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full"
            >
              Hire Me
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
