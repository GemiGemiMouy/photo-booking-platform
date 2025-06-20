// src/components/BackgroundWatermark.jsx
import React from "react";

export default function BackgroundWatermark() {
  return (
    <div
      aria-hidden="true"
      className="fixed bottom-4 left-0 w-full flex justify-center pointer-events-none select-none"
      style={{ opacity: 0.2, fontSize: '1rem', color: 'rgba(107, 70, 193, 0.5)', userSelect: 'none' }}
    >
      Developed by Seakmouy Seng (Gemi)
    </div>
  );
}
