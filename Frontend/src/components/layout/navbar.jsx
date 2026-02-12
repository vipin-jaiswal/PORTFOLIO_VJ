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
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="w-10 h-10" />
          <div className="text-white text-lg font-bold uppercase">
            Vipin Jaiswal
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {!isMenuOpen && (
            <Menu
              className="text-white w-7 h-7 cursor-pointer hover:text-blue-400"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Nav Links */}
        <ul
          className={`
            fixed md:static top-0 right-0 h-screen md:h-auto w-64 md:w-auto
            bg-slate-900 md:bg-transparent
            flex flex-col md:flex-row items-center justify-center
            gap-8 md:gap-6
            transition-transform duration-300
            ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          `}
        >
          {/* Close Button */}
          <li className="md:hidden absolute top-6 right-6">
            <X
              className="text-white w-7 h-7 cursor-pointer hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            />
          </li>

          {Nav_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="cursor-pointer"
              >
                <div
                  className={`px-4 py-2 rounded-full transition-all duration-300
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
      </div>
    </nav>
  );
};

export default Navbar;
