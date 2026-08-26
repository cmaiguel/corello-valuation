import React, { useState } from "react";
import { T } from "../theme";
import "./dataroom.css";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

interface Member {
  name: string;
  role: string;
  initials: string;
  img: string;
}

const MEMBERS: Member[] = [
  { name: "Carlos Maiguel", role: "CEO", initials: "CM", img: "/team/carlos.jpg" },
  { name: "Mark Roth",      role: "CPO", initials: "MR", img: "/team/mark.jpg" },
  { name: "Andrea Ridi",    role: "CTO", initials: "AR", img: "/team/andrea.jpg" },
];

function Avatar({ m }: { m: Member }) {
  const [failed, setFailed] = useState(false);
  const size = 168;
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      overflow: "hidden", flexShrink: 0,
      border: `1px solid ${T.border2}`,
      background: T.surface2,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {failed ? (
        <span style={{ fontSize: 44, fontWeight: 800, color: T.textSubtle, fontFamily: SHARP, letterSpacing: "-0.02em" }}>
          {m.initials}
        </span>
      ) : (
        <img
          src={m.img}
          alt={m.name}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.05)" }}
        />
      )}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="dr-section">
      {/* Header */}
      <div style={{ marginBottom: 44 }}>
        <div className="dr-eyebrow">Team</div>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.04em", lineHeight: 1.15, margin: "0 0 18px", fontFamily: SHARP }}>
          Ambition, backed by <span style={{ color: T.gold }}>proven experience.</span>
        </h2>
        <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 720, fontFamily: T.font }}>
          A founding team that blends ambition with deep operating experience — <span style={{ color: T.text, fontWeight: 700 }}>30+ years of combined expertise</span> in the manufacturing space and <span style={{ color: T.text, fontWeight: 700 }}>6+ successful exits</span> across previous startups.
        </p>
      </div>

      {/* Stat chips */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 48 }}>
        {[
          { value: "30+", label: "Years combined manufacturing expertise" },
          { value: "6+", label: "Successful startup exits" },
          { value: "3", label: "Co-founders, full-time" },
        ].map(s => (
          <div key={s.label} style={{
            background: "linear-gradient(135deg, rgba(245,194,0,0.06) 0%, rgba(245,194,0,0.02) 100%)",
            border: `1px solid ${T.goldBorder}`,
            borderLeft: `3px solid ${T.gold}`,
            borderRadius: 12,
            padding: "22px 24px",
          }}>
            <div style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: T.gold, letterSpacing: "-0.04em", lineHeight: 1, fontFamily: SHARP }}>{s.value}</div>
            <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.5, marginTop: 8 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Co-founder cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {MEMBERS.map(m => (
          <div key={m.name} style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 12,
            padding: "36px 28px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}>
            <Avatar m={m} />
            <div style={{ fontSize: 10, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.16em", fontFamily: "'Geist Mono', monospace", margin: "22px 0 6px" }}>
              {m.role} · Co-Founder
            </div>
            <div style={{ fontSize: 19, fontWeight: 800, color: T.text, fontFamily: SHARP, letterSpacing: "-0.02em" }}>
              {m.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
