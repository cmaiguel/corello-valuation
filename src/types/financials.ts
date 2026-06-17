export type DataStatus = "placeholder" | "template" | "needs-data" | "needs-review" | "draft" | "ready" | "verified";

export interface UseOfFundsCategory {
  category: string;
  pct: number;
  amountM: number;
  rationale: string;
  headcount: string | null;
}

export interface UseOfFunds {
  status: DataStatus;
  totalRaiseM: number;
  categories: UseOfFundsCategory[];
  runway: { monthsLow: number | null; monthsHigh: number | null; assumption: string };
  milestones: { label: string; description: string; targetMonth: number | null }[];
}

export interface Shareholder {
  name: string;
  type: "founder" | "investor" | "employee" | "option-pool" | "advisor";
  sharesK: number | null;
  pctPreMoney: number | null;
  pctPostMoney: number | null;
  notes: string;
}

export interface CapTable {
  status: DataStatus;
  shareholders: Shareholder[];
  optionPool: { pctPreMoney: number | null; pctPostMoney: number | null; shareClass: string };
  sensitivity: CapTableSensitivityRow[];
}

export interface CapTableSensitivityRow {
  preMoneyM: number;
  postMoneyM: number;
  investorOwnershipPct: number;
  founderOwnershipPct: number | null;
  recommended: boolean;
  founderAnchor: boolean;
}

export interface RevenueCategory {
  type: string;
  pctOfContracted: number | null;
  estimatedM: number | null;
  arrConversionLikely: boolean | null;
  status: DataStatus;
  note: string;
}

export interface RevenueBuild {
  status: DataStatus;
  contractedRevenueTotalM: number;
  contractedRevenueNote: string;
  revenueCategories: RevenueCategory[];
  conversionAssumptions: {
    softwareToARRConversionRate: number | null;
    pilotToARRConversionRate: number | null;
    expectedTimeToFirstARR: string | null;
    note: string;
    status: DataStatus;
  };
  revenueScenarios: { name: string; totalM: number | null; arrM: number | null; grossMarginPct: number | null; note: string; status: DataStatus }[];
  investorNote: string;
}

export interface PlannedHire {
  role: string;
  department: string;
  quarter: string;
  salaryK: number | null;
  priority: "critical" | "high" | "medium" | "low";
  fundedBy: string;
  status: DataStatus;
}

export interface HeadcountPlan {
  status: DataStatus;
  currentTeam: { headcount: number | null; note: string; status: DataStatus };
  plannedHires: PlannedHire[];
  departments: string[];
  totalHeadcountPostRound: number | null;
  totalSalaryBurdenM: number | null;
}
