import React from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const TEAM = [
  {
    name: "Max Mckay",
    title: "Founder & CEO",
    background: "Former Head of AI/ML at manufacturing-focused deep tech fund. 10 years building AI systems for industrial operations.",
    focus: "Strategy, AI product, investor relations",
  },
  {
    name: "Ben Karrasch",
    title: "Chief Revenue Officer",
    background: "Previous VP Sales at industrial SaaS company scaling from $5M to $50M ARR. 8 years in manufacturing software sales.",
    focus: "Sales, customer success, go-to-market",
  },
  {
    name: "Engineering Team",
    title: "3 Full-Stack Engineers",
    background: "Ex-Google, ex-Meta, ex-Databricks. Specialized in real-time data pipelines, agentic systems, and manufacturing domain experience.",
    focus: "Product engineering, infrastructure, deployment",
  },
  {
    name: "Advisory Board",
    title: "Strategic Advisors",
    background: "Sid Bala (ex-CTO, enterprise IoT), Glenn Mueller (VP Operations, Tier 1 automotive supplier). Deep manufacturing domain expertise.",
    focus: "Go-to-market strategy, customer introductions, technical validation",
  },
];

export default function TeamBios() {
  return (
    <section id="team" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Leadership
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          Experienced team building <span style={{ color: T.gold }}>AI-native manufacturing.</span>
        </h2>
        <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 720, fontWeight: 400 }}>
          Combined 40+ years of manufacturing, AI/ML, and SaaS experience. Core team plus strategic advisors with deep operational expertise.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {TEAM.map(member => (
          <div key={member.name} style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            padding: "28px 24px",
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: T.text, marginBottom: 4, fontFamily: SHARP, letterSpacing: "-0.02em" }}>
              {member.name}
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.gold, marginBottom: 14, fontFamily: T.fontMono, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {member.title}
            </div>
            <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6, marginBottom: 12 }}>
              {member.background}
            </div>
            <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 12, fontSize: 11, color: T.textSubtle, fontFamily: T.fontMono }}>
              <span style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Focus · </span>
              {member.focus}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
