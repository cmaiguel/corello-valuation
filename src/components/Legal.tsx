import React from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

export default function Legal() {
  return (
    <section id="legal" style={{ paddingTop: 48, paddingBottom: 80 }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`,
          borderRadius: 16, padding: "48px 44px",
          maxWidth: 400, width: "100%", textAlign: "center",
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
          <div style={{ fontSize: 18, fontWeight: 700, color: T.gold, marginBottom: 10, fontFamily: SHARP }}>Legal & Contracts</div>
          <div style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.65, marginBottom: 0 }}>
            For contracts review, patents, and legal documents, please contact the founding team.
          </div>
        </div>
      </div>
    </section>
  );
}
