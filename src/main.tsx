import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./fonts.css";
import App from "./App";

// Prevent browser from restoring previous scroll position on load
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);

const style = document.createElement("style");
style.textContent = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; color-scheme: dark; }
  body {
    background: #0F1112;
    color: #ffffff;
    font-family: 'Geist', 'Inter', system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button { font-family: inherit; cursor: pointer; }
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: #161A1D; }
  ::-webkit-scrollbar-thumb { background: rgba(245,194,0,0.25); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(245,194,0,0.4); }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
