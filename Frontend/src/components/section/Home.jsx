import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react'; 
import RightsideCard from '../ui/Card';

// Importing the image from the assets folder


const Home = () => {
  return (
   
    <section id="home" className="h-dvh max-h-dvh flex items-center justify-center bg-[#0a0a0a] text-white px-6 overflow-hidden relative">
      
      {/* Background Gradient Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-rose-900/20 rounded-full blur-[100px]" />

      <div className="container  pt-8 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center relative z-10 h-full">
        
        {/* LEFT SIDE: Text Content */}
        <div className="text-center pt-8 md:text-left space-y-6 animate-fade-in-up flex flex-col justify-center">
          <h3 className="text-sm md:text-base pt-4  font-medium tracking-[0.2em] text-gray-400 uppercase">
            Hello There, Welcome to my site
          </h3>
          
          <h1 className="text-3xl md:text-7xl font-bold leading-tight">
            I'm <span className="text-white">Vipin Jaiswal</span>
          </h1>
          
          <h2 className="text-2xl md:text-5xl font-bold leading-tight">
            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
              Full Stack Developer
            </span>
            <br />
            <span className="text-white">& UI/UX Designer</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build interactive, high-performance websites and applications with a focus on seamless user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 pt-4">
            <button className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] flex items-center gap-2 group">
              SEE PORTFOLIO
              <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                 <ArrowRight size={16} />
              </div>
            </button>
            
            <button className="px-8 py-3 rounded-full border border-rose-500/50 hover:border-rose-500 text-white font-semibold hover:bg-rose-500/10 transition-all flex items-center gap-2">
              Hire ME
              <MessageCircle size={18} className="text-rose-500" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        {/* Updated alignment to fit within the fixed height properly */}
        <div className="relative flex justify-center md:justify-end h-[50vh] md:h-auto ">
          <RightsideCard />
        </div>

      </div>
    </section>
  );
};

export default Home;