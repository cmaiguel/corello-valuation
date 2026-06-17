import React, { useState } from "react";
import { CheckCircle2, Circle, AlertCircle, Clock, Minus } from "lucide-react";
import { C } from "../../theme";
import checklistData from "../../data/dataRoom/diligenceChecklist.json";
import type { DiligenceStatus, DiligenceScore } from "../../types/dataRoom";

function statusIcon(status: DiligenceStatus) {
  switch (status) {
    case "ready":          return <CheckCircle2 size={14} color={C.green} />;
    case "draft":          return <Clock size={14} color={C.amber} />;
    case "needs-review":   return <AlertCircle size={14} color={C.blue} />;
    case "missing":        return <Circle size={14} color={C.rose} />;
    case "not-applicable": return <Minus size={14} color={C.textMuted} />;
  }
}

function statusLabel(status: DiligenceStatus): string {
  const map: Record<DiligenceStatus, string> = {
    ready: "Ready",
    draft: "Draft",
    "needs-review": "Needs Review",
    missing: "Missing",
    "not-applicable": "N/A",
  };
  return map[status];
}

function statusColor(status: DiligenceStatus): string {
  const map: Record<DiligenceStatus, string> = {
    ready: C.green,
    draft: C.amber,
    "needs-review": C.blueLight,
    missing: C.rose,
    "not-applicable": C.textDisabled,
  };
  return map[status];
}

function calcScore(): DiligenceScore {
  const counts = { ready: 0, draft: 0, needsReview: 0, missing: 0, notApplicable: 0, total: 0 };
  for (const cat of checklistData.categories) {
    for (const item of cat.items) {
      counts.total++;
      if (item.status === "ready") counts.ready++;
      else if (item.status === "draft") counts.draft++;
      else if (item.status === "needs-review") counts.needsReview++;
      else if (item.status === "missing") counts.missing++;
      else if (item.status === "not-applicable") counts.notApplicable++;
    }
  }
  const effective = counts.total - counts.notApplicable;
  return { ...counts, completionPct: effective > 0 ? Math.round((counts.ready / effective) * 100) : 0 };
}

export default function DiligenceChecklist() {
  const [expanded, setExpanded] = useState<string | null>(checklistData.categories[0]?.category ?? null);
  const score = calcScore();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Score card */}
      <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "20px 24px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.textSecondary, marginBottom: 14 }}>Data Room Readiness</div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[
            { label: "Ready",        count: score.ready,       color: C.green },
            { label: "Draft",        count: score.draft,       color: C.amber },
            { label: "Needs Review", count: score.needsReview, color: C.blueLight },
            { label: "Missing",      count: score.missing,     color: C.rose },
          ].map(({ label, count, color }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 700, color, letterSpacing: "-0.03em" }}>{count}</div>
              <div style={{ fontSize: 11, color: C.textDisabled, marginTop: 2 }}>{label}</div>
            </div>
          ))}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 12, marginLeft: 8 }}>
            <div style={{ flex: 1, height: 6, background: C.bgSurface2, borderRadius: 99, overflow: "hidden" }}>
              <div style={{ height: "100%", background: C.green, width: `${score.completionPct}%`, borderRadius: 99, transition: "width 0.4s" }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.textPrimary, whiteSpace: "nowrap" }}>{score.completionPct}% ready</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      {checklistData.categories.map((cat) => {
        const isOpen = expanded === cat.category;
        const catCounts = cat.items.reduce((acc, item) => {
          acc[item.status] = (acc[item.status] ?? 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        return (
          <div key={cat.category} style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, overflow: "hidden" }}>
            <button
              onClick={() => setExpanded(isOpen ? null : cat.category)}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 12,
                padding: "16px 20px", background: "none", border: "none", textAlign: "left", cursor: "pointer",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.textPrimary }}>{cat.category}</div>
                <div style={{ fontSize: 11, color: C.textDisabled, marginTop: 2 }}>
                  {cat.items.length} items ·{" "}
                  {catCounts["ready"] ?? 0} ready ·{" "}
                  {catCounts["missing"] ?? 0} missing
                </div>
              </div>
              <span style={{ fontSize: 18, color: C.textMuted }}>{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div style={{ padding: "0 20px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                {cat.items.map((item) => (
                  <div key={item.id} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    padding: "10px 12px", background: C.bgSurface2, borderRadius: C.rMd,
                  }}>
                    <div style={{ marginTop: 1 }}>{statusIcon(item.status as DiligenceStatus)}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 13, color: C.textPrimary }}>{item.item}</span>
                        {item.priority === "critical" && (
                          <span style={{ fontSize: 10, fontWeight: 700, color: C.rose, background: C.roseBg, border: `1px solid ${C.roseBorder}`, borderRadius: 99, padding: "1px 7px" }}>Critical</span>
                        )}
                      </div>
                      <div style={{ fontSize: 11, color: C.textDisabled, marginTop: 2 }}>{item.investorRelevance}</div>
                      {item.notes && <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>↳ {item.notes}</div>}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: statusColor(item.status as DiligenceStatus), whiteSpace: "nowrap" }}>
                      {statusLabel(item.status as DiligenceStatus)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
