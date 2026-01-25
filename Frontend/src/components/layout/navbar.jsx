import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Nav_LINKS } from '../../utils/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import logoImage from '../../assets/logo.png';

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
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center px-2 sm:px-4">
      <div
       className={`
      container max-w mx-auto px-4 py-3 flex items-center justify-between
      rounded-full transition-all duration-300
      ${isScrolled ? 'bg-gray-900/90 shadow-xl backdrop-blur-md' : 'bg-gray-900/50 backdrop-blur-sm'}
    `}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="w-10 h-10 border-purple-500/30" />
          <div className="text-white text-lg font-bold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Vipin Jaiswal
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pr-2 z-50">
          {/* Only show Menu icon here, Close icon is inside the drawer */}
          {!isMenuOpen && (
             <Menu 
               className="text-white w-8 h-8 cursor-pointer hover:text-purple-500 transition-colors" 
               onClick={() => setIsMenuOpen(true)} 
             />
          )}
        </div>

        {/* Navigation Links (Mobile Sidebar + Desktop Horizontal) */}
        <ul
          className={`
            fixed md:static top-0 right-0 
            md:h-auto 
            md:w-auto 
            md:bg-transparent 
            shadow-2xl md:shadow-none
            flex flex-col md:flex-row items-center justify-center md:justify-end gap-8 md:gap-6
            transition-transform duration-300 ease-in-out z-50
            pt-20 md:pt-0
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          `}
        >
          {/* Close button inside mobile menu */}
          <li className="md:hidden absolute top-6 right-6">
            <X 
              className="text-white w-8 h-8 cursor-pointer hover:text-rose-500 transition-colors" 
              onClick={() => setIsMenuOpen(false)} 
            />
          </li>

          {Nav_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            
            return (
              <li
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full md:w-auto text-center px-6 md:px-0"
              >
                <div
                  className={`
                    px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ease-out
                    font-medium text-sm tracking-wide
                    ${isActive 
                      ? ' text-gray-400 hover:text-white shadow-purple-500/25 scale-105 hover:bg-white/10 hover:shadow-inner' 
                      : 'text-gray-400 hover:text-white shadow-purple-500/25 scale-105 hover:bg-white/10 hover:shadow-inner'
                    }
                  `}
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