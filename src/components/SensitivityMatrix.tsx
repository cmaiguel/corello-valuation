import React, { useState } from "react";
import { C } from "../theme";

const preMoneys = [10, 12, 14, 16];
const raiseSizes = [2.0, 2.5, 3.0];
const revenues = [0.5, 0.7, 1.0];

const ownershipPct = (raise: number, pre: number) => ((raise / (pre + raise)) * 100).toFixed(1) + "%";
const revMultiple = (rev: number, pre: number) => (pre / rev).toFixed(1) + "x";

const ownershipBg = (raise: number, pre: number): string => {
  const v = (raise / (pre + raise)) * 100;
  if (v > 22) return C.roseBg;
  if (v > 18) return C.amberBg;
  if (v >= 15) return C.blueBg;
  return "transparent";
};
const ownershipColor = (raise: number, pre: number): string => {
  const v = (raise / (pre + raise)) * 100;
  if (v > 22) return C.rose;
  if (v > 18) return C.amberLight;
  if (v >= 15) return C.blueLight;
  return C.textMuted;
};

const th = (label: string, highlight = false) => ({
  padding: "10px 14px", fontSize: 11, fontWeight: 700 as const,
  color: highlight ? C.blueLight : C.textDisabled,
  textTransform: "uppercase" as const, letterSpacing: "0.07em",
  background: highlight ? C.blueBg : C.bgSurface2,
  borderBottom: `1px solid ${C.border}`,
  whiteSpace: "nowrap" as const,
});

const SensitivityMatrix: React.FC = () => {
  const [mode, setMode] = useState<"ownership" | "multiple">("ownership");

  return (
    <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, overflow: "hidden" }}>
      <div style={{ padding: "20px 24px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary, marginBottom: 4 }}>Sensitivity Matrix</h3>
          <p style={{ fontSize: 12, color: C.textMuted }}>How the key metric changes across raise sizes and valuations</p>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[{ k: "ownership", l: "Investor Ownership %" }, { k: "multiple", l: "Revenue Multiple" }].map(({ k, l }) => (
            <button key={k} onClick={() => setMode(k as any)} style={{
              padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600,
              background: mode === k ? C.blueBg : C.bgSurface2,
              color: mode === k ? C.blueLight : C.textMuted,
              border: `1px solid ${mode === k ? C.blueBorder : C.border}`,
              transition: "all 0.15s",
            }}>{l}</button>
          ))}
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        {mode === "ownership" && (
          <>
            <div style={{ padding: "10px 24px 6px", fontSize: 12, color: C.textMuted, borderBottom: `1px solid ${C.border}` }}>
              <strong style={{ color: C.textSecondary }}>Investor ownership %</strong> for raise size (rows) × pre-money valuation (columns)
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={th("Raise / Pre-Money →")}>Raise ↓ / Pre-Money →</th>
                  {preMoneys.map(p => <th key={p} style={th(`$${p}M`, p === 12)}>${p}M{p === 12 ? " ✓" : ""}</th>)}
                </tr>
              </thead>
              <tbody>
                {raiseSizes.map((r, ri) => (
                  <tr key={r} style={{ borderBottom: ri < raiseSizes.length - 1 ? `1px solid ${C.border}` : "none" }}>
                    <td style={{ padding: "12px 14px", fontSize: 13, fontWeight: r === 2.5 ? 700 : 500, color: r === 2.5 ? C.blueLight : C.textSecondary, background: r === 2.5 ? C.blueBg : "transparent" }}>
                      ${r}M{r === 2.5 ? " ✓" : ""}
                    </td>
                    {preMoneys.map(p => (
                      <td key={p} style={{ padding: "12px 14px", textAlign: "center", background: r === 2.5 && p === 12 ? C.blueBg : ownershipBg(r, p), fontWeight: r === 2.5 && p === 12 ? 700 : 400, color: r === 2.5 && p === 12 ? C.blueLight : ownershipColor(r, p), fontSize: 13 }}>
                        {ownershipPct(r, p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: "12px 24px", display: "flex", gap: 12, flexWrap: "wrap", borderTop: `1px solid ${C.border}` }}>
              {[
                { bg: C.roseBg,  color: C.rose,      label: ">22% — Investor-heavy" },
                { bg: C.amberBg, color: C.amberLight, label: "18–22% — Investor-friendly" },
                { bg: C.blueBg,  color: C.blueLight,  label: "15–18% — Fair Seed range" },
                { bg: "transparent", color: C.textMuted, label: "<15% — Founder-friendly" },
              ].map(x => (
                <div key={x.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.textMuted }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: x.bg, border: `1px solid ${x.color}44` }} />
                  <span style={{ color: x.color, fontWeight: 600 }}>{x.label}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {mode === "multiple" && (
          <>
            <div style={{ padding: "10px 24px 6px", fontSize: 12, color: C.textMuted, borderBottom: `1px solid ${C.border}` }}>
              <strong style={{ color: C.textSecondary }}>Pre-money ÷ contracted revenue</strong> · Not an ARR multiple
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={th("Contracted Rev. ↓ / Pre-Money →")}>Rev. ↓ / Pre-Money →</th>
                  {preMoneys.map(p => <th key={p} style={th(`$${p}M`, p === 12)}>${p}M{p === 12 ? " ✓" : ""}</th>)}
                </tr>
              </thead>
              <tbody>
                {revenues.map((r, ri) => {
                  const label = r === 0.7 ? "$700K" : r >= 1 ? `$${r}M` : `$${r * 1000}K`;
                  return (
                    <tr key={r} style={{ borderBottom: ri < revenues.length - 1 ? `1px solid ${C.border}` : "none" }}>
                      <td style={{ padding: "12px 14px", fontSize: 13, fontWeight: r === 0.7 ? 700 : 500, color: r === 0.7 ? C.violet : C.textSecondary, background: r === 0.7 ? C.violetBg : "transparent" }}>
                        {label}{r === 0.7 ? " ✓" : ""}
                      </td>
                      {preMoneys.map(p => (
                        <td key={p} style={{ padding: "12px 14px", textAlign: "center", fontWeight: r === 0.7 && p === 12 ? 700 : 400, color: r === 0.7 && p === 12 ? C.violet : C.textSecondary, background: r === 0.7 && p === 12 ? C.violetBg : "transparent", fontSize: 13 }}>
                          {revMultiple(r, p)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div style={{ padding: "12px 24px", borderTop: `1px solid ${C.border}` }}>
              <p style={{ fontSize: 11, color: C.textDisabled }}>✓ = Current scenario ($700K contracted revenue at $12M pre). All values are pre-money ÷ contracted revenue — not ARR multiples.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SensitivityMatrix;
