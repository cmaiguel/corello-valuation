export function calcPostMoney(preMoneyM: number, raiseM: number): number {
  return preMoneyM + raiseM;
}

export function calcOwnershipPct(raiseM: number, postMoneyM: number): number {
  return (raiseM / postMoneyM) * 100;
}

export function calcRevMultiple(valuationM: number, revenueM: number): number {
  if (revenueM <= 0) return 0;
  return valuationM / revenueM;
}

export function calcRunwayMonths(cashM: number, monthlyBurnM: number): number {
  if (monthlyBurnM <= 0) return Infinity;
  return cashM / monthlyBurnM;
}

export function calcMonthlyBurn(annualOpexM: number): number {
  return annualOpexM / 12;
}

export function calcGrossMarginPct(revenue: number, cogs: number): number {
  if (revenue <= 0) return 0;
  return ((revenue - cogs) / revenue) * 100;
}

export function dilutionSensitivityTable(
  raiseM: number,
  preMoneyRange: number[]
): { preMoneyM: number; postMoneyM: number; investorPct: number }[] {
  return preMoneyRange.map((pre) => {
    const post = pre + raiseM;
    return { preMoneyM: pre, postMoneyM: post, investorPct: (raiseM / post) * 100 };
  });
}

export function formatM(val: number | null, decimals = 1): string {
  if (val === null) return "—";
  return `$${val.toFixed(decimals)}M`;
}

export function formatPct(val: number | null, decimals = 1): string {
  if (val === null) return "—";
  return `${val.toFixed(decimals)}%`;
}

export function formatMultiple(val: number | null, decimals = 1): string {
  if (val === null) return "—";
  return `${val.toFixed(decimals)}x`;
}
