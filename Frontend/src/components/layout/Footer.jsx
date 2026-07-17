import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteData } from "../../data/siteData";

const Footer = () => {
  const socialIcons = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
    mail: <Mail size={20} />,
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-950 to-slate-950" />
      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand and Social */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={siteData.assets.logo} alt={siteData.personal.logoAlt} className="w-10 h-10" />
              <span className="text-white font-bold text-lg uppercase">{siteData.personal.name}</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">{siteData.footer.brandDescription}</p>
            <div className="flex gap-4">
              {Object.entries(siteData.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-4 md:col-start-6">
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">{siteData.footer.sections.navigation.title}</h4>
            <ul className="space-y-3">
              {siteData.footer.sections.navigation.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">{siteData.footer.sections.specialties.title}</h4>
            <ul className="space-y-3">
              {siteData.footer.sections.specialties.items.map((item) => (
                <li key={item} className="text-gray-400 text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteData.personal.name}. All Rights Reserved.</p>
          <div className="mt-2">
            {siteData.footer.legalLinks.map((link, index) => (
              <React.Fragment key={link}>{index > 0 && <span className="mx-2">&middot;</span>}<a href="#" className="hover:text-gray-300">{link}</a></React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;