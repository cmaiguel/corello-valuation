import React from "react";
import { T } from "../theme";
import "./snapshot.css";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

function GoldCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="cr-gold-card" style={{
      background: "linear-gradient(135deg, rgba(245,194,0,0.09) 0%, rgba(245,194,0,0.03) 100%)",
      border: "1px solid rgba(245,194,0,0.22)",
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: T.fontMono }}>
        {label}
      </div>
      <div className="cr-card-value" style={{ color: T.gold, fontFamily: SHARP }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: T.textSubtle, lineHeight: 1.5 }}>{sub}</div>}
    </div>
  );
}

function SmallCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="cr-small-card" style={{ background: T.surface, border: `1px solid ${T.border}` }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: T.fontMono }}>
        {label}
      </div>
      <div className="cr-card-value" style={{ color: T.text, fontFamily: SHARP }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: T.textSubtle, lineHeight: 1.5 }}>{sub}</div>}
    </div>
  );
}

export default function Snapshot() {
  return (
    <section id="snapshot" className="cr-snapshot" style={{ paddingTop: 80, paddingBottom: 80 }}>
      {/* Hero */}
      <div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20,
          background: T.goldBg, border: `1px solid ${T.goldBorder}`,
          borderRadius: 99, padding: "5px 14px",
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.gold }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: T.gold, fontFamily: T.fontMono, textTransform: "uppercase", letterSpacing: "0.2em" }}>
            Corello Seed Round
          </span>
        </div>

        <h1 className="cr-hero-title" style={{ color: T.text, fontFamily: SHARP }}>
          Raising $2.5M at{" "}
          <span style={{ color: T.gold }}>$12M pre-money</span>{" "}
          valuation.
        </h1>

        <div className="cr-hero-sub" style={{
          fontWeight: 600,
          fontFamily: T.fontMono,
          color: T.textMuted,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}>
          Corello: AI-Native Manufacturing Intelligence
        </div>
      </div>

      {/* Row 1 — 3 large gold cards */}
      <div className="cr-grid-3">
        <GoldCard label="RAISE" value="$2.5M" />
        <GoldCard label="PRE-MONEY VALUATION" value="$12M" />
        <GoldCard label="POST-MONEY VALUATION" value="$14.5M" />
      </div>

      {/* Row 2 — 4 small traction cards */}
      <div className="cr-grid-4">
        <SmallCard label="CONTRACTED REVENUE" value="$700K" sub="In just 6 months of 2026 operations" />
        <SmallCard label="NEAR-TERM PIPELINE" value="$300K" sub="Expected next 4 months" />
        <SmallCard label="ADDITIONAL PIPELINE" value="$950K" sub="EOY 2026 / early 2027" />
        <SmallCard label="TARGET YEAR-END ARR" value="~$1.7M" sub="Target, not current ARR" />
      </div>
    </section>
  );
}
