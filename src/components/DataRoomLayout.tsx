import React, { useState, useEffect } from "react";
import { T } from "../theme";
import LogoMark from "./LogoMark";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

const NAV_ITEMS = [
  { id: "snapshot", label: "Snapshot" },
  { id: "market", label: "Opportunity" },
  { id: "traction", label: "Traction" },
  { id: "team", label: "Team" },
  { id: "technology", label: "Technology" },
  { id: "financials", label: "Financials" },
  { id: "legal", label: "Legal" },
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
          padding: "clamp(16px, 4vw, 20px) clamp(16px, 5vw, 32px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(12px, 3vw, 40px)",
          flexWrap: "wrap",
        }}>
          {/* Logo Only */}
          <LogoMark size="md" />

          {/* Navigation */}
          <nav style={{
            display: "flex",
            gap: 2,
            flex: 1,
            justifyContent: "center",
            minWidth: 0,
            overflowX: "auto",
            order: 3,
            width: "100%",
            marginTop: "clamp(0px, 5vw, 8px)",
          }} className="mobile-nav">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  padding: "clamp(6px, 2vw, 8px) clamp(8px, 2vw, 14px)",
                  fontSize: "clamp(9px, 1.5vw, 12px)",
                  fontWeight: active === id ? 700 : 400,
                  background: "transparent",
                  color: active === id ? T.gold : T.textMuted,
                  border: "none",
                  borderBottom: active === id ? `2px solid ${T.gold}` : "2px solid transparent",
                  borderRadius: 0,
                  cursor: "pointer",
                  fontFamily: SHARP,
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (active !== id) {
                    (e.currentTarget as HTMLButtonElement).style.color = T.text;
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== id) {
                    (e.currentTarget as HTMLButtonElement).style.color = T.textMuted;
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
              padding: "clamp(7px, 2vw, 8px) clamp(10px, 2vw, 14px)",
              fontSize: "clamp(9px, 1.2vw, 10px)",
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
        padding: "0 clamp(16px, 5vw, 32px)",
      }}>
        {children}
      </main>
    </div>
  );
}
