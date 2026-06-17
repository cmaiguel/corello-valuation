import React, { useState } from "react";
import { C } from "../theme";

type Tab = "objections" | "diligence" | "pitch";

const objections = [
  { q: '"$700K is not ARR."', a: 'Correct. We are not pricing this as mature SaaS ARR. $700K in contracted revenue validates urgent customer demand. The round gives investors 17.24% ownership at $12M pre — fair Seed math.' },
  { q: '"Why not price lower?"', a: '$12M pre is already disciplined. Investors get 17.24% ownership — a meaningful Seed stake. Pricing below $10M undervalues the contracted demand signal and sets a low Series A baseline.' },
  { q: '"Why not wait for more ARR?"', a: 'This round funds conversion of contracted demand into scalable deployments and repeatable ARR. Waiting increases execution risk without reducing cost.' },
  { q: '"Why an AI premium?"', a: 'Vertical AI in manufacturing is high-interest with urgent operational pain. But the valuation is still below what strong recurring ARR would justify. No hype premium is claimed.' },
  { q: '"Valuation seems high for pre-revenue."', a: 'Corello is not pre-revenue. $700K in signed contracted commitments is real customer validation — even if not yet recurring ARR.' },
];

const diligence = [
  "Contract copies — full executed agreements",
  "Revenue breakdown: software vs. services vs. implementation",
  "Payment terms and billing schedule",
  "Cancellation rights and termination clauses",
  "Renewal and expansion mechanics",
  "Customer concentration by revenue",
  "Gross margin incl. AI inference and implementation costs",
  "Deployment timeline and go-live milestones",
  "Sales pipeline by stage",
  "Conversion path from contracted revenue to ARR",
  "Cap table (fully diluted)",
  "Outstanding SAFEs, notes, or side letters",
  "Customer references",
  "Product usage metrics",
  "IP ownership and patent status",
];

const pitchLines = [
  { label: "30-Second Answer", text: 'We\'re raising $2.5M at a $12M pre-money valuation. We have $700K in signed contracted revenue — not ARR. We believe $12M pre is a disciplined Seed valuation that reflects real customer validation while giving new investors approximately 17.2% ownership.' },
  { label: "Why $12M Pre", text: 'We are still early, so we are not pricing Corello like a mature ARR SaaS company. The valuation reflects signed contracted demand, our vertical AI position in manufacturing, and fair Seed ownership math. At $12M pre, the post-money is $14.5M — investors own roughly 17.2%.' },
  { label: 'If investor says "Not ARR"', text: "That's right, and we are being very clear about that. We are not claiming $700K ARR. We are saying $700K of contracted revenue validates urgent customer demand. This round is about converting that demand into repeatable deployments and ARR." },
  { label: 'If investor says "Too high"', text: 'I understand. At $12M pre, investors get 17.2% ownership — meaningful for a Seed round. If the concern is contract quality or ARR conversion risk, we can discuss structure, milestones, or lead allocation. But we believe the headline valuation is reasonable.' },
  { label: "If asked about $10M pre", text: 'We would consider the full package: check size, speed, strategic value, pro rata rights, and ability to help us win manufacturing customers. Our target is $12M pre, but we are optimizing for the right partner, not just the last dollar of valuation.' },
  { label: "If asked about a SAFE", text: 'We can consider a SAFE if it is clean and founder-friendly. A $14.5M post-money SAFE cap is economically similar to a $12M pre-money priced round with a $2.5M raise.' },
];

const tabs: { k: Tab; l: string }[] = [
  { k: "objections", l: "Objections & Responses" },
  { k: "diligence",  l: "Diligence Checklist" },
  { k: "pitch",      l: "Pitch Language" },
];

const ReportPreview: React.FC = () => {
  const [tab, setTab] = useState<Tab>("objections");

  return (
    <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, overflow: "hidden" }}>
      <div style={{ padding: "20px 24px 0", borderBottom: `1px solid ${C.border}` }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary, marginBottom: 4 }}>Investor Prep Documents</h3>
        <p style={{ fontSize: 12, color: C.textMuted, marginBottom: 16 }}>Objection handling · Diligence checklist · Exact pitch language</p>
        <div style={{ display: "flex", gap: 0, marginBottom: -1 }}>
          {tabs.map(t => (
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              padding: "9px 18px", fontSize: 12, fontWeight: 600,
              color: tab === t.k ? C.blueLight : C.textMuted,
              background: "none", border: "none",
              borderBottom: `2px solid ${tab === t.k ? C.blue : "transparent"}`,
              transition: "all 0.15s",
            }}>{t.l}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "24px" }}>
        {tab === "objections" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {objections.map((o, i) => (
              <div key={i} style={{ background: C.bgSurface2, borderRadius: C.rLg, padding: "16px 18px", borderLeft: `3px solid ${C.blue}` }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.textPrimary, marginBottom: 8, fontStyle: "italic" }}>{o.q}</div>
                <div style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.65 }}>{o.a}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "diligence" && (
          <div>
            <p style={{ fontSize: 12, color: C.textMuted, marginBottom: 16 }}>Prepare all items below before first LP meetings. Investors will ask for these.</p>
            <div style={{ columns: 2, columnGap: 24 }}>
              {diligence.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12, breakInside: "avoid" }}>
                  <div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${C.border2}`, flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "pitch" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {pitchLines.map((p, i) => (
              <div key={i} style={{ background: C.bgSurface2, borderRadius: C.rLg, padding: "16px 18px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: C.blue, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{p.label}</div>
                <div style={{ fontSize: 13, color: C.textPrimary, lineHeight: 1.7 }}>"{p.text}"</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPreview;
