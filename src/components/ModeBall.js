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
      type="button"
      onClick={mode}
      onKeyDown={handleKeyDown}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="float d-flex align-items-center justify-content-center border-0 p-0"
    >
      <FaAdjust aria-hidden="true" />
    </button>
  );
}
