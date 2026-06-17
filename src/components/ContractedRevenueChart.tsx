import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, ReferenceLine, Label } from "recharts";
import { C } from "../theme";

const data = [
  { pre: "$8M",  v: 11.4 }, { pre: "$10M", v: 14.3 }, { pre: "$11M", v: 15.7 },
  { pre: "$12M", v: 17.1, highlight: true },
  { pre: "$13M", v: 18.6 }, { pre: "$14M", v: 20.0 }, { pre: "$16M", v: 22.9 }, { pre: "$18M", v: 25.7 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: C.bgSurface2, border: `1px solid ${C.border2}`, borderRadius: C.rLg, padding: "12px 16px", fontSize: 12 }}>
      <div style={{ fontWeight: 700, color: C.textPrimary, marginBottom: 6 }}>{label} Pre-Money</div>
      <div style={{ color: C.violet, fontWeight: 600 }}>{payload[0].value}x contracted revenue</div>
      <div style={{ color: C.amberLight, marginTop: 6, fontSize: 11, fontWeight: 600 }}>⚠ Not an ARR multiple</div>
    </div>
  );
};

const ContractedRevenueChart: React.FC = () => (
  <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "24px 28px" }}>
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary, marginBottom: 8 }}>Contracted Revenue Multiple</h3>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: C.amberBg, border: `1px solid ${C.amberBorder}`, borderRadius: 99, padding: "4px 12px" }}>
        <span style={{ color: C.amberLight, fontSize: 12, fontWeight: 600 }}>⚠ $700K is contracted revenue — NOT ARR. This chart is a sanity check only.</span>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 10, right: 16, bottom: 36, left: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
        <XAxis dataKey="pre" tick={{ fontSize: 11, fill: C.textMuted }}>
          <Label value="Pre-Money Valuation" offset={-16} position="insideBottom" style={{ fontSize: 11, fill: C.textMuted }} />
        </XAxis>
        <YAxis domain={[0, 30]} tickFormatter={v => `${v}x`} tick={{ fontSize: 11, fill: C.textMuted }} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: C.bgSurface2 }} />
        <ReferenceLine y={17.1} stroke={C.blue} strokeDasharray="4 3" strokeWidth={1.5}
          label={{ value: "17.1x @ $12M", fill: C.blueLight, fontSize: 11, fontWeight: 600, position: "insideTopRight" }} />
        <Bar dataKey="v" radius={[4, 4, 0, 0]}>
          {data.map((d, i) => <Cell key={i} fill={(d as any).highlight ? C.blue : C.bgSurface3} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    <p style={{ fontSize: 11, color: C.textDisabled, marginTop: 10 }}>
      Pre-money ÷ $700K contracted revenue. Not comparable to SaaS ARR multiples without adjustment.
    </p>
  </div>
);

export default ContractedRevenueChart;
