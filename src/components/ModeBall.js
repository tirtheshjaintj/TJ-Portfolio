import React from 'react'

export default function ModeBall({mode}) {
  return (
 <>
   <div onClick={mode} className="float">
        <i className="fa fa-adjust my-float"></i>
      </div>
 </>
  )
}
