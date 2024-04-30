import React from 'react'

export default function Hero({install}) {
  return (
    <>
    <div className="box1" onClick={install}>
        <h1 >Programmer, Web Developer & Mobile Developer</h1>
        <p>I am Tirthesh Jain a {new Date().getFullYear() - 2004} y/o programmer who find it fun to make useful apps for myself and the World🌏.</p>
        <img src="avatar.svg" className="tilt" alt="Tirthesh Jain" id="avatar" title="Tirthesh Jain" style={{display: "block"}} />
        <img src="basee.svg" id="base"  alt="Tirthesh Jain" title="Tirthesh Jain" />
      </div>
      <a name="skill"></a>
      <div className="box2" onClick={install} >
        <h2>Hi, I’m Tirthesh. Nice to meet you.</h2>
        <br />
        <p>I am Tirthesh Jain a {new Date().getFullYear() - 2004}  y/o programmer who find it fun to make useful apps for myself and the World.I have multiple projects in various fields like android app development and web app development.</p>
      </div>
    </>
  )
}
