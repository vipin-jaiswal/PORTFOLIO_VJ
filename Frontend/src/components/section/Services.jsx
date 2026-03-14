import React, { useRef, useState, useEffect } from "react";
import {
  Brain, Code2, Palette, Database, Globe,
  Smartphone, ShieldCheck, Rocket, Cloud,
  LayoutDashboard, GitBranch, Cpu,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { siteData } from "../../data/siteData";

const serviceIconMap = {
  Brain,
  Cpu,
  Code2,
  Database,
  Globe,
  Palette,
  LayoutDashboard,
  Smartphone,
  Cloud,
  Rocket,
  ShieldCheck,
  GitBranch,
};

const Services = () => {

  const scrollRef = useRef(null);

  const [lightOn] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  // Mouse Follow Glow (same as Home)
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="services"
      className="relative pt-32 pb-24 bg-slate-950 overflow-hidden min-h-screen"
    >

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-blue-950" />

      {/* Dotted Grid */}
      <div
        className="absolute inset-0 z-0
        bg-[radial-gradient(circle,rgba(96,165,250,0.25)_1.2px,transparent_1.2px)]
        bg-size-[32px_32px]"
      />

      {/* Subtle Glow Spotlight */}
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

      <div className="container mx-auto max-w-6xl px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            {siteData.services.heading} <span className="text-blue-400">{siteData.services.headingHighlight}</span>
          </h2>
          <p className="text-gray-400 mt-4">
            {siteData.services.description}
          </p>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-visible
          scroll-smooth snap-x snap-mandatory 
          scrollbar-hide pt-6 pb-10"
        >
          {siteData.services.items.map((service, index) => {
            const Icon = serviceIconMap[service.icon] || Code2;
            return (
              <div
                key={index}
                className="snap-start bg-slate-900/60 backdrop-blur-lg 
                p-8 min-w-67.5 rounded-2xl 
                border border-slate-800 
                transition-all duration-500 ease-out
                hover:border-blue-400 
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
              >
                <Icon className="text-blue-400 mb-4" size={36} />
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Arrow Controls */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => scroll("left")}
            className="bg-slate-800 hover:bg-blue-600 
            text-white p-3 rounded-full 
            shadow-lg transition duration-300"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="bg-slate-800 hover:bg-blue-600 
            text-white p-3 rounded-full 
            shadow-lg transition duration-300"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;