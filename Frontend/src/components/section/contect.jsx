import React from "react";
import { Send, Mail } from "lucide-react";

const Contect = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden py-20"
    >
      {/* SAME BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-950 to-blue-950 opacity-90" />
      <div
        className="absolute inset-0 
        bg-[radial-gradient(#1e293b_1px,transparent_1px)]
        [background-size:20px_20px] opacity-20"
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
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 
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
