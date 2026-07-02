import React, { useState, useEffect } from "react";
import { T } from "../theme";
import LogoMark from "./LogoMark";

const NAV_ITEMS = [
  { id: "snapshot",     label: "Snapshot" },
  { id: "market",       label: "Market" },
  { id: "traction",     label: "Traction" },
  { id: "valuation",    label: "Valuation" },
  { id: "financials",   label: "Financials" },
  { id: "roadmap",      label: "Roadmap" },
  { id: "tech",         label: "Tech Stack" },
  { id: "team",         label: "Team" },
  { id: "legal",        label: "Legal" },
  { id: "dd",           label: "Demo" },
  { id: "patents",      label: "Patents" },
];

interface Props {
  children: React.ReactNode;
  onLogout: () => void;
  userEmail: string;
}

export default function Layout({ children, onLogout, userEmail }: Props) {
  const [active, setActive] = useState("snapshot");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let current = "snapshot";
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 90) current = id;
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
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(15,17,18,0.92)" : T.bg,
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
        transition: "all 0.2s",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "0 32px",
          height: 60, display: "flex", alignItems: "center", gap: 32,
        }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            style={{ cursor: "pointer", opacity: 1, transition: "opacity 0.15s", background: "none", border: "none", padding: 0 }}
          >
            <LogoMark size="sm" />
          </button>

          <nav style={{ display: "flex", gap: 2, flex: 1, alignItems: "center" }}>
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <button key={id} onClick={() => scrollTo(id)} style={{
                  padding: "6px 12px", border: "none", borderRadius: 8,
                  background: isActive ? T.goldBg : "transparent",
                  color: isActive ? T.gold : T.textMuted,
                  fontWeight: isActive ? 600 : 400,
                  fontSize: 13, cursor: "pointer", fontFamily: T.font,
                  transition: "all 0.15s", whiteSpace: "nowrap",
                }}>
                  {label}
                </button>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{
              background: T.goldBg, border: `1px solid ${T.goldBorder}`,
              borderRadius: 99, padding: "4px 12px",
              fontSize: 10, fontWeight: 700, color: T.gold, letterSpacing: "0.2em", fontFamily: T.fontMono,
            }}>
              SEED RAISE
            </div>
            <div style={{ fontSize: 12, color: T.textSubtle }}>{userEmail}</div>
            <button onClick={onLogout} style={{
              fontSize: 12, color: T.textMuted, background: "none",
              border: `1px solid ${T.border}`,
              borderRadius: 8, padding: "5px 12px", cursor: "pointer", fontFamily: T.font,
              transition: "border-color 0.15s",
            }}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 120px" }}>
        {children}
      </main>
    </div>
  );
}

export { NAV_ITEMS };
