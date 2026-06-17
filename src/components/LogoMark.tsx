import React from "react";

// Brandbook (1).png: white wordmark + gold lightbulb on black background.
// mix-blend-mode: screen makes the black pixels perfectly transparent,
// leaving only the white text and gold lightbulb visible on any dark surface.
export default function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const h = size === "sm" ? 32 : size === "lg" ? 64 : 44;

  return (
    <img
      src="/corello-logo-white.png"
      alt="Corello"
      height={h}
      style={{
        display: "block",
        mixBlendMode: "screen",
      }}
    />
  );
}
