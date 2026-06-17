import React from "react";
import { C } from "../theme";

const ranges = [
  { label: "Conservative",      min: 8,   max: 10,  color: C.textMuted,  desc: "Below fair range — low contract quality" },
  { label: "Fair Range",        min: 10,  max: 13,  color: C.blue,       desc: "Recommended zone — disciplined ask" },
  { label: "Founder Anchor",    min: 14,  max: 14,  color: C.violet,     desc: "Opening negotiation position" },
  { label: "Stretch",           min: 14,  max: 15,  color: C.amber,      desc: "Strong software contracts required" },
  { label: "Avoid (pre-ARR)",   min: 16,  max: 20,  color: C.rose,       desc: "Requires recurring ARR or strategic lead" },
];

const SCALE_MIN = 6;
const SCALE_MAX = 22;
const SCALE_RANGE = SCALE_MAX - SCALE_MIN;
const ticks = [8, 10, 12, 14, 16, 18, 20];

const ValuationSummary: React.FC = () => (
  <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "24px 28px" }}>
    <div style={{ marginBottom: 20 }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary, marginBottom: 4 }}>Pre-Money Valuation Range</h3>
      <p style={{ fontSize: 12, color: C.textMuted }}>$2.5M Seed raise · Based on contracted revenue, not ARR</p>
    </div>

    <div style={{ position: "relative", height: 300 }}>
      {/* Tick lines */}
      {ticks.map(v => (
        <div key={v} style={{
          position: "absolute",
          left: `${((v - SCALE_MIN) / SCALE_RANGE) * 100}%`,
          top: 0, bottom: 32,
          borderLeft: `1px solid ${C.border}`,
          zIndex: 0,
        }}>
          <div style={{ position: "absolute", bottom: -22, transform: "translateX(-50%)", fontSize: 11, color: C.textMuted, fontWeight: 500 }}>
            ${v}M
          </div>
        </div>
      ))}

      {/* Target $12M line */}
      <div style={{
        position: "absolute",
        left: `${((12 - SCALE_MIN) / SCALE_RANGE) * 100}%`,
        top: 0, bottom: 32,
        borderLeft: `2px solid ${C.blue}`,
        zIndex: 10,
      }}>
        <div style={{
          position: "absolute", top: -2, left: 6,
          background: C.blue, color: "#fff",
          fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, whiteSpace: "nowrap",
        }}>
          Target $12M ✓
        </div>
      </div>

      {/* Range bars */}
      {ranges.map((r, i) => {
        const left = ((r.min - SCALE_MIN) / SCALE_RANGE) * 100;
        const width = r.min === r.max ? 1 : ((r.max - r.min) / SCALE_RANGE) * 100;
        const top = 30 + i * 48;
        return (
          <div key={r.label}>
            <div style={{
              position: "absolute", left: `${left}%`, width: `${width}%`,
              minWidth: 6, top, height: 28,
              background: r.color + "22",
              border: `1.5px solid ${r.color}55`,
              borderRadius: 6, zIndex: 5,
              display: "flex", alignItems: "center", paddingLeft: 8,
            }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: r.color, whiteSpace: "nowrap" }}>
                {r.min === r.max ? `$${r.min}M` : `$${r.min}M – $${r.max}M`}
              </span>
            </div>
            <div style={{
              position: "absolute", top: top + 4,
              left: "1%",
              width: `${Math.max(0, left - 2)}%`,
              textAlign: "right",
              fontSize: 11, fontWeight: 500, color: C.textSecondary,
              paddingRight: 8, whiteSpace: "nowrap", overflow: "hidden",
            }}>
              {r.label}
            </div>
          </div>
        );
      })}
    </div>

    {/* Legend */}
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, borderTop: `1px solid ${C.border}`, paddingTop: 14, marginTop: 8 }}>
      {ranges.map(r => (
        <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.textMuted }}>
          <div style={{ width: 8, height: 8, borderRadius: 2, background: r.color }} />
          <span style={{ color: C.textSecondary, fontWeight: 500 }}>{r.label}:</span> {r.desc}
        </div>
      ))}
    </div>
  </div>
);

export default ValuationSummary;
