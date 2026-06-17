import React from "react";
import { ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { C } from "../../theme";
import sourceLibrary from "../../data/sources/sourceLibrary.json";

export default function SourceLibrary() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Disclaimer */}
      <div style={{ background: C.bgSurface, border: `1px solid ${C.amberBorder}`, borderRadius: C.rXl, padding: "14px 18px" }}>
        <div style={{ fontSize: 12, color: C.amberLight, lineHeight: 1.65 }}>
          Benchmark companies are used for <strong>directional market context only</strong>.
          Disclosed round sizes do not equal disclosed valuations.
          Inferred valuation ranges are estimates only.
          No private company valuations are stated unless publicly disclosed.
        </div>
      </div>

      {/* Sources */}
      <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, overflow: "hidden" }}>
        <div style={{ padding: "18px 22px", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.textSecondary }}>Source Index ({sourceLibrary.sources.length} sources)</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {sourceLibrary.sources.map((src, i) => {
            const isHigh = src.confidence === "high";
            return (
              <div key={src.id} style={{
                display: "flex", gap: 14, padding: "14px 22px",
                borderBottom: i < sourceLibrary.sources.length - 1 ? `1px solid ${C.border}` : "none",
                alignItems: "flex-start",
              }}>
                <div style={{ marginTop: 2 }}>
                  {isHigh
                    ? <CheckCircle2 size={14} color={C.green} />
                    : <AlertCircle size={14} color={C.amber} />
                  }
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, color: C.textPrimary, fontWeight: 500 }}>{src.title}</div>
                  <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>
                    {src.type} · {src.usedFor}
                    {src.notes && <> · {src.notes}</>}
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: C.blueLight, textDecoration: "none" }}>
                      <ExternalLink size={11} />
                      View source
                    </a>
                  </div>
                </div>
                <div>
                  <span style={{
                    fontSize: 10, fontWeight: 700, borderRadius: 99, padding: "2px 8px",
                    color: isHigh ? C.green : C.amber,
                    background: isHigh ? C.greenBg : C.amberBg,
                    border: `1px solid ${isHigh ? C.greenBorder : C.amberBorder}`,
                  }}>
                    {src.confidence}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Confidence legend */}
      <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "16px 20px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.textSecondary, marginBottom: 10 }}>Confidence Levels</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {sourceLibrary.confidenceLevels.map((lvl) => (
            <div key={lvl.level} style={{ display: "flex", gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: lvl.level === "high" ? C.green : lvl.level === "medium" ? C.amber : C.rose, width: 50, flexShrink: 0, textTransform: "capitalize" }}>{lvl.level}</span>
              <span style={{ fontSize: 12, color: C.textMuted }}>{lvl.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
