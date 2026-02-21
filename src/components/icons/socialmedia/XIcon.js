import React from "react";
export default function XIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M18.244 2H21.5L14.97 9.457L22.5 22H16.613L11.96 14.553L5.395 22H2.136L9.11 14.068L1.9 2H7.93L12.14 8.83L18.244 2ZM17.098 20H18.84L6.986 3.915H5.115L17.098 20Z" />
    </svg>
  );
}
