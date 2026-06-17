import React from "react";
import { Download, FileText, FileJson, Table } from "lucide-react";
import { C } from "../../theme";
import { downloadCSV, downloadJSON, generateValuationCSV } from "../../utils/exportUtils";
import valuationInputs from "../../data/valuationInputs.json";
import benchmarkCompanies from "../../data/benchmarkCompanies.json";
import companyProfile from "../../data/companyProfile.json";

interface ExportItem {
  label: string;
  description: string;
  format: "CSV" | "JSON" | "MD";
  icon: React.ReactNode;
  onDownload: () => void;
}

function ExportCard({ label, description, format, icon, onDownload }: ExportItem) {
  const formatColor = format === "CSV" ? C.green : format === "JSON" ? C.violet : C.blue;
  return (
    <div style={{ background: C.bgSurface, border: `1px solid ${C.border}`, borderRadius: C.rXl, padding: "18px 20px", display: "flex", gap: 14 }}>
      <div style={{ width: 40, height: 40, borderRadius: C.rMd, background: C.bgSurface2, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: formatColor }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.textPrimary }}>{label}</div>
        <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{description}</div>
        <div style={{ marginTop: 2 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: formatColor }}>{format}</span>
        </div>
      </div>
      <button
        onClick={onDownload}
        style={{
          display: "flex", alignItems: "center", gap: 6, padding: "8px 14px",
          background: C.blueBg, border: `1px solid ${C.blueBorder}`, borderRadius: C.rMd,
          color: C.blueLight, fontSize: 12, fontWeight: 600, cursor: "pointer", flexShrink: 0,
        }}
      >
        <Download size={13} />
        Export
      </button>
    </div>
  );
}

export default function ExportsSection() {
  const exports: ExportItem[] = [
    {
      label: "Valuation Inputs & KPIs",
      description: "Core valuation numbers, round parameters, and contracted revenue",
      format: "CSV",
      icon: <Table size={18} />,
      onDownload: () => downloadCSV("corello_valuation_inputs.csv", generateValuationCSV({
        preMoneyM: 12,
        raiseM: 2.5,
        postMoneyM: 14.5,
        investorPct: 17.24,
        contractedRevenueM: 0.7,
        revenueMultiple: 17.1,
      })),
    },
    {
      label: "Scenario Analysis",
      description: "Downside / Base / Upside valuation scenarios with key metrics",
      format: "CSV",
      icon: <Table size={18} />,
      onDownload: () => {
        const scenarios = (valuationInputs as any).scenarios ?? [];
        downloadCSV("corello_scenario_analysis.csv", scenarios.map((s: any) => ({
          Scenario: s.name,
          "Pre-Money ($M)": s.preMoneyM,
          "Post-Money ($M)": s.postMoneyM,
          "Raise ($M)": s.raiseM,
          "Investor Ownership (%)": s.investorOwnershipPct,
          "Notes": s.rationale ?? "",
        })));
      },
    },
    {
      label: "Dilution Sensitivity Table",
      description: "Investor ownership % across $8M–$16M pre-money range",
      format: "CSV",
      icon: <Table size={18} />,
      onDownload: () => {
        const table = (valuationInputs as any).dilutionSensitivity ?? [];
        downloadCSV("corello_dilution_sensitivity.csv", table.map((r: any) => ({
          "Pre-Money ($M)": r.preMoneyM,
          "Post-Money ($M)": r.postMoneyM,
          "Investor Ownership (%)": r.investorOwnershipPct,
        })));
      },
    },
    {
      label: "Benchmark Companies",
      description: "Industrial AI seed and growth-stage comps with round sizes",
      format: "CSV",
      icon: <Table size={18} />,
      onDownload: () => {
        const comps = [...((benchmarkCompanies as any).seedComps ?? []), ...((benchmarkCompanies as any).growthComps ?? [])];
        downloadCSV("corello_benchmark_table.csv", comps.map((c: any) => ({
          Company: c.company,
          Stage: c.stage,
          "Round Size": c.roundSize,
          Focus: c.focus ?? "",
          Source: c.sourceUrl ?? "",
        })));
      },
    },
    {
      label: "Full Valuation Data (JSON)",
      description: "Complete valuation model inputs, scenarios, and methodology",
      format: "JSON",
      icon: <FileJson size={18} />,
      onDownload: () => downloadJSON("corello_valuation_model.json", valuationInputs),
    },
    {
      label: "Company Profile (JSON)",
      description: "Raise parameters, traction, pitch language, and key messaging",
      format: "JSON",
      icon: <FileJson size={18} />,
      onDownload: () => downloadJSON("corello_company_profile.json", companyProfile),
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ background: C.bgSurface, border: `1px solid ${C.amberBorder}`, borderRadius: C.rXl, padding: "14px 18px", display: "flex", gap: 10 }}>
        <span style={{ fontSize: 12, color: C.amberLight, lineHeight: 1.6 }}>
          <strong>Confidential:</strong> Do not share exported files publicly or commit sensitive financials to public repositories.
          CSV files are suitable for internal use and investor meetings only.
        </span>
      </div>
      {exports.map((e) => <ExportCard key={e.label} {...e} />)}
    </div>
  );
}
