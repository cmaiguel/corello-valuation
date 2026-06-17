import React, { useState } from "react";
import { T } from "../theme";

const FINANCIALS_PASS = "corello";

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: T.gold, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 10, fontFamily: T.fontMono }}>{eyebrow}</div>
      <h2 style={{ fontSize: 36, fontWeight: 800, color: T.text, letterSpacing: "-0.03em", margin: "0 0 10px", fontFamily: T.fontHead }}>{title}</h2>
      {sub && <p style={{ fontSize: 15, color: T.textMuted, lineHeight: 1.65, margin: 0, maxWidth: 560 }}>{sub}</p>}
    </div>
  );
}

function LockedState({ onUnlock }: { onUnlock: () => void }) {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pass === FINANCIALS_PASS) {
      onUnlock();
    } else {
      setError(true);
      setPass("");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
      <div style={{
        background: T.surface, border: `1px solid ${T.border}`,
        borderRadius: T.rXl, padding: "48px 44px",
        maxWidth: 400, width: "100%", textAlign: "center",
        boxShadow: "0 8px 48px rgba(0,0,0,0.3)",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: T.surface2, border: `1px solid ${T.border2}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px", fontSize: 24,
        }}>
          🔒
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 10 }}>Financials locked</div>
        <div style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.65, marginBottom: 32 }}>
          Detailed financials will be added by Corello.
        </div>

        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="password" value={pass} autoFocus
            onChange={e => { setPass(e.target.value); setError(false); }}
            placeholder="Enter password"
            style={{
              width: "100%", padding: "11px 14px", fontSize: 14,
              border: `1.5px solid ${error ? "#F87171" : T.border2}`, borderRadius: T.rMd,
              background: T.surface2, color: T.text, fontFamily: T.font,
              outline: "none", boxSizing: "border-box",
            }}
          />
          {error && (
            <div style={{ fontSize: 12, color: "#F87171" }}>Incorrect password.</div>
          )}
          <button type="submit" style={{
            width: "100%", padding: "11px", fontSize: 14, fontWeight: 700,
            background: T.gold, color: "#0A0E1A",
            border: "none", borderRadius: T.rMd,
            cursor: "pointer", fontFamily: T.font,
          }}>
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}

function PlaceholderModule({ title, icon }: { title: string; icon: string }) {
  return (
    <div style={{
      background: T.surface, border: `1px dashed ${T.border2}`,
      borderRadius: T.rLg, padding: "28px 30px",
      display: "flex", flexDirection: "column", gap: 10,
    }}>
      <div style={{ fontSize: 20 }}>{icon}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: T.text }}>{title}</div>
      <div style={{ fontSize: 12, color: T.textSubtle }}>Coming soon — Corello will add detail here.</div>
    </div>
  );
}

export default function Financials() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section id="financials" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <SectionHeader
        eyebrow="Financials"
        title="Financial detail."
        sub="Detailed financials will be added by Corello as the model matures."
      />

      {!unlocked ? (
        <LockedState onUnlock={() => setUnlocked(true)} />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <PlaceholderModule title="Revenue model" icon="📈" />
          <PlaceholderModule title="Burn and runway" icon="🔥" />
          <PlaceholderModule title="Gross margin" icon="📊" />
          <PlaceholderModule title="ARR conversion" icon="↗" />
        </div>
      )}
    </section>
  );
}
