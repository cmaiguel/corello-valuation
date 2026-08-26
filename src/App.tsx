import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { T } from "./theme";
import DataRoomLogin from "./pages/DataRoomLogin";
import DataRoomLayout from "./components/DataRoomLayout";
import Snapshot from "./components/Snapshot";
import Market from "./components/Market";
import Traction from "./components/Traction";
import Team from "./components/Team";
import Technology from "./components/Technology";
import Legal from "./components/Legal";
import Financials from "./components/Financials";
import LogoMark from "./components/LogoMark";

function isDataRoomAuthed() {
  return localStorage.getItem("dataroom_auth") === "1";
}

export default function App() {
  const [authed, setAuthed] = useState(isDataRoomAuthed());

  useEffect(() => {
    if (authed) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
    }
  }, [authed]);

  function handleLogin() {
    localStorage.setItem("dataroom_auth", "1");
    setAuthed(true);
  }

  function handleLogout() {
    localStorage.removeItem("dataroom_auth");
    setAuthed(false);
  }

  if (!authed) return <DataRoomLogin onLogin={handleLogin} />;

  return (
    <Routes>
      <Route path="/" element={
        <DataRoomLayout onLogout={handleLogout}>
          <Snapshot />
          <Divider />
          <Market />
          <Divider />
          <Traction />
          <Divider />
          <Team />
          <Divider />
          <Technology />
          <Divider />
          <Financials />
          <Divider />
          <Legal />
          <DataRoomFooter />
        </DataRoomLayout>
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function Divider() {
  return <div style={{ height: 1, background: T.border }} />;
}

function DataRoomFooter() {
  return (
    <footer style={{ borderTop: `1px solid ${T.border}`, paddingTop: 60, marginTop: 80, paddingBottom: 48, textAlign: "center" }}>
      <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
        <LogoMark size="sm" />
      </div>
      <div style={{ fontSize: 11, color: T.textSubtle, fontFamily: "'Geist Mono', monospace" }}>
        Corello Inc. © 2026 · Confidential
      </div>
    </footer>
  );
}
