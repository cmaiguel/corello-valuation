import React from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const LADDER = [
  {
    key: "TAM",
    value: "$85B",
    label: "",
    description: "Global manufacturing operations software spend",
    accent: T.gold,
    highlight: true,
  },
  {
    key: "SAM",
    value: "$35B",
    label: "",
    description: "U.S. SMMs ready for AI adoption. 200K facilities, $185K avg ops software spend.",
    accent: T.gold,
    highlight: false,
  },
  {
    key: "SOM",
    value: "$6.2B",
    label: "",
    description: "75,000 SMMs with paper-based shop floors. Paper travelers cost $3M/year per facility.",
    accent: T.gold,
    highlight: false,
  },
  {
    key: "Beachhead",
    value: "$720M",
    label: "",
    description: "9.7K small manufacturers across New England, NY and NJ.",
    accent: T.gold,
    highlight: false,
  },
];

export default function Market() {
  return (
    <section id="market" style={{ paddingTop: 80, paddingBottom: 80 }}>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "start" }}>

        {/* Left: header + copy */}
        <div style={{ position: "sticky", top: 80 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 16, fontFamily: T.fontMono }}>
            Market Opportunity
          </div>
          <h2 style={{
            fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800,
            color: T.text, letterSpacing: "-0.05em", lineHeight: 1.0,
            margin: "0 0 20px", fontFamily: SHARP,
          }}>
            This is an <span style={{ color: T.gold }}>$85B</span> opportunity.
          </h2>
          <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: "0 0 40px", maxWidth: 480, fontWeight: 400 }}>
            Manufacturing operations software is large, fragmented, and still underserved by modern AI-native tools. Corello enters through the highest-friction wedge: shop-floor intelligence for small and mid-sized manufacturers.
          </p>

          {/* Insight card */}
          <div style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderLeft: `3px solid ${T.gold}`,
            borderRadius: 12,
            padding: "20px 22px",
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: T.fontMono, marginBottom: 8 }}>
              Why this matters
            </div>
            <p style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.65, margin: 0 }}>
              Corello does not need to win the entire manufacturing software market to justify the Seed valuation. The beachhead is narrow, specific, and commercially reachable: small and mid-sized manufacturers with fragmented shop-floor data.
            </p>
          </div>
        </div>

        {/* Right: market ladder */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {LADDER.map((tier, i) => (
            <div key={tier.key} style={{ position: "relative", display: "flex", gap: 0 }}>

              {/* Step line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 32, flexShrink: 0 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                  background: tier.highlight ? T.gold : "transparent",
                  border: `1.5px solid ${tier.highlight ? T.gold : "rgba(245,194,0,0.35)"}`,
                  marginTop: 26,
                }} />
                {i < LADDER.length - 1 && (
                  <div style={{ flex: 1, width: 1, background: "rgba(245,194,0,0.15)", marginTop: 4 }} />
                )}
              </div>

              {/* Card */}
              <div style={{
                flex: 1,
                background: tier.highlight
                  ? "linear-gradient(135deg, rgba(245,194,0,0.06) 0%, rgba(245,194,0,0.02) 100%)"
                  : "rgba(255,255,255,0.025)",
                border: `1px solid ${tier.highlight ? "rgba(245,194,0,0.22)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 14,
                padding: "20px 24px",
                marginBottom: i < LADDER.length - 1 ? 10 : 0,
                display: "grid",
                gridTemplateColumns: "56px 1fr auto",
                alignItems: "center",
                justifyItems: "start",
                gap: 20,
              }}>
                {/* Key badge */}
                <div style={{
                  fontSize: tier.key === "Beachhead" ? 9 : 11, fontWeight: 700,
                  color: tier.highlight ? T.gold : T.textSubtle,
                  textTransform: "uppercase", letterSpacing: "0.12em",
                  fontFamily: T.fontMono,
                }}>
                  {tier.key}
                </div>

                {/* Description */}
                <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.55, alignSelf: "center" }}>
                  {tier.description}
                </div>

                {/* Value */}
                <div style={{
                  fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 800,
                  color: tier.highlight ? T.gold : T.text,
                  letterSpacing: "-0.04em", fontFamily: SHARP,
                  textAlign: "right", whiteSpace: "nowrap",
                }}>
                  {tier.value}
                </div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 20, paddingLeft: 32, fontSize: 11, color: T.textSubtle, fontFamily: T.fontMono, lineHeight: 1.6 }}>
            Market sizing based on industry research and Corello internal estimates.
          </div>
        </div>
      </div>
    </section>
  );
}
