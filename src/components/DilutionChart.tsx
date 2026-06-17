import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer, Label, ReferenceDot } from "recharts";
import { C } from "../theme";

const data = [
  { pre: 8,  own: 23.81 },
  { pre: 10, own: 20.00 },
  { pre: 11, own: 18.52 },
  { pre: 12, own: 17.24 },
  { pre: 13, own: 16.13 },
  { pre: 14, own: 15.15 },
  { pre: 15, own: 14.29 },
  { pre: 16, own: 13.51 },
  { pre: 18, own: 12.20 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const own = payload[0].value as number;
  return (
    <div style={{ background: C.bgSurface2, border: `1px solid ${C.border2}`, borderRadius: C.rLg, padding: "12px 16px", fontSize: 12 }}>
      <div style={{ fontWeight: 700, color: C.textPrimary, marginBottom: 6 }}>${label}M Pre-Money</div>
      <div style={{ color: C.blueLight, fontWeight: 600 }}>Investor: {own.toFixed(2)}%</div>
      <div style={{ color: C.textMuted, marginTop: 2 }}>Founders: {(100 - own).toFixed(2)}%</div>
      {label === 12 && <div style={{ color: C.green, fontWeight: 600, marginTop: 6, fontSize: 11 }}>✓ Recommended</div>}
    </div>
  );
};

const DilutionChart: React.FC = () => (
  <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "24px 28px" }}>
    <div style={{ marginBottom: 20 }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary, marginBottom: 4 }}>Dilution Sensitivity</h3>
      <p style={{ fontSize: 12, color: C.textMuted }}>Investor ownership % for a $2.5M raise — lower pre-money = more dilution</p>
    </div>
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 16, right: 24, bottom: 36, left: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
        <XAxis dataKey="pre" tickFormatter={v => `$${v}M`} tick={{ fontSize: 11, fill: C.textMuted }}>
          <Label value="Pre-Money Valuation" offset={-16} position="insideBottom" style={{ fontSize: 11, fill: C.textMuted }} />
        </XAxis>
        <YAxis domain={[10, 26]} tickFormatter={v => `${v}%`} tick={{ fontSize: 11, fill: C.textMuted }}>
          <Label value="Investor Ownership" angle={-90} position="insideLeft" offset={16} style={{ fontSize: 11, fill: C.textMuted }} />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine x={12} stroke={C.blue} strokeDasharray="4 3" strokeWidth={1.5} />
        <ReferenceLine y={17.24} stroke={C.blue} strokeDasharray="4 3" strokeWidth={1.5} />
        <Line type="monotone" dataKey="own" stroke={C.bgSurface3} strokeWidth={2} dot={false} activeDot={{ r: 4, fill: C.blue, stroke: C.bgPage, strokeWidth: 2 }} />
        <ReferenceDot x={12} y={17.24} r={6} fill={C.blue} stroke={C.bgPage} strokeWidth={2} label={{ value: "17.24%", fill: C.blueLight, fontSize: 11, fontWeight: 600, position: "right" }} />
      </LineChart>
    </ResponsiveContainer>
    <div style={{ display: "flex", gap: 20, marginTop: 8, fontSize: 12, color: C.textMuted, flexWrap: "wrap" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.blue, display: "inline-block" }} />
        <span style={{ color: C.blueLight, fontWeight: 600 }}>$12M pre → 17.24% ownership</span>
      </span>
      <span>Fair range: $10M–$13M pre</span>
    </div>
  </div>
);

export default DilutionChart;
