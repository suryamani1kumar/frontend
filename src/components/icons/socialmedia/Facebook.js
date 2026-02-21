import React from "react";

export default function FacebookIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.017 3.657 9.173 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.095 0 2.24.195 2.24.195v2.46h-1.262c-1.243 0-1.63.774-1.63 1.566v1.88h2.773l-.443 2.9h-2.33V22c4.78-.757 8.437-4.913 8.437-9.93z" />
    </svg>
  );
}
