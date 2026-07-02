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
    <section id="snapshot" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 300,
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 24,
          background: T.goldBg,
          border: `1px solid ${T.goldBorder}`,
          borderRadius: 99,
          padding: "6px 16px",
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.gold }} />
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            color: T.gold,
            fontFamily: T.fontMono,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}>
            Seed Round
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(3.2rem, 6vw, 5rem)",
          fontWeight: 800,
          color: T.text,
          margin: "0 0 16px",
          fontFamily: SHARP,
          letterSpacing: "-0.05em",
          lineHeight: 1,
        }}>
          Raising <span style={{ color: T.gold }}>$2.5M</span>
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.4rem)",
          color: T.textMuted,
          margin: 0,
          maxWidth: 600,
          lineHeight: 1.6,
          fontFamily: SHARP,
          fontWeight: 400,
          letterSpacing: "-0.01em",
        }}>
          To scale AI-native manufacturing intelligence for small and mid-sized manufacturers.
        </p>
      </div>
    </section>
  );
}
