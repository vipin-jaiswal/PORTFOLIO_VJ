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
    title: "Full Stack Developer",
    subtitle: "Full Stack Developer & UI/UX Designer",
    email: "vipin78040@gmail.com",
    location: "Near Rungta College of Engineering and Technology, Bhilai (C.G.)",
    statusText: "Available for Projects",
    profileImageAlt: "Vipin Jaiswal",
    logoAlt: "VJ Logo",
    resumePath: resumeFile,
  },

  nav: {
    links: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    hireButtonText: "Hire Me",
  },

  home: {
    greeting: "Hello There, Welcome to my site",
    description:
      "I build interactive, high-performance websites and applications with scalable architecture and modern UI systems.",
    resumeButtonText: "See Resume",
    hireButtonText: "Hire Me",
  },

  about: {
    heading: "About",
    headingHighlight: "Me",
    intro:
      "I am Vipin Jaiswal, a passionate Full Stack Developer and AI Researcher dedicated to building scalable, intelligent, and high-performance digital products.",
    details:
      "I specialize in combining modern frontend technologies with powerful backend architectures and machine learning workflows. From designing responsive interfaces to developing secure APIs and deploying AI-powered applications.",
    skillsHeading: "Core",
    skillsHeadingHighlight: "Skills",
    skillCards: [
      {
        icon: "Code2",
        title: "Frontend Development",
        desc: "Building modern, scalable and responsive user interfaces.",
        tools: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
      },
      {
        icon: "Database",
        title: "Backend Systems",
        desc: "Designing secure and high-performance server architectures.",
        tools: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      },
      {
        icon: "BrainCircuit",
        title: "AI Engineering",
        desc: "Developing intelligent automation and AI-driven solutions.",
        tools: ["RAG Systems", "Vector Databases", "NLP", "TensorFlow"],
      },
      {
        icon: "Globe",
        title: "Full Stack Architecture",
        desc: "Creating scalable and production-ready systems.",
        tools: [
          "System Design",
          "Performance Optimization",
          "Deployment",
          "Clean Code",
        ],
      },
    ],
  },

  services: {
    heading: "My",
    headingHighlight: "Services",
    description: "Explore what I can build for you ->",
    items: [
      { icon: "Brain", title: "AI Web Apps" },
      { icon: "Cpu", title: "Machine Learning" },
      { icon: "Code2", title: "Frontend Development" },
      { icon: "Database", title: "Backend Development" },
      { icon: "Globe", title: "Full Stack Apps" },
      { icon: "Palette", title: "UI / UX Design" },
      { icon: "LayoutDashboard", title: "Admin Dashboards" },
      { icon: "Smartphone", title: "Responsive Design" },
      { icon: "Cloud", title: "Cloud Deployment" },
      { icon: "Rocket", title: "Performance Optimization" },
      { icon: "ShieldCheck", title: "Web Security" },
      { icon: "GitBranch", title: "Version Control" },
    ],
  },

  projects: {
    heading: "MY",
    headingHighlight: "PROJECTS",
    github: {
      username: "vipin-jaiswal",
      selectedRepos: ["AI-INVOICE-GENRETOR", "Multiple-Disease-Prediction"],
    },
    loadingText: "Loading projects...",
    errorText: "Failed to load projects. Please try again later.",
    emptyDescription: "No description available.",
    ctaText: "View on GitHub ->",
  },

  contact: {
    heading: "Let's Connect",
    subText: "Drop your message below.",
    placeholders: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
    },
    buttonText: "Send Message",
  },

  footer: {
    brandDescription:
      "Full Stack Developer & AI Engineer building scalable web and intelligent systems.",
    sections: {
      navigation: {
        title: "Navigation",
        links: [
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ],
      },
      services: {
        title: "Services",
        items: [
          "Full Stack Development",
          "AI / RAG Systems",
          "UI/UX Design",
          "Technical Consulting",
        ],
      },
      resources: {
        title: "Resources",
        items: ["Case Studies", "Open Source", "Blog (Coming Soon)", "Privacy Policy"],
      },
    },
    legalLinks: ["Privacy", "Terms", "Code of Conduct"],
  },

  social: {
    github: "",
    linkedin: "",
    twitter: "",
    mail: "mailto:vipin78040@gmail.com",
  },
};
