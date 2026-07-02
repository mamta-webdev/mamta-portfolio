import { BG1, T1, T3 } from "../utils/constants";

export default function Footer() {
  return (
    <footer style={{ background: BG1, borderTop: "1px solid rgba(255,255,255,0.06)", padding: "26px 0" }}>
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ color: T3, fontSize: 14 }}>
          Built with <span style={{ color: "#f87171" }}>♥</span> by{" "}
          <span style={{ color: T1, fontWeight: 600 }}>Mamta</span>
        </p>
        <p style={{ color: "#374151", fontSize: 12 }}>© 2026 Mamta. All rights reserved.</p>
      </div>
    </footer>
  );
}