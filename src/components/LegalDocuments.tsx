import React, { useState } from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const DOCUMENTS = [
  {
    category: "Incorporation & Structure",
    color: T.gold,
    items: [
      {
        name: "Certificate of Incorporation",
        type: "Delaware C-Corp",
        url: "https://drive.google.com/file/d/1jVL9LA-zQb6VHjddZjDG6_ZamWjeJCjd/view",
      },
      {
        name: "Bylaws",
        type: "Corporate governance",
        url: "https://drive.google.com/file/d/1MVLxIE4PQR59K0qRkX0UwAwIroMADTGr/view",
      },
    ],
  },
  {
    category: "Capitalization & Equity",
    color: T.blue,
    items: [
      {
        name: "Cap Table (Current)",
        type: "Current ownership structure",
        url: "#financials",
      },
      {
        name: "Stock Ledger",
        type: "Issued and outstanding shares",
        url: "https://drive.google.com/file/d/1oweRrGHxrO_DcIdn8nrIcqg01Bcf0qng/view",
      },
    ],
  },
  {
    category: "IP & Patents",
    color: "#A78BFA",
    items: [
      {
        name: "Patent Provisional Applications",
        type: "AI agentic manufacturing intelligence",
        url: "#patents",
      },
      {
        name: "IP Assignment Agreements",
        type: "Founder IP assignment documentation",
        url: "https://drive.google.com/file/d/1g-Ap9rCtPncuQ68TvhJNTIRe7_35F2FW/view",
      },
    ],
  },
];

export default function LegalDocuments() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section id="legal" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Legal & IP
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          Corporate & <span style={{ color: T.gold }}>intellectual property.</span>
        </h2>
        <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 720, fontWeight: 400 }}>
          Delaware C-corp with clean cap table, founder IP assignment, and patent applications covering core AI technology.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {DOCUMENTS.map(section => (
          <div key={section.category} style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            overflow: "hidden",
          }}>
            {/* Header */}
            <button
              onClick={() => setExpandedCategory(expandedCategory === section.category ? null : section.category)}
              style={{
                width: "100%",
                padding: "20px 24px",
                background: T.surface,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: expandedCategory === section.category ? `1px solid ${T.border}` : "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = T.surface2)}
              onMouseLeave={(e) => (e.currentTarget.style.background = T.surface)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 3, height: 20, borderRadius: 2, background: section.color }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: T.text, fontFamily: SHARP, letterSpacing: "-0.01em" }}>
                  {section.category}
                </div>
              </div>
              <div style={{ fontSize: 20, color: T.textMuted, transition: "transform 0.2s" }}>
                {expandedCategory === section.category ? "−" : "+"}
              </div>
            </button>

            {/* Content */}
            {expandedCategory === section.category && (
              <div style={{ padding: "0 24px 20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {section.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target={item.url.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 14px",
                        background: T.surface2,
                        border: `1px solid ${T.border}`,
                        borderRadius: 10,
                        textDecoration: "none",
                        transition: "all 0.15s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = section.color;
                        (e.currentTarget as HTMLAnchorElement).style.background = `${section.color}08`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = T.border;
                        (e.currentTarget as HTMLAnchorElement).style.background = T.surface2;
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: T.text, fontFamily: SHARP, letterSpacing: "-0.01em" }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: 10, color: T.textSubtle, marginTop: 2, fontFamily: T.fontMono }}>
                          {item.type}
                        </div>
                      </div>
                      <div style={{ fontSize: 16, color: T.textMuted }}>→</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
