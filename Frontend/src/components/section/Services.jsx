import React, { useRef } from "react";
import {
  Brain, Code2, Palette, Database, Globe,
  Smartphone, ShieldCheck, Rocket, Cloud,
  LayoutDashboard, GitBranch, Cpu,
  ChevronLeft, ChevronRight
} from "lucide-react";

const services = [
  { icon: Brain, title: "AI Web Apps" },
  { icon: Cpu, title: "Machine Learning" },
  { icon: Code2, title: "Frontend Development" },
  { icon: Database, title: "Backend Development" },
  { icon: Globe, title: "Full Stack Apps" },
  { icon: Palette, title: "UI / UX Design" },
  { icon: LayoutDashboard, title: "Admin Dashboards" },
  { icon: Smartphone, title: "Responsive Design" },
  { icon: Cloud, title: "Cloud Deployment" },
  { icon: Rocket, title: "Performance Optimization" },
  { icon: ShieldCheck, title: "Web Security" },
  { icon: GitBranch, title: "Version Control" }
];

const Services = () => {
  const scrollRef = useRef(null);

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
      className="relative py-24 bg-slate-950"
    >
      {/* Background Gradient (Same as Home) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 opacity-90" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Explore what I can build for you →
          </p>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-visible
          scroll-smooth snap-x snap-mandatory 
          scrollbar-hide pt-6 pb-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="snap-start bg-slate-900/60 backdrop-blur-lg 
                p-8 min-w-[270px] rounded-2xl 
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

        {/* Bottom Arrow Controls */}
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
