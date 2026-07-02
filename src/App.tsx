import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { T } from "./theme";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";
import LogoMark from "./components/LogoMark";
import Snapshot from "./components/Snapshot";
import Market from "./components/Market";
import Traction from "./components/Traction";
import Valuation from "./components/Valuation";
import Financials from "./components/Financials";
import ProductRoadmap from "./components/ProductRoadmap";
import TeamBios from "./components/TeamBios";
import LegalDocuments from "./components/LegalDocuments";
import DueDiligence from "./components/DueDiligence";
import PatentProvisional from "./components/PatentProvisional";
import TechStack from "./components/TechStack";
import BenchmarksPage from "./pages/BenchmarksPage";

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
    <Routes>
      <Route path="/" element={
        <Layout onLogout={handleLogout} userEmail="carlos.maiguel@corello.ai">
          <Snapshot />
          <Divider />
          <Market />
          <Divider />
          <Traction />
          <Divider />
          <Valuation />
          <Divider />
          <Financials />
          <Divider />
          <ProductRoadmap />
          <Divider />
          <TechStack />
          <Divider />
          <TeamBios />
          <Divider />
          <LegalDocuments />
          <Divider />
          <DueDiligence />
          <Divider />
          <PatentProvisional />
          <Footer />
        </Layout>
      } />
      <Route path="/benchmarks" element={
        <BenchmarksPage userEmail="carlos.maiguel@corello.ai" onLogout={handleLogout} />
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function Divider() {
  return <div style={{ height: 1, background: T.border }} />;
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${T.border}`, paddingTop: 40, marginTop: 80, paddingBottom: 48 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <LogoMark size="md" />
        <div style={{ fontSize: 15, fontWeight: 700, color: T.gold, letterSpacing: "-0.02em" }}>Capital Room</div>
        <div style={{ fontSize: 12, color: T.textSubtle }}>Corello Inc. · 2026</div>
      </div>
    </footer>
  );
}
