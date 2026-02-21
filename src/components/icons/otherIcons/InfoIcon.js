import React from "react";

export default function InfoIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Filled Circle */}
      <circle cx="12" cy="12" r="10" />

      {/* Bold "i" */}
      <rect x="11" y="10" width="2" height="6" rx="1" fill="white" />
      <circle cx="12" cy="7.5" r="1.2" fill="white" />
    </svg>
  );
}
