import React, { useState } from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const TECH_PILLARS = [
  {
    title: "Core Infrastructure",
    color: T.gold,
    items: [
      { name: ".NET Core", desc: "Enterprise-grade backend foundation" },
      { name: "Kubernetes (AKS)", desc: "Containerized, horizontally scalable on Azure" },
      { name: "API-First Architecture", desc: "Every service exposed via REST/GraphQL" },
      { name: "Security-First Design", desc: "Encryption, compliance, zero-trust by default" },
    ],
  },
  {
    title: "Data & Knowledge Layer",
    color: T.blue,
    items: [
      { name: "Neo4j Graph Database", desc: "Knowledge graphs of tribal knowledge & operations" },
      { name: "Vector Search", desc: "Semantic retrieval over unstructured data" },
      { name: "Ontology-Free Approach", desc: "Rapid ingestion, no heavy configuration" },
      { name: "Multi-Source Data Integration", desc: "ERP, MES, IoT sensors, documents, emails" },
    ],
  },
  {
    title: "AI/ML & Agents",
    color: "#A78BFA",
    items: [
      { name: "Small Language Models", desc: "On-premises capable, low token cost (1-7B params)" },
      { name: "Machine Learning (ONNX)", desc: "Deterministic agents + ML for quotation accuracy" },
      { name: "Collaborative Intelligence Framework", desc: "AI co-workers that learn from human interactions" },
      { name: "Meta-Agents", desc: "Automatically generate customer-specific agents from knowledge graphs" },
    ],
  },
  {
    title: "Internal Development Tools",
    color: T.green,
    items: [
      { name: "AstroForge", desc: "Parallel project orchestration & agent management (25+ projects simultaneously)" },
      { name: "Astral Code Framework", desc: "Spec-first development, collision detection for distributed teams" },
      { name: "Automated Testing & Validation", desc: "1000s of tests per logic block via AI-assisted code generation" },
      { name: "Telegram Integration", desc: "Manage development workflows via conversational AI" },
    ],
  },
  {
    title: "Deployment & Operations",
    color: "#F97316",
    items: [
      { name: "Multi-Cloud Ready", desc: "Azure, AWS, GCP via infrastructure-as-code" },
      { name: "On-Premises Capable", desc: "Critical for aerospace, defense, highly regulated customers" },
      { name: "CI/CD Automated", desc: "Git commit → production in minutes" },
      { name: "SOC 2 Compliant", desc: "Enterprise security certified" },
    ],
  },
];

const CAPABILITIES = [
  {
    heading: "Quotation Agent",
    description: "Email-based AI that generates manufacturing quotes from RFQs in minutes instead of days",
    metric: "6 days → 6 hours (best case: 2 minutes)",
    status: "Live with 3 customers",
  },
  {
    heading: "Tribal Knowledge Capture",
    description: "Passive + active learning from documents, emails, and human interactions to build operational knowledge graphs",
    metric: "Low configuration • High stickiness",
    status: "Shadowing mode with customers",
  },
  {
    heading: "Co-Worker AI (Sofia Corelo)",
    description: "Email-integrated AI co-workers that collaborate on quotations, capacity planning, and operational execution",
    metric: "Customer success touchpoint",
    status: "Deployed in pilot phase",
  },
  {
    heading: "Paper Traveler Digitization",
    description: "Automated capture of operational data (temperature, operator, process, quality) from traditional paper workflows",
    metric: "100% data capture • No manual entry",
    status: "Primary customer use case",
  },
];

export default function TechStack() {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  return (
    <section id="tech" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Technical Foundation
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          Enterprise-grade <span style={{ color: T.gold }}>manufacturing AI.</span>
        </h2>
        <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 720, fontWeight: 400 }}>
          Built for scale, security, and on-premises deployment. Validated by MIT technical diligence. Designed to avoid vendor lock-in and adapt to emerging AI technologies.
        </p>
      </div>

      {/* Tech Pillars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
        {TECH_PILLARS.map(pillar => (
          <div
            key={pillar.title}
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setExpandedPillar(expandedPillar === pillar.title ? null : pillar.title)}
              style={{
                width: "100%",
                padding: "20px 24px",
                background: T.surface,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: expandedPillar === pillar.title ? `1px solid ${T.border}` : "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = T.surface2)}
              onMouseLeave={(e) => (e.currentTarget.style.background = T.surface)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 3, height: 20, borderRadius: 2, background: pillar.color }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: T.text, fontFamily: SHARP, letterSpacing: "-0.01em" }}>
                  {pillar.title}
                </div>
                <div style={{ fontSize: 10, color: T.textSubtle, fontFamily: T.fontMono, marginLeft: 8 }}>
                  {pillar.items.length} components
                </div>
              </div>
              <div style={{ fontSize: 20, color: T.textMuted, transition: "transform 0.2s" }}>
                {expandedPillar === pillar.title ? "−" : "+"}
              </div>
            </button>

            {expandedPillar === pillar.title && (
              <div style={{ padding: "0 24px 20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
                  {pillar.items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "14px 12px",
                        background: T.surface2,
                        border: `1px solid ${T.border}`,
                        borderRadius: 10,
                      }}
                    >
                      <div style={{ fontSize: 12, fontWeight: 700, color: pillar.color, fontFamily: SHARP, marginBottom: 4 }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: 11, color: T.textMuted, lineHeight: 1.5 }}>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key Capabilities */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20, fontFamily: T.fontMono }}>
          Deployed Capabilities
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              style={{
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 16,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: T.text, fontFamily: SHARP, marginBottom: 8, letterSpacing: "-0.01em" }}>
                {cap.heading}
              </div>
              <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6, marginBottom: 12, flex: 1 }}>
                {cap.description}
              </div>
              <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 12 }}>
                <div style={{ fontSize: 10, color: T.gold, fontWeight: 700, fontFamily: T.fontMono, marginBottom: 4 }}>
                  {cap.metric}
                </div>
                <div style={{ fontSize: 9, color: T.textSubtle, fontFamily: T.fontMono, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {cap.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Highlights */}
      <div style={{
        background: `${T.gold}08`,
        border: `1px solid ${T.gold}25`,
        borderRadius: 16,
        padding: "24px 28px",
      }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>
          Why This Architecture Matters
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { title: "On-Premises Ready", detail: "No vendor lock-in. Deploy to aerospace, defense, healthcare with full data residency." },
            { title: "Cost Efficient", detail: "Small language models (1-7B params) mean on-prem operation has zero LLM token cost." },
            { title: "Technology Agnostic", detail: "Swap ML models, databases, and deployment targets without refactoring core logic." },
            { title: "MIT Validated", detail: "Third-party technical diligence confirmed architecture robustness and code quality." },
            { title: "Built for Scale", detail: "Kubernetes orchestration + automated deployment = grow to 1000 customers without infrastructure bloat." },
            { title: "Security First", detail: "SOC 2 compliant. Encryption by default. Cyber security expertise baked into every layer." },
          ].map((h, idx) => (
            <div key={idx}>
              <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, marginBottom: 4, fontFamily: SHARP }}>
                {h.title}
              </div>
              <div style={{ fontSize: 11, color: T.textMuted, lineHeight: 1.5 }}>
                {h.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
