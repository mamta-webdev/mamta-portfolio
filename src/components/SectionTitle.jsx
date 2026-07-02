import { T1 } from "../utils/constants";

/**
 * Reusable section heading used across About / Skills / Projects /
 * LearningJourney / Contact. Renders an icon + animated glow bubble + title.
 *
 * @param {string} icon - Emoji or symbol shown before the title.
 * @param {string} text - Section title text.
 * @param {boolean} monospaceIcon - Use monospace styling for the icon
 *                                  (needed for the "</>" Skills icon).
 */
export default function SectionTitle({ icon, text, monospaceIcon = false }) {
  return (
    <div className="section-heading" style={{ marginBottom: 52 }}>
      <span
        style={{
          color: "#a78bfa",
          fontSize: monospaceIcon ? 22 : 24,
          ...(monospaceIcon && { fontFamily: "monospace", fontWeight: 700 }),
        }}
      >
        {icon}
      </span>
      <h2 style={{ color: T1, fontSize: 34, fontWeight: 900 }}>{text}</h2>
    </div>
  );
}