import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import LearningJourney from "./sections/LearningJourney";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { NAV_LINKS } from "./data/portfolioData";
import { BG1, T1 } from "./utils/constants";

export default function App() {
  const [active, setActive] = useState("home");

  // Scroll-spy: highlights the active nav link based on which section is in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase())).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.35 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: BG1, color: T1 }}>
      <Navbar active={active} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LearningJourney />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}