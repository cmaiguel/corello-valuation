import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, Label } from "recharts";
import { C } from "../theme";

const seedData = [
  { company: "Corello",       roundM: 2.5,  color: C.blue,       note: "Target raise · $700K contracted revenue", isTarget: true },
  { company: "Allie AI",      roundM: 5.2,  color: C.bgSurface3, note: "Manufacturing AI / factory intelligence" },
  { company: "Manex AI",      roundM: 9.3,  color: C.bgSurface3, note: "Industrial quality management (€8M)" },
  { company: "Matta",         roundM: 14.0, color: C.bgSurface3, note: "Industrial AI / sentient factories" },
  { company: "Atomic Ind.",   roundM: 17.0, color: C.bgSurface3, note: "AI-enabled manufacturing" },
];

const laterData = [
  { company: "EthonAI",    roundM: 16.5,  stage: "Series A", color: C.violet },
  { company: "Cogna",      roundM: 15.0,  stage: "Series A", color: C.violet },
  { company: "Daedalus",   roundM: 21.0,  stage: "Series A", color: C.violet },
  { company: "Guidewheel", roundM: 31.0,  stage: "Series B", color: C.amber },
  { company: "Tractian",   roundM: 120.0, stage: "Series C", color: C.rose },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{ background: C.bgSurface2, border: `1px solid ${C.border2}`, borderRadius: C.rLg, padding: "12px 16px", fontSize: 12 }}>
      <div style={{ fontWeight: 700, color: C.textPrimary, marginBottom: 6 }}>{label}</div>
      <div style={{ color: d.isTarget ? C.blueLight : C.textPrimary, fontWeight: 600 }}>${payload[0].value}M raise</div>
      {d.note && <div style={{ color: C.textMuted, marginTop: 4, fontSize: 11 }}>{d.note}</div>}
      {d.stage && <div style={{ color: C.violet, marginTop: 4, fontSize: 11, fontWeight: 600 }}>{d.stage}</div>}
      <div style={{ color: C.amberLight, marginTop: 6, fontSize: 10, fontStyle: "italic" }}>Round size only — valuation not disclosed</div>
    </div>
  );
};

const BenchmarkChart: React.FC = () => {
  const [tab, setTab] = useState<"seed" | "later">("seed");
  const display = tab === "seed" ? seedData : laterData;

  return (
    <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "24px 28px" }}>
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary, marginBottom: 4 }}>Comparable Company Benchmarks</h3>
        <p style={{ fontSize: 12, color: C.textMuted }}>Disclosed round sizes · Directional market context · Valuations not implied</p>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {[{ k: "seed", l: "Seed Comps" }, { k: "later", l: "Later-Stage" }].map(({ k, l }) => (
          <button key={k} onClick={() => setTab(k as any)} style={{
            padding: "6px 16px", borderRadius: 8, fontSize: 12, fontWeight: 600,
            background: tab === k ? C.blueBg : C.bgSurface2,
            color: tab === k ? C.blueLight : C.textMuted,
            border: `1px solid ${tab === k ? C.blueBorder : C.border}`,
            transition: "all 0.15s",
          }}>{l}</button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={display} margin={{ top: 10, right: 16, bottom: 36, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
          <XAxis dataKey="company" tick={{ fontSize: 11, fill: C.textMuted }}>
            <Label value="Company" offset={-16} position="insideBottom" style={{ fontSize: 11, fill: C.textMuted }} />
          </XAxis>
          <YAxis tickFormatter={v => `$${v}M`} tick={{ fontSize: 11, fill: C.textMuted }} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: C.bgSurface2 }} />
          <Bar dataKey="roundM" radius={[4, 4, 0, 0]}>
            {display.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: "flex", gap: 16, marginTop: 12, fontSize: 11, color: C.textMuted, flexWrap: "wrap", borderTop: `1px solid ${C.border}`, paddingTop: 12 }}>
        {tab === "seed" ? <>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: C.blue, display: "inline-block" }} /> Corello (target)</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: C.bgSurface3, display: "inline-block" }} /> Seed comps (round size only)</span>
        </> : <>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: C.violet, display: "inline-block" }} /> Series A</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: C.amber, display: "inline-block" }} /> Series B</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: C.rose, display: "inline-block" }} /> Series C</span>
        </>}
        <span style={{ color: C.textDisabled, fontStyle: "italic" }}>Benchmark round sizes ≠ valuations.</span>
      </div>
    </div>
  );
};

export default BenchmarkChart;
