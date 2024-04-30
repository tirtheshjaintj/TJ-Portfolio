import React from 'react'

export default function Footer({install}) {
  return (
    <>
      <div className="bigbox2" onClick={install}>
        <div className="box4">
          <h2>Collaborate With Me</h2>
          <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
          <br /><br />
          <a href="mailto:tirtheshjaintj@gmail.com"><span>Contact Me 📧</span></a>
        </div>
      </div>
       <div className="box5" >
        <h2>My Links</h2>
        <div className="links" >
          <a href="https://github.com/tirtheshjaintj" target="_blank" rel="noreferrer">  <i className="fa fa-github fa-3x fa-pull-left fa-border"></i></a>
          <a href="https://www.linkedin.com/in/tirtheshjaintj/" target="_blank" rel="noreferrer">  <i className="fa fa-linkedin-square fa-3x fa-pull-left fa-border"></i></a>
          <a href="https://play.google.com/store/apps/dev?id=7869079839064125604" target="_blank" rel="noreferrer">  <i className="fa fa-android fa-3x fa-pull-left fa-border"></i></a>
          <a href="https://stackoverflow.com/users/16068951/tirthesh-jain" target="_blank" rel="noreferrer">   <i className="fa fa-stack-overflow fa-3x fa-pull-left fa-border"></i></a>
        </div>
        <div className="space1"></div>
        <h2>Designed By Tirthesh Jain</h2>
        <div className="container typewrite">
          <h2 ><span className="text sec-text">I am a Programmer</span></h2>
        </div>
        <h2>With</h2>
        <a href="#" onClick={install}><i className="fa fa-heart fa-5x fa-border"></i></a>
      </div>
    </>
  )
}
