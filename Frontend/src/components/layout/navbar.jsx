import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Mail 
} from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const Nav_LINKS = [
  { id: 'home', label: 'Home', icon: <Home size={20} /> },
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'services', label: 'Services', icon: <Briefcase size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(Nav_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center px-2 sm:px-4">
      {/* --- DESKTOP NAVBAR --- */}
      <div
        className={`
      container max-w mx-auto px-4 py-3 flex items-center justify-between
      rounded-full transition-all duration-300
      ${isScrolled ? 'bg-gray-900/90 shadow-xl backdrop-blur-md' : 'bg-gray-900/50 backdrop-blur-sm'}
    `}

      >
        <div className="text-white text-lg font-bold tracking-wide uppercase px-4 truncate">
          Vipin Jaiswal
        </div>

        <div className="md:hidden pr-2 shrink-0 flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? (
                <X className="text-white w-6 h-6 hover:text-gray-300 transition-colors " />
             ) : (
                <Menu className="text-white w-6 h-6 hover:text-gray-300 transition-colors" />
             )}
          </button>
        </div>

        <ul className="hidden md:flex items-center space-x-8 md:space-x-8 gap-6
        px-4 ">
          {Nav_LINKS.map((link) => (
            <li
              key={link.id}
              className="relative group cursor-pointer"
              onClick={() => handleNavClick(link.id)}
            >
              <span
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </span>
              <span
                className={`absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-white rounded-full transform -translate-x-1/2 transition-opacity duration-200 ${
                  activeSection === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- MOBILE MENU (Compact Dropdown) --- */}
      
      {/* 1. Backdrop (Click to close) */}
      <div 
        className={`
          fixed inset-0 bg-transparent z-40 transition-opacity duration-300 md:hidden
          ${isMenuOpen ? 'block' : 'hidden'}
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* 2. The Menu Card */}
      <div
        className={`
          fixed top-20 right-4 w-60 h-auto z-50
          bg-gray-900/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl
          flex flex-col py-2 transform transition-all duration-300 ease-out origin-top-right md:hidden
          ${isMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        {/* Links List Only - No Header/Footer */}
        <div className="flex-1 overflow-y-auto px-2 space-y-1">
            {Nav_LINKS.map((link) => (
                <div 
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`
                        flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200
                        ${activeSection === link.id 
                            ? 'bg-white/20 text-white shadow-lg backdrop-blur-md' 
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'}
                    `}
                >
                    <span className={activeSection === link.id ? 'text-indigo-300' : 'text-gray-400'}>
                        {link.icon}
                    </span>
                    <span className="text-sm font-medium tracking-wide">
                        {link.label}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;