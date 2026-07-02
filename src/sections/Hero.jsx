import { useInView } from "../hooks/useInView";
import profilePhoto from "../assets/images/profile-photo.jpg";
import { BG1 } from "../utils/constants";

export default function Hero() {
  const [ref, inView] = useInView(0.05);

  return (
    <section
      id="home"
      ref={ref}
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: BG1, position: "relative", overflow: "hidden" }}
    >
      {/* ambient blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "15%",
            width: 480,
            height: 480,
            background: "rgba(139,92,246,0.07)",
            borderRadius: "50%",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "55%",
            right: "10%",
            width: 380,
            height: 380,
            background: "rgba(59,130,246,0.07)",
            borderRadius: "50%",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div
        className="hero-grid"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 28px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 56,
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: 1,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Hello, I'm
          </p>

          {/* BIG NAME with ripple */}
          <h1
            className="name-ripple"
            style={{
              fontSize: "clamp(58px, 9vw, 88px)",
              fontWeight: 900,
              lineHeight: 1.0,
              marginBottom: 18,
              background: "linear-gradient(135deg, #c4b5fd 0%, #818cf8 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mamta
          </h1>

          <p style={{ color: "#d1d5db", fontSize: 17, fontWeight: 500, marginBottom: 14, letterSpacing: "0.01em" }}>
            Frontend Developer &nbsp;|&nbsp; React Developer
          </p>
          <p style={{ color: "#9ca3af", fontSize: 15, marginBottom: 40, maxWidth: 440, lineHeight: 1.8 }}>
            I build modern, responsive, and user-friendly web experiences.
          </p>

          <div className="hero-btns" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me ✉
            </a>
          </div>
        </div>

        {/* RIGHT — avatar */}
        <div
          style={{
            flexShrink: 0,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)",
              filter: "blur(24px)",
              pointerEvents: "none",
            }}
          />
          <div
            className="profile-img-wrap"
            style={{
              width: 290,
              height: 290,
              borderRadius: "50%",
              border: "2.5px solid rgba(139,92,246,0.45)",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 8px 40px rgba(139,92,246,0.25)",
            }}
          >
            <img
              src={profilePhoto}
              alt="Mamta"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}