export const fmtM = (v: number): string => `$${v.toFixed(1)}M`;

export const fmtPct = (v: number): string => `${v.toFixed(1)}%`;

export const fmtMultiple = (v: number): string => `${v.toFixed(1)}x`;

export const fmtK = (v: number): string =>
  v >= 1 ? `$${v.toFixed(1)}M` : `$${(v * 1000).toFixed(0)}K`;

export const highlightClass = (
  preMoneyM: number,
  target = 12.0
): string => (preMoneyM === target ? "highlighted" : "");
