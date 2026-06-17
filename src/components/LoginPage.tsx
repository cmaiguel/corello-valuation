import React, { useState } from "react";
import { T } from "../theme";
import LogoMark from "./LogoMark";

const VALID_EMAIL = "carlos.maiguel@corello.ai";
const VALID_PASS  = "corello123";

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail]     = useState("");
  const [pass, setPass]       = useState("");
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (email.trim().toLowerCase() === VALID_EMAIL && pass === VALID_PASS) {
        localStorage.setItem("cr_auth", "1");
        onLogin();
      } else {
        setError("Invalid investor login.");
      }
      setLoading(false);
    }, 400);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px", fontSize: 14,
    border: `1.5px solid ${T.border2}`, borderRadius: T.rMd,
    background: T.surface2, color: T.text, fontFamily: T.font,
    outline: "none", boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  return (
    <div style={{
      minHeight: "100vh", background: T.bg,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: T.font,
    }}>
      {/* Subtle background glow */}
      <div style={{
        position: "fixed", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(245,184,0,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ width: "100%", maxWidth: 400, padding: "0 24px", position: "relative" }}>
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`,
          borderRadius: 20, padding: "40px 36px",
          boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
        }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <LogoMark size="lg" />
          </div>

          <h1 style={{ fontSize: 22, fontWeight: 700, color: T.text, textAlign: "center", letterSpacing: "-0.03em", margin: "0 0 6px" }}>
            Corello Capital Room
          </h1>
          <p style={{ fontSize: 13, color: T.textMuted, textAlign: "center", margin: "0 0 28px" }}>
            Investor access
          </p>

          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, display: "block", marginBottom: 6 }}>Email</label>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="investor@example.com" required autoFocus
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = T.gold)}
                onBlur={e => (e.target.style.borderColor = T.border2)}
              />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, display: "block", marginBottom: 6 }}>Password</label>
              <input
                type="password" value={pass} onChange={e => setPass(e.target.value)}
                placeholder="••••••••" required
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = T.gold)}
                onBlur={e => (e.target.style.borderColor = T.border2)}
              />
            </div>

            {error && (
              <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: T.rMd, padding: "10px 14px", fontSize: 13, color: "#F87171", textAlign: "center" }}>
                {error}
              </div>
            )}

            <button type="submit" disabled={loading} style={{
              width: "100%", padding: "12px", fontSize: 14, fontWeight: 700,
              background: loading ? T.surface3 : T.gold,
              color: loading ? T.textMuted : "#0A0E1A",
              border: "none", borderRadius: T.rMd,
              cursor: loading ? "not-allowed" : "pointer", fontFamily: T.font,
              transition: "all 0.15s", marginTop: 4,
              letterSpacing: "0.01em",
            }}>
              {loading ? "Verifying…" : "Enter Capital Room"}
            </button>
          </form>

          <p style={{ fontSize: 11, color: T.textSubtle, textAlign: "center", marginTop: 20 }}>
            Confidential financial materials
          </p>
        </div>

        <p style={{ fontSize: 10, color: T.textSubtle, textAlign: "center", marginTop: 16, lineHeight: 1.6 }}>
          Demo auth for local fundraising preparation only.<br />
          Replace with real authentication before deploying externally.
        </p>
      </div>
    </div>
  );
}
