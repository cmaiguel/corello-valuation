# Corello Investor Data Room

**Investor-grade valuation dashboard and data room for Corello's $2.5M Seed round. Confidential.**
Confidential — For founder and advisor use only.

---

## Key Valuation Conclusion

> **Raise $2.5M at a $12M pre-money valuation.**
> Post-money: $14.5M · Investor ownership: 17.24%
> $700K contracted revenue (signed commitments) — **not ARR**.

The $12M pre-money is the cleanest, most defensible ask. It reflects disciplined Seed ownership math, validates contracted demand without overstating revenue quality, and leaves meaningful upside for investors as contracts convert to repeatable ARR.

---

## What's in This Project

```
corello-valuation/
  src/
    App.tsx                         — Main dashboard app
    main.tsx                        — React entry point
    data/
      valuationInputs.json          — All valuation assumptions
      benchmarkCompanies.json       — Comparable companies
    components/
      KpiCard.tsx                   — KPI metric cards
      ValuationSummary.tsx          — Visual valuation range chart
      ScenarioTable.tsx             — Downside / Base / Upside scenarios
      DilutionChart.tsx             — Investor ownership dilution curve
      ContractedRevenueChart.tsx    — Revenue multiple sanity check
      BenchmarkChart.tsx            — Comparable company round sizes
      ValuationBridge.tsx           — Methodology breakdown
      SensitivityMatrix.tsx         — Ownership and multiple matrices
      ReportPreview.tsx             — Objections, diligence, pitch language
    utils/
      valuationMath.ts              — Reusable valuation calculations
      formatting.ts                 — Number formatters ($M, %, x)
  reports/
    corello_seed_valuation_report.md    — Full investor-grade report
    corello_founder_talking_points.md  — Pitch prep and objection handling
    corello_investor_memo.md            — 1-page investor memo
  output/
    corello_valuation_inputs.csv        — All inputs as CSV
    corello_dilution_sensitivity.csv    — Full dilution table
    corello_benchmark_table.csv         — Comparable companies
    corello_scenario_analysis.csv       — Three scenarios
```

---

## Install and Run

```bash
cd corello-valuation
npm install
npm run dev
```

Then open: http://localhost:5173

---

## Dashboard Sections

1. **Executive Summary** — KPI cards, pitch statement, contracted revenue warning
2. **Valuation Range** — Visual range chart (conservative → fair → stretch → avoid)
3. **Scenario Analysis** — Downside ($9.5M), Base ($12M), Upside ($14.5M) pre-money
4. **Dilution Sensitivity** — Investor ownership curve for $2.5M raise
5. **Revenue Multiple** — Pre-money / $700K contracted revenue (sanity check, not ARR multiple)
6. **Benchmark Companies** — Industrial AI Seed and later-stage round sizes
7. **Valuation Methodology** — Blended method breakdown with weights
8. **Sensitivity Matrices** — Ownership % and revenue multiples across raise sizes and valuations
9. **Investor Prep** — Objections & responses, diligence checklist, exact pitch language

---

## How to Edit Assumptions

All key inputs live in `src/data/valuationInputs.json`:
- Round size, pre-money target, contracted revenue
- Fair range and founder anchor
- Scenarios (Downside / Base / Upside)
- Dilution sensitivity table
- Valuation method weights

Benchmark companies live in `src/data/benchmarkCompanies.json`.

---

## Important Notes

- **$700K is contracted revenue, not ARR.** The dashboard clearly labels this throughout.
- Benchmark round sizes are directional context only. Private company valuations are not implied unless publicly disclosed.
- This tool is an investor-preparation aid, not a fairness opinion or financial advice.

---

## Verified Math

```
Post-money = $12M + $2.5M = $14.5M
Investor ownership = $2.5M / $14.5M = 17.24%
Contracted rev. multiple = $12M / $0.7M = 17.14x

20% ownership → $2.5M / 0.20 - $2.5M = $10.0M pre
15.15% ownership → $2.5M / 0.1515 - $2.5M ≈ $14.0M pre
```
