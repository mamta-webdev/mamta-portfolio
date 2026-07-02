import { useInView } from "../hooks/useInView";
import SectionTitle from "../components/SectionTitle";
import profilePhoto from "../assets/images/profile-photo.jpg";
import { BG1, T1, T2 } from "../utils/constants";

const ABOUT_INFO = [
  ["🎓", "BCA — IITM Delhi"],
  ["📍", "New Delhi, India"],
  ["💼", "Open to Work"],
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} style={{ padding: "100px 0", background: BG1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        <SectionTitle icon="👤" text="About Me" />

        <div
          className="about-grid"
          style={{
            display: "flex",
            gap: 52,
            alignItems: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s",
          }}
        >
          {/* Photo */}
          <div
            className="profile-img-wrap"
            style={{
              width: 270,
              height: 316,
              flexShrink: 0,
              borderRadius: 22,
              border: "2px solid rgba(139,92,246,0.25)",
              overflow: "hidden",
              boxShadow: "0 8px 36px rgba(0,0,0,0.45)",
            }}
          >
            <img
              src={profilePhoto}
              alt="Mamta"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Card */}
          <div
            style={{
              flex: 1,
              background: "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02))",
              border: "1.5px solid rgba(255,255,255,0.09)",
              borderRadius: 22,
              padding: "36px 40px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <p style={{ color: "#d1d5db", lineHeight: 1.9, fontSize: 15.5 }}>
              I'm a <span style={{ color: "#a78bfa", fontWeight: 700 }}>Final Year BCA student</span> and{" "}
              <span style={{ color: "#60a5fa", fontWeight: 700 }}>Full-Stack MERN Developer</span> passionate about
              building <strong style={{ color: T1 }}>modern, scalable, and AI-powered web applications</strong>. I
              specialize in developing responsive user interfaces with{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>React.js</span> and robust backend services using{" "}
              <span style={{ color: "#60a5fa", fontWeight: 600 }}>Node.js</span>,{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>Express.js</span>, and{" "}
              <span style={{ color: "#60a5fa", fontWeight: 600 }}>MongoDB</span>. I recently built and deployed an{" "}
              <strong style={{ color: T1 }}>AI-Powered Interview Report Generator</strong> featuring JWT
              authentication, PDF parsing, and Generative AI integration. I'm always eager to learn new technologies
              and create impactful solutions that solve real-world problems.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 32, flexWrap: "wrap" }}>
              {ABOUT_INFO.map(([icon, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <span style={{ color: T2, fontSize: 13, fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}