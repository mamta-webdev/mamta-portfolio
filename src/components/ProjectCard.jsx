import Tag from "./Tag";
import { CARD, CBDR, T1, T2 } from "../utils/constants";

/**
 * Renders a single project card.
 * Two visual variants:
 *  - `featured`: the large highlighted card shown at the top of the Projects section.
 *  - default: the standard grid card.
 *
 * @param {object} project - Project data (title, desc, tags, demo, code).
 * @param {boolean} featured - Whether to render the featured variant.
 * @param {number} index - Position within the (non-featured) grid, used to
 *                          stagger the scroll-reveal animation.
 * @param {boolean} inView - Whether the parent section has scrolled into view.
 */
export default function ProjectCard({ project, featured = false, index = 0, inView }) {
  if (featured) {
    return (
      <div
        className="hover-card"
        style={{
          marginBottom: 22,
          background: "linear-gradient(145deg, rgba(109,40,217,0.18), rgba(30,64,175,0.14))",
          border: "1.5px solid rgba(139,92,246,0.3)",
          borderRadius: 22,
          padding: "36px 40px",
          position: "relative",
          overflow: "hidden",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition:
            "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s, box-shadow 0.35s ease, border-color 0.35s ease",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 20px 60px rgba(109,40,217,0.3)";
          e.currentTarget.style.borderColor = "rgba(139,92,246,0.65)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
          e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)";
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 280,
            height: 280,
            background: "rgba(139,92,246,0.07)",
            borderRadius: "50%",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 14,
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <h3 style={{ color: "#c4b5fd", fontSize: 26, fontWeight: 800 }}>{project.title}</h3>
          <span
            style={{
              padding: "5px 16px",
              borderRadius: 20,
              background: "rgba(139,92,246,0.7)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            ⭐ Featured
          </span>
        </div>
        <p style={{ color: "#d1d5db", fontSize: 14, marginBottom: 22, maxWidth: 720, lineHeight: 1.75 }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-sm-primary">
            ↗ Live Demo
          </a>
          <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-sm-outline">
            ⑂ GitHub
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="hover-card"
      style={{
        background: CARD,
        border: `1px solid ${CBDR}`,
        borderRadius: 20,
        padding: "26px 28px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.55s ease ${(index + 2) * 80}ms,
        transform 0.35s ease,
        box-shadow 0.35s ease,
        border-color 0.35s ease`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 18px 40px rgba(0,0,0,0.45), 0 0 18px rgba(139,92,246,0.18)";
        e.currentTarget.style.borderColor = "#8b5cf6";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.25)";
        e.currentTarget.style.borderColor = CBDR;
      }}
    >
      <h3 style={{ color: T1, fontWeight: 700, fontSize: 17, marginBottom: 10, transition: "color 0.3s" }}>
        {project.title}
      </h3>
      <p style={{ color: T2, fontSize: 13, lineHeight: 1.75, marginBottom: 18 }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
        {project.tags.map((t) => (
          <Tag key={t} label={t} small />
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-sm-primary">
          ↗ Demo
        </a>
        <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-sm-outline">
          ⑂ Code
        </a>
      </div>
    </div>
  );
}