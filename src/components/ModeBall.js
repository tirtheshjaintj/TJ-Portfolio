import React from 'react';
import { FaAdjust } from 'react-icons/fa';

export default function ModeBall({mode}) {
  return (
 <>
    <div onClick={mode} className="float d-flex align-items-center justify-content-center z-100">
       <div className="float d-flex align-items-center justify-content-center z-100">
        <FaAdjust />
        </div>
      </div>
 </>
  )
}
