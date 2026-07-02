import React from "react";
import { T } from "../theme";
import "./snapshot.css";
import "./dataroom.css";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 10, fontFamily: T.fontMono }}>
        {eyebrow}
      </div>
      <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 16px", fontFamily: SHARP }}>
        {title}
      </h2>
      {sub && <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 680 }}>{sub}</p>}
    </div>
  );
}

const GOLD   = "#F5C200";   // Corello brand yellow — contracted revenue
const SILVER = "#94A3B8";   // cool slate — short-term pipeline
const ROSE   = "#C4748A";   // muted rose — long-term pipeline

const SEGMENTS = [
  { flex: 700, color: GOLD,   label: "Contracted Revenue",  value: "$700K",  note: "Signed contracted revenue · Jan–Jun 2026",              tag: "CONTRACTED" },
  { flex: 300, color: SILVER, label: "Short-term Pipeline", value: "$300K",  note: "NDA/LOI in place · Expected to convert next 4 months",  tag: "SHORT-TERM" },
  { flex: 950, color: ROSE,   label: "Long-term Pipeline",  value: "$950K",  note: "Hot leads expected to close in the medium term",         tag: "LONG-TERM"  },
];

export default function Traction() {
  return (
    <section id="traction" className="cr-traction dr-section">
      <SectionHeader
        eyebrow="Commercial Traction"
        title="$1.95M total commercial visibility."
        sub="In just six months of 2026 operations, Corello grew from $0 to $700K in contracted revenue, with $1.25M of additional pipeline supporting the path to year-end ARR."
      />

      {/* Main card */}
      <div className="cr-traction-card" style={{ background: T.surface, border: `1px solid ${T.border}` }}>

        {/* Stacked pill bar */}
        <div className="cr-bar">
          {SEGMENTS.map((s, i) => (
            <div key={i} style={{ flex: s.flex, background: s.color, opacity: i === 0 ? 1 : i === 1 ? 0.9 : 0.75 }} />
          ))}
        </div>

        {/* Legend */}
        <div className="cr-legend" style={{ marginTop: 24 }}>
          {SEGMENTS.map((s) => (
            <div key={s.label} style={{
              background: T.surface2,
              border: `1px solid rgba(255,255,255,0.05)`,
              borderRadius: 12,
              padding: "16px 18px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: s.color, flexShrink: 0 }} />
                <span style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, fontFamily: T.fontMono, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  {s.tag}
                </span>
              </div>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: s.color, letterSpacing: "-0.04em", lineHeight: 1, fontFamily: SHARP }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginTop: 4, fontFamily: SHARP }}>{s.label}</div>
              <div style={{ fontSize: 11, color: T.textSubtle, marginTop: 3, lineHeight: 1.4 }}>{s.note}</div>
            </div>
          ))}
        </div>

        {/* Total row */}
        <div style={{
          borderTop: `1px solid ${T.border}`, paddingTop: 20, marginTop: 20,
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <div style={{ fontSize: 13, color: T.textMuted }}>8-Month Commercial Horizon</div>
          <div style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, color: T.gold, letterSpacing: "-0.04em", fontFamily: SHARP }}>$1.95M</div>
        </div>
      </div>

      {/* ARR path card — smaller, secondary */}
      <div style={{
        background: "linear-gradient(135deg, rgba(28,34,38,1) 0%, rgba(22,26,29,1) 100%)",
        border: `1px solid ${T.goldBorder}`,
        borderRadius: 14,
        padding: "14px 20px",
        marginTop: 12,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap",
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.gold, marginBottom: 4, fontFamily: SHARP }}>
            Path to ~$1.2M target year-end ARR
          </div>
          <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.55, maxWidth: 480 }}>
            Pipeline conversion drives ARR. The $700K contracted base is the foundation; short-term and long-term pipeline conversion determines the year-end result.
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, color: T.gold, letterSpacing: "-0.04em", fontFamily: SHARP }}>$1.2M</div>
          <div style={{ fontSize: 10, color: T.textSubtle, marginTop: 3 }}>2026 ARR</div>
        </div>
      </div>

    </section>
  );
}
