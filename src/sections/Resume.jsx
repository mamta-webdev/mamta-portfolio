import { useInView } from "../hooks/useInView";
import { BG1, T1, T2 } from "../utils/constants";

export default function Resume() {
  const [ref, inView] = useInView();

  return (
    <section id="resume" ref={ref} style={{ padding: "100px 0", background: BG1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        <div
          style={{
            background: "linear-gradient(145deg, rgba(49,46,129,0.45), rgba(30,58,138,0.35))",
            border: "1.5px solid rgba(139,92,246,0.22)",
            borderRadius: 26,
            padding: "64px 32px",
            textAlign: "center",
            boxShadow: "0 8px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: "50%",
              background: "rgba(139,92,246,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              margin: "0 auto 22px",
            }}
          >
            📄
          </div>
          <h2 style={{ color: T1, fontSize: 34, fontWeight: 800, marginBottom: 12 }}>Resume</h2>
          <p style={{ color: T2, fontSize: 15, marginBottom: 30, maxWidth: 420, margin: "0 auto 32px" }}>
            Interested in my experience and qualifications? Download my resume to learn more.
          </p>
          {/*
            The PDF is served as a static asset from the /public folder
            (see public/mamta_new_resume.pdf) rather than embedded as base64.
          */}
          <a href="/mamta_new_resume.pdf" download="mamta_new_resume.pdf" className="btn-download">
            ↓ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}