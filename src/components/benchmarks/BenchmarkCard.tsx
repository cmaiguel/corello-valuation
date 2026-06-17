import React from "react";
import { T } from "../../theme";
import { BenchmarkCompany, Category, Stage } from "../../data/benchmarks";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const STAGE_COLOR: Record<Stage, string> = {
  "Pre-Seed": T.amber,
  "Seed":     T.green,
  "Series A": T.blue,
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

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const color = STAGE_COLOR["Seed"];
  return (
    <div style={{
      width: 40, height: 40,
      borderRadius: 8,
      background: "rgba(245,194,0,0.07)",
      border: `1px solid ${T.goldBorder}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 14, fontWeight: 800, color: T.gold, fontFamily: SHARP,
      flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

function RelevanceDots({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} style={{
          width: 6, height: 6, borderRadius: "50%",
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
      borderRadius: 16,
      padding: "22px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      transition: "border-color 0.15s, transform 0.15s",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = T.border2;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = T.border;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <Initials name={company.company} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.text, letterSpacing: "-0.02em", fontFamily: SHARP, marginBottom: 5 }}>
            {company.company}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span style={{
              fontSize: 9, fontWeight: 700,
              color: stageColor, background: stageBg,
              border: `1px solid ${stageColor}30`,
              borderRadius: 4, padding: "2px 7px",
              textTransform: "uppercase", letterSpacing: "0.1em",
              fontFamily: T.fontMono,
            }}>
              {company.stage}
            </span>
            <span style={{
              fontSize: 9, fontWeight: 700,
              color: catColor,
              background: `${catColor}12`,
              border: `1px solid ${catColor}25`,
              borderRadius: 4, padding: "2px 7px",
              textTransform: "uppercase", letterSpacing: "0.08em",
              fontFamily: T.fontMono,
            }}>
              {company.category}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.6, margin: 0 }}>
        {company.description}
      </p>

      {/* Why it matters */}
      <div style={{
        background: T.surface2,
        border: `1px solid ${T.border}`,
        borderRadius: 10,
        padding: "12px 14px",
      }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: T.fontMono, marginBottom: 5 }}>
          Why it matters
        </div>
        <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.55 }}>
          {company.whyItMatters}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12, marginTop: "auto" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: T.fontMono, marginBottom: 4 }}>
            Corello Angle
          </div>
          <div style={{ fontSize: 12, color: T.gold, lineHeight: 1.4 }}>
            {company.corelloAngle}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: T.fontMono, marginBottom: 5 }}>
            Relevance
          </div>
          <RelevanceDots score={company.relevanceScore} />
        </div>
      </div>

      {/* Funding note */}
      <div style={{
        fontSize: 10, color: T.textSubtle, fontFamily: T.fontMono,
        borderTop: `1px solid ${T.border}`, paddingTop: 10,
        textTransform: "uppercase", letterSpacing: "0.08em",
      }}>
        {company.fundingNote}
      </div>
    </div>
  );
}
