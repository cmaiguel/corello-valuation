import React, { useState } from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

type Status = "Client" | "NDA/LOI Signed" | "In Conversations" | "2026 Pipeline" | "2027 Pipeline";

interface ProformaRow {
  status: Status;
  client: string;
  m: number[]; // JAN–DEC (12 values)
  total: number;
}

const STATUS_COLOR: Record<Status, string> = {
  "Client":           T.gold,
  "NDA/LOI Signed":   T.green,
  "In Conversations": "#F97316",
  "2026 Pipeline":    "#A78BFA",
  "2027 Pipeline":    "rgba(255,255,255,0.3)",
};

const Z = [0,0,0,0,0,0,0,0,0,0,0,0];

const ROWS: ProformaRow[] = [
  // Clients
  { status:"Client",         client:"Customer A",           m:[0,0,10000,10000,10000,0,5000,5000,5000,5000,0,0],       total:50000  },
  { status:"Client",         client:"Customer B",           m:[0,0,0,0,0,4500,4500,4500,4500,4500,4500,4500],          total:31500  },
  { status:"Client",         client:"Customer C",           m:[0,0,0,0,0,0,4500,4500,4500,4500,4500,4500],             total:27000  },
  { status:"Client",         client:"Customer D",           m:[0,0,0,0,0,0,0,0,0,4500,4500,4500],                      total:13500  },
  { status:"Client",         client:"Customer E",           m:[0,0,0,0,0,0,0,0,0,0,4500,4500],                         total:9000   },
  { status:"Client",         client:"Customer F",           m:[0,0,0,0,0,0,0,0,0,0,0,4500],                            total:4500   },
  { status:"Client",         client:"Customer G",           m:Z,                                                        total:0      },
  { status:"Client",         client:"Customer H",           m:Z,                                                        total:0      },
  { status:"Client",         client:"Customer I",           m:Z,                                                        total:0      },
  { status:"Client",         client:"Customer J",           m:Z,                                                        total:0      },
  { status:"Client",         client:"Customer K",           m:Z,                                                        total:0      },
  { status:"Client",         client:"Customer L",           m:Z,                                                        total:0      },
  { status:"Client",         client:"Customer M",           m:Z,                                                        total:0      },
  // NDA/LOI
  { status:"NDA/LOI Signed", client:"Customer N",           m:[0,0,0,0,0,0,4500,4500,4500,4500,4500,4500],            total:27000  },
  { status:"NDA/LOI Signed", client:"Customer O",           m:[0,0,0,0,0,0,0,0,4500,4500,4500,4500],                  total:18000  },
  { status:"NDA/LOI Signed", client:"Customer P",           m:[0,0,0,0,0,0,0,0,0,0,4500,4500],                         total:9000   },
  { status:"NDA/LOI Signed", client:"Customer Q",           m:[0,0,0,0,0,0,0,4500,4500,4500,4500,4500],                total:22500  },
  { status:"NDA/LOI Signed", client:"Customer R",           m:[0,0,0,0,0,0,0,4500,4500,4500,4500,4500],                total:22500  },
  { status:"NDA/LOI Signed", client:"Customer S",           m:[0,0,0,0,0,0,0,4500,4500,4500,4500,4500],                total:22500  },
  { status:"NDA/LOI Signed", client:"Customer V",           m:Z,                                                        total:0      },
  // In Conversations
  { status:"In Conversations", client:"Customer T",         m:Z,                                                        total:0      },
  { status:"In Conversations", client:"Customer U",         m:Z,                                                        total:0      },
  // 2026 Pipeline
  { status:"2026 Pipeline",  client:"Customer W",           m:Z,                                                        total:0      },
  { status:"2026 Pipeline",  client:"Customer X",           m:[0,0,0,0,0,0,0,4500,4500,4500,4500,4500],                total:22500  },
  { status:"2026 Pipeline",  client:"Customer Y",           m:[0,0,0,0,0,0,0,0,4500,4500,4500,4500],                   total:18000  },
  { status:"2026 Pipeline",  client:"Customer Z",           m:[0,0,0,0,0,0,0,0,0,0,4500,4500],                         total:9000   },
  { status:"2026 Pipeline",  client:"Customer AA",          m:[0,0,0,0,0,0,0,0,0,0,4500,4500],                         total:9000   },
  { status:"2026 Pipeline",  client:"Customer AB",          m:[0,0,0,0,0,0,0,0,0,4500,4500,4500],                      total:13500  },
  { status:"2026 Pipeline",  client:"Customer AC",          m:[0,0,0,0,0,0,0,0,0,0,4500,4500],                         total:9000   },
  { status:"2026 Pipeline",  client:"Customer AD",          m:[0,0,0,0,0,0,0,0,0,0,0,4500],                            total:4500   },
  { status:"2026 Pipeline",  client:"Customer AE",          m:[0,0,0,0,0,0,0,0,0,0,4500,4500],                         total:9000   },
  { status:"2026 Pipeline",  client:"Customer AF",          m:Z,                                                        total:0      },
  { status:"2026 Pipeline",  client:"Customer AG",          m:Z,                                                        total:0      },
  { status:"2026 Pipeline",  client:"Customer AH",          m:Z,                                                        total:0      },
  { status:"2026 Pipeline",  client:"Customer AI",          m:Z,                                                        total:0      },
  { status:"2026 Pipeline",  client:"Customer AJ",          m:Z,                                                        total:0      },
  { status:"2026 Pipeline",  client:"Customer AK",          m:Z,                                                        total:0      },
  { status:"2026 Pipeline",  client:"Customer AL",          m:Z,                                                        total:0      },
  // 2027 Pipeline
  { status:"2027 Pipeline",  client:"Customer AM",          m:Z,                                                        total:0      },
  { status:"2027 Pipeline",  client:"Customer AN",          m:Z,                                                        total:0      },
  { status:"2027 Pipeline",  client:"Customer AO",          m:Z,                                                        total:0      },
];

const MONTHLY_TOTALS = MONTHS.map((label, i) => ({
  label,
  revenue: ROWS.reduce((s, r) => s + r.m[i], 0),
}));

const GRAND_TOTAL = 351500;

const fmtK = (n: number) => n === 0 ? "—" : `$${(n/1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;

const STATUSES: Status[] = ["Client","NDA/LOI Signed","In Conversations","2026 Pipeline","2027 Pipeline"];

const STATUS_LABEL: Record<Status, string> = {
  "Client":           "Client",
  "NDA/LOI Signed":   "NDA/LOI",
  "In Conversations": "Conversations",
  "2026 Pipeline":    "Pipeline '26",
  "2027 Pipeline":    "Pipeline '27",
};

export default function RevenueProforma() {
  const [activeStatus, setActiveStatus] = useState<Status | "All">("All");

  const filtered = activeStatus === "All" ? ROWS : ROWS.filter(r => r.status === activeStatus);

  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>

      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Revenue Proforma
        </div>
        <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.04em", margin: "0 0 10px", fontFamily: SHARP }}>
          2026 Revenue Build
        </h3>
        <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 700, color: T.text, margin: "0 0 8px", fontFamily: SHARP, letterSpacing: "-0.02em" }}>
          $700K contracted revenue in <span style={{ color: T.gold }}>6 months of operations.</span>
        </p>
      </div>

      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Contracted Revenue", value: "$700K",  color: T.gold    },
          { label: "Active Clients",     value: "13",     color: T.gold    },
          { label: "NDA / LOI",          value: "6",      color: T.green   },
          { label: "In Pipeline",        value: "$1.1M",  color: "#A78BFA" },
        ].map(k => (
          <div key={k.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: "16px 18px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: T.fontMono, marginBottom: 6 }}>{k.label}</div>
            <div style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)", fontWeight: 800, color: k.color, letterSpacing: "-0.04em", fontFamily: SHARP }}>{k.value}</div>
          </div>
        ))}
      </div>


      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 14, flexWrap: "wrap" }}>
        {(["All", ...STATUSES] as (Status | "All")[]).map(s => {
          const isActive = activeStatus === s;
          const color = s === "All" ? T.text : STATUS_COLOR[s as Status];
          return (
            <button key={s} onClick={() => setActiveStatus(s)} style={{
              padding: "5px 12px", border: `1px solid ${isActive ? color : "rgba(255,255,255,0.08)"}`,
              borderRadius: 6, fontSize: 11, fontWeight: isActive ? 700 : 400,
              background: isActive ? `${color}15` : "transparent",
              color: isActive ? color : T.textMuted,
              cursor: "pointer", fontFamily: T.fontMono, transition: "all 0.15s",
            }}>
              {s === "All" ? "All" : STATUS_LABEL[s as Status]}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: "auto" }}>
        <div style={{ minWidth: 1100 }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 80px repeat(12, 1fr) 80px", gap: 0, padding: "10px 20px", borderBottom: `1px solid ${T.border}`, background: T.surface2 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: T.fontMono }}>Client</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: T.fontMono }}>Status</div>
            {MONTHS.map(m => (
              <div key={m} style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: T.fontMono, textAlign: "right" }}>{m}</div>
            ))}
            <div style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: T.fontMono, textAlign: "right" }}>Total</div>
          </div>

          {filtered.map((row, i) => (
            <div key={`${row.client}-${i}`} style={{
              display: "grid", gridTemplateColumns: "200px 80px repeat(12, 1fr) 80px",
              gap: 0, padding: "8px 20px",
              borderBottom: i < filtered.length - 1 ? `1px solid rgba(255,255,255,0.04)` : "none",
              background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
            }}>
              <div style={{ fontSize: 11, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingRight: 8 }}>{row.client}</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{
                  fontSize: 8, fontWeight: 700, color: STATUS_COLOR[row.status],
                  background: `${STATUS_COLOR[row.status]}18`,
                  border: `1px solid ${STATUS_COLOR[row.status]}30`,
                  borderRadius: 3, padding: "2px 5px", fontFamily: T.fontMono, whiteSpace: "nowrap",
                }}>
                  {STATUS_LABEL[row.status]}
                </span>
              </div>
              {row.m.map((v, j) => (
                <div key={j} style={{ fontSize: 10, color: v > 0 ? T.text : "rgba(255,255,255,0.12)", textAlign: "right", fontFamily: T.fontMono }}>
                  {fmtK(v)}
                </div>
              ))}
              <div style={{ fontSize: 10, fontWeight: 700, color: row.total > 0 ? T.gold : "rgba(255,255,255,0.12)", textAlign: "right", fontFamily: T.fontMono }}>
                {row.total > 0 ? `$${row.total.toLocaleString()}` : "—"}
              </div>
            </div>
          ))}

          {/* Totals */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 80px repeat(12, 1fr) 80px", gap: 0, padding: "11px 20px", borderTop: `1px solid ${T.border}`, background: T.surface2 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.text, fontFamily: SHARP }}>Total</div>
            <div />
            {MONTHLY_TOTALS.map((m, j) => (
              <div key={j} style={{ fontSize: 10, fontWeight: 700, color: m.revenue > 0 ? T.gold : "rgba(255,255,255,0.12)", textAlign: "right", fontFamily: T.fontMono }}>
                {fmtK(m.revenue)}
              </div>
            ))}
            <div style={{ fontSize: 11, fontWeight: 800, color: T.gold, textAlign: "right", fontFamily: SHARP }}>$351,500</div>
          </div>
        </div>
      </div>

    </section>
  );
}
