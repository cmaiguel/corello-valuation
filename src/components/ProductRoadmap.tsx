import React from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const ROADMAP_PHASES = [
  {
    period: "2026 Q3",
    title: "Foundation",
    color: T.gold,
    items: [
      "Core agentic manufacturing intelligence engine",
      "Integration with QuickBooks and common manufacturing data sources",
      "Real-time shop floor alerting and recommendations",
    ],
  },
  {
    period: "2026 Q4",
    title: "Expansion",
    color: T.blue,
    items: [
      "Multi-facility orchestration and cross-site analytics",
      "Advanced predictive maintenance capabilities",
      "Custom AI model training for customer-specific workflows",
    ],
  },
  {
    period: "2027 H1",
    title: "Scale",
    color: "#A78BFA",
    items: [
      "Enterprise deployment architecture and security hardening",
      "API-first platform for partner integrations",
      "Industry-specific vertical solutions",
    ],
  },
  {
    period: "2027 H2",
    title: "Market Leadership",
    color: T.green,
    items: [
      "Global expansion to EMEA and APAC markets",
      "Advanced supply chain intelligence",
      "Autonomous factory operations R&D",
    ],
  },
];

export default function ProductRoadmap() {
  return (
    <section id="roadmap" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Product Strategy
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          12-month <span style={{ color: T.gold }}>product roadmap.</span>
        </h2>
        <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 620, fontWeight: 400 }}>
          The product evolution driving toward AI-native manufacturing intelligence at scale.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {ROADMAP_PHASES.map(phase => (
          <div key={phase.period} style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            padding: "28px 24px",
            borderTop: `3px solid ${phase.color}`,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8, fontFamily: T.fontMono }}>
              {phase.period}
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: phase.color, marginBottom: 16, fontFamily: SHARP, letterSpacing: "-0.02em" }}>
              {phase.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {phase.items.map(item => (
                <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <div style={{ width: 3, height: 3, borderRadius: "50%", background: phase.color, marginTop: 6, flexShrink: 0 }} />
                  <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.45 }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
