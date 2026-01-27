import React, { useState } from 'react';
import { Code2, Brain, Wrench, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: <Code2 size={20} />,
      description: "Building responsive, pixel-perfect interfaces with modern React ecosystems.",
      skills: [
        { name: "React.js", level: "90%" },
        { name: "Tailwind CSS", level: "95%" },
        { name: "JavaScript (ES6+)", level: "85%" },
        { name: "Redux Toolkit", level: "80%" },
        { name: "Framer Motion", level: "70%" },
        { name: "HTML5 & CSS3", level: "95%" },
      ]
    },
    {
      id: 'backend',
      label: 'AI & Backend',
      icon: <Brain size={20} />,
      description: "Architecting intelligent logic and robust backend systems.",
      skills: [
        { name: "Python", level: "85%" },
        { name: "RAG Models", level: "80%" },
        { name: "NLP / Transformers", level: "75%" },
        { name: "Node.js", level: "70%" },
        { name: "LegalTech Logic", level: "85%" },
        { name: "REST APIs", level: "90%" },
      ]
    },
    {
      id: 'tools',
      label: 'Tools & Devops',
      icon: <Wrench size={20} />,
      description: "My daily drivers for version control, testing, and deployment.",
      skills: [
        { name: "Git & GitHub", level: "90%" },
        { name: "VS Code", level: "95%" },
        { name: "Postman", level: "85%" },
        { name: "Research Methods", level: "90%" },
        { name: "Vercel / Netlify", level: "85%" },
      ]
    }
  ];

  const activeContent = categories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      
      {/* --- ADDED BACKGROUND PATTERN --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20 dark:opacity-5" />

      {/* Existing Background Blob (Optional, keeps the rose tint) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* --- LEFT COLUMN: Vertical Navigation Buttons --- */}
          <div className="md:w-1/4 flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl text-left transition-all duration-300 border-2 w-full group ${
                  activeTab === cat.id
                    ? `bg-white dark:bg-slate-900 border-rose-600 text-rose-600 shadow-xl shadow-rose-600/10`
                    : `bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-slate-900/50 text-gray-500 dark:text-gray-400`
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className={`p-2 rounded-lg transition-colors ${activeTab === cat.id ? 'bg-rose-50 dark:bg-rose-900/20' : 'bg-gray-100 dark:bg-slate-800'}`}>
                    {cat.icon}
                  </div>
                  <span className={`font-semibold ${activeTab === cat.id ? 'text-gray-900 dark:text-white' : ''}`}>
                    {cat.label}
                  </span>
                </div>
                
                {/* Small Arrow Indicator */}
                {activeTab === cat.id && (
                  <ChevronRight size={16} className="text-rose-600 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* --- RIGHT COLUMN: Active Content Area --- */}
          <div className="md:w-3/4">
            <div 
              key={activeTab} // Triggers animation on change
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-gray-200 dark:border-slate-800 shadow-2xl animate-in fade-in slide-in-from-right-8 duration-500 h-full"
            >
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                   {activeContent.label}
                   <span className="text-sm font-normal text-gray-400 bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                     {activeContent.skills.length} Skills
                   </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {activeContent.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {activeContent.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded-md">
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-purple-600 rounded-full relative"
                        style={{ width: skill.level }}
                      >
                         {/* Subtle shine animation */}
                         <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Animation Style */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;