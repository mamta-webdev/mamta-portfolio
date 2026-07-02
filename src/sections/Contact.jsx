import { useState } from "react";
import { useInView } from "../hooks/useInView";
import SectionTitle from "../components/SectionTitle";
import { SOCIAL_LINKS } from "../data/portfolioData";
import { BG2, CARD, CBDR, T1, T2, T3 } from "../utils/constants";

const inputStyle = {
  width: "100%",
  background: "rgba(0,0,0,0.35)",
  border: "1.5px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  padding: "12px 16px",
  color: "#e5e7eb",
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
};

const errStyle = { color: "#f87171", fontSize: 12, marginTop: 5, display: "block" };

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch(SOCIAL_LINKS.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "100px 0", background: BG2 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        <SectionTitle icon="✉" text="Get In Touch" />

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 52,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          {/* LEFT */}
          <div>
            <p style={{ color: T2, lineHeight: 1.85, marginBottom: 34, fontSize: 15 }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
              vision.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="contact-card">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 11,
                    background: "rgba(139,92,246,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a78bfa",
                    fontWeight: 700,
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  ✉
                </div>
                <div>
                  <p style={{ color: T3, fontSize: 11, marginBottom: 2 }}>Email</p>
                  <p style={{ color: T1, fontWeight: 600, fontSize: 14 }}>{SOCIAL_LINKS.email}</p>
                </div>
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 11,
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg height="22" width="22" viewBox="0 0 16 16" fill="#e5e7eb" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                    -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                    .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                    -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
                    .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
                    .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
                    0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </div>
                <div>
                  <p style={{ color: T3, fontSize: 11, marginBottom: 2 }}>GitHub</p>
                  <p style={{ color: T1, fontWeight: 600, fontSize: 14 }}>{SOCIAL_LINKS.githubLabel}</p>
                </div>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${CBDR}`,
              borderRadius: 22,
              padding: "30px 32px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Name */}
              <div>
                <label style={{ display: "block", color: "#d1d5db", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="contact-input"
                  style={{ ...inputStyle, borderColor: errors.name ? "rgba(248,113,113,0.6)" : "rgba(255,255,255,0.1)" }}
                />
                {errors.name && <span style={errStyle}>{errors.name}</span>}
              </div>
              {/* Email */}
              <div>
                <label style={{ display: "block", color: "#d1d5db", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="contact-input"
                  style={{ ...inputStyle, borderColor: errors.email ? "rgba(248,113,113,0.6)" : "rgba(255,255,255,0.1)" }}
                />
                {errors.email && <span style={errStyle}>{errors.email}</span>}
              </div>
              {/* Message */}
              <div>
                <label style={{ display: "block", color: "#d1d5db", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  className="contact-input"
                  style={{
                    ...inputStyle,
                    resize: "none",
                    borderColor: errors.message ? "rgba(248,113,113,0.6)" : "rgba(255,255,255,0.1)",
                  }}
                />
                {errors.message && <span style={errStyle}>{errors.message}</span>}
              </div>
              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className={"btn-send" + (status === "success" ? " success" : status === "error" ? " error" : "")}
              >
                {status === "sending" && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 16,
                      height: 16,
                      border: "2px solid rgba(255,255,255,0.4)",
                      borderTopColor: "#fff",
                      borderRadius: "50%",
                      animation: "spin 0.7s linear infinite",
                    }}
                  />
                )}
                {status === "idle" && "✈ Send Message"}
                {status === "sending" && "Sending…"}
                {status === "success" && "✓ Message Sent!"}
                {status === "error" && "✗ Failed. Try again."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}