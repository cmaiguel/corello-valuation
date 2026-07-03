import React, { useState } from "react";
import { T } from "../theme";
import LogoMark from "../components/LogoMark";

const SHARP = '"Inter Tight", "Inter", "Geist", system-ui, sans-serif';

interface DataRoomLoginProps {
  onLogin: () => void;
}

export default function DataRoomLogin({ onLogin }: DataRoomLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);

    const valid =
      (email === "dataroom@corello.ai" && password === "corello123") ||
      (email === "valeria.vamosventures@corello.ai" && password === "ireallylikecorello") ||
      (email === "ning.sandhillangels@corello.ai" && password === "ireallylikecorello");

    if (valid) {
      onLogin();
    } else {
      setError(true);
      setPassword("");
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: T.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: T.font,
    }}>
      <div style={{
        width: "100%",
        maxWidth: 420,
      }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 48 }}>
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <LogoMark size="lg" />
          </div>
          <h1 style={{
            fontSize: 18,
            fontWeight: 800,
            color: T.gold,
            margin: "0 0 8px",
            fontFamily: SHARP,
            letterSpacing: "-0.03em",
          }}>
            Data Room
          </h1>
          <p style={{
            fontSize: 11,
            color: T.textMuted,
            margin: 0,
            fontFamily: T.fontMono,
            letterSpacing: "0.08em",
          }}>
            Investor Access
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            padding: "40px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Email Input */}
          <div>
            <label style={{
              display: "block",
              fontSize: 11,
              fontWeight: 700,
              color: T.textSubtle,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 8,
              fontFamily: T.fontMono,
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              onFocus={() => setTouched(true)}
              placeholder="dataroom@corello.ai"
              style={{
                width: "100%",
                padding: "12px 14px",
                fontSize: 14,
                background: T.surface2,
                border: `1.5px solid ${error && touched ? "#F87171" : T.border2}`,
                borderRadius: 12,
                color: T.text,
                fontFamily: T.font,
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onBlur={() => setTouched(false)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label style={{
              display: "block",
              fontSize: 11,
              fontWeight: 700,
              color: T.textSubtle,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 8,
              fontFamily: T.fontMono,
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              onFocus={() => setTouched(true)}
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "12px 14px",
                fontSize: 14,
                background: T.surface2,
                border: `1.5px solid ${error && touched ? "#F87171" : T.border2}`,
                borderRadius: 12,
                color: T.text,
                fontFamily: T.font,
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onBlur={() => setTouched(false)}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div style={{
              padding: "12px 14px",
              background: "#F871711a",
              border: "1px solid #F871713a",
              borderRadius: 10,
              fontSize: 12,
              color: "#F87171",
              fontFamily: T.fontMono,
            }}>
              Invalid credentials. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: "13px 16px",
              fontSize: 14,
              fontWeight: 700,
              background: T.gold,
              color: "#0A0E1A",
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              fontFamily: SHARP,
              letterSpacing: "-0.01em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Access Data Room
          </button>
        </form>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          marginTop: 32,
          fontSize: 11,
          color: T.textSubtle,
          fontFamily: T.fontMono,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}>
          Corello Inc. © 2026
        </div>
      </div>
    </div>
  );
}
