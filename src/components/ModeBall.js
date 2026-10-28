import React from 'react';
import { FaAdjust } from 'react-icons/fa';

export default function ModeBall({ mode }) {
  return (
    <button
      type="button"
      onClick={mode}
      className="float border-0 d-flex align-items-center justify-content-center z-100"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <FaAdjust />
    </button>
  );
}
