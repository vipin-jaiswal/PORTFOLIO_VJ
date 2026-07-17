import logoImage from "../assets/logo.png";
import profileImage from "../assets/vipin portfolio.jpeg";
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
    title: "AI & Full-Stack Web Developer ",
    subtitle: "B.Tech CSE (AI) | Specialist in Intelligent Systems",
    cvHeadline: "B.Tech in Computer Science Engineering (Artificial Intelligence) | AI & Full-Stack Software Engineer",
    cvSummary:
      "I specialize in building intelligent, scalable software by combining Artificial Intelligence, Machine Learning, and Full-Stack Development. From designing deep learning models to developing modern, high-performance web applications, I create end-to-end solutions that transform complex ideas into seamless, user-centric digital experiences.",
    email: "vipin78040@gmail.com",
    location: "Bhilai, CG, India", // Simplified for cleaner UI
    company: "TrendTide Connect Private Limited",
    position: "Associate – AI and Innovation",
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
      { id: "cv", label: "CV" },
    ],
    hireButtonText: "Let's Talk",
  },

  home: {
    greeting: "Empowering Ideas with Code & Intelligence",
    description:
      "I bridge the gap between complex Machine Learning models and seamless user experiences through high-performance Full Stack development.",
    resumeButtonText: "Explore CV",
    hireButtonText: "Work With Me",
  },

  about: {
    heading: "My",
    headingHighlight: "Story",
    intro:
      "I am an AI and Full-Stack Software Engineer passionate about building intelligent, scalable, and impactful digital solutions. I enjoy solving real-world problems by combining Artificial Intelligence with modern web technologies to create applications that are efficient, adaptive, and user-focused.",
    details:
      "Currently, I am working at TrendTide Connect Private Limited, where I contribute to modern, scalable web applications and AI-driven solutions. My expertise spans Artificial Intelligence, Deep Learning, Computer Vision, and the MERN Stack—enabling end-to-end solutions from neural networks for computer vision to high-performance web applications. I am committed to continuous learning and focus on clean code, scalable design, performance, security, and exceptional user experiences.",
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
      {
        icon: "Cpu",
        title: "Custom AI Solutions",
        description: "Building and deploying bespoke AI models for tasks like computer vision, prediction, and data analysis.",
      },
      {
        icon: "Layers",
        title: "Full Stack Web Apps",
        description: "Developing end-to-end web applications using the MERN stack with a focus on scalability and performance.",
      },
      {
        icon: "Search",
        title: "RAG & LLM Integration",
        description: "Integrating Large Language Models and Retrieval-Augmented Generation for intelligent chatbots and search.",
      },
      {
        icon: "Workflow",
        title: "Automation Scripts",
        description: "Creating Python and Node.js scripts to automate repetitive tasks, data processing, and workflows.",
      },
      {
        icon: "Smartphone",
        title: "Responsive UI/UX",
        description: "Designing and implementing intuitive, mobile-first user interfaces with React and Tailwind CSS.",
      },
      {
        icon: "Shield",
        title: "Secure API Development",
        description: "Architecting robust and secure RESTful APIs with proper authentication and data validation.",
      },
      { icon: "Server", title: "Database Architecture", description: "Designing and managing efficient NoSQL (MongoDB) database schemas for high-performance applications." },
      { icon: "Zap", title: "Performance Tuning", description: "Optimizing application speed and resource usage through code refactoring, and query optimization." },
    ],
  },

  projects: {
    heading: "My",
    headingHighlight: "Projects",

    github: {
      username: "vipin-jaiswal",
      // Add repository names here to show only selected projects. Leave empty to show all.
      selectedRepos: [
        "-E-commerce-website",
        "Adikar_AI",
        "birds_species_clasification",
        "AI-INVOICE-GENRETOR",
        "Multiple-Disease-Prediction",
        "trendtideconnect",
      ],
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
          { label: "Projects", href: "#projects" },
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
