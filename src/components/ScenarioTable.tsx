import React from "react";
import { C } from "../theme";

const scenarios = [
  {
    name: "Downside",
    preMoneyM: "$9.5M", postMoneyM: "$12.0M", ownershipPct: "20.8%", multiple: "13.6x",
    note: "Services-heavy or pilot contracts; limited ARR conversion proof",
    color: C.textMuted, bg: "transparent", border: C.border, dot: C.bgSurface3,
  },
  {
    name: "Base",
    badge: "Recommended",
    preMoneyM: "$12.0M", postMoneyM: "$14.5M", ownershipPct: "17.24%", multiple: "17.1x",
    note: "Credible contracted demand; disciplined Seed ownership; cleanest ask",
    color: C.blueLight, bg: C.blueBg, border: C.blueBorder, dot: C.blue,
  },
  {
    name: "Upside",
    preMoneyM: "$14.5M", postMoneyM: "$17.0M", ownershipPct: "14.7%", multiple: "20.7x",
    note: "Software-first contracts likely to renew; strategic lead investor engaged",
    color: C.greenLight, bg: C.greenBg, border: C.greenBorder, dot: C.green,
  },
];

const ScenarioTable: React.FC = () => (
  <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, overflow: "hidden" }}>
    <div style={{ padding: "20px 24px 16px", borderBottom: `1px solid ${C.border}` }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary, marginBottom: 4 }}>Scenario Analysis</h3>
      <p style={{ fontSize: 12, color: C.textMuted }}>$2.5M raise · $700K contracted revenue (not ARR) · Three valuation outcomes</p>
    </div>

    {/* Column headers */}
    <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", padding: "10px 24px", borderBottom: `1px solid ${C.border}` }}>
      {["Scenario", "Pre-Money", "Post-Money", "Investor %", "Rev. Multiple*"].map(h => (
        <div key={h} style={{ fontSize: 11, fontWeight: 600, color: C.textDisabled, textTransform: "uppercase", letterSpacing: "0.07em" }}>{h}</div>
      ))}
    </div>

    {scenarios.map((s, i) => (
      <div key={s.name} style={{
        display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
        padding: "16px 24px",
        background: s.bg,
        borderBottom: i < scenarios.length - 1 ? `1px solid ${C.border}` : "none",
        borderLeft: `3px solid ${s.dot}`,
        transition: "background 0.15s",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: s.color }}>{s.name}</span>
            {s.badge && (
              <span style={{ fontSize: 10, fontWeight: 600, background: C.blueBg, border: `1px solid ${C.blueBorder}`, color: C.blueLight, padding: "2px 8px", borderRadius: 99 }}>
                {s.badge}
              </span>
            )}
          </div>
          <div style={{ fontSize: 11, color: C.textMuted, lineHeight: 1.5 }}>{s.note}</div>
        </div>
        {[s.preMoneyM, s.postMoneyM, s.ownershipPct, s.multiple].map((v, j) => (
          <div key={j} style={{ fontSize: 14, fontWeight: j === 0 && s.badge ? 700 : 500, color: j === 0 && s.badge ? s.color : C.textPrimary, display: "flex", alignItems: "center" }}>
            {v}
          </div>
        ))}
      </div>
    ))}

    <div style={{ padding: "12px 24px", borderTop: `1px solid ${C.border}` }}>
      <p style={{ fontSize: 11, color: C.textDisabled }}>
        * Contracted revenue multiple is not an ARR multiple. $700K is signed contracted revenue, not recurring ARR. Used as a sanity check only.
      </p>
    </div>
  </div>
);

export default ScenarioTable;
