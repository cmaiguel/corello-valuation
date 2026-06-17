export type Stage = "Pre-Seed" | "Seed" | "Series A" | "Later-Stage";

export type Category =
  | "Manufacturing Intelligence"
  | "Frontline Operations"
  | "Industrial IoT"
  | "Manufacturing Analytics"
  | "AI Co-Workers"
  | "Paper Process Digitization"
  | "Agentic Data Infrastructure";

export interface BenchmarkCompany {
  company: string;
  stage: Stage;
  category: Category;
  description: string;
  whyItMatters: string;
  relevanceScore: 1 | 2 | 3 | 4 | 5;
  fundingNote: string;
  corelloAngle: string;
}

export const BENCHMARK_GROUPS: Record<Stage, BenchmarkCompany[]> = {
  "Pre-Seed": [
    {
      company: "Procense",
      stage: "Pre-Seed",
      category: "Paper Process Digitization",
      description: "AI-native platform digitizing paper-based manufacturing processes and automating shop floor workflows.",
      whyItMatters: "Proves investor appetite for digitizing the last mile of manufacturing operations before AI can be applied.",
      relevanceScore: 5,
      fundingNote: "Seed-stage manufacturing AI company",
      corelloAngle: "Paper process digitization and manufacturing agents",
    },
    {
      company: "Upriver",
      stage: "Pre-Seed",
      category: "Agentic Data Infrastructure",
      description: "Agentic data engineering platform that turns fragmented operational data into structured, usable intelligence.",
      whyItMatters: "Demonstrates market demand for infrastructure that makes messy operational data AI-ready.",
      relevanceScore: 4,
      fundingNote: "Seed-stage AI data infrastructure",
      corelloAngle: "Turning messy operational data into usable intelligence",
    },
    {
      company: "Elvex",
      stage: "Pre-Seed",
      category: "AI Co-Workers",
      description: "Enterprise AI platform focused on operationalizing AI adoption inside existing business workflows.",
      whyItMatters: "Shows the workflow-embedded AI co-worker category attracting early-stage capital.",
      relevanceScore: 4,
      fundingNote: "Seed-stage enterprise AI",
      corelloAngle: "Helping companies operationalize AI inside workflows",
    },
    {
      company: "Datanomix Early",
      stage: "Pre-Seed",
      category: "Manufacturing Analytics",
      description: "Early manufacturing analytics platform targeting mid-market manufacturers with production intelligence dashboards.",
      whyItMatters: "Establishes the mid-market manufacturing analytics wedge that Corello is also entering.",
      relevanceScore: 4,
      fundingNote: "Early seed benchmark",
      corelloAngle: "Mid-market manufacturing analytics wedge",
    },
    {
      company: "FactoryFour Early",
      stage: "Pre-Seed",
      category: "Manufacturing Intelligence",
      description: "Manufacturing execution and workflow management platform built for high-mix, low-volume environments.",
      whyItMatters: "Early proof that a software-first approach to manufacturing workflows can attract institutional capital.",
      relevanceScore: 3,
      fundingNote: "Early manufacturing workflow software",
      corelloAngle: "Workflow layer for manufacturers",
    },
    {
      company: "AI Co-Worker Platform",
      stage: "Pre-Seed",
      category: "AI Co-Workers",
      description: "Emerging category of vertical AI co-worker platforms purpose-built for specific industrial roles.",
      whyItMatters: "Corello's positioning as an AI co-worker for manufacturing operations places it in this emerging category.",
      relevanceScore: 5,
      fundingNote: "Emerging category",
      corelloAngle: "Corello's co-worker positioning",
    },
  ],

  "Seed": [
    {
      company: "Datanomix",
      stage: "Seed",
      category: "Manufacturing Analytics",
      description: "Production intelligence platform delivering real-time OEE and analytics for CNC machine shops.",
      whyItMatters: "Seed-stage proof that focused manufacturing analytics can grow recurring revenue from mid-market manufacturers.",
      relevanceScore: 4,
      fundingNote: "Seed round in manufacturing analytics",
      corelloAngle: "Comparable analytics product wedge, HMLV focus",
    },
    {
      company: "Procense",
      stage: "Seed",
      category: "Paper Process Digitization",
      description: "Digitizes paper-based manufacturing processes and automates shop floor documentation workflows.",
      whyItMatters: "Direct category peer — competing for the same digitization budgets at manufacturers.",
      relevanceScore: 5,
      fundingNote: "Seed-stage manufacturing AI company",
      corelloAngle: "Paper process digitization and agentic manufacturing workflows",
    },
    {
      company: "Upriver",
      stage: "Seed",
      category: "Agentic Data Infrastructure",
      description: "Agentic data pipelines for operational environments where data is fragmented across legacy systems.",
      whyItMatters: "Validates investor interest in agentic infrastructure for operational data — a core Corello dependency.",
      relevanceScore: 4,
      fundingNote: "Seed-stage AI data infrastructure",
      corelloAngle: "Intelligence layer over fragmented manufacturing data",
    },
    {
      company: "Elvex",
      stage: "Seed",
      category: "AI Co-Workers",
      description: "Helps enterprises deploy AI co-workers that fit into existing workflows without displacing current tools.",
      whyItMatters: "Same go-to-market motion as Corello — sell AI adoption, not replacement.",
      relevanceScore: 4,
      fundingNote: "Seed-stage enterprise AI",
      corelloAngle: "AI co-worker deployment in existing enterprise workflows",
    },
    {
      company: "FactoryFour",
      stage: "Seed",
      category: "Manufacturing Intelligence",
      description: "Cloud-native manufacturing execution system for complex, high-mix production environments.",
      whyItMatters: "Competing for the same HMLV manufacturer segment with a software-first execution platform.",
      relevanceScore: 3,
      fundingNote: "Seed manufacturing workflow software",
      corelloAngle: "Software-first HMLV manufacturing platform",
    },
    {
      company: "Instrumental",
      stage: "Seed",
      category: "Manufacturing Intelligence",
      description: "AI-powered visual inspection and process optimization for electronics manufacturers.",
      whyItMatters: "Demonstrates AI-native quality intelligence attracting Seed capital in manufacturing.",
      relevanceScore: 3,
      fundingNote: "Seed AI manufacturing inspection",
      corelloAngle: "AI-native quality intelligence applied to manufacturing operations",
    },
  ],

  "Series A": [
    {
      company: "Datanomix",
      stage: "Series A",
      category: "Manufacturing Analytics",
      description: "Scaled production intelligence platform with expanded machine connectivity and analytics suite.",
      whyItMatters: "Shows the ARR trajectory achievable from the manufacturing analytics wedge — Corello's category graduation path.",
      relevanceScore: 5,
      fundingNote: "Series A manufacturing analytics",
      corelloAngle: "Demonstrates the ARR scale Corello targets from a similar wedge",
    },
    {
      company: "EthonAI",
      stage: "Series A",
      category: "Manufacturing Intelligence",
      description: "AI-powered manufacturing intelligence platform for defect detection and process optimization.",
      whyItMatters: "European industrial AI Series A — signals category maturity and investor conviction at growth stage.",
      relevanceScore: 4,
      fundingNote: "Series A industrial AI",
      corelloAngle: "AI-native intelligence for manufacturing process quality",
    },
    {
      company: "UptimeAI",
      stage: "Series A",
      category: "Industrial IoT",
      description: "Predictive maintenance and equipment health platform for heavy industrial assets.",
      whyItMatters: "Industrial AI Series A comp — different vertical but same investor thesis (AI ROI from operational data).",
      relevanceScore: 3,
      fundingNote: "Series A predictive maintenance",
      corelloAngle: "Operational AI ROI thesis applicable to Corello's category",
    },
    {
      company: "Limitless Labs",
      stage: "Series A",
      category: "AI Co-Workers",
      description: "AI co-worker platform for knowledge workers that augments decision-making across business functions.",
      whyItMatters: "Validates the AI co-worker category attracting Series A capital — directly relevant to Corello's positioning.",
      relevanceScore: 5,
      fundingNote: "Series A AI co-worker platform",
      corelloAngle: "AI co-worker category validation at Series A scale",
    },
    {
      company: "Instrumental",
      stage: "Series A",
      category: "Manufacturing Intelligence",
      description: "Scaled AI quality platform with expanded defect detection and process analytics capabilities.",
      whyItMatters: "Manufacturing AI Series A — proves investor conviction beyond Seed in AI-native manufacturing.",
      relevanceScore: 4,
      fundingNote: "Series A AI manufacturing",
      corelloAngle: "AI-native manufacturing intelligence at Series A scale",
    },
    {
      company: "FactoryFour",
      stage: "Series A",
      category: "Manufacturing Intelligence",
      description: "Series A manufacturing execution platform serving complex aerospace and defense manufacturers.",
      whyItMatters: "HMLV-focused manufacturing platform scaling to defense — directly overlaps Corello's dual-use optionality.",
      relevanceScore: 4,
      fundingNote: "Series A manufacturing execution",
      corelloAngle: "HMLV + defense manufacturing — dual-use optionality overlap",
    },
  ],

  "Later-Stage": [
    {
      company: "Tulip",
      stage: "Later-Stage",
      category: "Frontline Operations",
      description: "No-code frontline operations platform enabling manufacturers to build and deploy apps on the shop floor.",
      whyItMatters: "Category outcome comp — proves significant venture capital can be raised in manufacturing software.",
      relevanceScore: 4,
      fundingNote: "Series C+ manufacturing operations platform",
      corelloAngle: "Category outcome for shop floor software — Corello's AI-native equivalent",
    },
    {
      company: "MachineMetrics",
      stage: "Later-Stage",
      category: "Industrial IoT",
      description: "Industrial IoT platform connecting CNC machines and delivering real-time production analytics.",
      whyItMatters: "Demonstrates recurring revenue scale from machine connectivity + analytics in the manufacturing mid-market.",
      relevanceScore: 4,
      fundingNote: "Later-stage industrial IoT platform",
      corelloAngle: "Machine data intelligence — Corello's intelligence layer over connected assets",
    },
    {
      company: "Tractian",
      stage: "Later-Stage",
      category: "Industrial IoT",
      description: "AI-powered predictive maintenance and machine health monitoring for industrial equipment.",
      whyItMatters: "High-growth industrial AI company — demonstrates strong category momentum and investor returns.",
      relevanceScore: 3,
      fundingNote: "Series B industrial AI",
      corelloAngle: "Industrial AI momentum — same investor thesis applied to maintenance vs. intelligence",
    },
    {
      company: "Augury",
      stage: "Later-Stage",
      category: "Industrial IoT",
      description: "Machine health platform using AI and vibration sensors to predict and prevent equipment failures.",
      whyItMatters: "Later-stage industrial AI outcome — validates large enterprise contracts in the manufacturing AI category.",
      relevanceScore: 3,
      fundingNote: "Series D industrial AI",
      corelloAngle: "Large enterprise manufacturing AI — Corello's SMB/mid-market path to this scale",
    },
    {
      company: "MaintainX",
      stage: "Later-Stage",
      category: "Frontline Operations",
      description: "Mobile-first frontline operations platform for work orders, maintenance, and SOPs at manufacturing sites.",
      whyItMatters: "Proves the frontline manufacturing software category can reach $100M+ ARR from mid-market entry.",
      relevanceScore: 4,
      fundingNote: "Series C frontline operations",
      corelloAngle: "Frontline digitization scale — Corello's AI-native version of this playbook",
    },
    {
      company: "Parsable",
      stage: "Later-Stage",
      category: "Frontline Operations",
      description: "Connected worker platform digitizing paper-based work instructions and SOPs for industrial frontline teams.",
      whyItMatters: "Category direct overlap — digitizing paper processes for manufacturers at scale.",
      relevanceScore: 5,
      fundingNote: "Series C connected worker platform",
      corelloAngle: "Paper digitization outcome comp — Corello's AI-native, agentic equivalent",
    },
  ],
};

export const STAGES: Stage[] = ["Pre-Seed", "Seed", "Series A", "Later-Stage"];

export const STAGE_TAB_LABELS: Record<Stage, string> = {
  "Pre-Seed": "Pre-Seed Comps",
  "Seed": "Seed Comps",
  "Series A": "Series A Comps",
  "Later-Stage": "Later-Stage Reference Comps",
};

export const CATEGORIES: Category[] = [
  "Manufacturing Intelligence",
  "Frontline Operations",
  "Industrial IoT",
  "Manufacturing Analytics",
  "AI Co-Workers",
  "Paper Process Digitization",
  "Agentic Data Infrastructure",
];

export const DISCLAIMER =
  "Benchmark data is directional and should be refreshed before investor use. Benchmark companies are fundraising context, not valuation comps. Later-stage companies (Tulip, MachineMetrics, Tractian, Augury, MaintainX, Parsable) are category outcome references, not direct stage comps for Corello.";
