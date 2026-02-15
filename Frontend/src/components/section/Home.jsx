import React, { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import RightsideCard from "../ui/Card";
import Resume from "../../data/resume/RESUME (10).pdf";
import DeskLamp from "../ui/TableLemp";

const Home = () => {
  const [lightOn, setLightOn] = useState(false);

  return (
    <section
      id="home"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 opacity-90" />

      <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left relative z-20">
          
          <h3 className="text-sm tracking-widest uppercase text-blue-400 font-medium">
            Hello There, Welcome to my site
          </h3>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            I'm <span className="text-blue-400">Vipin Jaiswal</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
            A{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>{" "}
            & UI/UX Designer
          </h2>

          <p className="text-gray-400 max-w-lg text-base md:text-lg leading-relaxed">
            I build interactive, high-performance websites and applications
            with scalable architecture.
          </p>

          {/* BUTTON AREA - DESKTOP ONLY */}
          <div className="hidden md:flex items-center gap-16 pt-12">

            {/* Resume Button */}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 
              text-white font-semibold transition shadow-lg flex items-center gap-2"
            >
              See Resume <ArrowRight size={18} />
            </a>

            {/* Lamp + Hire */}
            <div className="relative flex items-center gap-6">

              <div
                onClick={() => setLightOn(!lightOn)}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <DeskLamp
                  size={110}
                  color={lightOn ? "#facc15" : "#9ca3af"}
                />
              </div>

              <a
                href="#contact"
                className={`px-8 py-3 rounded-full flex items-center gap-2 
                transition-all duration-500
                ${
                  lightOn
                    ? "opacity-100 translate-x-0 bg-yellow-400 text-black shadow-xl"
                    : "opacity-0 -translate-x-4 pointer-events-none"
                }`}
              >
                Hire Me <MessageCircle size={18} />
              </a>

              {lightOn && (
                <div className="absolute left-0 top-0 w-56 h-56 
                bg-[radial-gradient(circle_at_center,_rgba(255,223,100,0.25),transparent_70%)]
                blur-2xl pointer-events-none -z-10" />
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center md:items-end gap-10">

          <RightsideCard />

          {/* BUTTON AREA - MOBILE ONLY */}
          <div className="flex md:hidden flex-col items-center gap-8 pt-6">

            {/* Resume Button */}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 
              text-white font-semibold transition shadow-lg flex items-center gap-2"
            >
              See Resume <ArrowRight size={18} />
            </a>

            {/* Lamp + Hire */}
            <div className="relative flex flex-col items-center gap-4">

              <div
                onClick={() => setLightOn(!lightOn)}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <DeskLamp
                  size={100}
                  color={lightOn ? "#facc15" : "#9ca3af"}
                />
              </div>

              <a
                href="#contact"
                className={`px-8 py-3 rounded-full flex items-center gap-2 
                transition-all duration-500
                ${
                  lightOn
                    ? "opacity-100 translate-y-0 bg-yellow-400 text-black shadow-xl"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                Hire Me <MessageCircle size={18} />
              </a>

              {lightOn && (
                <div className="absolute w-52 h-52 
                bg-[radial-gradient(circle_at_center,_rgba(255,223,100,0.25),transparent_70%)]
                blur-2xl pointer-events-none -z-10" />
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
