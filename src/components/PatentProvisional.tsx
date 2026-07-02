import React from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const PATENT_CLAIMS = [
  {
    title: "Agentic Manufacturing Intelligence",
    description: "AI agents that autonomously interpret shop floor signals, diagnose operational issues, and execute real-time corrective actions without human intervention.",
    status: "Provisional filed",
  },
  {
    title: "Cross-System Data Orchestration",
    description: "Method for ingesting fragmented data from ERP, MES, IoT sensors, and legacy systems, then structuring it into a unified AI-ready operational data model.",
    status: "Provisional filed",
  },
  {
    title: "Real-Time Operational Decision Engine",
    description: "Proprietary algorithm for generating, prioritizing, and executing manufacturing recommendations in real time based on live production data.",
    status: "Provisional filed",
  },
  {
    title: "Manufacturing Context Learning",
    description: "Method for AI models to learn and adapt to customer-specific manufacturing workflows, constraints, and business rules without retraining.",
    status: "Provisional filed",
  },
];

export default function PatentProvisional() {
  return (
    <section id="patents" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Intellectual Property
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          Patent <span style={{ color: T.gold }}>protection.</span>
        </h2>
        <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 720, fontWeight: 400 }}>
          Provisional patent applications filed covering core AI-native manufacturing intelligence technology, data orchestration, and agentic decision-making.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {PATENT_CLAIMS.map((patent, idx) => (
          <div
            key={idx}
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 16,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: T.text, fontFamily: SHARP, letterSpacing: "-0.02em", flex: 1 }}>
                {patent.title}
              </div>
              <div style={{
                fontSize: 9,
                fontWeight: 700,
                color: T.gold,
                background: `${T.gold}18`,
                border: `1px solid ${T.gold}30`,
                borderRadius: 4,
                padding: "3px 8px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: T.fontMono,
                whiteSpace: "nowrap",
                marginLeft: 8,
              }}>
                {patent.status}
              </div>
            </div>

            <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6 }}>
              {patent.description}
            </div>

            <div style={{ paddingTop: 16, borderTop: `1px solid ${T.border}`, marginTop: 16 }}>
              <div style={{ fontSize: 9, color: T.textSubtle, fontFamily: T.fontMono, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Patent applications protect core technical innovation and competitive differentiation.
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Patent Filing Details */}
      <div style={{
        background: `${T.gold}08`,
        border: `1px solid ${T.gold}25`,
        borderRadius: 16,
        padding: "24px 28px",
        marginTop: 28,
      }}>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ fontSize: 20 }}>⚖️</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 6, fontFamily: SHARP }}>
              Provisional Patent Strategy
            </div>
            <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6 }}>
              Corello has filed provisional patent applications covering the core agentic AI architecture, cross-system data orchestration, and real-time manufacturing intelligence capabilities. These provisional filings establish priority dates and provide IP protection while the technology is further developed before full utility patent applications. No licensing agreements or IP disputes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
