import React, { useState, useEffect } from "react";
import { T } from "../theme";
import LogoMark from "./LogoMark";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const NAV_ITEMS = [
  { id: "snapshot", label: "Snapshot" },
  { id: "market", label: "Opportunity" },
  { id: "traction", label: "Traction" },
  { id: "financials", label: "Financials" },
];

interface Props {
  children: React.ReactNode;
  onLogout: () => void;
}

export default function DataRoomLayout({ children, onLogout }: Props) {
  const [active, setActive] = useState("snapshot");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let current = "snapshot";
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.font, color: T.text }}>
      {/* Header */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(15,17,18,0.92)" : T.bg,
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
        transition: "all 0.2s",
      }}>
        <div style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}>
          {/* Logo & Title */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0 }}>
            <LogoMark size="md" />
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: "clamp(12px, 2vw, 14px)",
                fontWeight: 800,
                color: T.text,
                fontFamily: SHARP,
                letterSpacing: "-0.02em",
                margin: 0,
                lineHeight: 1.2,
              }}>
                Corello: AI-Native Manufacturing Intelligence
              </div>
              <div style={{
                fontSize: 10,
                fontWeight: 700,
                color: T.gold,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: T.fontMono,
                marginTop: 2,
              }}>
                Data Room
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav style={{
            display: "flex",
            gap: 2,
            flex: 1,
            justifyContent: "center",
            minWidth: 0,
            overflowX: "auto",
          }}>
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  padding: "8px 14px",
                  fontSize: "clamp(10px, 1vw, 12px)",
                  fontWeight: active === id ? 700 : 400,
                  background: active === id ? T.surface2 : "transparent",
                  color: active === id ? T.gold : T.textMuted,
                  border: active === id ? `1px solid ${T.gold}30` : "1px solid transparent",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: SHARP,
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (active !== id) {
                    (e.currentTarget as HTMLButtonElement).style.background = T.surface2;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = T.border;
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== id) {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
                  }
                }}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Logout */}
          <button
            onClick={onLogout}
            style={{
              padding: "8px 14px",
              fontSize: 10,
              fontWeight: 700,
              background: "transparent",
              color: T.textMuted,
              border: `1px solid ${T.border}`,
              borderRadius: 8,
              cursor: "pointer",
              fontFamily: T.fontMono,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              transition: "all 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#F87171";
              (e.currentTarget as HTMLButtonElement).style.color = "#F87171";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = T.border;
              (e.currentTarget as HTMLButtonElement).style.color = T.textMuted;
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <main style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "0 32px",
      }}>
        {children}
      </main>
    </div>
  );
}
