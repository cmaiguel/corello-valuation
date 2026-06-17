export interface RaiseParams {
  raiseSizeM: number;
  preMoneyM: number;
  postMoneyM: number;
  investorOwnershipPct: number;
}

export interface Traction {
  contractedRevenueM: number;
  contractedRevenueNote: string;
  customerCount: number | null;
  deployments: number | null;
  productionDeployments: number | null;
}

export interface CompanyProfile {
  name: string;
  tagline: string;
  stage: string;
  sector: string;
  founded: string | null;
  hq: string | null;
  website: string | null;
  raiseParams: RaiseParams;
  traction: Traction;
  keyMessage: string;
  avoidLanguage: string[];
  useLanguage: string[];
}
