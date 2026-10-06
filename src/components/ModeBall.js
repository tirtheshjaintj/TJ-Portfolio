import React from 'react';
import { FaAdjust } from 'react-icons/fa';

export default function ModeBall({ mode }) {
  return (
    <button
      type="button"
      onClick={mode}
      className="float d-flex align-items-center justify-content-center border-0"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <FaAdjust />
    </button>
  );
}
