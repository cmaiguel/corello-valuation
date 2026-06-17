import React from "react";
import { C } from "../../theme";
import useOfFunds from "../../data/financials/useOfFundsTemplate.json";

// This component is kept for backwards-compatibility but is no longer rendered by App.tsx.
// It reads from the new useOfFundsTemplate.json schema (label/pct/amountM).

const FALLBACK_COLORS = [C.blue, C.green, C.violet, C.amber, C.textMuted];

export default function UseOfFunds() {
  const totalM = useOfFunds.totalRaiseM;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Allocation bars */}
      <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "22px 24px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.textSecondary, marginBottom: 18 }}>
          ${totalM.toFixed(1)}M Allocation Breakdown
        </div>

        {/* Stacked bar */}
        <div style={{ display: "flex", height: 10, borderRadius: 99, overflow: "hidden", marginBottom: 20, gap: 2 }}>
          {useOfFunds.categories.map((cat, i) => (
            <div key={cat.label} style={{ flex: cat.pct, background: cat.color || FALLBACK_COLORS[i % FALLBACK_COLORS.length], borderRadius: 2 }} />
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {useOfFunds.categories.map((cat, i) => {
            const color = cat.color || FALLBACK_COLORS[i % FALLBACK_COLORS.length];
            return (
              <div key={cat.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: color, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: 13, color: C.textPrimary, fontWeight: 500 }}>{cat.label}</span>
                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ fontSize: 12, color, fontWeight: 600 }}>{cat.pct}%</span>
                      <span style={{ fontSize: 12, color: C.textMuted }}>${cat.amountM.toFixed(3)}M</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: C.textDisabled, marginTop: 1 }}>{cat.detail}</div>
                  {cat.headcount && <div style={{ fontSize: 11, color: C.textMuted, marginTop: 1 }}>↳ {cat.headcount}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Runway */}
      <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "20px 24px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.textSecondary, marginBottom: 12 }}>Runway Estimate</div>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ flex: 1, background: C.bgSurface2, borderRadius: C.rLg, padding: "14px 18px", textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: C.textMuted, letterSpacing: "-0.03em" }}>
              {useOfFunds.runway.monthsLow}–{useOfFunds.runway.monthsHigh} mo
            </div>
            <div style={{ fontSize: 12, color: C.textDisabled, marginTop: 2 }}>Months runway</div>
          </div>
          <div style={{ flex: 2, fontSize: 12, color: C.textMuted, lineHeight: 1.65 }}>
            {useOfFunds.runway.note}
          </div>
        </div>
      </div>
    </div>
  );
}
