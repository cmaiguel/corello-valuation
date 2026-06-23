import React, { useState } from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const MONTHS = ["MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

type Status = "Client" | "NDA/LOI Signed" | "Wait and Watch" | "In Conversations" | "2026 Pipeline" | "2027 Pipeline";

interface ProformaRow {
  status: Status;
  client: string;
  m: number[]; // MAR–DEC (10 values)
  total: number;
}

const STATUS_COLOR: Record<Status, string> = {
  "Client":           T.gold,
  "NDA/LOI Signed":   T.green,
  "Wait and Watch":   T.blue,
  "In Conversations": "#F97316",
  "2026 Pipeline":    "#A78BFA",
  "2027 Pipeline":    "rgba(255,255,255,0.3)",
};

const Z = [0,0,0,0,0,0,0,0,0,0];

const ROWS: ProformaRow[] = [
  // Clients
  { status:"Client",         client:"McGill Hose & Coupling",        m:[10000,10000,10000,0,5000,5000,5000,5000,0,0],       total:50000  },
  { status:"Client",         client:"Valance Surface 1 — C.I.L.",    m:[0,0,0,4500,4500,4500,4500,4500,4500,4500],          total:31500  },
  { status:"Client",         client:"Mueller Coatings",               m:[0,0,0,4500,4500,4500,4500,4500,4500,4500],          total:31500  },
  { status:"Client",         client:"Valance Surface 2",              m:[0,0,0,0,0,0,0,4500,4500,4500],                     total:13500  },
  { status:"Client",         client:"Valance Surface 3",              m:[0,0,0,0,0,0,0,0,4500,4500],                        total:9000   },
  { status:"Client",         client:"Valance Surface 4",              m:[0,0,0,0,0,0,0,0,0,4500],                           total:4500   },
  { status:"Client",         client:"Valance Surface 5",              m:Z,                                                   total:0      },
  { status:"Client",         client:"Valance Surface 6",              m:Z,                                                   total:0      },
  { status:"Client",         client:"Valance Surface 7",              m:Z,                                                   total:0      },
  { status:"Client",         client:"Valance Surface 8",              m:Z,                                                   total:0      },
  { status:"Client",         client:"Valance Surface 9",              m:Z,                                                   total:0      },
  { status:"Client",         client:"Valance Surface 10",             m:Z,                                                   total:0      },
  { status:"Client",         client:"Valance Surface 11",             m:Z,                                                   total:0      },
  // NDA/LOI
  { status:"NDA/LOI Signed", client:"Cambridge Polymer Group",        m:[0,0,0,0,4500,4500,4500,4500,4500,4500],            total:27000  },
  { status:"NDA/LOI Signed", client:"Clothier Design Source",         m:[0,0,0,0,0,4500,4500,4500,4500,4500],               total:22500  },
  { status:"NDA/LOI Signed", client:"Quantum Edge Precision",         m:[0,0,0,0,0,0,0,4500,4500,4500],                    total:13500  },
  { status:"NDA/LOI Signed", client:"Arkwin Industries",              m:[0,0,0,0,0,4500,4500,4500,4500,4500],               total:22500  },
  { status:"NDA/LOI Signed", client:"Serigraph",                      m:[0,0,0,0,0,4500,4500,4500,4500,4500],               total:22500  },
  { status:"NDA/LOI Signed", client:"SEACOMP",                        m:Z,                                                   total:0      },
  // Wait and Watch
  { status:"In Conversations", client:"Rayson Company",               m:[0,0,0,0,0,4500,4500,4500,4500,4500],               total:22500  },
  // In Conversations
  { status:"In Conversations", client:"Tinker Tin",                   m:Z,                                                   total:0      },
  { status:"In Conversations", client:"New England Electropolishing",  m:Z,                                                   total:0      },
  // 2026 Pipeline
  { status:"2026 Pipeline",  client:"AJ Rod",                         m:Z,                                                   total:0      },
  { status:"2026 Pipeline",  client:"APS",                            m:[0,0,0,0,0,4500,4500,4500,4500,4500],               total:22500  },
  { status:"2026 Pipeline",  client:"TSP MFG",                        m:[0,0,0,0,0,0,4500,4500,4500,4500],                  total:18000  },
  { status:"2026 Pipeline",  client:"Goff Davis Aero",                m:[0,0,0,0,0,0,0,0,4500,4500],                        total:9000   },
  { status:"2026 Pipeline",  client:"Gretna Manufacturing",           m:[0,0,0,0,0,0,0,0,4500,4500],                        total:9000   },
  { status:"2026 Pipeline",  client:"A.E. Machine Works",             m:[0,0,0,0,0,0,0,4500,4500,4500],                     total:13500  },
  { status:"2026 Pipeline",  client:"Precision Tool Technology",      m:[0,0,0,0,0,0,0,0,4500,4500],                        total:9000   },
  { status:"2026 Pipeline",  client:"Reign Manufacturing",            m:[0,0,0,0,0,0,0,0,0,4500],                           total:4500   },
  { status:"2026 Pipeline",  client:"Drake Industries",               m:[0,0,0,0,0,0,0,0,4500,4500],                        total:9000   },
  { status:"2026 Pipeline",  client:"Genevieve Swiss",                m:Z,                                                   total:0      },
  { status:"2026 Pipeline",  client:"Cargo Systems",                  m:Z,                                                   total:0      },
  { status:"2026 Pipeline",  client:"Carr Lane",                      m:Z,                                                   total:0      },
  { status:"2026 Pipeline",  client:"Nappco",                         m:Z,                                                   total:0      },
  { status:"2026 Pipeline",  client:"Bannister Medical",              m:Z,                                                   total:0      },
  { status:"2026 Pipeline",  client:"Blazer",                         m:Z,                                                   total:0      },
  { status:"2026 Pipeline",  client:"Crane MFG",                      m:Z,                                                   total:0      },
  // 2027 Pipeline
  { status:"2027 Pipeline",  client:"Zephyr Crane",                   m:Z,                                                   total:0      },
  { status:"2027 Pipeline",  client:"Bull Dog Heat Pumps",            m:Z,                                                   total:0      },
  { status:"2027 Pipeline",  client:"Minnot Chemicals",               m:Z,                                                   total:0      },
];

const MONTHLY_TOTALS = MONTHS.map((label, i) => ({
  label,
  revenue: ROWS.reduce((s, r) => s + r.m[i], 0),
}));

const GRAND_TOTAL = 365000;

const fmtK = (n: number) => n === 0 ? "—" : `$${(n/1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;

const STATUSES: Status[] = ["Client","NDA/LOI Signed","In Conversations","2026 Pipeline","2027 Pipeline"];

const STATUS_LABEL: Record<Status, string> = {
  "Client":           "Client",
  "NDA/LOI Signed":   "NDA/LOI",
  "Wait and Watch":   "Watch",
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
          { label: "NDA / LOI",          value: "5",      color: T.green   },
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
        <div style={{ minWidth: 900 }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 80px repeat(10, 1fr) 80px", gap: 0, padding: "10px 20px", borderBottom: `1px solid ${T.border}`, background: T.surface2 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: T.fontMono }}>Client</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: T.fontMono }}>Status</div>
            {MONTHS.map(m => (
              <div key={m} style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: T.fontMono, textAlign: "right" }}>{m}</div>
            ))}
            <div style={{ fontSize: 9, fontWeight: 700, color: T.textSubtle, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: T.fontMono, textAlign: "right" }}>Total</div>
          </div>

          {filtered.map((row, i) => (
            <div key={`${row.client}-${i}`} style={{
              display: "grid", gridTemplateColumns: "200px 80px repeat(10, 1fr) 80px",
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
          <div style={{ display: "grid", gridTemplateColumns: "200px 80px repeat(10, 1fr) 80px", gap: 0, padding: "11px 20px", borderTop: `1px solid ${T.border}`, background: T.surface2 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.text, fontFamily: SHARP }}>Total</div>
            <div />
            {MONTHLY_TOTALS.map((m, j) => (
              <div key={j} style={{ fontSize: 10, fontWeight: 700, color: m.revenue > 0 ? T.gold : "rgba(255,255,255,0.12)", textAlign: "right", fontFamily: T.fontMono }}>
                {fmtK(m.revenue)}
              </div>
            ))}
            <div style={{ fontSize: 11, fontWeight: 800, color: T.gold, textAlign: "right", fontFamily: SHARP }}>$365,000</div>
          </div>
        </div>
      </div>

    </section>
  );
}
