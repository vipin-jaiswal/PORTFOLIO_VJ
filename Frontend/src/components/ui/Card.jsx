import React from "react";
import vipinImage from "../../assets/vipin.jpeg";

const Card = () => {
  return (
    <div className="group relative w-full max-w-xs md:max-w-md h-96 md:h-[500px] cursor-pointer">

      {/* Soft Blue Glow */}
      <div
        className="absolute -inset-1 rounded-[2.5rem] blur-xl opacity-25 
        group-hover:opacity-60 transition duration-500
        bg-gradient-to-tr from-blue-500 via-cyan-500 to-blue-600"
      ></div>

      {/* Border Container */}
      <div
        className="relative h-full w-full p-[2px] rounded-[2.5rem] overflow-hidden
        bg-gradient-to-tr from-blue-500 via-cyan-500 to-blue-600
        transition-all duration-500 group-hover:scale-[1.02]"
      >
        {/* Inner Card */}
        <div className="h-full w-full bg-slate-900 rounded-[2.3rem] overflow-hidden relative">

          {/* Image */}
          <img
            src={vipinImage}
            alt="Vipin Jaiswal"
            className="w-full h-full object-cover
            transition-transform duration-700 ease-in-out
            group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t 
          from-slate-900 via-slate-900/40 to-transparent"></div>

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 w-full p-6">
            
            <h3 className="text-2xl font-bold text-white mb-1">
              Vipin Jaiswal
            </h3>

            <p className="text-cyan-400 font-medium opacity-0 
            group-hover:opacity-100 transition-opacity duration-500">
              Full Stack Developer
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
