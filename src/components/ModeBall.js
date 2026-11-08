import React from 'react';
import { FaAdjust } from 'react-icons/fa';

export default function ModeBall({ mode, isDarkMode = true }) {
  const label = isDarkMode ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={mode}
      aria-label={label}
      aria-pressed={isDarkMode}
      title={label}
      className="btn float d-flex align-items-center justify-content-center p-0 border-0"
    >
      <FaAdjust aria-hidden="true" />
    </button>
  );
}
