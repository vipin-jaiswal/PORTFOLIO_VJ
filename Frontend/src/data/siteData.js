import logoImage from "../assets/logo.png";
import profileImage from "../assets/vipin.jpeg";
import resumeFile from "./resume/RESUME (10).pdf";

export const siteData = {
  assets: {
    logo: logoImage,
    profileImage,
    resume: resumeFile,
  },

  personal: {
    name: "Vipin Jaiswal",
    shortName: "Vipin",
    title: "AI Engineer & Full Stack Developer",
    subtitle: "B.Tech CSE (AI) | Specialist in Intelligent Systems",
    email: "vipin78040@gmail.com",
    location: "Bhilai, CG, India", // Simplified for cleaner UI
    statusText: "Open for innovative projects",
    profileImageAlt: "Vipin Jaiswal - AI & Full Stack Developer",
    logoAlt: "VJ Portfolio Logo",
    resumePath: resumeFile,
  },

  nav: {
    links: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Expertise" },
      { id: "projects", label: "Work" },
      { id: "contact", label: "Contact" },
    ],
    hireButtonText: "Let's Talk",
  },

  home: {
    greeting: "Empowering Ideas with Code & Intelligence",
    description:
      "I bridge the gap between complex Machine Learning models and seamless user experiences through high-performance Full Stack development.",
    resumeButtonText: "See CV",
    hireButtonText: "Work With Me",
  },

  about: {
    heading: "My",
    headingHighlight: "Story",
    intro:
      "I am a Computer Science Engineer specializing in AI, driven by the challenge of transforming complex data into intelligent, scalable systems. I don't just build applications; I engineer solutions that learn, adapt, and evolve.",
    details:
      "My expertise sits at the intersection of Deep Learning and Modern Web Architecture. Whether I'm training Convolutional Neural Networks for computer vision or architecting robust MERN stack ecosystems, my focus remains constant: delivering high-performance, secure, and user-centric digital products.",
    skillsHeading: "Technical",
    skillsHeadingHighlight: "Arsenal",
    skillCards: [
      {
        icon: "BrainCircuit",
        title: "Artificial Intelligence",
        desc: "Designing intelligent systems using Computer Vision, Predictive Modeling, and RAG architectures.",
        tools: ["TensorFlow", "Scikit-Learn", "CNN", "OpenCV"],
      },
      {
        icon: "Code2",
        title: "Frontend Engineering",
        desc: "Developing high-fidelity, responsive interfaces with a focus on performance and state management.",
        tools: ["React.js", "Next.js", "Tailwind CSS", "Redux"],
      },
      {
        icon: "Database",
        title: "Backend & Cloud",
        desc: "Architecting secure server-side logic and managing high-availability database systems.",
        tools: ["Node.js", "Express", "MongoDB", "Python (FastAPI)"],
      },
      {
        icon: "Terminal",
        title: "Core Engineering",
        desc: "Optimizing code through robust Data Structures, Algorithms, and streamlined version control.",
        tools: ["Java", "Python", "Git", "RESTful APIs"],
      },
    ],
  },

  services: {
    heading: "Core",
    headingHighlight: "Expertise",
    description: "Solving complex problems with modern technology stacks.",
    items: [
      { icon: "Cpu", title: "Custom AI Solutions" },
      { icon: "Layers", title: "Full Stack Web Apps" },
      { icon: "Search", title: "RAG & LLM Integration" },
      { icon: "Workflow", title: "Automation Scripts" },
      { icon: "Smartphone", title: "Responsive UI/UX" },
      { icon: "Shield", title: "Secure API Development" },
      { icon: "Server", title: "Database Architecture" },
      { icon: "Zap", title: "Performance Tuning" },
    ],
  },

  projects: {
    heading: "My",
    headingHighlight: "Projects",

    github: {
      username: "vipin-jaiswal",
      selectedRepos: [
        "multiple-disease-prediction",
        "bird-classification",
        "plant-disease-detection"
      ]
    },

    loadingText: "Loading projects...",
    errorText: "Failed to load projects",
    emptyDescription: "No description available",
    ctaText: "View Project"
  },

  contact: {
    heading: "Start a",
    headingHighlight: "Project",
    subText: "Have a vision? Let’s build it together.",
    placeholders: {
      name: "Full Name",
      email: "Email Address",
      message: "Tell me about your project...",
    },
    buttonText: "Launch Inquiry",
  },

  footer: {
    brandDescription:
      "Innovating at the intersection of AI and Web Development. Let's build the future, one commit at a time.",
    sections: {
      navigation: {
        title: "Sitemap",
        links: [
          { label: "Home", href: "#home" },
          { label: "Expertise", href: "#services" },
          { label: "Portfolio", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ],
      },
      specialties: {
        title: "Specialties",
        items: [
          "Deep Learning",
          "MERN Stack",
          "UI/UX Implementation",
          "Intelligent Automation",
        ],
      },
    },
    legalLinks: ["Privacy Policy", "Terms of Service"],
  },

  social: {
    github: "https://github.com/vipin-jaiswal",
    linkedin: "https://linkedin.com/in/vipin-jaiswal", 
    twitter: "https://twitter.com/vipin_jaiswal",
    mail: "mailto:vipin78040@gmail.com",
  },
};