import React, { useState } from "react";
import { BriefcaseBusiness, Download, ExternalLink, GraduationCap, Mail, MapPin, Sparkles, Github, Linkedin, Twitter } from "lucide-react";
import { siteData } from "../../data/siteData";

const CV = () => {
  const [activeSkill, setActiveSkill] = useState(siteData.about.skillCards[0]);

  return (
    <section id="cv" className="relative overflow-hidden bg-slate-950 py-28">
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(96,165,250,0.2)_1px,transparent_1px)] bg-size-[28px_28px]" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            <Sparkles size={16} /> Interactive CV
          </p>
          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Meet <span className="text-blue-400">{siteData.personal.shortName}</span> beyond the résumé
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.6fr]">
          <aside className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur-xl">
            <img
              src={siteData.assets.profileImage}
              alt={siteData.personal.profileImageAlt}
              className="mb-6 aspect-square w-28 rounded-2xl object-cover ring-2 ring-blue-400/60"
            />
            <h3 className="text-2xl font-bold text-white">{siteData.personal.name}</h3>
            <p className="mt-2 text-blue-400">{siteData.personal.title}</p>

            <div className="my-7 space-y-4 border-y border-slate-800 py-6 text-sm text-gray-300">
              <p className="flex items-start gap-3"><BriefcaseBusiness className="mt-0.5 shrink-0" size={17} /> <span>{siteData.personal.position}<br />{siteData.personal.company}</span></p>
 
              <a href={`mailto:${siteData.personal.email}`} className="flex items-center gap-3 hover:text-blue-400">
                <Mail size={17} /> {siteData.personal.email}
              </a>
              <p className="flex items-center gap-3"><MapPin size={17} /> {siteData.personal.location}</p>
              <p className="flex items-center gap-3"><GraduationCap size={17} /> {siteData.personal.subtitle}</p>
                         </div>

            <div className="mt-6 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 mb-8">
              <p className="text-lg font-bold text-white">{activeSkill.title}</p>
              <p className="mt-2 leading-relaxed text-gray-300">{activeSkill.desc}</p>
            </div>

            <div className="mb-8 flex justify-center gap-5">
              <a href={siteData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition"><Github size={22} /></a>
              <a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition"><Linkedin size={22} /></a>
              <a href={siteData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition"><Twitter size={22} /></a>
            </div>

            <a
              href={siteData.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Download PDF <Download size={18} />
            </a>
          </aside>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-6 backdrop-blur-xl md:p-8">
            <div className="mb-8 border-b border-slate-800 pb-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Profile</p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-white">{siteData.personal.cvHeadline}</h3>
              <p className="mt-3 text-lg leading-relaxed text-gray-300">{siteData.personal.cvSummary}</p>
            </div>

            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Explore expertise</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Click a specialty</h3>
              </div>
              <a href="#projects" className="hidden items-center gap-1 text-sm text-blue-400 hover:text-cyan-400 md:flex">
                View projects <ExternalLink size={15} />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {siteData.about.skillCards.map((skill) => (
                <button
                  key={skill.title}
                  type="button"
                  onClick={() => setActiveSkill(skill)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    activeSkill.title === skill.title
                      ? "border-blue-400 bg-blue-500/15 shadow-[0_0_24px_rgba(59,130,246,0.2)]"
                      : "border-slate-800 bg-slate-950/40 hover:border-blue-500/70"
                  }`}
                >
                  <p className="font-semibold text-white">{skill.title}</p>
                  <p className="mt-2 text-sm text-gray-400">{skill.tools.join(" · ")}</p>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
