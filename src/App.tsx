import React, { useState, useEffect } from "react";
import { T } from "./theme";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";
import Snapshot from "./components/Snapshot";
import Traction from "./components/Traction";
import Valuation from "./components/Valuation";
import Benchmarks from "./components/Benchmarks";
import UseOfFundsMilestones from "./components/UseOfFundsMilestones";
import Financials from "./components/Financials";

function isLoggedIn() {
  return localStorage.getItem("cr_auth") === "1";
}

export default function App() {
  const [authed, setAuthed] = useState(isLoggedIn());

  useEffect(() => {
    if (authed) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
    }
  }, [authed]);

  function handleLogin() { setAuthed(true); }
  function handleLogout() { localStorage.removeItem("cr_auth"); setAuthed(false); }

  if (!authed) return <LoginPage onLogin={handleLogin} />;

  return (
    <Layout onLogout={handleLogout} userEmail="carlos.maiguel@corello.ai">
      <Snapshot />
      <Divider />
      <Traction />
      <Divider />
      <Valuation />
      <Divider />
      <Benchmarks />
      <Divider />
      <UseOfFundsMilestones />
      <Divider />
      <Financials />
      <Footer />
    </Layout>
  );
}

function Divider() {
  return <div style={{ height: 1, background: T.border }} />;
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${T.border}`, paddingTop: 32, marginTop: 80, paddingBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.text }}>Corello Capital Room</div>
          <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Seed Round · Confidential</div>
        </div>
        <div style={{ fontSize: 11, color: T.textSubtle, maxWidth: 520, textAlign: "right", lineHeight: 1.7 }}>
          Contracted revenue ($700K) represents signed customer commitments and is not ARR or recognized revenue. This document does not constitute a fairness opinion, financial advice, or an offer to sell securities.
        </div>
      </div>
    </footer>
  );
}
