import React, { useState } from "react";
import { T } from "../../theme";
import { STAGES, STAGE_TAB_LABELS, BENCHMARK_GROUPS, Stage, Category } from "../../data/benchmarks";
import BenchmarkGrid from "./BenchmarkGrid";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const STAGE_LATER_NOTE = `These are category outcome references, not direct stage comps for Corello. They demonstrate the venture-scale outcomes achievable in manufacturing software.`;

export default function BenchmarkTabs() {
  const [activeStage, setActiveStage] = useState<Stage>("Pre-Seed");
  const [categoryFilter, setCategoryFilter] = useState<Category | "All">("All");
  const [relevanceFilter, setRelevanceFilter] = useState(1);

  function handleStageChange(stage: Stage) {
    setActiveStage(stage);
    setCategoryFilter("All");
    setRelevanceFilter(1);
  }

  const companies = BENCHMARK_GROUPS[activeStage];

  return (
    <div>
      {/* Stage tabs */}
      <div style={{
        display: "flex", gap: 4, marginBottom: 32,
        background: T.surface2, borderRadius: 10,
        padding: 4, width: "fit-content",
        flexWrap: "wrap",
      }}>
        {STAGES.map(stage => {
          const isActive = activeStage === stage;
          return (
            <button
              key={stage}
              onClick={() => handleStageChange(stage)}
              style={{
                padding: "8px 18px",
                border: "none",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: isActive ? 700 : 400,
                background: isActive ? T.surface3 : "transparent",
                color: isActive ? T.text : T.textMuted,
                boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.3)" : "none",
                cursor: "pointer",
                fontFamily: SHARP,
                letterSpacing: "-0.01em",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {STAGE_TAB_LABELS[stage]}
            </button>
          );
        })}
      </div>

      {/* Later-stage note */}
      {activeStage === "Later-Stage" && (
        <div style={{
          marginBottom: 24,
          padding: "12px 16px",
          background: T.surface,
          border: `1px solid ${T.border}`,
          borderRadius: 10,
          borderLeft: `3px solid ${T.amber}`,
          display: "flex", gap: 12, alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 14, flexShrink: 0 }}>⚠</span>
          <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6 }}>
            <span style={{ color: T.amber, fontWeight: 700 }}>Later-Stage Reference Comps · </span>
            {STAGE_LATER_NOTE}
          </div>
        </div>
      )}

      <BenchmarkGrid
        companies={companies}
        categoryFilter={categoryFilter}
        relevanceFilter={relevanceFilter}
        onCategoryChange={setCategoryFilter}
        onRelevanceChange={setRelevanceFilter}
      />
    </div>
  );
}
