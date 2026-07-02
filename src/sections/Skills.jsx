import { useInView } from "../hooks/useInView";
import SectionTitle from "../components/SectionTitle";
import { SKILLS } from "../data/portfolioData";
import { BG2, T1 } from "../utils/constants";

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" ref={ref} style={{ padding: "100px 0", background: BG2 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        <SectionTitle icon="</>" text="Skills" monospaceIcon />

        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {SKILLS.map((s, i) => (
            <div
              key={s.title}
              className="hover-card"
              style={{
                background: s.bg,
                border: `1.5px solid ${s.border}`,
                borderRadius: 20,
                padding: "26px 28px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.55s ease ${i * 70}ms, transform 0.55s ease ${i * 70}ms, box-shadow 0.35s ease, border-color 0.35s ease`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 40px ${s.border}`;
                e.currentTarget.style.borderColor = s.accent + "80";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.25)";
                e.currentTarget.style.borderColor = s.border;
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: s.accent + "22",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    color: s.accent,
                    fontFamily: "monospace",
                    fontWeight: 800,
                  }}
                >
                  {s.icon}
                </div>
                <h3 style={{ color: T1, fontWeight: 700, fontSize: 15 }}>{s.title}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 13px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.07)",
                      color: "#d1d5db",
                      fontSize: 12,
                      fontWeight: 500,
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}