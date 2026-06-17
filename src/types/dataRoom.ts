export type DiligenceStatus = "missing" | "needs-review" | "draft" | "ready" | "not-applicable";
export type DiligencePriority = "critical" | "high" | "medium" | "low";

export interface DiligenceItem {
  id: string;
  item: string;
  status: DiligenceStatus;
  owner: string;
  priority: DiligencePriority;
  investorRelevance: string;
  notes: string;
  fileLink: string | null;
}

export interface DiligenceCategory {
  category: string;
  icon: string;
  items: DiligenceItem[];
}

export interface DiligenceChecklist {
  version: string;
  lastUpdated: string | null;
  totalItems: number;
  categories: DiligenceCategory[];
}

export interface DiligenceScore {
  ready: number;
  draft: number;
  needsReview: number;
  missing: number;
  notApplicable: number;
  total: number;
  completionPct: number;
}
