import React, { useState, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import RightsideCard from "../ui/Card";
import DeskLamp from "../ui/TableLemp";
import { siteData } from "../../data/siteData";

const Home = () => {
  const [lightOn, setLightOn] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

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

  useEffect(() => {
    if (lightOn) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPosition({ x: 75, y: 40 });
    }
  }, [lightOn]);

  const handleContactClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCVClick = () => {
    document.getElementById("cv")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 bg-slate-950 overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" />

      <div
        className="absolute inset-0 z-0
        bg-[radial-gradient(circle,rgba(96,165,250,0.25)_1.2px,transparent_1.2px)]
        bg-size-[32px_32px]"
      />

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

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-sm tracking-widest uppercase text-blue-400 font-medium">
            {siteData.home.greeting}
          </h3>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            I&apos;m{" "}
            <span className="text-blue-400">{siteData.personal.name}</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {siteData.personal.cvHeadline}
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
            {siteData.personal.cvSummary}
          </p>

          <div className="hidden md:flex items-center gap-20 pt-12">
            <button
              type="button"
              onClick={handleCVClick}
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
            >
              {siteData.home.resumeButtonText} <ArrowRight size={18} />
            </button>

            <div className="relative flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLightOn(!lightOn)}
                className="cursor-pointer hover:scale-110 transition-transform duration-300 bg-transparent p-0 border-0"
                aria-label="Toggle lamp"
              >
                <DeskLamp size={120} color={lightOn ? "#facc15" : "#9ca3af"} />
              </button>

              <button
                type="button"
                onClick={handleContactClick}
                className={`px-8 py-3 rounded-full flex items-center gap-2 
                font-semibold transition-all duration-500 cursor-pointer
                ${
                  lightOn
                    ? "opacity-100 translate-x-0 bg-yellow-400 text-black shadow-xl"
                    : "opacity-0 -translate-x-6 pointer-events-none"
                }`}
              >
                {siteData.home.hireButtonText} <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-10">
          <RightsideCard />
        </div>
      </div>
    </section>
  );
};

export default Home;
