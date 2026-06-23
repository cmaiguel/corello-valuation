import React from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const INVESTMENT_BASIS = [
  {
    label: "COMMERCIAL TRACTION",
    metric: "$700K",
    body: "Contracted revenue generated from Jan–Jun 2026. This is not ARR, but it shows manufacturers are willing to pay before the Seed round closes.",
  },
  {
    label: "PIPELINE VISIBILITY",
    metric: "$1.25M",
    body: "$300K near-term pipeline with NDA/LOI activity expected to convert in the next four months, plus $950K of additional hot pipeline expected by EOY 2026 / early 2027.",
  },
  {
    label: "ARR CONVERSION PATH",
    metric: "~$1.7M",
    body: "Target year-end ARR based on contracted revenue converting into recurring deployments plus pipeline conversion. This is a target, not current ARR.",
  },
  {
    label: "INDUSTRIAL AI BENCHMARKS",
    metric: "$5M–$17M",
    body: "Comparable industrial AI seed companies have raised disclosed Seed rounds in this range. These are fundraising benchmarks, not valuation comps, but they support investor appetite for the category.",
  },
  {
    label: "DUAL-USE OPTIONALITY",
    metric: "MITRE + Capital Factory",
    body: "Corello's dual-use manufacturing intelligence application, MITRE LOI, and term sheets from Capital Factory create strategic optionality across defense, resilience, and critical industrial operations. This is strategic validation and future upside, not current revenue.",
    footnote: true,
  },
];

const CONTEXT_CHECKS = [
  {
    label: "CONTRACTED REVENUE CHECK",
    formula: "$12M / $700K",
    multiple: "17.1x",
    body: "High versus mature SaaS, but reasonable as a Seed-stage validation check because the $700K was contracted in six months and before the round.",
  },
  {
    label: "COMMERCIAL VISIBILITY CHECK",
    formula: "$12M / $1.95M",
    multiple: "6.2x",
    body: "Reflects the full commercial horizon: contracted revenue plus near-term and medium-term pipeline.",
  },
  {
    label: "TARGET ARR CHECK",
    formula: "$12M / $1.7M",
    multiple: "7.1x",
    body: "Based on target year-end ARR, not current ARR. This becomes more compelling if pipeline converts into recurring software revenue.",
  },
];

export default function Valuation() {
  return (
    <section id="valuation" style={{ paddingTop: 80, paddingBottom: 80 }}>

      {/* Section header */}
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Valuation Rationale
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          Why $12M pre-money makes sense today.
        </h2>
        <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 620, fontWeight: 400 }}>
          Early traction, visible pipeline, industrial AI benchmarks, and dual-use optionality support the $12M pre-money.
        </p>
      </div>

      {/* Main valuation thesis card */}
      <div style={{
        background: "linear-gradient(135deg, rgba(245,194,0,0.06) 0%, rgba(245,194,0,0.02) 100%)",
        border: `1px solid ${T.goldBorder}`, borderRadius: 16,
        padding: "32px 36px",
        marginBottom: 16,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 12, fontFamily: T.fontMono }}>
              Set Round Valuation
            </div>
            <div style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 800, color: T.gold, letterSpacing: "-0.05em", lineHeight: 1, fontFamily: SHARP, marginBottom: 8 }}>
              $12M
            </div>
            <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 16 }}>Pre-money valuation for a $2.5M Seed raise</div>
            <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 520, fontWeight: 400 }}>
              At $12M pre-money, a $2.5M investment buys 17.24% ownership. The valuation balances early traction, investor ownership, and Corello's opportunity to become the AI-native intelligence layer for manufacturing operations.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, flexShrink: 0 }}>
            {[
              { label: "RAISE",      value: "$2.5M"  },
              { label: "POST-MONEY", value: "$14.5M" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 4, fontFamily: T.fontMono }}>{label}</div>
                <div style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.04em", fontFamily: SHARP }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment basis + context checks */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16 }}>

        {/* Investment basis */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: "28px 30px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 28, fontFamily: T.fontMono }}>
            Investment Basis
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {INVESTMENT_BASIS.map((c, i) => (
              <div key={c.label} style={{
                paddingTop: i === 0 ? 0 : 20,
                paddingBottom: i < INVESTMENT_BASIS.length - 1 ? 20 : 0,
                borderBottom: i < INVESTMENT_BASIS.length - 1 ? `1px solid ${T.border}` : "none",
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 5, fontFamily: T.fontMono }}>
                  {c.label}
                </div>
                <div style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 800, color: T.gold, letterSpacing: "-0.04em", lineHeight: 1, fontFamily: SHARP, marginBottom: 7 }}>
                  {c.metric}
                </div>
                <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6, fontWeight: 400 }}>
                  {c.body}
                </div>
                {c.footnote && (
                  <div style={{ fontSize: 11, color: T.textSubtle, lineHeight: 1.5, marginTop: 8, fontFamily: T.fontMono, borderLeft: `2px solid ${T.border}`, paddingLeft: 10 }}>
                    MITRE LOI should be verified and described accurately in investor materials. Do not present it as contracted revenue unless it is a signed commercial contract.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Context checks + takeaway */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: "28px 30px", flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 6, fontFamily: T.fontMono }}>
              Valuation Context Checks
            </div>
            <div style={{ fontSize: 12, color: T.textSubtle, lineHeight: 1.5, marginBottom: 24 }}>
              These checks show why $12M is a disciplined Seed valuation, not an ARR multiple.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {CONTEXT_CHECKS.map((row, i) => (
                <div key={row.label} style={{
                  paddingTop: i === 0 ? 0 : 18,
                  paddingBottom: i < CONTEXT_CHECKS.length - 1 ? 18 : 0,
                  borderBottom: i < CONTEXT_CHECKS.length - 1 ? `1px solid ${T.border}` : "none",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 5 }}>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: T.fontMono, marginBottom: 2 }}>{row.label}</div>
                      <div style={{ fontSize: 11, color: T.textSubtle }}>{row.formula}</div>
                    </div>
                    <div style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 800, color: T.gold, letterSpacing: "-0.04em", flexShrink: 0, fontFamily: SHARP }}>{row.multiple}</div>
                  </div>
                  <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.55 }}>{row.body}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: "12px 14px", background: T.surface2, border: `1px solid ${T.border}`, fontSize: 11, color: T.textSubtle, lineHeight: 1.6, fontFamily: T.fontMono }}>
              These are valuation context checks, not current ARR multiples. Contracted revenue and pipeline are not ARR.
            </div>
          </div>

          {/* Investor takeaway */}
          <div style={{ background: "linear-gradient(135deg, rgba(245,194,0,0.06) 0%, rgba(245,194,0,0.02) 100%)", border: `1px solid ${T.goldBorder}`, borderRadius: 16, padding: "22px 26px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 10, fontFamily: T.fontMono }}>
              Investor Takeaway
            </div>
            <p style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.7, margin: 0 }}>
              $12M pre-money is the set valuation because Corello has proven early willingness to pay, visible pipeline, a credible path to year-end ARR, industrial AI benchmark support, and strategic dual-use optionality. The round gives investors 17.24% ownership while funding the conversion from contracted demand into repeatable revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
