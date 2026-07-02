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
    <section id="snapshot" style={{ paddingTop: "clamp(40px, 8vw, 48px)", paddingBottom: "clamp(32px, 6vw, 40px)" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 860, paddingLeft: "clamp(16px, 4vw, 24px)", paddingRight: "clamp(16px, 4vw, 24px)" }}>
          <h1 style={{
            fontSize: "clamp(2.8rem, 5.2vw, 4.4rem)",
            fontWeight: 800,
            color: T.text,
            margin: "0 0 20px",
            fontFamily: SHARP,
            letterSpacing: "-0.04em",
            lineHeight: 1.2,
          }}>
            Raising a <span style={{ color: T.gold, fontWeight: 800 }}>$2.5M Seed Round</span>
          </h1>

          <p style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
            color: T.textMuted,
            margin: "0",
            maxWidth: 720,
            lineHeight: 1.7,
            fontFamily: T.font,
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}>
            Corello turns manufacturing tribal knowledge into operational intelligence for small and mid-sized manufacturers.
          </p>
        </div>
      </div>
    </section>
  );
}
