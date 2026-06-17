import React, { useState } from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

interface Props {
  company: string;
  stage: string;
  roundSizeDisplay: string;
  roundSizeM: number;
  category: string;
  relevance: string;
  domain: string;
  sourceUrl: string;
  confidence: string;
}

function Initials({ name, size }: { name: string; size: number }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.28,
      background: T.blueBg, border: `1px solid ${T.blueBorder}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.36, fontWeight: 700, color: T.blue,
    }}>
      {initials}
    </div>
  );
}

export default function BenchmarkLogoCard({ company, stage, roundSizeDisplay, category, relevance, domain, sourceUrl, confidence }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const logoUrl = `https://logo.clearbit.com/${domain}`;
  const stageColor = stage === "Seed" ? T.green : stage === "Series A" ? T.blue : stage === "Series B" ? "#7C3AED" : "#DC2626";
  const stageBg = stage === "Seed" ? T.greenBg : stage === "Series A" ? T.blueBg : stage === "Series B" ? "rgba(124,58,237,0.08)" : "rgba(220,38,38,0.08)";

  return (
    <div style={{
      background: T.surface, border: `1px solid ${T.border}`,
      borderRadius: T.rXl, padding: "20px 22px",
      display: "flex", flexDirection: "column", gap: 14,
      boxShadow: "0 1px 4px rgba(15,23,42,0.04)",
      transition: "box-shadow 0.15s, transform 0.15s",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(15,23,42,0.10)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(15,23,42,0.04)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {imgFailed ? (
          <Initials name={company} size={40} />
        ) : (
          <img
            src={logoUrl}
            alt={company}
            width={40} height={40}
            style={{ borderRadius: 10, objectFit: "contain", border: `1px solid ${T.border}` }}
            onError={() => setImgFailed(true)}
          />
        )}
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.text, letterSpacing: "-0.02em", fontFamily: SHARP }}>{company}</div>
          <div style={{
            display: "inline-block", marginTop: 4, fontSize: 9, fontWeight: 700,
            color: stageColor, background: stageBg, borderRadius: 4, padding: "2px 7px",
            border: `1px solid ${stageColor}28`, textTransform: "uppercase" as const,
            letterSpacing: "0.1em", fontFamily: T.fontMono,
          }}>{stage}</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.04em", fontFamily: SHARP }}>{roundSizeDisplay}</div>
          <div style={{ fontSize: 10, color: T.textSubtle, marginTop: 2, fontFamily: T.fontMono, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>round</div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.1em", fontFamily: T.fontMono }}>{category}</div>
        <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.55 }}>{relevance}</div>
      </div>

      <a href={sourceUrl} target="_blank" rel="noopener noreferrer" style={{
        fontSize: 11, color: T.blue, textDecoration: "none", fontWeight: 500,
        display: "flex", alignItems: "center", gap: 4, marginTop: "auto",
      }}>
        View source ↗
      </a>
    </div>
  );
}
