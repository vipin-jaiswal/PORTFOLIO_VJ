import React from 'react';
import { Code2, BrainCircuit, Microscope, ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20 dark:opacity-5"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT COLUMN: Sticky Header & Intro --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 pt-8 text-center lg:text-left">
             
            {/* --- YOUR ADDED HEADER --- */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
               About <span className="text-rose-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-rose-600 mx-auto lg:mx-0 rounded-full mb-8"></div>
            {/* ------------------------- */}
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              I'm Vipin, a Full Stack Developer and Researcher. I don't just build websites; I construct complex digital systems that balance user-centric frontend design with deep, analytical backend logic.
            </p>

            {/* Quick summary stats */}
             <div className="grid grid-cols-2 gap-6 border-t border-gray-100 dark:border-slate-800 pt-8">
                <div>
                   <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Dual Focus</h4>
                   <p className="text-sm text-gray-500">Engineering & Academic Research</p>
                </div>
                <div>
                   <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">RAG Model</h4>
                   <p className="text-sm text-gray-500">Specialized AI Implementation</p>
                </div>
             </div>
          </div>

          {/* --- RIGHT COLUMN: Feature Grid Cards --- */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* CARD 1: Frontend */}
            <div className="md:col-span-2 p-8 rounded-[2rem] bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-rose-200 dark:hover:border-rose-900/50 transition-all group relative overflow-hidden text-left">
               <Code2 className="absolute -right-10 -bottom-10 text-rose-600/5 w-64 h-64 group-hover:scale-110 transition-transform" />
               
              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 bg-rose-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-rose-600/20">
                  <Code2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  Translating complex requirements into clean, responsive <span className="text-rose-600 font-semibold">React</span> applications. My focus is on performance, accessibility, and creating seamless user experiences using modern JavaScript and Tailwind CSS.
                </p>
                 <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md font-medium text-gray-700 dark:text-gray-300">React.js</span>
                    <span className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md font-medium text-gray-700 dark:text-gray-300">Redux</span>
                    <span className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md font-medium text-gray-700 dark:text-gray-300">Tailwind</span>
                 </div>
              </div>
            </div>

            {/* CARD 2: LegalTech AI */}
            <div className="p-8 rounded-[2rem] bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:bg-rose-600 hover:text-white transition-all group relative overflow-hidden text-left">
              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 bg-white text-rose-600 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <BrainCircuit size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-4">AI & LegalTech</h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-rose-100 mb-6 leading-relaxed">
                  Spearheading the development of a trustworthy, multilingual legal assistant using advanced <span className="font-semibold">RAG models</span> and NLP.
                </p>
                 <div className="inline-flex items-center gap-2 font-semibold text-rose-600 group-hover:text-white">
                    Current Focus <ArrowUpRight size={18} />
                 </div>
              </div>
            </div>

            {/* CARD 3: Research */}
            <div className="p-8 rounded-[2rem] bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-rose-200 dark:hover:border-rose-900/50 transition-all group text-left">
              <div className="w-14 h-14 mb-6 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-2xl flex items-center justify-center">
                <Microscope size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Structured Research</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Applying rigorous academic methodologies (developed during thesis work on data analysis) to ensure coding structures are scalable, maintainable, and robust.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;