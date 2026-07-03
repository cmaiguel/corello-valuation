import React, { useState } from "react";
import { T } from "../theme";
import "./dataroom.css";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';
const TECHNOLOGY_PASSES = ["corello123", "ireallylikecorello"];

function LockedState({ onUnlock }: { onUnlock: () => void }) {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (TECHNOLOGY_PASSES.includes(pass)) {
      onUnlock();
    } else {
      setError(true);
      setPass("");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
      <div style={{
        background: T.surface, border: `1px solid ${T.border}`,
        borderRadius: 16, padding: "48px 44px",
        maxWidth: 400, width: "100%", textAlign: "center",
        boxShadow: "0 8px 48px rgba(0,0,0,0.3)",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: T.surface2, border: `1px solid ${T.border2}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px", fontSize: 24,
        }}>
          🔒
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: T.gold, marginBottom: 10, fontFamily: SHARP }}>Technology locked</div>
        <div style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.65, marginBottom: 32 }}>
          Enter your password to access technical details.
        </div>

        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="password" value={pass} autoFocus
            onChange={e => { setPass(e.target.value); setError(false); }}
            placeholder="Enter password"
            style={{
              width: "100%", padding: "11px 14px", fontSize: 14,
              border: `1.5px solid ${error ? "#F87171" : T.border2}`, borderRadius: 10,
              background: T.surface2, color: T.text, fontFamily: T.font,
              outline: "none", boxSizing: "border-box",
            }}
          />
          {error && (
            <div style={{ fontSize: 12, color: "#F87171" }}>Incorrect password.</div>
          )}
          <button type="submit" style={{
            width: "100%", padding: "11px", fontSize: 14, fontWeight: 700,
            background: T.gold, color: "#0A0E1A",
            border: "none", borderRadius: 10,
            cursor: "pointer", fontFamily: T.font,
          }}>
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.04em", lineHeight: 1.2, margin: "0 0 12px", fontFamily: SHARP }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: T.textMuted, lineHeight: 1.6, margin: 0, maxWidth: 720, fontFamily: T.font }}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

function Card({ children, gold }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <div style={{
      background: gold ? "linear-gradient(135deg, rgba(245,194,0,0.08) 0%, rgba(245,194,0,0.02) 100%)" : T.surface,
      border: `1px solid ${gold ? "rgba(245,194,0,0.18)" : T.border}`,
      borderRadius: 12,
      padding: "clamp(16px, 4vw, 24px)",
      lineHeight: 1.6,
      fontSize: "clamp(13px, 1.5vw, 14px)",
      color: T.text,
      fontFamily: T.font,
    }}>
      {children}
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span style={{ color: T.text, fontWeight: 700 }}>{children}</span>;
}

export default function Technology() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section id="technology" className="dr-section">
      <div>
        {!unlocked ? (
          <LockedState onUnlock={() => setUnlocked(true)} />
        ) : (
          <>
        {/* Page Header */}
        <div style={{ marginBottom: 44 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 12, fontFamily: "'Geist Mono', monospace" }}>
            Technology
          </div>
          <h1 style={{ fontSize: "clamp(2.8rem, 5.2vw, 4.4rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.04em", lineHeight: 1.2, margin: "0 0 20px", fontFamily: SHARP }}>
            Technology
          </h1>
          <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 720, fontFamily: T.font }}>
            Enterprise-grade AI infrastructure for capturing manufacturing tribal knowledge and turning it into operational intelligence.
          </p>
        </div>

        {/* Section 1: Technical Architecture */}
        <Section title="Technical Architecture">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 0 }}>
            <Card>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>Infrastructure Foundation</div>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
                <li style={{ marginBottom: 8 }}>Built on <Highlight>.NET Core and Azure AKS</Highlight></li>
                <li style={{ marginBottom: 8 }}>Fully containerized with Kubernetes</li>
                <li>Infrastructure-as-code for portability across cloud, on-prem, GCP, or AWS</li>
              </ul>
            </Card>

            <Card>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>Architecture & Deployment</div>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
                <li style={{ marginBottom: 8 }}>Automated CI/CD from commit to deployment in minutes</li>
                <li style={{ marginBottom: 8 }}>Onion/layered architecture designed for future decomposition</li>
                <li>API-first and MCP-first architecture</li>
              </ul>
            </Card>

            <Card>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>Vendor Flexibility & Security</div>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
                <li style={{ marginBottom: 8 }}><Highlight>Vendor-agnostic</Highlight> by design: vector DB, graph DB, and LLM components can be swapped</li>
                <li>Security-first foundation, with <Highlight>SOC 2 in progress</Highlight></li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Section 2: Knowledge Capture Engine */}
        <Section title="Knowledge Capture Engine" subtitle="Two complementary paths to capture manufacturing tribal knowledge">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 32 }}>
            <Card gold>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>Document Ingestion</div>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc", fontSize: 13 }}>
                <li style={{ marginBottom: 6 }}>Quality documents</li>
                <li style={{ marginBottom: 6 }}>ISO certifications</li>
                <li style={{ marginBottom: 6 }}>Procedures</li>
                <li style={{ marginBottom: 6 }}>Paper travelers</li>
                <li style={{ marginBottom: 6 }}>Quotes and RFQ history</li>
                <li>Shared-drive documents</li>
              </ul>
            </Card>

            <Card gold>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>Conversational Capture</div>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc", fontSize: 13 }}>
                <li style={{ marginBottom: 6 }}>Email agents like <Highlight>sofia@corello.ai</Highlight></li>
                <li style={{ marginBottom: 6 }}>Users interact through existing workflows</li>
                <li style={{ marginBottom: 6 }}>Feedback and corrections enrich the knowledge map</li>
                <li>System identifies gaps and asks targeted questions</li>
              </ul>
            </Card>
          </div>

          <Card>
            <div style={{ textAlign: "center", fontSize: 13, color: T.textMuted, fontFamily: T.font, lineHeight: 1.8 }}>
              Documents + Conversations → Knowledge Graph + Vector Layer → AI Coworkers → Operational Decisions
            </div>
          </Card>

          <div style={{ marginTop: 24, padding: "28px 32px", background: "rgba(245,194,0,0.05)", border: `1px solid rgba(245,194,0,0.18)`, borderLeft: `3px solid ${T.gold}`, borderRadius: 12 }}>
            <p style={{ margin: 0, fontSize: "clamp(16px, 1.9vw, 19px)", color: T.text, lineHeight: 1.65, fontFamily: T.font }}>
              <span style={{ color: T.gold, fontWeight: 800 }}>Corello is ontology-free.</span> Manufacturers can start ingesting data from day one without months of manual ontology work. Knowledge emerges from documents and conversations—no heavy configuration required.
            </p>
          </div>
        </Section>

        {/* Section 3: Hybrid Graph + Vector Intelligence */}
        <Section title="Knowledge Graph as the Manufacturing Intelligence Layer" subtitle="Hybrid graph and vector architecture as the middleware between company data and LLMs">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 0 }}>
            <Card>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>Architecture</div>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
                <li style={{ marginBottom: 8 }}>Knowledge stored in hybrid graph and vector architecture</li>
                <li style={{ marginBottom: 8 }}>Knowledge graph acts as middleware between company data and LLMs</li>
                <li>Reduces hallucination risk by grounding responses in company-specific knowledge</li>
              </ul>
            </Card>

            <Card>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>Scalability & Control</div>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
                <li style={{ marginBottom: 8 }}>One customer knowledge map reached <Highlight>5,000+ nodes and 4,000+ relationships</Highlight></li>
                <li style={{ marginBottom: 8 }}>Domains can be activated or deactivated to control knowledge exposure</li>
                <li>Designed to eventually support live data access</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Section 4: AI Coworker Model */}
        <Section title="AI Coworker Model" subtitle="Operating through existing channels, not forcing new UIs">
          <Card gold>
            <div style={{ marginBottom: 16 }}>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
                <li style={{ marginBottom: 12 }}>Corello does not force manufacturers to adopt a new UI</li>
                <li style={{ marginBottom: 12 }}>AI coworkers operate through <Highlight>existing channels</Highlight> like email, Teams, Slack, and future floor interfaces</li>
                <li style={{ marginBottom: 12 }}>Example: Sophia receives an RFQ by email and replies with a proposed quote</li>
                <li style={{ marginBottom: 12 }}>Feedback from users improves the knowledge map</li>
                <li style={{ marginBottom: 12 }}>Admin users can track quote activity, win rates, and settings</li>
                <li>Floor users do not need to learn new software</li>
              </ul>
            </div>

            <div style={{ borderTop: `1px solid rgba(245,194,0,0.2)`, paddingTop: 16, marginTop: 16, textAlign: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: T.gold, fontFamily: SHARP }}>Zero change management for end users.</div>
            </div>
          </Card>
        </Section>

        {/* Section 5: Deployment and Security */}
        <Section title="Deployment and Security">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 0 }}>
            <Card>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>Current & Planned Deployments</div>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
                <li style={{ marginBottom: 8 }}>Current customers running on Azure cloud</li>
                <li style={{ marginBottom: 8 }}><Highlight>On-prem deployment</Highlight> supported and ready</li>
                <li style={{ marginBottom: 8 }}>On-prem critical for defense and regulated industries</li>
                <li>Microsoft GCC path under discussion for defense-related opportunities</li>
              </ul>
            </Card>

            <Card>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.gold, marginBottom: 12, fontFamily: SHARP }}>Security & Compliance</div>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
                <li style={{ marginBottom: 8 }}><Highlight>SOC 2 in progress</Highlight></li>
                <li style={{ marginBottom: 8 }}>Corello operates inside customer-compliant environments</li>
                <li>Security-first design led by technical team with cybersecurity background</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Section 7: Internal Development Velocity */}
        <Section title="AstroForge: Internal Development Acceleration" subtitle="Internal tool for parallel project execution and knowledge propagation">
          <Card>
            <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
              <li style={{ marginBottom: 12 }}>Internal tool used to run <Highlight>20–30 projects in parallel</Highlight></li>
              <li style={{ marginBottom: 12 }}>Orchestrates multiple Claude/code sessions through persistent Tmux sockets</li>
              <li style={{ marginBottom: 12 }}>Uses spec-first workflows with milestones and phases before code is written</li>
              <li style={{ marginBottom: 12 }}>Helps manage git-based collaboration and avoid development collisions</li>
              <li style={{ marginBottom: 12 }}>Extracts reusable patterns and principles into developer persona graphs</li>
              <li style={{ marginBottom: 12 }}>Allows non-technical team members to produce near-engineer-quality output</li>
              <li>Outcome: faster customer feature iteration without sacrificing quality</li>
            </ul>
          </Card>
          <div style={{ marginTop: 16, padding: "14px 16px", background: "rgba(255,255,255,0.02)", borderLeft: `2px solid ${T.gold}`, borderRadius: 4 }}>
            <p style={{ margin: 0, fontSize: 12, color: T.textMuted, fontFamily: "'Geist Mono', monospace" }}>
              Note: AstroForge is an internal engineering advantage and not part of the customer-facing product.
            </p>
          </div>
        </Section>

        {/* Section 8: Technical Moat */}
        <Section title="Technical Moat">
          <Card gold>
            <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc" }}>
              <li style={{ marginBottom: 12 }}>Tribal knowledge capture from both documents and people</li>
              <li style={{ marginBottom: 12 }}>Embedded customer-specific knowledge graph creates high switching costs</li>
              <li style={{ marginBottom: 12 }}>Ontology-free ingestion reduces implementation burden</li>
              <li style={{ marginBottom: 12 }}>UI-agnostic coworker model avoids change management friction</li>
              <li style={{ marginBottom: 12 }}>On-prem-ready architecture opens regulated and defense manufacturing</li>
              <li>Vendor-agnostic infrastructure reduces dependency risk</li>
            </ul>
          </Card>
        </Section>
          </>
        )}

      </div>
    </section>
  );
}
