import React from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const USE_OF_FUNDS = [
  { label: "Team",           pct: 40, amountK: 1000, color: T.gold,    detail: "Core team growth with emphasis on Customer Success — driving onboarding, retention, and upsell." },
  { label: "Product & Tech", pct: 35, amountK: 875,  color: "#A78BFA", detail: "AI infrastructure, product development, and technology stack to scale the platform." },
  { label: "GTM Expansion",  pct: 25, amountK: 625,  color: T.blue,    detail: "Sales, marketing, and channel partnerships to accelerate market penetration." },
];

export default function UseOfFundsMilestones() {
  return (
    <section id="use-of-funds" style={{ paddingTop: 80, paddingBottom: 80 }}>

      {/* Header */}
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Use of Funds
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          From Contracted Revenue to <span style={{ color: T.gold }}>Repeatable ARR.</span>
        </h2>
        <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 620, fontWeight: 400 }}>
          The $2.5M Seed converts contracted demand into repeatable ARR — building the team, product, and GTM motion for Series A.
        </p>
      </div>

      {/* Total raise label */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 20 }}>
        <div style={{ fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", fontFamily: SHARP }}>$2.5M</div>
        <div style={{ fontSize: 13, color: T.textMuted, fontFamily: T.fontMono }}>Seed Round</div>
      </div>

      {/* Stacked bar */}
      <div style={{ display: "flex", height: 10, borderRadius: 99, overflow: "hidden", marginBottom: 36, gap: 3 }}>
        {USE_OF_FUNDS.map(c => (
          <div key={c.label} style={{ flex: c.pct, background: c.color, opacity: 0.9 }} />
        ))}
      </div>

      {/* Allocation cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {USE_OF_FUNDS.map(c => (
          <div key={c.label} style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderTop: `3px solid ${c.color}`,
            borderRadius: 14,
            padding: "24px 22px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{
                fontSize: 10, fontWeight: 700, color: c.color,
                textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: T.fontMono,
              }}>
                {c.label}
              </div>
              <div style={{
                fontSize: 11, fontWeight: 700, color: c.color,
                fontFamily: T.fontMono,
                background: `${c.color}18`,
                border: `1px solid ${c.color}30`,
                borderRadius: 6, padding: "2px 8px",
              }}>
                {c.pct}%
              </div>
            </div>

            <div style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.04em", fontFamily: SHARP, marginBottom: 10 }}>
              ${(c.amountK / 1000).toFixed(2)}M
            </div>

            <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6 }}>
              {c.detail}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
