import React from "react";
import { C } from "../../theme";
import capTable from "../../data/financials/capTableTemplate.json";

interface SensitivityRow {
  preMoneyM: number;
  postMoneyM: number;
  investorPct: number;
  founderPct: number;
  revenueMultiple: number;
  recommended?: boolean;
  founderAnchor?: boolean;
}

export default function CapTableSection() {
  const sensitivity = capTable.sensitivityTable as SensitivityRow[];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Notice */}
      <div style={{ background: C.bgSurface, border: `1px solid ${C.amberBorder}`, borderRadius: C.rXl, padding: "14px 18px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.amberLight, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Data Sensitivity Notice</div>
        <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{capTable.dataNote}</p>
        <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.65, margin: "6px 0 0" }}>{capTable.existingInstruments.note}</p>
      </div>

      {/* Current round KPIs */}
      <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "20px 24px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.textSecondary, marginBottom: 16 }}>Current Round Parameters</div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[
            { label: "Pre-Money",         val: `$${capTable.currentRound.preMoneyM}M`,       accent: C.blueLight },
            { label: "Raise",             val: `$${capTable.currentRound.roundSize}M`,        accent: C.blueLight },
            { label: "Post-Money",        val: `$${capTable.currentRound.postMoneyM}M`,       accent: C.textPrimary },
            { label: "Investor %",        val: `${capTable.currentRound.investorOwnershipPct}%`, accent: C.blueLight },
            { label: "Instrument",        val: capTable.currentRound.instrument,              accent: C.textSecondary },
          ].map(({ label, val, accent }) => (
            <div key={label} style={{ flex: "1 1 140px" }}>
              <div style={{ fontSize: 11, color: C.textDisabled, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: accent }}>{val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sensitivity table */}
      <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "22px 24px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.textSecondary, marginBottom: 16 }}>
          Dilution Sensitivity — $2.5M Raise
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                {["Pre-Money", "Post-Money", "Investor %", "Founder ~%", "Rev. Multiple", ""].map((h, i) => (
                  <th key={i} style={{
                    padding: "8px 12px",
                    textAlign: i === 0 ? "left" : "right",
                    color: C.textMuted, fontWeight: 600, fontSize: 11,
                    textTransform: "uppercase", letterSpacing: "0.05em",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sensitivity.map((row) => (
                <tr key={row.preMoneyM} style={{
                  background: row.recommended ? C.blueBg : "transparent",
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  <td style={{ padding: "10px 12px", color: row.recommended ? C.blueLight : C.textPrimary, fontWeight: row.recommended ? 700 : 400 }}>${row.preMoneyM}M</td>
                  <td style={{ padding: "10px 12px", textAlign: "right", color: C.textSecondary }}>${row.postMoneyM}M</td>
                  <td style={{ padding: "10px 12px", textAlign: "right", color: row.recommended ? C.blueLight : C.textSecondary, fontWeight: row.recommended ? 700 : 400 }}>{row.investorPct.toFixed(2)}%</td>
                  <td style={{ padding: "10px 12px", textAlign: "right", color: C.textMuted }}>{row.founderPct.toFixed(2)}%</td>
                  <td style={{ padding: "10px 12px", textAlign: "right", color: C.textMuted }}>{row.revenueMultiple.toFixed(1)}x</td>
                  <td style={{ padding: "10px 12px", textAlign: "right" }}>
                    {row.recommended && <span style={{ background: C.blue, color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 99, padding: "2px 8px" }}>Recommended</span>}
                    {row.founderAnchor && !row.recommended && <span style={{ background: C.amberBg, color: C.amberLight, fontSize: 10, fontWeight: 600, border: `1px solid ${C.amberBorder}`, borderRadius: 99, padding: "2px 8px" }}>Founder Anchor</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
