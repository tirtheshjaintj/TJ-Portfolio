import React from 'react';
import { FaAdjust } from 'react-icons/fa';

export default function ModeBall({ mode }) {
  return (
    <button
      onClick={mode}
      className="float d-flex align-items-center justify-content-center z-100 border-0"
      aria-label="Toggle theme"
      title="Toggle theme"
      type="button"
    >
      <FaAdjust />
    </button>
  );
}
