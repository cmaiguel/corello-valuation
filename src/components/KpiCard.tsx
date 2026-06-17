import React from "react";
import { T } from "../theme";

interface Props {
  label: string;
  value: string;
  sub?: string;
  accent?: "blue" | "green" | "amber" | "neutral";
  highlight?: boolean;
  large?: boolean;
}

export default function KpiCard({ label, value, sub, accent = "neutral", highlight, large }: Props) {
  const accentColor = accent === "blue" ? T.blue : accent === "green" ? T.green : accent === "amber" ? T.amber : T.textMuted;
  const accentBg    = accent === "blue" ? T.blueBg : accent === "green" ? T.greenBg : accent === "amber" ? T.amberBg : "transparent";
  const accentBdr   = accent === "blue" ? T.blueBorder : accent === "green" ? T.greenBorder : accent === "amber" ? T.amberBorder : T.border;

  return (
    <div style={{
      background: highlight ? T.blue : T.surface,
      border: `1px solid ${highlight ? T.blue : (accent !== "neutral" ? accentBdr : T.border)}`,
      borderRadius: T.rXl,
      padding: large ? "28px 28px" : "20px 22px",
      display: "flex", flexDirection: "column", gap: 6,
      boxShadow: highlight ? "0 4px 24px rgba(37,99,235,0.18)" : "0 1px 4px rgba(15,23,42,0.04)",
      transition: "transform 0.15s, box-shadow 0.15s",
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
        color: highlight ? "rgba(255,255,255,0.7)" : T.textMuted,
      }}>{label}</div>
      <div style={{
        fontSize: large ? 34 : 26, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1,
        color: highlight ? "#fff" : (accent !== "neutral" ? accentColor : T.text),
      }}>{value}</div>
      {sub && (
        <div style={{
          fontSize: 11, color: highlight ? "rgba(255,255,255,0.6)" : T.textSubtle, lineHeight: 1.4,
        }}>{sub}</div>
      )}
    </div>
  );
}
