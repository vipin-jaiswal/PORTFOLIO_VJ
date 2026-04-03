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

      <div className="relative container mx-auto px-6">

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
