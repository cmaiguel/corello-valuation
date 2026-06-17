export const calcPostMoney = (preMoneyM: number, roundSizeM: number): number =>
  preMoneyM + roundSizeM;

export const calcInvestorOwnership = (roundSizeM: number, postMoneyM: number): number =>
  (roundSizeM / postMoneyM) * 100;

export const calcPreMoneyFromOwnership = (roundSizeM: number, targetOwnershipPct: number): number =>
  (roundSizeM / (targetOwnershipPct / 100)) - roundSizeM;

export const calcContractedRevenueMultiple = (preMoneyM: number, contractedRevenueM: number): number =>
  preMoneyM / contractedRevenueM;

export interface DilutionRow {
  preMoneyM: number;
  postMoneyM: number;
  investorOwnershipPct: number;
  founderOwnershipPct: number;
  contractedRevenueMultiple: number;
}

export const buildDilutionTable = (
  preMoneys: number[],
  roundSizeM: number,
  contractedRevenueM: number
): DilutionRow[] =>
  preMoneys.map((pre) => {
    const post = calcPostMoney(pre, roundSizeM);
    const inv = calcInvestorOwnership(roundSizeM, post);
    return {
      preMoneyM: pre,
      postMoneyM: post,
      investorOwnershipPct: parseFloat(inv.toFixed(2)),
      founderOwnershipPct: parseFloat((100 - inv).toFixed(2)),
      contractedRevenueMultiple: parseFloat(calcContractedRevenueMultiple(pre, contractedRevenueM).toFixed(2)),
    };
  });

export interface SensitivityCell {
  raiseM: number;
  preMoneyM: number;
  investorOwnershipPct: number;
}

export const buildOwnershipSensitivity = (
  raiseSizes: number[],
  preMoneys: number[]
): SensitivityCell[] => {
  const cells: SensitivityCell[] = [];
  raiseSizes.forEach((raise) => {
    preMoneys.forEach((pre) => {
      const post = calcPostMoney(pre, raise);
      cells.push({
        raiseM: raise,
        preMoneyM: pre,
        investorOwnershipPct: parseFloat(calcInvestorOwnership(raise, post).toFixed(2)),
      });
    });
  });
  return cells;
};

export interface RevenueMultipleCell {
  contractedRevenueM: number;
  preMoneyM: number;
  multiple: number;
}

export const buildRevenueMultipleSensitivity = (
  revenues: number[],
  preMoneys: number[]
): RevenueMultipleCell[] => {
  const cells: RevenueMultipleCell[] = [];
  revenues.forEach((rev) => {
    preMoneys.forEach((pre) => {
      cells.push({
        contractedRevenueM: rev,
        preMoneyM: pre,
        multiple: parseFloat(calcContractedRevenueMultiple(pre, rev).toFixed(1)),
      });
    });
  });
  return cells;
};
