import React from 'react';
import { FaAdjust } from 'react-icons/fa';

export default function ModeBall({mode}) {
  return (
 <>
    <div onClick={mode} className="float modeball flex items-center justify-center z-100">
        <FaAdjust />
      </div>
 </>
  )
}
