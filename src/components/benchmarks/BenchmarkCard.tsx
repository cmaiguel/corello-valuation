import React from "react";
import { T } from "../../theme";
import { BenchmarkCompany, Category, Stage } from "../../data/benchmarks";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const STAGE_COLOR: Record<Stage, string> = {
  "Pre-Seed":    T.amber,
  "Seed":        T.green,
  "Series A":    T.blue,
  "Later-Stage": "#A78BFA",
};
const STAGE_BG: Record<Stage, string> = {
  "Pre-Seed":    T.amberBg,
  "Seed":        T.greenBg,
  "Series A":    T.blueBg,
  "Later-Stage": "rgba(167,139,250,0.10)",
};
const CATEGORY_COLOR: Record<Category, string> = {
  "Manufacturing Intelligence":  T.gold,
  "Frontline Operations":        T.blue,
  "Industrial IoT":              T.green,
  "Manufacturing Analytics":     T.amber,
  "AI Co-Workers":               "#C084FC",
  "Paper Process Digitization":  "#FB923C",
  "Agentic Data Infrastructure": "#34D399",
};

function Initials({ name, stage }: { name: string; stage: Stage }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const color = STAGE_COLOR[stage];
  const bg = STAGE_BG[stage];
  return (
    <div style={{
      width: 36, height: 36, borderRadius: 8, flexShrink: 0,
      background: bg, border: `1px solid ${color}30`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 13, fontWeight: 800, color, fontFamily: SHARP,
    }}>
      {initials}
    </div>
  );
}

function RelevanceDots({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} style={{
          width: 5, height: 5, borderRadius: "50%",
          background: i <= score ? T.gold : T.surface3,
          border: `1px solid ${i <= score ? T.goldBorder : T.border}`,
        }} />
      ))}
    </div>
  );
}

interface Props {
  company: BenchmarkCompany;
}

export default function BenchmarkCard({ company }: Props) {
  const stageColor = STAGE_COLOR[company.stage];
  const stageBg = STAGE_BG[company.stage];
  const catColor = CATEGORY_COLOR[company.category];

  return (
    <div style={{
      background: T.surface,
      border: `1px solid ${T.border}`,
      borderRadius: 14,
      padding: "16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      transition: "border-color 0.15s",
    }}
      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = T.border2}
      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = T.border}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Initials name={company.company} stage={company.stage} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.text, letterSpacing: "-0.02em", fontFamily: SHARP }}>
            {company.company}
          </div>
          <div style={{ display: "flex", gap: 5, marginTop: 4, flexWrap: "wrap" }}>
            <span style={{
              fontSize: 9, fontWeight: 700,
              color: stageColor, background: stageBg,
              border: `1px solid ${stageColor}30`,
              borderRadius: 4, padding: "1px 6px",
              textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: T.fontMono,
            }}>{company.stage}</span>
            <span style={{
              fontSize: 9, fontWeight: 700,
              color: catColor, background: `${catColor}12`,
              border: `1px solid ${catColor}25`,
              borderRadius: 4, padding: "1px 6px",
              textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: T.fontMono,
            }}>{company.category}</span>
          </div>
        </div>
        <RelevanceDots score={company.relevanceScore} />
      </div>

      {/* Company description */}
      <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.55 }}>
        {company.description}
      </div>

      {/* Corello angle */}
      <div style={{ fontSize: 11, color: T.textSubtle, lineHeight: 1.45, fontStyle: "italic" }}>
        <span style={{ color: T.gold, fontStyle: "normal", fontWeight: 700, fontFamily: T.fontMono, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em" }}>vs. Corello · </span>
        {company.corelloAngle}
      </div>

      {/* Funding note + link */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderTop: `1px solid ${T.border}`, paddingTop: 8, gap: 8,
      }}>
        <div style={{ fontSize: 10, color: T.textSubtle, fontFamily: T.fontMono, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {company.fundingNote}
        </div>
        <a href={company.website} target="_blank" rel="noopener noreferrer" style={{
          fontSize: 10, fontWeight: 600, color: T.blue, textDecoration: "none",
          fontFamily: T.fontMono, flexShrink: 0, whiteSpace: "nowrap",
        }}>
          Visit ↗
        </a>
      </div>
    </div>
  );
}
