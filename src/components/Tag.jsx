/**
 * Small pill-shaped label used for skill/project tech tags.
 */
export default function Tag({ label, small }) {
    return (
      <span
        style={{
          padding: small ? "4px 10px" : "5px 13px",
          borderRadius: 8,
          fontSize: small ? 11 : 12,
          fontWeight: 500,
          background: "rgba(255,255,255,0.07)",
          color: "#d1d5db",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {label}
      </span>
    );
  }