export function downloadCSV(filename: string, rows: Record<string, string | number | null>[]): void {
  if (rows.length === 0) return;
  const headers = Object.keys(rows[0]);
  const csvLines = [
    headers.join(","),
    ...rows.map((row) =>
      headers.map((h) => {
        const val = row[h];
        if (val === null || val === undefined) return "";
        const str = String(val);
        return str.includes(",") || str.includes('"') || str.includes("\n")
          ? `"${str.replace(/"/g, '""')}"`
          : str;
      }).join(",")
    ),
  ];
  const blob = new Blob([csvLines.join("\n")], { type: "text/csv;charset=utf-8;" });
  triggerDownload(blob, filename);
}

export function downloadJSON(filename: string, data: unknown): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  triggerDownload(blob, filename);
}

export function downloadMarkdown(filename: string, content: string): void {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8;" });
  triggerDownload(blob, filename);
}

function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function generateValuationCSV(inputs: {
  preMoneyM: number;
  raiseM: number;
  postMoneyM: number;
  investorPct: number;
  contractedRevenueM: number;
  revenueMultiple: number;
}): Record<string, string | number | null>[] {
  return [
    { Metric: "Pre-Money Valuation ($M)", Value: inputs.preMoneyM },
    { Metric: "Raise Amount ($M)", Value: inputs.raiseM },
    { Metric: "Post-Money Valuation ($M)", Value: inputs.postMoneyM },
    { Metric: "Investor Ownership (%)", Value: inputs.investorPct.toFixed(2) },
    { Metric: "Contracted Revenue ($M) — NOT ARR", Value: inputs.contractedRevenueM },
    { Metric: "Contracted Revenue Multiple (x) — Sanity Check Only", Value: inputs.revenueMultiple.toFixed(1) },
  ];
}
