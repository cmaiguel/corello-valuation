import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { T } from "../theme";
import Benchmarks from "./Benchmarks";
import UseOfFundsMilestones from "./UseOfFundsMilestones";
import Milestones from "./Milestones";
import RevenueProforma from "./RevenueProforma";

type CapRow =
  | { type: "group"; label: string; authorized: string; color: string }
  | { type: "member"; label: string; shares: number; pct: string };

const CAP_TABLE: CapRow[] = [
  { type: "group",  label: "Founding Team", authorized: "7,000,000", color: T.gold },
  { type: "member", label: "Founding Team", shares: 7000000, pct: "98.9%" },
  { type: "group",  label: "Managing Pool", authorized: "2,500,000", color: "#A78BFA" },
  { type: "member", label: "Ben Karrasch · Chief Revenue Officer",  shares: 7000,    pct: "0.1%" },
  { type: "group",  label: "Strategic Advisors", authorized: "500,000",   color: T.blue },
  { type: "member", label: "Sid Bala",      shares: 35000,   pct: "0.5%" },
  { type: "member", label: "Glenn Mueller", shares: 35000,   pct: "0.5%" },
  { type: "group",  label: "Options Pool",  authorized: "700,000",   color: T.green },
  { type: "group",  label: "Investor Pool", authorized: "3,000,000", color: "#F97316" },
];

const REVENUE_PATH = [
  { label: "2026", arr: 1.2 },
  { label: "Y1",   arr: 4.0 },
  { label: "Y2",   arr: 9.6 },
  { label: "Y3",   arr: 27.0 },
  { label: "Y4",   arr: 72.0 },
  { label: "Y5",   arr: 120.0 },
];

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';
const FINANCIALS_PASS = "corello";

function LockedState({ onUnlock }: { onUnlock: () => void }) {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pass === FINANCIALS_PASS) {
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
        <div style={{ fontSize: 18, fontWeight: 700, color: T.gold, marginBottom: 10, fontFamily: SHARP }}>Financials locked</div>
        <div style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.65, marginBottom: 32 }}>
          Enter your password to access financial details.
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


export default function Financials() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section id="financials" style={{ paddingTop: 80, paddingBottom: 80 }}>

      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Financials
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          Financial detail.
        </h2>
      </div>

      {!unlocked ? (
        <LockedState onUnlock={() => setUnlocked(true)} />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Top row: graph + cap table side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "stretch" }}>

            {/* Revenue hockey stick */}
            <div style={{
              borderRadius: 16, padding: "26px 28px",
              background: "linear-gradient(160deg, rgba(245,194,0,0.09) 0%, rgba(245,194,0,0.01) 100%)",
              border: `1px solid rgba(245,194,0,0.2)`,
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.text, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: T.fontMono, marginBottom: 10 }}>
                Projected 100X Path
              </div>
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: "clamp(3rem, 4.5vw, 4.2rem)", fontWeight: 800, color: T.gold, letterSpacing: "-0.05em", lineHeight: 1, fontFamily: SHARP }}>$120M</div>
              </div>

              <div style={{ flex: 1, minHeight: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={REVENUE_PATH} margin={{ top: 8, right: 4, bottom: 0, left: 0 }}>
                    <defs>
                      <linearGradient id="goldGradFin" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor={T.gold} stopOpacity={0.35} />
                        <stop offset="95%" stopColor={T.gold} stopOpacity={0.01} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="label" tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 10, fontFamily: T.fontMono }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12 }}
                      formatter={(v: number) => [`$${v}M`, "ARR"]}
                      labelStyle={{ color: T.textMuted }}
                    />
                    <Area type="monotone" dataKey="arr" stroke={T.gold} strokeWidth={2.5} fill="url(#goldGradFin)" dot={{ fill: T.gold, r: 3.5, strokeWidth: 0 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div style={{ display: "flex", borderTop: `1px solid rgba(245,194,0,0.12)`, paddingTop: 12, marginTop: 12 }}>
                {REVENUE_PATH.map((p, i) => (
                  <div key={p.label} style={{ flex: 1, textAlign: "center", borderRight: i < REVENUE_PATH.length - 1 ? `1px solid rgba(255,255,255,0.05)` : "none" }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: T.text, fontFamily: SHARP, letterSpacing: "-0.02em" }}>${p.arr}M</div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", fontFamily: T.fontMono, marginTop: 2 }}>{p.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cap Table */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: "26px 28px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.text, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: T.fontMono, marginBottom: 4 }}>Cap Table</div>
              <div style={{ fontSize: 11, color: T.text, marginBottom: 20, fontFamily: T.fontMono }}>7M founder shares · 13.7M authorized</div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 70px 110px", gap: 8, padding: "5px 0", borderBottom: `1px solid ${T.border}`, marginBottom: 2 }}>
                {["", "%", "Shares"].map((h, i) => (
                  <div key={i} style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: T.fontMono, textAlign: i === 0 ? "left" : "right" }}>{h}</div>
                ))}
              </div>

              {CAP_TABLE.map((row, i) => row.type === "group" ? (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 70px 110px", gap: 8, padding: "10px 0", borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ width: 3, height: 12, borderRadius: 2, background: row.color, flexShrink: 0 }} />
                    <div style={{ fontSize: 12, fontWeight: 700, color: T.text, fontFamily: SHARP }}>{row.label}</div>
                  </div>
                  <div />
                  <div style={{ fontSize: 11, color: T.textSubtle, textAlign: "right", fontFamily: T.fontMono }}>{row.authorized}</div>
                </div>
              ) : (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 70px 110px", gap: 8, padding: "6px 0", borderBottom: `1px solid rgba(255,255,255,0.025)` }}>
                  <div style={{ paddingLeft: 17, fontSize: 11, color: T.textMuted }}>{row.label}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textAlign: "right", fontFamily: T.fontMono }}>{row.pct}</div>
                  <div style={{ fontSize: 11, color: T.text, textAlign: "right", fontFamily: T.fontMono }}>{row.shares.toLocaleString()}</div>
                </div>
              ))}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 70px 110px", gap: 8, padding: "11px 0", borderTop: `1px solid ${T.border}`, marginTop: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.text, fontFamily: SHARP }}>Totals</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textAlign: "right", fontFamily: T.fontMono }}>100%</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textAlign: "right", fontFamily: T.fontMono }}>7,077,000</div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${T.border}` }}>
            <RevenueProforma />
          </div>

          <div style={{ borderTop: `1px solid ${T.border}` }}>
            <UseOfFundsMilestones />
          </div>

          <div style={{ borderTop: `1px solid ${T.border}` }}>
            <Milestones />
          </div>

          {/* Benchmarks */}
          <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 0 }}>
            <Benchmarks />
          </div>
        </div>
      )}
    </section>
  );
}
