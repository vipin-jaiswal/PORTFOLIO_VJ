import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 overflow-hidden pt-20">

      {/* Background Theme */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-950 to-blue-950 opacity-90" />
      <div
        className="absolute inset-0 
        bg-[radial-gradient(#1e293b_1px,transparent_1px)]
        [background-size:20px_20px] opacity-20"
      />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-slate-800">

          {/* Brand Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Vipin Jaiswal
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Full Stack Developer & AI Engineer building scalable
              web and intelligent systems.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6 text-gray-400">
              <Github size={18} className="hover:text-white cursor-pointer transition" />
              <Linkedin size={18} className="hover:text-white cursor-pointer transition" />
              <Twitter size={18} className="hover:text-white cursor-pointer transition" />
              <Mail size={18} className="hover:text-white cursor-pointer transition" />
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available for Projects
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Full Stack Development</li>
              <li>AI / RAG Systems</li>
              <li>UI/UX Design</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Case Studies</li>
              <li>Open Source</li>
              <li>Blog (Coming Soon)</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-gray-500 text-sm">

          <p>© {new Date().getFullYear()} Vipin Jaiswal. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">Privacy</span>
            <span className="hover:text-white cursor-pointer transition">Terms</span>
            <span className="hover:text-white cursor-pointer transition">Code of Conduct</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
