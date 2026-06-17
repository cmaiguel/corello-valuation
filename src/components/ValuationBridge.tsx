import React from "react";
import { C } from "../theme";

const methods = [
  { method: "Seed Ownership Method",        range: "$10M – $14.2M",             weight: "35%", support: "Strong",      color: C.blue,    bar: 75, notes: "20% ownership → $10M pre · 17.2% → $12M pre · 15% → $14.2M pre" },
  { method: "Contracted Revenue Multiple",  range: "$10M – $13M",               weight: "30%", support: "Moderate",   color: C.violet,  bar: 60, notes: "$12M pre = 17.1x contracted revenue. Sanity check only — not an ARR multiple." },
  { method: "Benchmark Round-Size Method",  range: "$10M – $13M",               weight: "20%", support: "Directional",color: C.green,   bar: 50, notes: "Corello's $2.5M raise is below most industrial AI Seed comps ($5M–$17M)." },
  { method: "ARR-Conversion Potential",     range: "Conditional $14M – $15M",   weight: "15%", support: "Conditional",color: C.amber,   bar: 30, notes: "Upside at $14M–$15M only if contracted revenue converts to recurring software ARR." },
];

const ValuationBridge: React.FC = () => (
  <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "24px 28px" }}>
    <div style={{ marginBottom: 20 }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary, marginBottom: 4 }}>Valuation Methodology</h3>
      <p style={{ fontSize: 12, color: C.textMuted }}>Four methods, blended to a single recommendation</p>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 24 }}>
      {methods.map(m => (
        <div key={m.method}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 3, height: 32, background: m.color, borderRadius: 2, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.textPrimary }}>{m.method}</div>
                <div style={{ fontSize: 12, color: m.color, fontWeight: 500 }}>{m.range}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ fontSize: 11, background: C.bgSurface2, border: `1px solid ${C.border}`, borderRadius: 6, padding: "2px 10px", color: C.textSecondary }}>Weight: {m.weight}</span>
              <span style={{ fontSize: 11, background: m.color + "22", border: `1px solid ${m.color}44`, borderRadius: 6, padding: "2px 10px", color: m.color, fontWeight: 600 }}>{m.support}</span>
            </div>
          </div>
          <div style={{ background: C.bgSurface2, borderRadius: 4, height: 4, marginBottom: 6, overflow: "hidden" }}>
            <div style={{ background: m.color, height: "100%", width: `${m.bar}%`, borderRadius: 4, transition: "width 0.6s ease" }} />
          </div>
          <div style={{ fontSize: 12, color: C.textMuted, paddingLeft: 13 }}>{m.notes}</div>
        </div>
      ))}
    </div>

    {/* Blended conclusion */}
    <div style={{ background: C.blueBg, border: `1px solid ${C.blueBorder}`, borderRadius: C.rLg, padding: "16px 20px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.blueLight, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>
        Blended Recommendation
      </div>
      <div style={{ fontSize: 14, color: C.textPrimary, lineHeight: 1.6 }}>
        $2.5M raise at <strong style={{ color: C.blueLight }}>$12M pre-money</strong> → $14.5M post-money → <strong style={{ color: C.blueLight }}>17.24% investor ownership</strong>.
        Disciplined Seed valuation supported by contracted demand and industrial AI market context. Not priced as mature SaaS ARR.
      </div>
    </div>
  </div>
);

export default ValuationBridge;
