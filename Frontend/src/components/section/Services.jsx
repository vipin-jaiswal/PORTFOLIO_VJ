import React, { useState, useEffect } from "react";
import {
  Cpu,
  Layers,
  Search,
  Workflow,
  Smartphone,
  Shield,
  Server,
  Zap,
} from "lucide-react";
import { siteData } from "../../data/siteData";

const iconMap = {
  Cpu,
  Layers,
  Search,
  Workflow,
  Smartphone,
  Shield,
  Server,
  Zap,
};

const Services = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  // Mouse Follow Glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen bg-slate-950 py-28 overflow-hidden"
    >
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-blue-950" />

      {/* Dotted Grid */}
      <div
        className="absolute inset-0 z-0
        bg-[radial-gradient(circle,rgba(96,165,250,0.25)_1.2px,transparent_1.2px)]
        bg-size-[32px_32px]"
      />

      {/* Subtle Mouse Glow */}
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
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {siteData.services.heading}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              {siteData.services.headingHighlight}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            {siteData.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.services.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl 
                backdrop-blur-sm transition-all duration-300 
                hover:-translate-y-1 hover:border-blue-500/60 
                hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                <div className="mb-4 text-blue-400">{Icon && <Icon size={28} />}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;