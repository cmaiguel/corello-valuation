import React from "react";
import { T } from "../theme";
import "./dataroom.css";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

export default function Legal() {
  return (
    <section id="legal" className="dr-section">
      <div style={{ display: "flex", justifyContent: "center", padding: "clamp(16px, 4vw, 24px) 0" }}>
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`,
          borderRadius: 16, padding: "clamp(32px, 6vw, 48px) clamp(32px, 6vw, 44px)",
          maxWidth: 440, width: "100%", textAlign: "center",
          boxShadow: "0 8px 48px rgba(0,0,0,0.3)",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: T.surface2, border: `1px solid ${T.border2}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 24px", fontSize: 24,
          }}>
            🔒
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: T.gold, marginBottom: 18, fontFamily: SHARP }}>Legal & Contracts</div>
          <div style={{
            fontSize: 9, fontWeight: 700, color: T.gold,
            textTransform: "uppercase", letterSpacing: "0.16em",
            fontFamily: "'Geist Mono', monospace", marginBottom: 10,
          }}>
            Secure Access
          </div>
          <div style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.65 }}>
            A unique access link will be provided by the founding team via <span style={{ color: T.text, fontWeight: 600 }}>Carta</span>.
          </div>
        </div>
      </div>
    </section>
  );
}
