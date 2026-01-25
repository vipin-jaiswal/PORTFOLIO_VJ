import React from "react";
import vipinImage from '../../assets/vipin.jpeg';

const Card = () => {
  return (
    <div className="group relative w-full max-w-xs md:max-w-md h-96 md:h-[500px] cursor-pointer">
      
      {/* 1. BACKGROUND GLOW (Animated) */}
      {/* Transitions from Pink/Purple glow to Cyan/Blue glow on hover */}
      <div className="absolute -inset-1 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 
        bg-gradient-to-tr from-rose-500 via-purple-500 to-blue-500 
        group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-600">
      </div>

      {/* 2. THE ANIMATED BORDER CONTAINER */}
      {/* The background gradient here defines the border color. 
          We use 'group-hover' to swap the gradient colors smoothly. */}
      <div className="relative h-full w-full p-[3px] rounded-[2.5rem] overflow-hidden transition-all duration-500
        bg-gradient-to-tr from-rose-500 via-purple-500 to-blue-500
        group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-600">
        
        {/* 3. INNER CARD CONTENT */}
        <div className="h-full w-full bg-gray-900 rounded-[2.3rem] overflow-hidden relative">
          
          {/* Image */}
          <img 
            src={vipinImage}
            alt="Vipin Jaiswal" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-700 ease-in-out"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
              Vipin Jaiswal
            </h3>
            <p className="text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Frontend Developer
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;