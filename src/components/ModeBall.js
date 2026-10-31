import React from 'react';
import { FaAdjust } from 'react-icons/fa';

export default function ModeBall({mode}) {
  return (
    <button
      type="button"
      onClick={mode}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="float d-flex align-items-center justify-content-center z-100 border-0"
    >
      <FaAdjust />
    </button>
  );
}
