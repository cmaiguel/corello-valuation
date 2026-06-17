import React from "react";
import { T } from "../theme";

export default function InvestorTakeaway({ text, compact }: { text: string; compact?: boolean }) {
  return (
    <div style={{
      background: T.blueBg,
      border: `1px solid ${T.blueBorder}`,
      borderRadius: T.rLg,
      padding: compact ? "12px 18px" : "16px 22px",
      display: "flex", gap: 12, alignItems: "flex-start",
    }}>
      <div style={{
        width: 20, height: 20, borderRadius: "50%", background: T.blue,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: 1,
      }}>
        <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>→</span>
      </div>
      <p style={{ fontSize: compact ? 13 : 14, color: T.blue, fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
        {text}
      </p>
    </div>
  );
}
