import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import RightsideCard from "../ui/Card";
import Resume from "../../data/resume/RESUME (10).pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Cool Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 opacity-90" />
      
      {/* Soft Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] 
      [background-size:20px_20px] opacity-20" />

      <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left">
          
          <h3 className="text-sm tracking-widest uppercase text-blue-400 font-medium">
            Hello There, Welcome to my site
          </h3>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            I'm <span className="text-blue-400">Vipin Jaiswal</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug text-gray-300">
            A{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>{" "}
            <br className="hidden md:block" />
            & UI/UX Designer
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
            I build interactive, high-performance websites and applications
            with a focus on seamless user experiences and scalable architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 pt-4">
            
            {/* Resume Button */}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 
              text-white font-semibold transition-all duration-300 
              shadow-lg hover:shadow-blue-500/40 flex items-center gap-2"
            >
              See Resume
              <ArrowRight size={18} />
            </a>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-blue-400 
              text-blue-400 hover:bg-blue-500 hover:text-white 
              transition-all duration-300 flex items-center gap-2"
            >
              Hire Me
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">
          <RightsideCard />
        </div>
      </div>
    </section>
  );
};

export default Home;
