import React from "react";
import { Link } from "react-router-dom";
import { T } from "../theme";
import BenchmarkHero from "../components/benchmarks/BenchmarkHero";
import BenchmarkTabs from "../components/benchmarks/BenchmarkTabs";
import { DISCLAIMER } from "../data/benchmarks";
import LogoMark from "../components/LogoMark";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

function PageHeader({ userEmail, onLogout }: { userEmail: string; onLogout: () => void }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(15,17,18,0.92)",
      backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${T.border}`,
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 32px",
        height: 60, display: "flex", alignItems: "center", gap: 32,
      }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoMark size="sm" />
        </Link>

        <nav style={{ display: "flex", gap: 2, flex: 1 }}>
          <Link to="/" style={{
            padding: "6px 12px", borderRadius: 8,
            color: T.textMuted, fontSize: 13, textDecoration: "none",
            fontFamily: T.font, transition: "color 0.15s",
          }}>
            ← Capital Room
          </Link>
          <div style={{
            padding: "6px 12px", borderRadius: 8,
            background: T.goldBg, color: T.gold,
            fontWeight: 600, fontSize: 13, fontFamily: T.font,
          }}>
            Benchmarks
          </div>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            background: T.goldBg, border: `1px solid ${T.goldBorder}`,
            borderRadius: 99, padding: "4px 12px",
            fontSize: 10, fontWeight: 700, color: T.gold,
            letterSpacing: "0.2em", fontFamily: T.fontMono,
          }}>
            SEED RAISE
          </div>
          <div style={{ fontSize: 12, color: T.textSubtle }}>{userEmail}</div>
          <button onClick={onLogout} style={{
            fontSize: 12, color: T.textMuted, background: "none",
            border: `1px solid ${T.border}`,
            borderRadius: 8, padding: "5px 12px", cursor: "pointer",
            fontFamily: T.font, transition: "border-color 0.15s",
          }}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

interface Props {
  userEmail: string;
  onLogout: () => void;
}

export default function BenchmarksPage({ userEmail, onLogout }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.font, color: T.text }}>
      <PageHeader userEmail={userEmail} onLogout={onLogout} />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 120px" }}>
        <BenchmarkHero />
        <BenchmarkTabs />

        {/* Disclaimer */}
        <div style={{
          marginTop: 48,
          padding: "16px 20px",
          background: T.surface,
          border: `1px solid ${T.border}`,
          borderRadius: 10,
          fontSize: 11,
          color: T.textSubtle,
          lineHeight: 1.7,
          fontFamily: T.fontMono,
        }}>
          <span style={{ color: T.textMuted, fontWeight: 700 }}>Disclaimer · </span>
          {DISCLAIMER}
        </div>
      </main>
    </div>
  );
}
