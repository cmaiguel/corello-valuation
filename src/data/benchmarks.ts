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
  website: string;
}

export const BENCHMARK_GROUPS: Record<Stage, BenchmarkCompany[]> = {
  // ── PRE-SEED ─────────────────────────────────────────────────────────────
  "Pre-Seed": [
    {
      company: "Procense",
      stage: "Pre-Seed",
      category: "Paper Process Digitization",
      description: "Converts paper-based shop floor processes into automated digital workflows — work orders, traveler documents, and quality records. Funding undisclosed.",
      whyItMatters: "Proves investor appetite for the paper-to-digital wedge in manufacturing.",
      relevanceScore: 5,
      fundingNote: "Pre-Seed · manufacturing AI",
      corelloAngle: "Direct peer — Corello adds agentic intelligence where Procense adds structure",
      website: "https://www.procense.ai",
    },
    {
      company: "Workheld",
      stage: "Pre-Seed",
      category: "Frontline Operations",
      description: "Mobile-first platform for digital work instructions, inspection checklists, and task management for industrial field and factory teams. Funding undisclosed.",
      whyItMatters: "Work instruction digitization is the entry point into manufacturing shops.",
      relevanceScore: 4,
      fundingNote: "Pre-Seed · industrial workflow",
      corelloAngle: "Workheld digitizes execution; Corello makes it intelligent with AI agents",
      website: "https://www.workheld.com",
    },
    {
      company: "Matics",
      stage: "Pre-Seed",
      category: "Manufacturing Analytics",
      description: "Real-time OEE dashboards and production monitoring for mid-market manufacturers, replacing manual clipboards and spreadsheets. Raised ~$5M.",
      whyItMatters: "Spreadsheet replacement is the first budget unlock in manufacturing shops.",
      relevanceScore: 4,
      fundingNote: "~$5M raised · shop floor analytics",
      corelloAngle: "Matics gives visibility; Corello gives intelligence — dashboards vs. AI decisions",
      website: "https://www.matics.live",
    },
    {
      company: "Guidewheel",
      stage: "Pre-Seed",
      category: "Industrial IoT",
      description: "Plug-and-play factory intelligence platform using power sensors that clip onto any machine — tracks utilization, downtime, and OEE with no IT integration. Raised $9M.",
      whyItMatters: "Zero-integration machine monitoring is a proven wedge into SMMs — same customer profile as Corello.",
      relevanceScore: 3,
      fundingNote: "$9M raised · YC-backed · factory intelligence",
      corelloAngle: "Guidewheel captures machine signals; Corello interprets them into operational intelligence and AI decisions",
      website: "https://www.guidewheel.com",
    },
    {
      company: "Elvex",
      stage: "Pre-Seed",
      category: "AI Co-Workers",
      description: "Enterprise platform for deploying AI co-workers embedded inside existing business workflows across operations, finance, and HR. Raised ~$6M.",
      whyItMatters: "AI co-worker as a category is attracting early institutional capital.",
      relevanceScore: 4,
      fundingNote: "~$6M raised · enterprise AI",
      corelloAngle: "Same AI co-worker GTM — Corello's manufacturing vertical means higher WTP and lower churn",
      website: "https://elvex.com",
    },
    {
      company: "Upriver",
      stage: "Pre-Seed",
      category: "Agentic Data Infrastructure",
      description: "Agentic data engineering platform that structures fragmented operational data from legacy ERP and MES systems into AI-ready pipelines. Funding undisclosed.",
      whyItMatters: "Operational data readiness is the prerequisite for AI in manufacturing.",
      relevanceScore: 3,
      fundingNote: "Pre-Seed · agentic infrastructure",
      corelloAngle: "Infrastructure peer — Corello operates the intelligence layer above structured data",
      website: "https://www.upriver.ai",
    },
  ],

  // ── SEED ─────────────────────────────────────────────────────────────────
  "Seed": [
    {
      company: "Datanomix",
      stage: "Seed",
      category: "Manufacturing Analytics",
      description: "Real-time production intelligence platform for CNC job shops — tracks machine utilization, OEE, and throughput with automated shift reporting. Raised $3.6M.",
      whyItMatters: "HMLV focus, mid-market price point, job shop customers — closest direct category comp.",
      relevanceScore: 5,
      fundingNote: "$3.6M raised · manufacturing analytics",
      corelloAngle: "Strongest direct comp: same customers, same wedge — Corello adds AI agents and cross-system intelligence",
      website: "https://www.datanomix.com",
    },
    {
      company: "Poka",
      stage: "Seed",
      category: "Frontline Operations",
      description: "Connected worker platform for manufacturing — digital SOPs, skills tracking, training, and real-time collaboration for frontline operators. Raised $25M.",
      whyItMatters: "Proves mid-market manufacturers subscribe to recurring SaaS for frontline operations.",
      relevanceScore: 4,
      fundingNote: "$25M raised · connected worker platform",
      corelloAngle: "GTM comp: recurring SaaS, SMM buyers, shop floor entry — Corello's AI is the next layer above SOPs",
      website: "https://www.poka.io",
    },
    {
      company: "FactoryFour",
      stage: "Seed",
      category: "Manufacturing Intelligence",
      description: "Cloud-native manufacturing execution system (MES) purpose-built for high-mix, low-volume job shops and contract manufacturers. Raised $6M.",
      whyItMatters: "Seed capital into cloud MES for HMLV validates the legacy replacement market is large and fundable.",
      relevanceScore: 4,
      fundingNote: "$6M raised · cloud MES for HMLV",
      corelloAngle: "Direct HMLV MES comp — Corello's AI-native approach is faster to deploy and stickier",
      website: "https://www.factoryfour.com",
    },
    {
      company: "EthonAI",
      stage: "Seed",
      category: "Manufacturing Intelligence",
      description: "AI platform for automated defect detection, root cause analysis, and process optimization at precision manufacturers across Europe and North America. Raised $9M.",
      whyItMatters: "Institutional Seed backing for AI-native manufacturing intelligence — validates global investor appetite.",
      relevanceScore: 4,
      fundingNote: "$9M raised · industrial AI",
      corelloAngle: "Category peer with strong backing — validates Seed investors will fund AI-native manufacturing intelligence",
      website: "https://www.ethon.ai",
    },
    {
      company: "Drishti Technologies",
      stage: "Seed",
      category: "Manufacturing Intelligence",
      description: "Computer vision AI for manual assembly lines — measures cycle time, quality errors, and operator performance in real time using cameras. Raised $25M.",
      whyItMatters: "Computer vision AI at the assembly line with real Seed capital — manufacturing AI is a proven investor category.",
      relevanceScore: 3,
      fundingNote: "$25M raised · AI video for manufacturing",
      corelloAngle: "AI signal capture for the shop floor — Corello's intelligence layer acts on the same operational signals",
      website: "https://www.drishti.ai",
    },
    {
      company: "Instrumental",
      stage: "Seed",
      category: "Manufacturing Intelligence",
      description: "AI manufacturing intelligence platform for hardware companies — visual inspection, process analytics, and quality traceability for electronics manufacturers. Raised $20M.",
      whyItMatters: "AI quality intelligence at Seed scale — recurring SaaS from AI-native manufacturing analytics is proven.",
      relevanceScore: 3,
      fundingNote: "$20M raised · AI manufacturing intelligence",
      corelloAngle: "AI-native recurring revenue from manufacturers — Corello's operational intelligence mirrors this SaaS model",
      website: "https://www.instrumental.com",
    },
  ],

  // ── SERIES A ─────────────────────────────────────────────────────────────
  "Series A": [
    {
      company: "Parsable",
      stage: "Series A",
      category: "Frontline Operations",
      description: "Connected worker platform that digitizes paper-based work instructions, safety procedures, and SOPs for frontline industrial teams at global manufacturers. Raised $65M.",
      whyItMatters: "Largest funding raise for digitizing manufacturing paper processes — validates Corello's core use case at institutional scale.",
      relevanceScore: 5,
      fundingNote: "$65M raised · Series C · connected worker",
      corelloAngle: "Category benchmark — Corello's AI-native intelligence is the evolution from Parsable's static digitization",
      website: "https://www.parsable.com",
    },
    {
      company: "MachineMetrics",
      stage: "Series A",
      category: "Industrial IoT",
      description: "Industrial IoT platform that connects CNC machines to the cloud, delivering real-time production analytics, OEE, and job shop performance benchmarking. Raised $45M.",
      whyItMatters: "Machine data → recurring analytics ARR is a proven model. MachineMetrics is the clearest category graduation path.",
      relevanceScore: 4,
      fundingNote: "$45M raised · Series B · industrial IoT",
      corelloAngle: "Machine connectivity + analytics → institutional ARR. Corello adds AI intelligence above the raw data layer",
      website: "https://www.machinemetrics.com",
    },
    {
      company: "Sight Machine",
      stage: "Series A",
      category: "Manufacturing Analytics",
      description: "Manufacturing analytics platform that aggregates machine, sensor, and process data into production intelligence dashboards for enterprise manufacturers. Raised $38M.",
      whyItMatters: "Analytics-led wedge scales to Series A+ with enterprise contracts — validates the analytics-first expansion path.",
      relevanceScore: 4,
      fundingNote: "$38M raised · Series C · manufacturing analytics",
      corelloAngle: "Proves analytics SaaS in manufacturing scales to institutional revenue — Corello's agentic layer goes beyond dashboards",
      website: "https://www.sightmachine.com",
    },
    {
      company: "Landing AI",
      stage: "Series A",
      category: "Manufacturing Intelligence",
      description: "AI visual inspection and quality control platform for manufacturers, founded by Andrew Ng — helps factories catch defects and improve yield at scale. Raised $57M.",
      whyItMatters: "Andrew Ng's manufacturing AI bet with $57M raised — top-tier conviction that AI belongs on the factory floor.",
      relevanceScore: 3,
      fundingNote: "$57M raised · Series A · AI manufacturing",
      corelloAngle: "Validates manufacturing AI at scale. Landing AI focuses on quality; Corello focuses on operational intelligence",
      website: "https://www.landing.ai",
    },
    {
      company: "Braincube",
      stage: "Series A",
      category: "Manufacturing Intelligence",
      description: "Connected factory AI platform combining time series data analysis, process optimization, and digital twin capabilities for discrete and process manufacturers. Raised €16M.",
      whyItMatters: "Full-stack connected factory play at Series A proves integrated manufacturing AI commands institutional investment.",
      relevanceScore: 3,
      fundingNote: "€16M raised · Series A · connected factory AI",
      corelloAngle: "Full-stack comp — Corello's HMLV focus and faster deployment are the competitive edge",
      website: "https://www.braincube.com",
    },
    {
      company: "Cognite",
      stage: "Series A",
      category: "Agentic Data Infrastructure",
      description: "Industrial DataOps platform enabling AI and analytics at scale for oil & gas, energy, and manufacturing — connects siloed industrial data into a unified foundation. Raised $300M+.",
      whyItMatters: "Industrial data infrastructure at $300M+ raised — proves the market size for operationalizing AI on complex industrial data.",
      relevanceScore: 3,
      fundingNote: "$300M+ raised · Series C · industrial data platform",
      corelloAngle: "Proves institutional appetite for industrial data intelligence — Corello's SMM focus is a faster path to the same thesis",
      website: "https://www.cognite.com",
    },
  ],

  // ── LATER-STAGE ──────────────────────────────────────────────────────────
  "Later-Stage": [
    {
      company: "Tulip Interfaces",
      stage: "Later-Stage",
      category: "Frontline Operations",
      description: "No-code frontline operations platform used by 200+ manufacturers worldwide to build shop floor apps, quality workflows, and production tracking without engineering. Raised $100M+.",
      whyItMatters: "Premier category outcome — proves manufacturing software for the shop floor can raise $100M+ from top-tier VCs.",
      relevanceScore: 5,
      fundingNote: "$100M+ raised · Series C · manufacturing software",
      corelloAngle: "Tulip is no-code apps; Corello is the AI-native intelligence layer — the evolution of the same category",
      website: "https://www.tulip.co",
    },
    {
      company: "MaintainX",
      stage: "Later-Stage",
      category: "Frontline Operations",
      description: "Mobile-first CMMS and frontline operations SaaS for work orders, preventive maintenance, and SOPs — built for mid-market manufacturing and industrial teams. Raised $50M.",
      whyItMatters: "Proves frontline manufacturing SaaS can reach $100M ARR starting from SMB/mid-market.",
      relevanceScore: 5,
      fundingNote: "$50M raised · Series C · frontline operations",
      corelloAngle: "MaintainX proved the SaaS playbook for manufacturing frontline. Corello's AI intelligence is the next chapter",
      website: "https://www.getmaintainx.com",
    },
    {
      company: "Tractian",
      stage: "Later-Stage",
      category: "Industrial IoT",
      description: "Industrial AI company combining vibration and current sensors with machine learning to deliver predictive maintenance and machine health monitoring. Raised $45M.",
      whyItMatters: "One of the highest-growth industrial AI companies globally — from zero to Series B in under 4 years.",
      relevanceScore: 4,
      fundingNote: "$45M raised · Series B · industrial AI",
      corelloAngle: "Tractian's growth validates the industrial AI thesis. Corello plays the same compounding SaaS motion in operations intelligence",
      website: "https://www.tractian.com",
    },
    {
      company: "Augury",
      stage: "Later-Stage",
      category: "Industrial IoT",
      description: "Machine health platform using AI, acoustics, and vibration sensing to predict and prevent industrial equipment failures at Fortune 500 manufacturers. Raised $180M.",
      whyItMatters: "Series D industrial AI — proves large enterprise manufacturing contracts are achievable from a software-first model.",
      relevanceScore: 3,
      fundingNote: "$180M raised · Series D · machine health AI",
      corelloAngle: "Series D outcome: Corello's mid-market path replicates this scaling playbook in operational intelligence",
      website: "https://www.augury.com",
    },
    {
      company: "Seeq",
      stage: "Later-Stage",
      category: "Manufacturing Analytics",
      description: "Advanced analytics and machine learning platform for process and discrete manufacturing engineers — accelerates root cause analysis and process optimization. Raised $150M.",
      whyItMatters: "Analytics SaaS in manufacturing at $150M raised — the category supports significant institutional capital.",
      relevanceScore: 3,
      fundingNote: "$150M raised · Series C · manufacturing analytics",
      corelloAngle: "Analytics-led manufacturing SaaS at scale — Corello's AI agent layer is the agentic evolution of this thesis",
      website: "https://www.seeq.com",
    },
    {
      company: "Vention",
      stage: "Later-Stage",
      category: "Manufacturing Intelligence",
      description: "Cloud-based manufacturing automation platform for machine design, collaborative robotics programming, and production cell deployment for mid-market manufacturers. Raised $95M.",
      whyItMatters: "Series B manufacturing platform in the same mid-market segment — proves the customer base scales to institutional returns.",
      relevanceScore: 2,
      fundingNote: "$95M raised · Series B · manufacturing automation",
      corelloAngle: "Same mid-market manufacturer base, adjacent automation layer — validates the segment size",
      website: "https://www.vention.io",
    },
  ],
};

export const STAGES: Stage[] = ["Pre-Seed", "Seed", "Series A", "Later-Stage"];

export const STAGE_TAB_LABELS: Record<Stage, string> = {
  "Pre-Seed":    "Pre-Seed",
  "Seed":        "Seed",
  "Series A":    "Series A",
  "Later-Stage": "Later-Stage",
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
  "Benchmark companies are directional fundraising context only — not valuation comps. Later-stage companies are category outcome references. Funding data is approximate and sourced from public disclosures.";
