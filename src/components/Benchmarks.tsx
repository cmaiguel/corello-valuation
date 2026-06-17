import React, { useState } from "react";
import { T } from "../theme";
import BenchmarkLogoCard from "./BenchmarkLogoCard";
import data from "../data/benchmarks/benchmarkCompanies.json";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>{eyebrow}</div>
      <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>{title}</h2>
      {sub && <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 720, fontWeight: 400 }}>{sub}</p>}
    </div>
  );
}

const STAGE_COLORS: Record<string, string> = {
  "Seed":           T.green,
  "Seed / Series A": "#4ADE80",
  "Series A":       T.blue,
  "Series B":       "#A78BFA",
  "Series C":       "#F87171",
};
const STAGE_BG: Record<string, string> = {
  "Seed":           T.greenBg,
  "Seed / Series A": "rgba(74,222,128,0.10)",
  "Series A":       T.blueBg,
  "Series B":       "rgba(167,139,250,0.10)",
  "Series C":       "rgba(248,113,113,0.10)",
};

// --- Funding Landscape Chart ---
const ALL_COMPANIES = [
  { company: "Corello", stage: "Seed", roundSizeM: 2.5, isCorello: true },
  ...data.seed.map(c => ({ ...c, isCorello: false })),
  ...data.growth.map(c => ({ ...c, isCorello: false })),
];
const MAX_M = 130;

function FundingLandscape() {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.rXl, padding: "28px 32px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 28 }}>
        Funding Landscape — All companies ($M)
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {ALL_COMPANIES.map(c => {
          const pct = Math.max((c.roundSizeM / MAX_M) * 100, 1.5);
          const color = c.isCorello ? T.gold : (STAGE_COLORS[c.stage] || T.textMuted);
          return (
            <div key={c.company} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 130, fontSize: 12, color: c.isCorello ? T.gold : T.textMuted, fontWeight: c.isCorello ? 700 : 400, textAlign: "right", flexShrink: 0 }}>
                {c.company}
              </div>
              <div style={{ flex: 1, height: 10, background: T.surface2, borderRadius: 99, overflow: "hidden", position: "relative" }}>
                <div style={{
                  height: "100%", borderRadius: 99,
                  width: `${pct}%`,
                  background: color,
                  opacity: c.isCorello ? 1 : 0.75,
                  transition: "width 0.5s ease",
                }} />
              </div>
              <div style={{ fontSize: 13, fontWeight: c.isCorello ? 800 : 600, color: c.isCorello ? T.gold : T.text, width: 60, textAlign: "right", flexShrink: 0 }}>
                ${c.roundSizeM}M
              </div>
              <div style={{
                fontSize: 10, fontWeight: 700, color: color,
                background: c.isCorello ? T.goldBg : (STAGE_BG[c.stage] || T.surface2),
                border: `1px solid ${color}33`,
                borderRadius: 99, padding: "2px 8px", minWidth: 80, textAlign: "center", flexShrink: 0,
              }}>
                {c.isCorello ? "← You are here" : c.stage}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 20, fontSize: 11, color: T.textSubtle }}>
        Corello's $2.5M Seed is early-stage relative to this comp set — appropriate given contracted revenue, not yet ARR.
      </div>
    </div>
  );
}

// --- Stage Distribution Chart ---
const STAGE_BUCKETS = [
  { stage: "Seed",     companies: data.seed,                                    color: T.green },
  { stage: "Series A", companies: data.growth.filter(c => c.stage === "Series A"), color: T.blue },
  { stage: "Series B", companies: data.growth.filter(c => c.stage === "Series B"), color: "#A78BFA" },
  { stage: "Series C", companies: data.growth.filter(c => c.stage === "Series C"), color: "#F87171" },
];

function StageDistribution() {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.rXl, padding: "28px 32px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 28 }}>
        Average raise by stage
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {STAGE_BUCKETS.map(bucket => {
          const avg = bucket.companies.reduce((s, c) => s + c.roundSizeM, 0) / (bucket.companies.length || 1);
          const pct = (avg / MAX_M) * 100;
          return (
            <div key={bucket.stage}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>
                  {bucket.stage}
                  <span style={{ fontSize: 11, color: T.textSubtle, marginLeft: 8 }}>({bucket.companies.length} co{bucket.companies.length !== 1 ? "s" : ""})</span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, color: bucket.color, letterSpacing: "-0.02em" }}>${avg.toFixed(1)}M avg</div>
              </div>
              <div style={{ height: 8, background: T.surface2, borderRadius: 99, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: bucket.color, borderRadius: 99, opacity: 0.85 }} />
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                {bucket.companies.map(c => (
                  <span key={c.company} style={{ fontSize: 10, color: T.textMuted, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 99, padding: "2px 8px" }}>
                    {c.company} ${c.roundSizeM}M
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Corello callout */}
      <div style={{
        marginTop: 24, padding: "14px 16px",
        background: T.goldBg, border: `1px solid ${T.goldBorder}`,
        borderRadius: T.rMd,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ fontSize: 13, color: T.textMuted }}>Corello — current Seed raise</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: T.gold }}>$2.5M</div>
      </div>
    </div>
  );
}

// --- Tabs ---
export default function Benchmarks() {
  const [tab, setTab] = useState<"seed" | "growth">("seed");
  const companies = tab === "seed" ? data.seed : data.growth;

  return (
    <section id="benchmarks" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <SectionHeader
        eyebrow="Market Benchmarks"
        title="Industrial AI has significant investor interest."
        sub="Directional fundraising context for industrial AI and manufacturing intelligence."
      />

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 28, background: T.surface2, borderRadius: T.rMd, padding: 4, width: "fit-content" }}>
        {([["seed", "Seed comps"], ["growth", "Later-stage context"]] as const).map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{
            padding: "8px 20px", border: "none", borderRadius: 8, fontSize: 13,
            fontWeight: tab === id ? 600 : 400,
            background: tab === id ? T.surface3 : "transparent",
            color: tab === id ? T.text : T.textMuted,
            boxShadow: tab === id ? "0 1px 4px rgba(0,0,0,0.3)" : "none",
            cursor: "pointer", fontFamily: T.font, transition: "all 0.15s",
          }}>{label}</button>
        ))}
      </div>

      {/* Company logo cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 28 }}>
        {companies.map(c => <BenchmarkLogoCard key={c.company} {...c} />)}
      </div>

      {/* Charts row */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20, marginBottom: 20 }}>
        <FundingLandscape />
        <StageDistribution />
      </div>

      {/* Disclaimer */}
      <div style={{ fontSize: 12, color: T.textSubtle, lineHeight: 1.6 }}>{data.disclaimer}</div>
    </section>
  );
}
