import React from "react";

export default function CalendarFilledIcon({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Rounded Square */}
      <rect width="24" height="24" rx="4" fill="currentColor" />

      {/* Calendar Body */}
      <rect x="5" y="7" width="14" height="12" rx="2" fill="white" />

      {/* Top Bar */}
      <rect x="5" y="7" width="14" height="3" fill="white" />

      {/* Rings */}
      <rect x="8" y="4" width="2" height="4" rx="1" fill="white" />
      <rect x="14" y="4" width="2" height="4" rx="1" fill="white" />

      {/* Date Dots */}
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
