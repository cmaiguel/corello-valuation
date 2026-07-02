import React from "react";
import { T } from "../theme";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

export default function DueDiligence() {
  return (
    <section id="dd" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 14, fontFamily: T.fontMono }}>
          Due Diligence
        </div>
        <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: T.text, letterSpacing: "-0.05em", lineHeight: 0.97, margin: "0 0 18px", fontFamily: SHARP }}>
          Product <span style={{ color: T.gold }}>demonstration.</span>
        </h2>
        <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 720, fontWeight: 400 }}>
          Live demo of Corello's AI-native manufacturing intelligence platform in action.
        </p>
      </div>

      {/* Video */}
      <div style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 40,
      }}>
        <div style={{
          width: "100%",
          paddingBottom: "56.25%",
          position: "relative",
          background: "#000",
        }}>
          <iframe
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: "none",
              borderRadius: 16,
            }}
            src="https://www.youtube.com/embed/vNv6jrvg28c"
            title="Corello AI Manufacturing Intelligence Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Reference Documents */}
      <div style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: 16,
        padding: "32px 28px",
      }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 24, fontFamily: SHARP }}>
          Reference Materials
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { title: "Product Architecture", desc: "Technical system design and AI pipeline" },
            { title: "Customer Implementation", desc: "Onboarding process and integration steps" },
            { title: "Business Model", desc: "Pricing, packaging, and GTM strategy" },
            { title: "Security & Compliance", desc: "Data handling, privacy, and regulatory adherence" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "16px 14px",
                background: T.surface2,
                border: `1px solid ${T.border}`,
                borderRadius: 10,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = T.gold;
                (e.currentTarget as HTMLDivElement).style.background = `${T.gold}08`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = T.border;
                (e.currentTarget as HTMLDivElement).style.background = T.surface2;
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color: T.text, fontFamily: SHARP, marginBottom: 4 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 11, color: T.textSubtle }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
