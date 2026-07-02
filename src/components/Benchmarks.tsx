import React, { useState } from "react";
import { T } from "../theme";
import BenchmarkCard from "./benchmarks/BenchmarkCard";
import { BENCHMARK_GROUPS, STAGE_TAB_LABELS, Stage } from "../data/benchmarks";

const STAGES: Stage[] = ["Pre-Seed", "Seed", "Series A", "Later-Stage"];
const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

export default function Benchmarks() {
  const [activeStage, setActiveStage] = useState<Stage>("Seed");

  const top6 = [...BENCHMARK_GROUPS[activeStage]]
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 6);

  return (
    <section id="benchmarks" style={{ paddingTop: 48, paddingBottom: 8 }}>

      {/* Section header */}
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Market Benchmarks
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          <span style={{ color: T.gold }}>Industrial AI</span> has significant investor interest.
        </h2>
        <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 720, fontWeight: 400 }}>
          Directional fundraising context for industrial AI and manufacturing intelligence.
        </p>
      </div>

      {/* Stage tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 28, background: T.surface2, borderRadius: 10, padding: 4, width: "fit-content" }}>
        {STAGES.map(stage => {
          const isActive = activeStage === stage;
          return (
            <button key={stage} onClick={() => setActiveStage(stage)} style={{
              padding: "8px 18px", border: "none", borderRadius: 8, fontSize: 13,
              fontWeight: isActive ? 700 : 400,
              background: isActive ? T.surface3 : "transparent",
              color: isActive ? T.text : T.textMuted,
              boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.3)" : "none",
              cursor: "pointer", fontFamily: SHARP, letterSpacing: "-0.01em",
              transition: "all 0.15s", whiteSpace: "nowrap",
            }}>
              {STAGE_TAB_LABELS[stage]}
            </button>
          );
        })}
      </div>

      {/* Top-6 company cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
        {top6.map(c => <BenchmarkCard key={c.company} company={c} />)}
      </div>

    </section>
  );
}
