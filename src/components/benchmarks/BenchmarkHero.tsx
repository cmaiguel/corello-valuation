import React from "react";
import { T } from "../../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

export default function BenchmarkHero() {
  return (
    <div style={{ paddingTop: 64, paddingBottom: 52 }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
        background: T.goldBg, border: `1px solid ${T.goldBorder}`,
        borderRadius: 99, padding: "5px 14px",
      }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.gold }} />
        <span style={{ fontSize: 11, fontWeight: 700, color: T.gold, fontFamily: T.fontMono, textTransform: "uppercase", letterSpacing: "0.2em" }}>
          Benchmark Intelligence
        </span>
      </div>

      <h1 style={{
        fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
        fontWeight: 800,
        color: T.text,
        letterSpacing: "-0.05em",
        lineHeight: 0.97,
        margin: "0 0 20px",
        fontFamily: SHARP,
        maxWidth: 760,
      }}>
        Corello{" "}
        <span style={{ color: T.gold }}>Benchmark</span>{" "}
        Landscape
      </h1>

      <p style={{
        fontSize: 16,
        color: T.textMuted,
        lineHeight: 1.7,
        margin: 0,
        maxWidth: 720,
        fontWeight: 400,
      }}>
        Compare Corello against early-stage, seed, Series A, and later-stage companies building in manufacturing intelligence, industrial AI, frontline operations, and AI-native workflows.
      </p>
    </div>
  );
}
