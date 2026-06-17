// Corello brand design system
// Colors match the official brand: #0F1112 bg, #F5C200 gold, Nunito headings.

export const T = {
  bg:       "#0F1112",           // official brand background
  surface:  "#161A1D",           // card surface
  surface2: "#1C2226",           // slightly elevated
  surface3: "#222830",           // even more elevated

  text:       "#FFFFFF",         // white headings
  textMuted:  "#8A9299",         // muted body copy
  textSubtle: "#4A5259",         // very subtle / footnotes
  textGhost:  "#2A3035",         // decorative / watermarks

  border:  "rgba(245,194,0,0.08)",
  border2: "rgba(245,194,0,0.12)",

  // Corello brand yellow — official
  gold:       "#F5C200",
  goldBg:     "rgba(245,194,0,0.05)",
  goldBorder: "rgba(245,194,0,0.25)",

  blue:       "#4F8EF4",
  blueBg:     "rgba(79,142,244,0.10)",
  blueBorder: "rgba(79,142,244,0.25)",
  blueLight:  "#60A5FA",
  blueDark:   "#2563EB",

  green:       "#34D399",
  greenBg:     "rgba(52,211,153,0.10)",
  greenBorder: "rgba(52,211,153,0.25)",
  greenLight:  "#4ADE80",

  amber:       "#FBBF24",
  amberBg:     "rgba(251,191,36,0.10)",
  amberBorder: "rgba(251,191,36,0.25)",

  rSm: 0,
  rMd: 0,
  rLg: 0,
  rXl: 0,

  font:     "'Geist', 'Inter', system-ui, -apple-system, sans-serif",
  fontHead: "'Nunito', 'Geist', system-ui, sans-serif",
  fontMono: "'Geist Mono', 'Fira Code', monospace",
} as const;

export const C = {
  ...T,
  bgPage:        T.bg,
  bgSurface:     T.surface,
  bgSurface2:    T.surface2,
  bgSurface3:    T.surface3,
  textPrimary:   T.text,
  textSecondary: T.textMuted,
  textDisabled:  T.textSubtle,
  blueMid:       T.blueLight,
  violet:        "#7C3AED",
  violetBg:      "rgba(124,58,237,0.10)",
  violetBorder:  "rgba(124,58,237,0.25)",
  rose:          "#F87171",
  roseBg:        "rgba(248,113,113,0.10)",
  roseBorder:    "rgba(248,113,113,0.25)",
  amberLight:    T.amber,
  slate:         "#475569",
};
