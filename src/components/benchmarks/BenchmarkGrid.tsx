import React from "react";
import { BenchmarkCompany, Category, CATEGORIES } from "../../data/benchmarks";
import BenchmarkCard from "./BenchmarkCard";
import { T } from "../../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

interface Props {
  companies: BenchmarkCompany[];
  categoryFilter: Category | "All";
  relevanceFilter: number;
  onCategoryChange: (c: Category | "All") => void;
  onRelevanceChange: (r: number) => void;
}

export default function BenchmarkGrid({
  companies,
  categoryFilter,
  relevanceFilter,
  onCategoryChange,
  onRelevanceChange,
}: Props) {
  const filtered = companies.filter(c =>
    (categoryFilter === "All" || c.category === categoryFilter) &&
    c.relevanceScore >= relevanceFilter
  );

  return (
    <div>
      {/* Filter bar */}
      <div style={{
        display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center",
        marginBottom: 24, padding: "16px 20px",
        background: T.surface, border: `1px solid ${T.border}`,
        borderRadius: 12,
      }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, fontFamily: T.fontMono, textTransform: "uppercase", letterSpacing: "0.12em", flexShrink: 0 }}>
          Filter:
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {(["All", ...CATEGORIES] as (Category | "All")[]).map(cat => (
            <button key={cat} onClick={() => onCategoryChange(cat)} style={{
              fontSize: 11, fontWeight: categoryFilter === cat ? 700 : 400,
              color: categoryFilter === cat ? T.gold : T.textMuted,
              background: categoryFilter === cat ? T.goldBg : "transparent",
              border: `1px solid ${categoryFilter === cat ? T.goldBorder : T.border}`,
              borderRadius: 6, padding: "4px 10px",
              cursor: "pointer", fontFamily: T.fontMono,
              textTransform: "uppercase", letterSpacing: "0.06em",
              transition: "all 0.12s",
            }}>{cat}</button>
          ))}
        </div>

        <div style={{ height: 20, width: 1, background: T.border, flexShrink: 0 }} />

        {/* Relevance filter */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: T.textSubtle, fontFamily: T.fontMono, textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Min relevance:
          </span>
          {[1, 2, 3, 4, 5].map(n => (
            <button key={n} onClick={() => onRelevanceChange(n)} style={{
              width: 28, height: 28,
              fontSize: 12, fontWeight: 700,
              color: relevanceFilter === n ? T.gold : T.textMuted,
              background: relevanceFilter === n ? T.goldBg : "transparent",
              border: `1px solid ${relevanceFilter === n ? T.goldBorder : T.border}`,
              borderRadius: 6, cursor: "pointer",
              fontFamily: SHARP,
              transition: "all 0.12s",
            }}>{n}</button>
          ))}
        </div>

        <div style={{ marginLeft: "auto", fontSize: 11, color: T.textSubtle, fontFamily: T.fontMono }}>
          {filtered.length} / {companies.length} companies
        </div>
      </div>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "48px 0", color: T.textSubtle, fontSize: 14 }}>
          No companies match the selected filters.
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}>
          {filtered.map(c => (
            <BenchmarkCard key={c.company} company={c} />
          ))}
        </div>
      )}
    </div>
  );
}
