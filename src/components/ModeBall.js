import React from 'react';
import { FaAdjust } from 'react-icons/fa';

export default function ModeBall({mode}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      mode();
    }
  };

  return (
    <button
      onClick={mode}
      onKeyDown={handleKeyDown}
      className="float d-flex align-items-center justify-content-center z-100 border-0"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      type="button"
    >
      <FaAdjust />
    </button>
  );
}
