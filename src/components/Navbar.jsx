import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled ? "rgba(8,8,16,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 66,
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="name-ripple"
          style={{
            fontSize: 22,
            fontWeight: 800,
            background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Mamta
        </a>

        {/* Links */}
        <ul className="nav-ul" style={{ display: "flex", gap: 36, listStyle: "none" }}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={"#" + link.toLowerCase()}
                className={"nav-link" + (active === link.toLowerCase() ? " active" : "")}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}