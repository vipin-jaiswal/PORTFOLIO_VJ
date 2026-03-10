import React, { useState, useEffect } from "react";
import { Send, Mail } from "lucide-react";

const Contect = () => {

  const [lightOn] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  // Mouse Follow Glow
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

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden py-20"
    >

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-blue-950" />

      {/* Dotted Grid */}
      <div
        className="absolute inset-0 z-0
        bg-[radial-gradient(circle,rgba(96,165,250,0.25)_1.2px,transparent_1.2px)]
        bg-size-[32px_32px]"
      />

      {/* Mouse Glow */}
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

      <div className="relative z-10 w-full max-w-xl px-6">

        {/* MAIN CARD */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Let’s Connect
            </h2>
            <p className="text-gray-400 text-sm">
              Drop your message below.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-slate-700 px-2 py-3 text-white 
              focus:outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-slate-700 px-2 py-3 text-white 
              focus:outline-none focus:border-blue-500 transition"
            />

            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-slate-700 px-2 py-3 text-white 
              focus:outline-none focus:border-blue-500 transition resize-none"
            />

            <button
              type="submit"
              className="w-full mt-4 bg-linear-to-r from-blue-600 to-cyan-500 
              hover:opacity-90 text-white font-semibold py-3 rounded-full 
              transition flex items-center justify-center gap-2 shadow-lg"
            >
              Send Message <Send size={16} />
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-400 text-xs flex items-center justify-center gap-2">
            <Mail size={14} />
            yourmail@example.com
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contect;