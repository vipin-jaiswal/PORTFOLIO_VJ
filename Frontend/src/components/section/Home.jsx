import React, { useState, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import RightsideCard from "../ui/Card";
import Resume from "../../data/resume/RESUME (10).pdf";
import DeskLamp from "../ui/TableLemp";

const Home = () => {
  const [lightOn, setLightOn] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  // 🖱️ Mouse Follow Spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!lightOn) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setPosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [lightOn]);

  // 💡 Lamp Click → Move spotlight to right
  useEffect(() => {
    if (lightOn) {
      setPosition({ x: 75, y: 40 });
    }
  }, [lightOn]);

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 bg-slate-950 overflow-hidden min-h-screen"
    >
      {/* ================= BASE BACKGROUND ================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" />

      {/* Premium Dotted Grid */}
      <div
        className="absolute inset-0 z-0
        bg-[radial-gradient(circle,rgba(96,165,250,0.25)_1.2px,transparent_1.2px)]
        bg-[size:32px_32px]"
      />

      {/* 🎥 DARK CINEMATIC SPOTLIGHT MASK */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(
            circle at ${position.x}% ${position.y}%,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.25) 15%,
            rgba(2,6,23,0.98) 45%
          )`,
        }}
      />

      {/* ✨ Subtle Controlled Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${position.x}% ${position.y}%,
            rgba(59,130,246,0.07),
            transparent 55%
          )`,
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left">
          
          <h3 className="text-sm tracking-widest uppercase text-blue-400 font-medium">
            Hello There, Welcome to my site
          </h3>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            I'm <span className="text-blue-400">Vipin Jaiswal</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
            A{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>{" "}
            & UI/UX Designer
          </h2>

          <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
            I build interactive, high-performance websites and applications
            with scalable architecture and modern UI systems.
          </p>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-20 pt-12">

            {/* Resume Button */}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 
              text-white font-semibold transition-all duration-300 
              shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
            >
              See Resume <ArrowRight size={18} />
            </a>

            {/* Lamp  */}
            {/* and Hire */}
            
            
            <div className="relative flex items-center gap-6">

              <div
                onClick={() => setLightOn(!lightOn)}
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <DeskLamp
                  size={120}
                  color={lightOn ? "#facc15" : "#9ca3af"}
                />
              </div>

              <a
                href="#contact"
                className={`px-8 py-3 rounded-full flex items-center gap-2 
                font-semibold transition-all duration-500
                ${
                  lightOn
                    ? "opacity-100 translate-x-0 bg-yellow-400 text-black shadow-xl"
                    : "opacity-0 -translate-x-6 pointer-events-none"
                }`}
              >
                Hire Me <MessageCircle size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center md:items-end gap-10">
          <RightsideCard />
        </div>
      </div>
    </section>
  );
};



export default Home;
