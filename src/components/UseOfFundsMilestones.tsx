import React from "react";
import { T } from "../theme";

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 10, fontFamily: T.fontMono }}>{eyebrow}</div>
      <h2 style={{ fontSize: 36, fontWeight: 800, color: T.text, letterSpacing: "-0.03em", margin: "0 0 10px", fontFamily: T.fontHead }}>{title}</h2>
      {sub && <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.65, margin: 0, maxWidth: 560 }}>{sub}</p>}
    </div>
  );
}

const USE_OF_FUNDS = [
  { label: "Salaries & Core Team",  pct: 38, amountK: 950,  color: T.gold,       detail: "Cover existing 9-person team + 5 planned hires through breakeven (April 2027)." },
  { label: "Go-To-Market",          pct: 24, amountK: 600,  color: T.blue,       detail: "Paid media, events, content, sales tools, and marketing associates." },
  { label: "Customer Success",      pct: 20, amountK: 500,  color: T.green,      detail: "CS Lead 2 hire (Jan 2027), onboarding programs, CS tech stack." },
  { label: "Product Development",   pct: 18, amountK: 450,  color: "#A78BFA",    detail: "SW Dev 2 hire, AI infrastructure, cloud scaling, R&D." },
];

const MILESTONES = [
  {
    quarter: "Q3 2026",
    title: "GTM & CS launch",
    items: [
      "CS Lead 2 and Marketing Associate onboarded",
      "Nationwide GTM campaign launched",
      "15+ manufacturers in active pipeline",
    ],
    color: T.gold,
  },
  {
    quarter: "Q4 2026",
    title: "Pipeline converts",
    items: [
      "~$85K MRR from signed accounts",
      "5+ new clients onboarded from pipeline",
      "SW Dev 2 join, product velocity accelerates",
    ],
    color: T.blue,
  },
  {
    quarter: "Q1 2027",
    title: "Breakeven in sight",
    items: [
      "Cashflow breakeven reached (April 2027)",
      "29 clients active — $287K MRR",
      "CS team at full capacity, <5% churn",
    ],
    color: T.green,
  },
  {
    quarter: "Q2 2027",
    title: "Series A ready",
    items: [
      "$3.45M ARR run-rate established",
      "75% gross margin, NRR metrics clean",
      "Corello positioned for Series A raise",
    ],
    color: "#A78BFA",
  },
];

const REVENUE_PATH = [
  { label: "2026",  arr: 0.6,  isCurrent: true },
  { label: "2027",  arr: 3.5,  isCurrent: false },
  { label: "2028",  arr: 8.6,  isCurrent: false },
  { label: "2029",  arr: 25.9, isCurrent: false },
  { label: "2030",  arr: 90.6, isCurrent: false },
];

const RUNWAY_STATS = [
  { label: "Monthly burn",     value: "~$131K",    sub: "blended avg" },
  { label: "Breakeven",        value: "Apr 2027",  sub: "month 16" },
  { label: "Headcount",        value: "9 → 14",    sub: "FTEs" },
  { label: "Gross margin",     value: "75%",       sub: "all years" },
];

export default function UseOfFundsMilestones() {
  const maxArr = 90.6;

  return (
    <section id="use-of-funds" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <SectionHeader
        eyebrow="Use of funds & milestones"
        title="What $2.5M funds."
        sub="The $2.5M Seed funds product, GTM, and team — converting contracted demand into repeatable ARR and building toward a Series A."
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>

        {/* Use of Funds */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.rXl, padding: "28px 30px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 24 }}>
            Use of Funds — $2.5M
          </div>

          {/* Stacked bar */}
          <div style={{ display: "flex", height: 8, overflow: "hidden", marginBottom: 28, gap: 2 }}>
            {USE_OF_FUNDS.map(c => (
              <div key={c.label} style={{ flex: c.pct, background: c.color, opacity: 0.9 }} />
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {USE_OF_FUNDS.map((c, i) => (
              <div key={c.label} style={{
                display: "grid", gridTemplateColumns: "10px 1fr auto auto",
                alignItems: "flex-start", gap: 14,
                padding: "14px 0",
                borderBottom: i < USE_OF_FUNDS.length - 1 ? `1px solid ${T.border}` : "none",
              }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: c.color, marginTop: 4, flexShrink: 0, opacity: 0.9 }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{c.label}</div>
                  <div style={{ fontSize: 11, color: T.textSubtle, marginTop: 3, lineHeight: 1.4 }}>{c.detail}</div>
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, textAlign: "right", whiteSpace: "nowrap" }}>{c.pct}%</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: c.color, textAlign: "right", whiteSpace: "nowrap" }}>${(c.amountK / 1000).toFixed(2)}M</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, padding: "14px 16px", background: T.surface2, borderRadius: T.rMd }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Runway stats</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {RUNWAY_STATS.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: T.gold, letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: T.textSubtle, marginTop: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: T.textSubtle }}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 12, color: T.textMuted }}>Estimated runway</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: T.text }}>18–20 months</div>
            </div>
          </div>
        </div>

        {/* Revenue trajectory */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.rXl, padding: "28px 30px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 24 }}>
            Revenue trajectory (projected)
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {REVENUE_PATH.map(row => {
              const pct = Math.max((row.arr / maxArr) * 100, 2);
              return (
                <div key={row.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontSize: 13, fontWeight: row.isCurrent ? 700 : 500, color: row.isCurrent ? T.gold : T.text }}>
                      {row.label} {row.isCurrent && <span style={{ fontSize: 10, color: T.textSubtle }}>← target</span>}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: row.isCurrent ? T.gold : T.text, letterSpacing: "-0.02em" }}>
                      ${row.arr}M ARR
                    </div>
                  </div>
                  <div style={{ height: 7, background: T.surface2, borderRadius: 99, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", borderRadius: 99,
                      width: `${pct}%`,
                      background: row.isCurrent ? T.gold : `linear-gradient(90deg, ${T.blue}, ${T.gold})`,
                      opacity: row.isCurrent ? 1 : 0.7,
                    }} />
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 22, fontSize: 11, color: T.textSubtle, lineHeight: 1.6 }}>
            Projections from the Corello financial model. Not a guarantee of future results.
          </div>

          <div style={{ marginTop: 14, padding: "12px 16px", background: T.goldBg, border: `1px solid ${T.goldBorder}`, borderRadius: T.rMd }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.gold, marginBottom: 3 }}>150x path over 5 years</div>
            <div style={{ fontSize: 11, color: T.textMuted }}>$0.6M → $90.6M ARR — product velocity, GTM scale, and market penetration. 75% gross margin throughout.</div>
          </div>
        </div>
      </div>

      {/* Milestone timeline */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.rXl, padding: "28px 32px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 28 }}>
          Key milestones with this raise
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, position: "relative" }}>
          {/* connector line */}
          <div style={{
            position: "absolute", top: 18, left: "12.5%", right: "12.5%", height: 2,
            background: `linear-gradient(90deg, ${T.gold}, ${T.blue}, ${T.green}, #A78BFA)`,
            zIndex: 0,
          }} />

          {MILESTONES.map((m, i) => (
            <div key={i} style={{ position: "relative", zIndex: 1, paddingTop: 0 }}>
              {/* dot */}
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: T.surface, border: `2px solid ${m.color}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
              }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: m.color }} />
              </div>

              <div style={{ textAlign: "center", padding: "0 12px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: m.color, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>{m.quarter}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 10 }}>{m.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {m.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 7, alignItems: "flex-start", textAlign: "left" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: m.color, marginTop: 5, flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: T.textMuted, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
