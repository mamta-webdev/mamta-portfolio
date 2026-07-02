import { useInView } from "../hooks/useInView";
import SectionTitle from "../components/SectionTitle";
import { JOURNEY } from "../data/portfolioData";
import { BG2, CBDR, T1, T2 } from "../utils/constants";

export default function LearningJourney() {
  const [ref, inView] = useInView();

  return (
    <section id="journey" ref={ref} style={{ padding: "100px 0", background: BG2 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        <SectionTitle icon="💡" text="Learning Journey" />

        <div className="journey-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
          {JOURNEY.map((j, i) => (
            <div
              key={j.title}
              className="hover-card"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1.5px solid ${j.highlight ? "rgba(139,92,246,0.4)" : CBDR}`,
                borderRadius: 20,
                padding: "24px 28px",
                display: "flex",
                gap: 18,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.55s ease ${i * 80}ms, transform 0.55s ease ${i * 80}ms, box-shadow 0.35s ease`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 32px rgba(139,92,246,0.2)";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.2)";
                e.currentTarget.style.borderColor = j.highlight ? "rgba(139,92,246,0.4)" : CBDR;
              }}
            >
              <div
                style={{
                  marginTop: 5,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#8b5cf6",
                  flexShrink: 0,
                  boxShadow: "0 0 10px rgba(139,92,246,0.6)",
                }}
              />
              <div>
                <h3 style={{ color: j.highlight ? "#c4b5fd" : T1, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                  {j.title}
                </h3>
                <p style={{ color: T2, fontSize: 13.5, lineHeight: 1.75 }}>{j.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}