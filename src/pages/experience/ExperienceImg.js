import React from "react";
import { ReactComponent as ExperienceSVG } from "../../assets/images/experience1.svg";

export default function ExperienceImg({ theme }) {
  return (
    <ExperienceSVG
      style={{
        width: "600px", // Fixed width
        height: "auto", // Let it scale proportionally
        maxWidth: "100%", // Responsive fallback
      }}
    />
  );
}
