// ─── NAVIGATION ─────────────────────────────────────────────
export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

// ─── SKILLS ─────────────────────────────────────────────────
export const SKILLS = [
  {
    icon: "</>",
    title: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"],
    accent: "#a78bfa",
    border: "rgba(139,92,246,0.35)",
    bg: "rgba(139,92,246,0.07)",
  },
  {
    icon: "✦",
    title: "Animation & UI Libraries",
    tags: ["GSAP", "Framer Motion", "LocomotiveJS", "SwiperJS"],
    accent: "#60a5fa",
    border: "rgba(96,165,250,0.35)",
    bg: "rgba(96,165,250,0.07)",
  },
  {
    icon: "◈",
    title: "3D & Creative Dev",
    tags: ["Three.js", "WebGL"],
    accent: "#22d3ee",
    border: "rgba(34,211,238,0.35)",
    bg: "rgba(34,211,238,0.07)",
  },
  {
    icon: "⬡",
    title: "Backend & Database",
    tags: ["Node.js", "Express.js", "MongoDB", "SQL"],
    accent: "#34d399",
    border: "rgba(52,211,153,0.35)",
    bg: "rgba(52,211,153,0.07)",
  },
  {
    icon: "⚙",
    title: "Tools",
    tags: ["Git", "GitHub", "VS Code", "Postman"],
    accent: "#fb923c",
    border: "rgba(251,146,60,0.35)",
    bg: "rgba(251,146,60,0.07)",
  },
];

// ─── PROJECTS ───────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "GenAI Full Stack App",
    featured: true,
    desc: "A full-stack AI-powered web application that generates interview questions and detailed interview reports from uploaded resumes using Generative AI. It includes secure JWT authentication, PDF parsing, and a responsive React interface.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Groq API", "Render"],
    demo: "https://ai-powered-interview-report-generator-1.onrender.com",
    code: "https://github.com/mamta-webdev/AI-Powered-Interview-Report-Generator",
  },
  {
    title: "Doc Studio 3D Website",
    desc: "An immersive 3D web experience using ReactJS and Three.js with scroll-based GSAP animations.",
    tags: ["Three.js", "React", "GSAP"],
    demo: "https://dogstudio-threejs-z42p.onrender.com",
    code: "https://github.com/mamta-webdev/DogStudio-threeJS",
  },
  {
    title: "Kanban Board",
    desc: "A task management app with drag-and-drop functionality, status updates, and clean interactive UI.",
    tags: ["React", "CSS", "LocalStorage"],
    demo: "https://kanban-board-uwvo.onrender.com",
    code: "https://github.com/mamta-webdev/Kanban-board",
  },
  {
    title: "Banking System",
    desc: "A full-stack banking application simulating real-world features including authentication, transactions, and balance tracking.",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "https://banking-system-nk8f.onrender.com",
    code: "https://github.com/mamta-webdev/Banking-system",
  },
];

// ─── LEARNING JOURNEY ───────────────────────────────────────
export const JOURNEY = [
  {
    title: "🚀 Web Development Foundation",
    highlight: false,
    desc: "Started with HTML, CSS, and JavaScript, building responsive websites while developing a strong understanding of modern web fundamentals.",
  },
  {
    title: "⚛️ Frontend Engineering",
    highlight: true,
    desc: "Built dynamic applications with React.js, focusing on reusable components, state management, routing, and responsive UI development.",
  },
  {
    title: "🔧 Full Stack Development",
    highlight: false,
    desc: "Expanded into Node.js, Express, MongoDB, JWT authentication, REST APIs, and deployment on Render while building complete MERN applications.",
  },
  {
    title: "🤖 AI & Modern Web",
    highlight: true,
    desc: "Integrated Generative AI APIs, PDF processing, authentication, and real-world workflows to build intelligent, production-ready web applications.",
  },
];

// ─── SOCIAL / CONTACT LINKS ─────────────────────────────────
export const SOCIAL_LINKS = {
  email: "maahiarya625@gmail.com",
  github: "https://github.com/mamta-webdev",
  githubLabel: "github.com/mamta-webdev",
  formEndpoint: "https://formsubmit.co/ajax/62737e4396fe10a905f060b4ac288807",
};
