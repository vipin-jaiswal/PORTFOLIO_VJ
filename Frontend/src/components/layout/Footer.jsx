import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { siteData } from "../../data/siteData";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 overflow-hidden pt-20">

      {/* Background Theme */}
      <div className="absolute inset-0 bg-linear-to-tr from-slate-900 via-slate-950 to-blue-950 opacity-90" />
      <div
        className="absolute inset-0 
        bg-[radial-gradient(#1e293b_1px,transparent_1px)]
        bg-size-[20px_20px] opacity-20"
      />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-slate-800">

          {/* Brand Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              {siteData.personal.name}
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              {siteData.footer.brandDescription}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6 text-gray-400">
              <a href={siteData.social.github || "#"} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={18} className="hover:text-white cursor-pointer transition" />
              </a>
              <a href={siteData.social.linkedin || "#"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} className="hover:text-white cursor-pointer transition" />
              </a>
              <a href={siteData.social.twitter || "#"} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={18} className="hover:text-white cursor-pointer transition" />
              </a>
              <a href={siteData.social.mail} aria-label="Email">
                <Mail size={18} className="hover:text-white cursor-pointer transition" />
              </a>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {siteData.personal.statusText}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">{siteData.footer.sections.navigation.title}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {siteData.footer.sections.navigation.links.map((item) => (
                <li key={item.href + item.label}>
                  <a href={item.href} className="hover:text-white transition">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{siteData.footer.sections.services.title}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {siteData.footer.sections.services.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">{siteData.footer.sections.resources.title}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {siteData.footer.sections.resources.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-gray-500 text-sm">

          <p>© {new Date().getFullYear()} {siteData.personal.name}. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            {siteData.footer.legalLinks.map((item) => (
              <span key={item} className="hover:text-white cursor-pointer transition">{item}</span>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
